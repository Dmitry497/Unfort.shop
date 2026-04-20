const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ========== ТВОИ ДАННЫЕ ==========
const SHOP_ID = '1331563';
const SECRET_KEY = 'test_i8Y0-tVvJpfJ3qvRRS2zX7-HDkVB0O7VB93Te39ZACM';

function logPayment(message, data) {
    const logEntry = `[${new Date().toISOString()}] ${message}\n${JSON.stringify(data, null, 2)}\n${'='.repeat(80)}\n`;
    fs.appendFileSync('payments.log', logEntry);
    console.log(message);
}

// Создание платежа
app.post('/api/create-payment', async (req, res) => {
    try {
        const { amount, description, email, phone, orderId } = req.body;
        const idempotenceKey = uuidv4();
        
        logPayment(`📦 СОЗДАНИЕ ПЛАТЕЖА: заказ ${orderId}, сумма ${amount} ₽`, req.body);
        
        const paymentData = {
            amount: { value: amount.toString(), currency: 'RUB' },
            capture: true,
            confirmation: {
                type: 'redirect',
                return_url: `http://localhost:3000/success.html?orderId=${orderId}`
            },
            description: description || `Заказ UNFORT #${orderId}`,
            metadata: { orderId: orderId, test_mode: 'true' },
            receipt: {
                customer: { email: email, phone: phone },
                items: [{
                    description: description || 'Товары UNFORT',
                    quantity: '1.00',
                    amount: { value: amount.toString(), currency: 'RUB' },
                    vat_code: '1',
                    payment_mode: 'full_payment',
                    payment_subject: 'commodity'
                }]
            }
        };
        
        const auth = Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64');
        
        const response = await axios.post('https://api.yookassa.ru/v3/payments', paymentData, {
            headers: {
                'Content-Type': 'application/json',
                'Idempotence-Key': idempotenceKey,
                'Authorization': `Basic ${auth}`
            }
        });
        
        logPayment(`✅ ПЛАТЕЖ СОЗДАН: ${response.data.id}, статус: ${response.data.status}`, response.data);
        
        res.json({
            success: true,
            confirmationUrl: response.data.confirmation.confirmation_url,
            paymentId: response.data.id
        });
        
    } catch (error) {
        console.error('Ошибка:', error.response?.data || error.message);
        logPayment(`❌ ОШИБКА: ${error.response?.data?.description || error.message}`, {});
        res.status(500).json({ 
            success: false, 
            error: error.response?.data?.description || 'Ошибка при создании платежа' 
        });
    }
});

// Проверка статуса платежа
app.get('/api/payment/:id', async (req, res) => {
    try {
        const paymentId = req.params.id;
        const auth = Buffer.from(`${SHOP_ID}:${SECRET_KEY}`).toString('base64');
        
        const response = await axios.get(`https://api.yookassa.ru/v3/payments/${paymentId}`, {
            headers: { 'Authorization': `Basic ${auth}` }
        });
        
        logPayment(`🔍 ПРОВЕРКА ПЛАТЕЖА ${paymentId}: статус ${response.data.status}`, { status: response.data.status });
        res.json({ success: true, payment: response.data });
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.response?.data?.description || 'Ошибка' });
    }
});

// Webhook
app.post('/api/webhook', async (req, res) => {
    logPayment(`📡 WEBHOOK: ${req.body.event}`, req.body);
    res.json({ success: true });
});

// Страница успеха
app.get('/success.html', (req, res) => {
    const orderId = req.query.orderId || '';
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Оплата прошла успешно</title>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                .success { color: green; font-size: 64px; margin-bottom: 20px; }
                button { padding: 12px 24px; background: #000; color: #fff; border: none; cursor: pointer; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="success">✅</div>
            <h1>Оплата прошла успешно!</h1>
            <p>Номер заказа: <strong>${orderId}</strong></p>
            <button onclick="window.close()">Закрыть окно</button>
        </body>
        </html>
    `);
});

// Логи в браузере
app.get('/logs', (req, res) => {
    if (fs.existsSync('payments.log')) {
        res.send(`<pre style="background:#1e1e1e;color:#d4d4d4;padding:20px;">${fs.readFileSync('payments.log', 'utf8')}</pre>`);
    } else {
        res.send('Логов пока нет');
    }
});

// Запуск
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════════╗
║  🚀 СЕРВЕР ОПЛАТЫ ЗАПУЩЕН                                 ║
╠════════════════════════════════════════════════════════════╣
║  📍 Адрес: http://localhost:${PORT}                         ║
║  🆔 Shop ID: ${SHOP_ID}                                      ║
║  🔑 Secret Key: ✅ Установлен                               ║
║  📊 Логи: http://localhost:${PORT}/logs                      ║
╚════════════════════════════════════════════════════════════╝
    `);
});