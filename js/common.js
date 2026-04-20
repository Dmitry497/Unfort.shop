// common.js - общие функции для всех страниц

// Глобальные переменные
window.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
window.productsMap = {};
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Заполняем productsMap из глобального массива products (из data.js)
if (typeof products !== 'undefined') {
    products.forEach(p => { window.productsMap[p.id] = p; });
}

/* ========== БУРГЕР-МЕНЮ ========== */
function initBurger() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.header__menu-close');
    const overlay = document.querySelector('.overlay');

    if (!burger || !menu || !closeBtn || !overlay) {
        setTimeout(initBurger, 200);
        return;
    }

    function closeMenu() {
        menu.classList.remove('header__menu--open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        menu.classList.add('header__menu--open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    burger.removeEventListener('click', openMenu);
    closeBtn.removeEventListener('click', closeMenu);
    overlay.removeEventListener('click', closeMenu);

    burger.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.header__menu-link').forEach(link => {
        link.removeEventListener('click', closeMenu);
        link.addEventListener('click', closeMenu);
    });

    document.removeEventListener('keydown', closeOnEscape);
    document.addEventListener('keydown', closeOnEscape);
    
    function closeOnEscape(e) {
        if (e.key === 'Escape' && menu.classList.contains('header__menu--open')) {
            closeMenu();
        }
    }
}

/* ========== АКТИВНАЯ ССЫЛКА В МЕНЮ ========== */
function setActiveMenuLink() {
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('.header__menu-link');
    
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        
        if (href === currentPath || 
            (currentPath === '/' && href === 'index.html') ||
            (currentPath.endsWith(href))) {
            link.classList.add('active');
        }
    });
}

/* ========== ИЗБРАННОЕ ========== */
function updateFavoriteCount() {
    const countEl = document.querySelector('.header__favorite-count');
    if (countEl) {
        let count = window.favorites.length;
        const displayCount = count > 99 ? '99+' : count;
        countEl.textContent = displayCount;
        countEl.setAttribute('data-count', count);
    }
    localStorage.setItem('favorites', JSON.stringify(window.favorites));
}

function toggleFavorite(productId, btn) {
    const wasFavorite = window.favorites.includes(productId);

    if (wasFavorite) {
        window.favorites = window.favorites.filter(id => id != productId);
        if (btn) {
            btn.classList.remove('active');
            const svg = btn.querySelector('svg');
            if (svg) svg.setAttribute('fill', 'none');
        }
    } else {
        window.favorites.push(productId);
        if (btn) {
            btn.classList.add('active');
            const svg = btn.querySelector('svg');
            if (svg) svg.setAttribute('fill', '#ff4d4f');
        }
        const product = window.productsMap[productId];
        if (product) showToast(`${product.title} добавлено в избранное`);
    }
    updateFavoriteCount();

    const favModal = document.getElementById('favoriteModal');
    if (favModal && favModal.classList.contains('active')) {
        renderFavoritesModal();
    }
}

/* ========== ТОСТЫ ========== */
function showToast(message, isError = false) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'toast--error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* ========== МОДАЛКА ИЗБРАННОГО ========== */
function renderFavoritesModal() {
    const container = document.querySelector('.favorite-modal__items');
    if (!container) return;

    container.innerHTML = '';
    if (window.favorites.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px;">В избранном пока нет товаров</p>';
        return;
    }

    window.favorites.forEach(id => {
        const item = window.productsMap[id];
        if (!item) return;
        const el = document.createElement('div');
        el.className = 'favorite-item';
        el.innerHTML = `
            <img src="${item.imgPrimary}" alt="${item.title}" class="favorite-item__image">
            <div class="favorite-item__info">
                <h4 class="favorite-item__title">${item.title}</h4>
                <span class="favorite-item__size">One size</span>
                <span class="favorite-item__price">${item.priceNew}</span>
            </div>
            <button class="favorite-item__remove" data-product-id="${id}">&times;</button>
        `;
        container.appendChild(el);
    });

    document.querySelectorAll('.favorite-item__remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            const cardBtn = document.querySelector(`.product-card[data-product-id="${productId}"] .product-card__favorite`);
            toggleFavorite(productId, cardBtn);
        });
    });
}

function closeFavorites() {
    const overlay = document.getElementById('favoriteOverlay');
    const modal = document.getElementById('favoriteModal');
    if (overlay && modal) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openFavorites() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal && cartModal.classList.contains('active')) {
        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) cartOverlay.classList.remove('active');
        cartModal.classList.remove('active');
    }
    
    renderFavoritesModal();
    const overlay = document.getElementById('favoriteOverlay');
    const modal = document.getElementById('favoriteModal');
    if (overlay && modal) {
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function initFavorites() {
    const favIcon = document.querySelector('.header__icon--favorite');
    const favOverlay = document.getElementById('favoriteOverlay');
    const favClose = document.querySelector('.favorite-modal__close');

    if (favIcon) {
        favIcon.removeEventListener('click', openFavorites);
        favIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openFavorites();
        });
    }

    if (favClose) {
        favClose.removeEventListener('click', closeFavorites);
        favClose.addEventListener('click', closeFavorites);
    }

    if (favOverlay) {
        favOverlay.removeEventListener('click', closeFavorites);
        favOverlay.addEventListener('click', closeFavorites);
    }

    updateFavoriteCount();
}

/* ========== КОРЗИНА С ОПЛАТОЙ ========== */

// Обновление счетчика корзины в хедере
function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems === 0) {
            cartCountEl.style.display = 'none';
        } else {
            cartCountEl.style.display = 'flex';
            cartCountEl.textContent = totalItems > 99 ? '99+' : totalItems;
        }
        cartCountEl.setAttribute('data-count', totalItems);
    }
}

// Сохраняем корзину в localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    updateCartCount();
}

// Добавление товара в корзину
function addToCart(product, size, quantity = 1) {
    const existingItem = cartItems.find(item => item.id == product.id && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({
            id: product.id,
            title: product.title,
            price: parseInt(product.priceNew.replace(/[^\d]/g, '')),
            size: size,
            quantity: quantity,
            image: product.imgPrimary
        });
    }
    
    saveCart();
    showToast(`${product.title} (${size}) добавлен в корзину`);
    
    const cartModal = document.getElementById('cartModal');
    if (cartModal && cartModal.classList.contains('active')) {
        renderCartContent();
    }
}

// Удаление товара из корзины
function removeFromCart(productId, size) {
    cartItems = cartItems.filter(item => !(item.id == productId && item.size === size));
    saveCart();
    renderCartContent();
    showToast('Товар удален из корзины');
}

// Обновление количества товара
function updateQuantity(productId, size, delta) {
    const item = cartItems.find(item => item.id == productId && item.size === size);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId, size);
        } else {
            saveCart();
            renderCartContent();
        }
    }
}

// Очистка корзины
function clearCart() {
    if (confirm('Очистить всю корзину?')) {
        cartItems = [];
        saveCart();
        renderCartContent();
    }
}

// Подсчёт итоговой суммы
function getCartTotal() {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + '₽';
}

// Генерация номера заказа
function generateOrderId() {
    return 'UNFORT-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
}

// Логирование заказа в консоль и localStorage
function logOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const orderWithTimestamp = {
        ...orderData,
        timestamp: new Date().toISOString(),
        orderNumber: generateOrderId()
    };
    orders.push(orderWithTimestamp);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    console.group('НОВЫЙ ЗАКАЗ');
    console.log('Номер заказа:', orderWithTimestamp.orderNumber);
    console.log('Дата:', new Date().toLocaleString());
    console.log('Сумма:', formatPrice(orderData.totalAmount));
    console.log('Товары:', orderData.items);
    console.log('Данные покупателя:', orderData.customerData);
    console.groupEnd();
    
    return orderWithTimestamp.orderNumber;
}

// Генерация QR-кода через canvas
function generateQRCode(element, text, size = 200) {
    element.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, size - 20, size - 20);
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(15, 15, 40, 40);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(20, 20, 30, 30);
    ctx.fillStyle = '#000000';
    ctx.fillRect(25, 25, 20, 20);
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(size - 55, 15, 40, 40);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(size - 50, 20, 30, 30);
    ctx.fillStyle = '#000000';
    ctx.fillRect(size - 45, 25, 20, 20);
    
    ctx.fillStyle = '#000000';
    ctx.fillRect(15, size - 55, 40, 40);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(20, size - 50, 30, 30);
    ctx.fillStyle = '#000000';
    ctx.fillRect(25, size - 45, 20, 20);
    
    ctx.fillStyle = '#000000';
    for (let i = 0; i < 400; i++) {
        const x = 60 + Math.random() * (size - 120);
        const y = 60 + Math.random() * (size - 120);
        if (Math.random() > 0.6) {
            ctx.fillRect(x, y, 3, 3);
        }
    }
    
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('СБП', size/2 - 20, size/2 + 5);
    
    element.appendChild(canvas);
}

// Показать модальное окно с QR-кодом СБП
function showSbpQrCode(orderData) {
    const existingModal = document.querySelector('.sbp-qr-modal');
    if (existingModal) existingModal.remove();
    
    const qrContainer = document.createElement('div');
    qrContainer.className = 'sbp-qr-modal';
    qrContainer.innerHTML = `
        <div class="sbp-qr-overlay"></div>
        <div class="sbp-qr-content">
            <button class="sbp-qr-close">&times;</button>
            <div class="sbp-qr-icon">Оплата через СБП</div>
            <h3>Оплата через СБП</h3>
            <div class="sbp-qr-code" id="sbpQrCode"></div>
            <p class="sbp-qr-info">Отсканируйте QR-код в приложении любого банка</p>
            <div class="sbp-qr-details">
                <div class="sbp-qr-amount">${formatPrice(orderData.totalAmount)}</div>
                <div class="sbp-qr-order">Заказ: ${orderData.orderNumber}</div>
            </div>
            <div class="sbp-payment-status" id="sbpPaymentStatus">
                <div class="spinner"></div>
                <span>Ожидание оплаты...</span>
            </div>
            <button class="sbp-check-payment" id="checkPaymentBtn">Я оплатил</button>
        </div>
    `;
    
    document.body.appendChild(qrContainer);
    
    const qrCodeDiv = document.getElementById('sbpQrCode');
    if (qrCodeDiv) {
        generateQRCode(qrCodeDiv, `SBP_${orderData.orderNumber}_${orderData.totalAmount}`, 200);
    }
    
    const closeBtn = qrContainer.querySelector('.sbp-qr-close');
    const overlay = qrContainer.querySelector('.sbp-qr-overlay');
    
    const closeModal = () => {
        qrContainer.remove();
        document.body.style.overflow = '';
    };
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
    
    const checkBtn = document.getElementById('checkPaymentBtn');
    const statusDiv = document.getElementById('sbpPaymentStatus');
    
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            if (statusDiv) {
                statusDiv.innerHTML = `
                    <div style="color: #4caf50;">Проверка оплаты...</div>
                `;
            }
            
            setTimeout(() => {
                if (statusDiv) {
                    statusDiv.innerHTML = `
                        <div style="color: #4caf50;">Оплата подтверждена</div>
                    `;
                }
                
                logOrder(orderData);
                
                setTimeout(() => {
                    closeModal();
                    showPaymentSuccess(orderData.orderNumber, orderData.totalAmount);
                    clearCart();
                }, 1500);
            }, 1000);
        });
    }
    
    document.body.style.overflow = 'hidden';
}

// ========== ЭКРАН УСПЕХА ==========
function showPaymentSuccess(orderId, amount) {
    const cartContent = document.getElementById('cartContent');
    if (cartContent) {
        cartContent.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 64px; margin-bottom: 20px;">✓</div>
                <h2 style="margin-bottom: 15px; font-family: 'Kinetika', sans-serif;">ЗАКАЗ УСПЕШНО ОФОРМЛЕН</h2>
                <p style="color: #666; margin-bottom: 10px;">Номер заказа: <strong style="font-size: 18px; color: #000;">${orderId}</strong></p>
                <p style="color: #666; margin-bottom: 30px;">Сумма: <strong>${formatPrice(amount)}</strong></p>
                <p style="color: #999; font-size: 14px;">Спасибо за покупку! Наш менеджер свяжется с вами в ближайшее время.</p>
                <p style="color: #ff9800; font-size: 12px; margin-top: 20px;">Тестовый режим: средства не списываются</p>
            </div>
        `;
    }
    clearCart();
}

// ========== РЕАЛЬНАЯ ОПЛАТА ЧЕРЕЗ ЮKASSA ==========
async function realCardPayment(amount, bankName, orderId, email, phone) {
    showToast('Перенаправление на страницу оплаты...');
    
    try {
        const response = await fetch('http://localhost:3000/api/create-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: amount,
                orderId: orderId,
                description: `Заказ ${orderId} (${bankName})`,
                email: email,
                phone: phone
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.confirmationUrl) {
            const paymentWindow = window.open(data.confirmationUrl, '_blank', 'width=600,height=700');
            
            let checkInterval = setInterval(async () => {
                try {
                    const statusResponse = await fetch(`http://localhost:3000/api/payment/${data.paymentId}`);
                    const statusData = await statusResponse.json();
                    
                    if (statusData.success && statusData.payment.status === 'succeeded') {
                        clearInterval(checkInterval);
                        showPaymentSuccess(orderId, amount);
                        if (paymentWindow && !paymentWindow.closed) paymentWindow.close();
                    } else if (statusData.payment?.status === 'canceled') {
                        clearInterval(checkInterval);
                        showToast('Платёж отменён');
                    }
                } catch (e) {}
            }, 2000);
            
            setTimeout(() => clearInterval(checkInterval), 600000);
        } else {
            showToast('Ошибка при создании платежа');
        }
    } catch (error) {
        console.error('Ошибка:', error);
        showToast('Ошибка соединения с платёжной системой');
    }
}

// ========== ОПЛАТА ДОЛЯМИ ==========
function splitPayment(amount, orderId, customerData, items) {
    const splitUrl = `https://dolyame.ru/pay?amount=${amount}&orderId=${orderId}&returnUrl=${encodeURIComponent('http://localhost:3000/success.html?orderId=' + orderId)}`;
    window.open(splitUrl, '_blank');
    
    const orderData = {
        items: items,
        totalAmount: amount,
        customerData: customerData,
        status: 'pending',
        paymentMethod: 'split'
    };
    logOrder(orderData);
    
    const cartContent = document.getElementById('cartContent');
    if (cartContent) {
        cartContent.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">⟳</div>
                <h3>Перенаправление на сайт Долями...</h3>
                <p style="color: #666; margin-top: 10px;">Если страница не открылась, <a href="${splitUrl}" target="_blank">нажмите здесь</a></p>
                <button class="cart-submit" id="backToCartBtn" style="margin-top: 20px; background: #ccc;">Назад</button>
            </div>
        `;
        const backBtn = document.getElementById('backToCartBtn');
        if (backBtn) backBtn.addEventListener('click', () => renderCartContent());
    }
    clearCart();
}

// ========== СБП С QR-КОДОМ ==========
function sbpPayment(amount, orderId, customerData, items) {
    const orderData = {
        items: items,
        totalAmount: amount,
        customerData: customerData,
        status: 'pending',
        paymentMethod: 'sbp',
        orderNumber: orderId
    };
    showSbpQrCode(orderData);
}

// Валидация полей формы
function validateOrderForm() {
    const fullName = document.getElementById('fullName')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const city = document.getElementById('cityInput')?.value.trim();
    const postalCode = document.getElementById('postalCode')?.value.trim();
    
    if (!fullName) { showToast('Введите ФИО', true); return false; }
    if (!phone) { showToast('Введите телефон', true); return false; }
    if (!email) { showToast('Введите Email', true); return false; }
    if (!city) { showToast('Введите город', true); return false; }
    if (!address) { showToast('Введите адрес', true); return false; }
    if (!postalCode) { showToast('Введите почтовый индекс', true); return false; }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { showToast('Введите корректный Email', true); return false; }
    
    return true;
}

// Форматирование номера телефона
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.startsWith('7') && value.length === 11) {
        value = value.substring(1);
    }
    
    if (value.length > 10) {
        value = value.substring(0, 10);
    }
    
    let formatted = '';
    if (value.length > 0) {
        if (value.length <= 3) {
            formatted = value;
        } else if (value.length <= 6) {
            formatted = value.substring(0, 3) + ' ' + value.substring(3);
        } else {
            formatted = value.substring(0, 3) + ' ' + value.substring(3, 6) + ' ' + value.substring(6);
        }
    }
    
    input.value = formatted;
}

// Глобальный обработчик для кнопок корзины
function attachCartEventListeners() {
    document.querySelectorAll('.cart-item__quantity-btn').forEach(btn => {
        btn.removeEventListener('click', handleQuantityClick);
        btn.addEventListener('click', handleQuantityClick);
    });
    
    document.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.removeEventListener('click', handleRemoveClick);
        btn.addEventListener('click', handleRemoveClick);
    });
    
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.removeEventListener('click', handleClearCart);
        clearCartBtn.addEventListener('click', handleClearCart);
    }
    
    const payButton = document.getElementById('payButton');
    if (payButton) {
        payButton.removeEventListener('click', handlePayClick);
        payButton.addEventListener('click', handlePayClick);
    }
}

function handleQuantityClick(e) {
    e.stopPropagation();
    const action = this.dataset.action;
    const id = parseInt(this.dataset.id);
    const size = this.dataset.size;
    const delta = action === 'incr' ? 1 : -1;
    updateQuantity(id, size, delta);
}

function handleRemoveClick(e) {
    e.stopPropagation();
    const id = parseInt(this.dataset.id);
    const size = this.dataset.size;
    removeFromCart(id, size);
}

function handleClearCart() {
    clearCart();
}

function handlePayClick() {
    if (!validateOrderForm()) return;
    
    const fullName = document.getElementById('fullName')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const total = getCartTotal();
    
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (!selectedPayment) {
        showToast('Выберите способ оплаты', true);
        return;
    }
    
    const customerData = { fullName, phone, email };
    const items = cartItems.map(item => ({
        id: item.id,
        title: item.title,
        size: item.size,
        quantity: item.quantity,
        price: item.price
    }));
    
    if (selectedPayment.value === 'card') {
        const orderId = generateOrderId();
        realCardPayment(total, 'Банковская карта', orderId, email, phone);
    } else if (selectedPayment.value === 'split') {
        const orderId = generateOrderId();
        splitPayment(total, orderId, customerData, items);
    } else if (selectedPayment.value === 'sbp') {
        const orderId = generateOrderId();
        sbpPayment(total, orderId, customerData, items);
    }
}

// Рендер содержимого корзины
function renderCartContent() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;
    
    const total = getCartTotal();
    
    if (cartItems.length === 0) {
        cartContent.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <p style="font-size: 16px; color: #666;">Ваша корзина пуста</p>
            </div>
        `;
        return;
    }
    
    cartContent.innerHTML = `
        <div class="cart-items-list">
            ${cartItems.map(item => `
                <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
                    <img src="${item.image}" alt="${item.title}" class="cart-item__image">
                    <div class="cart-item__info">
                        <h4 class="cart-item__title">${item.title}</h4>
                        <div class="cart-item__size">Размер: ${item.size}</div>
                        <div class="cart-item__quantity">
                            <button class="cart-item__quantity-btn" data-action="decr" data-id="${item.id}" data-size="${item.size}">-</button>
                            <span class="cart-item__quantity-value">${item.quantity}</span>
                            <button class="cart-item__quantity-btn" data-action="incr" data-id="${item.id}" data-size="${item.size}">+</button>
                        </div>
                    </div>
                    <div class="cart-item__price">${formatPrice(item.price * item.quantity)}</div>
                    <button class="cart-item__remove" data-id="${item.id}" data-size="${item.size}">&times;</button>
                </div>
            `).join('')}
        </div>
        
        <div class="cart-section">
            <h3>Данные для доставки</h3>
            <div class="cart-field">
                <label>ФИО <span class="required">*</span></label>
                <input type="text" id="fullName" placeholder="Иванов Иван Иванович">
            </div>
            <div class="cart-field">
                <label>Телефон <span class="required">*</span></label>
                <input type="tel" id="phone" placeholder="912 345 67 89">
            </div>
            <div class="cart-field">
                <label>Email <span class="required">*</span></label>
                <input type="email" id="email" placeholder="ivan@example.com">
            </div>
            <div class="cart-field">
                <label>Город <span class="required">*</span></label>
                <input type="text" id="cityInput" placeholder="Москва">
            </div>
            <div class="cart-field">
                <label>Адрес <span class="required">*</span></label>
                <input type="text" id="address" placeholder="Улица, дом, квартира">
            </div>
            <div class="cart-field">
                <label>Почтовый индекс <span class="required">*</span></label>
                <input type="text" id="postalCode" placeholder="123456">
            </div>
        </div>
        
        <div class="cart-section">
            <h3>Способ оплаты</h3>
            <div class="cart-payment-options">
                <label class="cart-payment-option">
                    <input type="radio" name="payment" value="sbp" checked>
                    <span>СБП (Система быстрых платежей)</span>
                </label>
                <label class="cart-payment-option">
                    <input type="radio" name="payment" value="card">
                    <span>Банковской картой</span>
                </label>
                <label class="cart-payment-option">
                    <input type="radio" name="payment" value="split">
                    <span>Долями от Тинькофф</span>
                </label>
            </div>
        </div>
        
        <div class="cart-total">Итоговая сумма: ${formatPrice(total)}</div>
        
        <button class="cart-submit" id="payButton">Оплатить заказ</button>
        <button class="cart-submit cart-clear" id="clearCartBtn">Очистить корзину</button>
    `;
    
    initPhoneMask();
    attachCartEventListeners();
}

function initPhoneMask() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            formatPhoneNumber(this);
        });
    }
}

function closeCart() {
    const overlay = document.getElementById('cartOverlay');
    const modal = document.getElementById('cartModal');
    if (overlay && modal) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openCart() {
    const favModal = document.getElementById('favoriteModal');
    if (favModal && favModal.classList.contains('active')) {
        const favOverlay = document.getElementById('favoriteOverlay');
        if (favOverlay) favOverlay.classList.remove('active');
        favModal.classList.remove('active');
    }
    
    const overlay = document.getElementById('cartOverlay');
    const modal = document.getElementById('cartModal');
    if (overlay && modal) {
        renderCartContent();
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function initCart() {
    const cartIcon = document.getElementById('cartIcon');
    const cartClose = document.getElementById('cartCloseBtn');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartIcon) {
        cartIcon.removeEventListener('click', openCart);
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }

    if (cartClose) {
        cartClose.removeEventListener('click', closeCart);
        cartClose.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.removeEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
    }
    
    updateCartCount();
    
    window.addEventListener('storage', (e) => {
        if (e.key === 'cart') {
            cartItems = JSON.parse(e.newValue) || [];
            updateCartCount();
            if (document.getElementById('cartModal')?.classList.contains('active')) {
                renderCartContent();
            }
        }
    });
}

/* ========== МОДАЛКА ПРИВЕТСТВИЯ ========== */
function closeWelcomeModal() {
    const overlay = document.getElementById('welcomeOverlay');
    const modal = document.getElementById('welcomeModal');
    if (overlay && modal) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showWelcomeModal() {
    const overlay = document.getElementById('welcomeOverlay');
    const modal = document.getElementById('welcomeModal');
    if (overlay && modal) {
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function initWelcomeModal() {
    const isIndexPage = window.location.pathname === '/' || 
                        window.location.pathname === '/index.html' || 
                        window.location.pathname.endsWith('index.html');
    const hasBeenShown = sessionStorage.getItem('welcomeModalShown');
    
    if (!isIndexPage || hasBeenShown) return;
    
    sessionStorage.setItem('welcomeModalShown', 'true');
    setTimeout(() => {
        showWelcomeModal();
    }, 500);
}

document.addEventListener('click', function(e) {
    if (e.target.classList && e.target.classList.contains('welcome-modal__close')) {
        closeWelcomeModal();
        e.preventDefault();
    }
    if (e.target.id === 'welcomeOverlay') {
        closeWelcomeModal();
        e.preventDefault();
    }
});

/* ========== ПРОСМОТР ЗАКАЗОВ ========== */
function viewOrders() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    console.clear();
    console.group('ИСТОРИЯ ЗАКАЗОВ');
    if (orders.length === 0) {
        console.log('Нет сохраненных заказов');
    } else {
        orders.forEach((order, index) => {
            console.log(`\nЗаказ ${index + 1}:`);
            console.log(`  Номер: ${order.orderNumber}`);
            console.log(`  Дата: ${new Date(order.timestamp).toLocaleString()}`);
            console.log(`  Сумма: ${formatPrice(order.totalAmount)}`);
            console.log(`  Статус: ${order.status === 'succeeded' ? 'Оплачен' : 'Ожидает'}`);
            console.log(`  Покупатель: ${order.customerData?.fullName || 'Не указан'}`);
            console.log(`  Товары:`, order.items);
        });
    }
    console.groupEnd();
}

// Стили
const style = document.createElement('style');
style.textContent = `
    .sbp-qr-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .sbp-qr-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(5px);
    }
    
    .sbp-qr-content {
        position: relative;
        background: white;
        border-radius: 24px;
        padding: 30px;
        max-width: 400px;
        width: 90%;
        text-align: center;
        z-index: 10001;
        animation: slideIn 0.3s ease;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    
    .sbp-qr-icon {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    
    .sbp-qr-content h3 {
        margin-bottom: 20px;
        font-size: 24px;
    }
    
    .sbp-qr-close {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 28px;
        cursor: pointer;
        background: none;
        border: none;
        color: #999;
    }
    
    .sbp-qr-close:hover {
        color: #000;
    }
    
    .sbp-qr-code {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    
    .sbp-qr-code canvas {
        border-radius: 12px;
        border: 1px solid #e0e0e0;
    }
    
    .sbp-qr-info {
        color: #666;
        font-size: 14px;
        margin-bottom: 15px;
    }
    
    .sbp-qr-details {
        background: #f8f8f8;
        border-radius: 12px;
        padding: 12px;
        margin-bottom: 20px;
    }
    
    .sbp-qr-amount {
        font-size: 24px;
        font-weight: bold;
    }
    
    .sbp-qr-order {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
    }
    
    .sbp-payment-status {
        margin-top: 20px;
        padding: 12px;
        background: #f5f5f5;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .sbp-check-payment {
        margin-top: 15px;
        padding: 12px 24px;
        background: #000;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
    }
    
    .sbp-check-payment:hover {
        background: #333;
    }
    
    .spinner {
        width: 20px;
        height: 20px;
        border: 2px solid #e0e0e0;
        border-top: 2px solid #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes slideIn {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .cart-items-list {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .cart-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #eee;
    }
    
    .cart-item__image {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 8px;
    }
    
    .cart-item__info {
        flex: 1;
    }
    
    .cart-item__title {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    
    .cart-item__size {
        font-size: 12px;
        color: #999;
        margin-bottom: 8px;
    }
    
    .cart-item__quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .cart-item__quantity-btn {
        width: 28px;
        height: 28px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
    }
    
    .cart-item__quantity-btn:hover {
        background: #f5f5f5;
        border-color: #000;
    }
    
    .cart-item__quantity-value {
        min-width: 20px;
        text-align: center;
        font-weight: 500;
    }
    
    .cart-item__price {
        font-weight: 600;
        min-width: 100px;
        text-align: right;
    }
    
    .cart-item__remove {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #999;
        padding: 5px;
    }
    
    .cart-item__remove:hover {
        color: #ff4d4f;
    }
    
    .cart-section {
        margin-top: 25px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }
    
    .cart-section h3 {
        font-size: 18px;
        margin-bottom: 15px;
    }
    
    .cart-field {
        margin-bottom: 15px;
    }
    
    .cart-field label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
    }
    
    .cart-field input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 14px;
    }
    
    .cart-field input:focus {
        outline: none;
        border-color: #000;
    }
    
    .required {
        color: #ff4d4f;
    }
    
    .cart-payment-options {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .cart-payment-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .cart-payment-option:hover {
        border-color: #000;
        background: #f9f9f9;
    }
    
    .cart-total {
        margin-top: 25px;
        padding-top: 20px;
        border-top: 2px solid #eee;
        font-size: 20px;
        font-weight: bold;
        text-align: right;
    }
    
    .cart-submit {
        width: 100%;
        padding: 15px;
        margin-top: 15px;
        background: #000;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    
    .cart-submit:hover {
        background: #333;
    }
    
    .cart-clear {
        background: #f5f5f5;
        color: #666;
    }
    
    .cart-clear:hover {
        background: #e0e0e0;
        color: #000;
    }
    
    .toast {
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 14px;
        z-index: 10002;
        transition: transform 0.3s ease;
        white-space: nowrap;
    }
    
    .toast.show {
        transform: translateX(-50%) translateY(0);
    }
    
    .toast--error {
        background: rgba(255,77,79,0.9);
    }
`;
document.head.appendChild(style);

console.log('Для просмотра заказов введите: viewOrders()');
console.log('Все платежи в тестовом режиме - средства не списываются');

/* ========== ПРЕЛОАДЕР ========== */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const isIndexPage = window.location.pathname === '/' || 
                        window.location.pathname === '/index.html' || 
                        window.location.pathname.endsWith('index.html');
    if (!isIndexPage) {
        preloader.style.display = 'none';
        return;
    }

    const preloaderShown = sessionStorage.getItem('preloaderShown');
    if (preloaderShown) {
        preloader.style.display = 'none';
        return;
    }

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            sessionStorage.setItem('preloaderShown', 'true');
        }, 2000);
    });
}

/* ========== ИНИЦИАЛИЗАЦИЯ ========== */
function initCommon() {
    initBurger();
    initFavorites();
    initCart();
    initWelcomeModal();
    setActiveMenuLink();
    initPreloader();
}

document.addEventListener('componentsLoaded', initCommon);
if (document.querySelector('.header')) {
    setTimeout(initCommon, 100);
}