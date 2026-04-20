// data.js
const productsRaw = [
    // ========== OUTERWEAR (8 товаров) ==========
    {
        id: 'out1',
        category: 'outerwear',
        title: 'Костюм “Sensation”',
        priceNew: '15 990₽',
        priceOld: '19 990₽',
        images: [
            'image.OUTERWEAR/Sensation-1.png',
            'image.OUTERWEAR/Sensation-2.webp',
            'image.OUTERWEAR/sensation-3.webp',
            'image.OUTERWEAR/sensation-4.webp',
            'image.OUTERWEAR/sensation-5.webp',
            'image.OUTERWEAR/sensation-6.webp',
            'image.OUTERWEAR/sensation-7.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/Sensation-1.png',
        imgSecondary: 'image.OUTERWEAR/sensation-2.webp',
        badge: 'Sale',
        installment: '3 997₽',
        description: 'Костюм “Sensation” — стильный и комфортный костюм из премиальных материалов. Идеально подходит для повседневной носки.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 185 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out2',
        category: 'outerwear',
        title: '“Mist Black” Jacket',
        priceNew: '13 990₽',
        priceOld: '15 990₽',
        images: [
            'image.OUTERWEAR/Mist Black” Jacket-1.webp',
            'image.OUTERWEAR/Mist Black” Jacket-2.webp',
            'image.OUTERWEAR/Mist Black” Jacket-3.webp',
            'image.OUTERWEAR/Mist Black” Jacket-4.webp',
            'image.OUTERWEAR/Mist Black” Jacket-5.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/Mist Black” Jacket-1.webp',
        imgSecondary: 'image.OUTERWEAR/Mist Black” Jacket-2.webp',
        badge: 'HIT',
        installment: '3 497 ₽',
        description: '“Mist Black” Jacket — Сложная текстура кожи создаёт эффект лёгкого тумана, приглушённые оттенки, мягкие переходы цвета и фактура, которая выглядит по-разному при каждом свете. Чистый силуэт, который держит форму, выверенные линии и укороченный фасон. Легко встраивается в любой гардероб, но при этом всегда остаётся акцентом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 188 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out3',
        category: 'outerwear',
        title: '“Mist Gray” Jacket',
        priceNew: '13 990₽',
        priceOld: '15 990₽',
        images: [
            'image.OUTERWEAR/Mist Gray” Jacket-1.webp',
            'image.OUTERWEAR/Mist Gray” Jacket-2.webp',
            'image.OUTERWEAR/Mist Gray” Jacket-3.webp',
            'image.OUTERWEAR/Mist Gray” Jacket-4.webp',
            'image.OUTERWEAR/Mist Gray” Jacket-5.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/Mist Gray” Jacket-1.webp',
        imgSecondary: 'image.OUTERWEAR/Mist Gray” Jacket-2.webp',
        badge: 'HIT',
        installment: '3 497 ₽',
        description: 'Куртка из коллекции “Sensation” – стиль и защита от ветра.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out4',
        category: 'outerwear',
        title: 'Костюм "MotoSport"',
        priceNew: '15 990₽',
        priceOld: '19 990₽',
        images: [
            'image.OUTERWEAR/motosport-1.webp',
            'image.OUTERWEAR/motosport-2.webp',
            'image.OUTERWEAR/motosport-3.webp',
            'image.OUTERWEAR/motosport-4webp.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/motosport-1.webp',
        imgSecondary: 'image.OUTERWEAR/motosport-2.webp',
        badge: '',
        installment: '3 997₽',
        description: 'Спортивный костюм “MotoSport” для активного отдыха.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 190 см, размер XL',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out5',
        category: 'outerwear',
        title: 'Костюм “Squeeze”',
        priceNew: '16 990₽',
        priceOld: '22 990₽',
        images: [
            'image.OUTERWEAR/squeeze1.webp',
            'image.OUTERWEAR/squeeze2.webp',
            'image.OUTERWEAR/squeeze3.webp',
            'image.OUTERWEAR/squeeze4.webp',
            'image.OUTERWEAR/squeeze5.webp',
            'image.OUTERWEAR/squeeze6.webp',
            'image.OUTERWEAR/squeeze7.webp',
            'image.OUTERWEAR/squeeze8.webp',
            'image.OUTERWEAR/squeeze9.webp',
            'image.OUTERWEAR/squeeze10.webp',
            'image.OUTERWEAR/squeeze11.webp',
            'image.OUTERWEAR/squeeze12.webp',
            'image.OUTERWEAR/squeeze13.webp',
            'image.OUTERWEAR/squeeze14.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/squeeze1.webp',
        imgSecondary: 'image.OUTERWEAR/squeeze2.webp',
        badge: '',
        installment: '4 247₽',
        description: 'Костюм “Squeeze” – современный дизайн и комфорт.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 175 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out6',
        category: 'outerwear',
        title: '“Mist Green” Jacket',
        priceNew: '13 990₽',
        priceOld: '15 990₽',
        images: [
            'image.OUTERWEAR/Mist Green” Jacket-1.webp',
            'image.OUTERWEAR/Mist Green” Jacket-2.webp',
            'image.OUTERWEAR/Mist Green” Jacket-5.webp',
            'image.OUTERWEAR/Mist Green” Jacket-6.webp',
            'image.OUTERWEAR/Mist Green” Jacket-7.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/Mist Green” Jacket-1.webp',
        imgSecondary: 'image.OUTERWEAR/Mist Green” Jacket-2.webp',
        badge: 'HIT',
        installment: '3 497₽',
        description: '“Mist Green” Jacket — Сложная текстура кожи создаёт эффект лёгкого тумана, приглушённые оттенки, мягкие переходы цвета и фактура, которая выглядит по-разному при каждом свете. Чистый силуэт, который держит форму, выверенные линии и укороченный фасон. Легко встраивается в любой гардероб, но при этом всегда остаётся акцентом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 183 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out7',
        category: 'outerwear',
        title: '“Squeeze” Jacket',
        priceNew: '11 990₽',
        priceOld: '13 990₽',
        images: [
            'image.OUTERWEAR/SqueezeJacket-1.webp',
            'image.OUTERWEAR/SqueezeJacket-2.webp',
            'image.OUTERWEAR/SqueezeJacket-3.png',
            'image.OUTERWEAR/SqueezeJacket-4.webp',
            'image.OUTERWEAR/SqueezeJacket-5.webp',
            'image.OUTERWEAR/SqueezeJacket-6.webp',
            'image.OUTERWEAR/SqueezeJacket-7.webp',
            'image.OUTERWEAR/SqueezeJacket-8.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/SqueezeJacket-1.webp',
        imgSecondary: 'image.OUTERWEAR/SqueezeJacket-2.webp',
        badge: '',
        installment: '2 997₽',
        description: 'Куртка “Squeeze” – стильный акцент.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 178 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'out8',
        category: 'outerwear',
        title: 'Anesthesia Down Jacket Sapphire',
        priceNew: '59 990₽',
        priceOld: null,
        images: [
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-1.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-2.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-3.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-4.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-5.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-6.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-7.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-8.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-9.webp',
            'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-10.webp'
        ],
        imgPrimary: 'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-2.webp',
        imgSecondary: 'image.OUTERWEAR/Anesthesia Down Jacket Sapphire-1.webp',
        badge: 'PREMIUM',
        installment: '14 997₽',
        description: 'Пуховик Anesthesia Sapphire – максимальное тепло и стиль.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 186 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== HOODIES (23 товара) ==========
    {
        id: 'hood1',
        category: 'hoodies',
        title: '“Ex Sample Classic” Zip-Hoodie Gray',
        priceNew: '7 490₽',
        priceOld: '8 990₽',
        images: [
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-1.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-2.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-3.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-4.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-5.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-6.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-7.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-8.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Gray-2.webp',
        badge: 'NEW',
        installment: '1 872₽',
        description: 'Обновленная, базовая зип-худи с минималистичным дизайном, безупречным силуэтом, в новых, уникальных цветах. Полностью новые, доработанные лекала - изменили посадку, сделали акцент на качестве, улучшили материалы и детали! Легко комбинируется с любыми вещами и подходит для всех.\n\nРучная работа, ограниченный тираж!\n\nСамовыражайся в одежде Unfort!',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 184 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood2',
        category: 'hoodies',
        title: '“Ex Sample Classic” Zip-Hoodie Black',
        priceNew: '7 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-1.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-2.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-3.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-4.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-5.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-6.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-7.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-8.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Black-2.webp',
        badge: 'NEW',
        installment: '1 872₽',
        description: 'Классическая чёрная зип-худи из новой коллекции.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 180 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood3',
        category: 'hoodies',
        title: '“Criss Cross” Zip-Hoodie',
        priceNew: '9 990₽',
        priceOld: '12 490₽',
        images: [
            'image.HOODIES/Criss Cross” Zip-Hoodie-1.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-2.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-3.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-4.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-5.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-6.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-7.webp',
            'image.HOODIES/Criss Cross” Zip-Hoodie-8.webp'
        ],
        imgPrimary: 'image.HOODIES/Criss Cross” Zip-Hoodie-1.webp',
        imgSecondary: 'image.HOODIES/Criss Cross” Zip-Hoodie-2.webp',
        badge: 'NEW',
        installment: '2 497₽',
        description: 'Оригинальная худи с перекрестным дизайном.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 187 см, размер XL',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood4',
        category: 'hoodies',
        title: '“Ex Sample Classic” Zip-Hoodie Dark Blue',
        priceNew: '6 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-1.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-2.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-3.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-4.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-5.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-6.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-7.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-2.webp',
        badge: 'Last Sizes!',
        installment: '1 622₽',
        description: 'Тёмно-синяя худи – последние размеры.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 176 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood5',
        category: 'hoodies',
        title: '“Ex Sample Classic” Zip-Hoodie Brown',
        priceNew: '7 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-1.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-2.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-3.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-4.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-5.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-6.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-7.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-8.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Brown-2.webp',
        badge: 'NEW',
        installment: '1 872₽',
        description: 'Коричневая зип-худи – тренд сезона.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood6',
        category: 'hoodies',
        title: '“Ex Sample Privity” Zip-Hoodie Black',
        priceNew: '7 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-1.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-2.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-3.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-4.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-5.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-6.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-7.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Privity” Zip-Hoodie Black-2.webp',
        badge: 'NEW',
        installment: '1 872₽',
        description: 'Модель “Privity” в чёрном цвете.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 185 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood7',
        category: 'hoodies',
        title: '“Ex Sample Privity” Zip-Hoodie Dark Blue',
        priceNew: '6 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-4.png',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-2.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-3.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-5.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-6.webp',
            'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-7.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-3.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Classic” Zip-Hoodie Dark Blue-2.webp',
        badge: 'Last Sizes!',
        installment: '1 622₽',
        description: 'Тёмно-синяя версия “Privity”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 179 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'hood8',
        category: 'hoodies',
        title: '“Ex Sample Privity” Zip-Hoodie Brown',
        priceNew: '7 490₽',
        priceOld: '7 990₽',
        images: [
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-1.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-2.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-3.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-4.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-5.webp',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-6.png',
            'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-7.webp'
        ],
        imgPrimary: 'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-1.webp',
        imgSecondary: 'image.HOODIES/Ex Sample Privity” Zip-Hoodie Brown-2.webp',
        badge: 'NEW',
        installment: '1 872₽',
        description: 'Коричневая модель “Privity”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 183 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== LONG SLEEVE (7 товаров) ==========
    {
        id: 'ls1',
        category: 'longsleeve',
        title: '“Union” LongSleeve',
        priceNew: '2 990₽',
        priceOld: '5 990₽',
        images: [
            'image.LONG SLEEVE/Union” LongSleeve-1.png',
            'image.LONG SLEEVE/Union” LongSleeve-2.webp',
            'image.LONG SLEEVE/Union” LongSleeve-3.webp',
            'image.LONG SLEEVE/Union” LongSleeve-4.webp',
            'image.LONG SLEEVE/Union” LongSleeve-5.png'
        ],
        imgPrimary: 'image.LONG SLEEVE/Union” LongSleeve-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Union” LongSleeve-1.png',
        badge: '',
        installment: '747₽',
        description: 'Лонгслив “Union” – базовый элемент гардероба.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 180 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls2',
        category: 'longsleeve',
        title: '“Heavenly” Long',
        priceNew: '4 490₽',
        priceOld: '5 990₽',
        images: [
            'image.LONG SLEEVE/Heavenly” Long-1.webp',
            'image.LONG SLEEVE/Heavenly” Long-2.webp',
            'image.LONG SLEEVE/Heavenly” Long-3.webp',
            'image.LONG SLEEVE/Heavenly” Long-4.png',
            'image.LONG SLEEVE/Heavenly” Long-5.png',
            'image.LONG SLEEVE/Heavenly” Long-6.png',
            'image.LONG SLEEVE/Heavenly” Long-7.webp'
        ],
        imgPrimary: 'image.LONG SLEEVE/Heavenly” Long-1.webp',
        imgSecondary: 'image.LONG SLEEVE/Heavenly” Long-2.webp',
        badge: '',
        installment: '1 122₽',
        description: 'Модель “Heavenly” с нежным принтом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 175 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls3',
        category: 'longsleeve',
        title: '“Minimalistic” Long',
        priceNew: '4 490₽',
        priceOld: '5 990₽',
        images: [
            'image.LONG SLEEVE/Minimalistic” Long-1.webp',
            'image.LONG SLEEVE/Minimalistic” Long-2.webp',
            'image.LONG SLEEVE/Minimalistic” Long-3.webp',
            'image.LONG SLEEVE/Minimalistic” Long-4.png',
            'image.LONG SLEEVE/Minimalistic” Long-5.png',
            'image.LONG SLEEVE/Minimalistic” Long-6.png',
            'image.LONG SLEEVE/Minimalistic” Long-7.webp'
        ],
        imgPrimary: 'image.LONG SLEEVE/Minimalistic” Long-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Minimalistic” Long-1.webp',
        badge: '',
        installment: '1 122₽',
        description: 'Минималистичный лонгслив без лишних деталей.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 188 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls4',
        category: 'longsleeve',
        title: 'Fractal Long',
        priceNew: '9 990₽',
        priceOld: null,
        images: [
            'image.LONG SLEEVE/Fractal Long-1.webp',
            'image.LONG SLEEVE/Fractal Long-2.webp',
            'image.LONG SLEEVE/Fractal Long-3.webp',
            'image.LONG SLEEVE/Fractal Long-4.webp',
            'image.LONG SLEEVE/Fractal Long-5.webp',
            'image.LONG SLEEVE/Fractal Long-6.webp',
            'image.LONG SLEEVE/Fractal Long-7.webp',
            'image.LONG SLEEVE/Fractal Long-8.webp'
        ],
        imgPrimary: 'image.LONG SLEEVE/Fractal Long-1.webp',
        imgSecondary: 'image.LONG SLEEVE/Fractal Long-2.webp',
        badge: 'NEW',
        installment: '2 497₽',
        description: 'Лонгслив с фрактальным принтом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls5',
        category: 'longsleeve',
        title: '«Corrosion» LongSleeve',
        priceNew: '5 490₽',
        priceOld: null,
        images: [
            'image.LONG SLEEVE/Corrosion» LongSleeve-1.webp',
            'image.LONG SLEEVE/Corrosion» LongSleeve-2.webp',
            'image.LONG SLEEVE/Corrosion» LongSleeve-3.webp',
            'image.LONG SLEEVE/Corrosion» LongSleeve-4.png',
            'image.LONG SLEEVE/Corrosion» LongSleeve-5.jpg',
            'image.LONG SLEEVE/Corrosion» LongSleeve-6.webp',
            'image.LONG SLEEVE/Corrosion» LongSleeve-7.jpg',
            'image.LONG SLEEVE/Corrosion» LongSleeve-8.png'
        ],
        imgPrimary: 'image.LONG SLEEVE/Corrosion» LongSleeve-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Corrosion» LongSleeve-1.webp',
        badge: 'HIT',
        installment: '1 372₽',
        description: 'Модель “Corrosion” с эффектом потёртости.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 186 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls6',
        category: 'longsleeve',
        title: '“Shell” Longsleeve White',
        priceNew: '6 490₽',
        priceOld: '9 990₽',
        images: [
            'image.LONG SLEEVE/Shell” Longsleeve White-1.webp',
            'image.LONG SLEEVE/Shell” Longsleeve White-2.webp',
            'image.LONG SLEEVE/Shell” Longsleeve White-3.webp',
            'image.LONG SLEEVE/Shell” Longsleeve White-4.png',
            'image.LONG SLEEVE/Shell” Longsleeve White-5.jpg',
            'image.LONG SLEEVE/Shell” Longsleeve White-6.webp',
            'image.LONG SLEEVE/Shell” Longsleeve White-7.jpg',
            'image.LONG SLEEVE/Shell” Longsleeve White-8.png'
        ],
        imgPrimary: 'image.LONG SLEEVE/Shell” Longsleeve White-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Shell” Longsleeve White-1.webp',
        badge: '',
        installment: '1 622₽',
        description: 'Белый лонгслив “Shell”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 178 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'ls7',
        category: 'longsleeve',
        title: '“Shell” Longsleeve Black',
        priceNew: '6 490₽',
        priceOld: '9 990₽',
        images: [
            'image.LONG SLEEVE/Shell” Longsleeve Black-1.webp',
            'image.LONG SLEEVE/Shell” Longsleeve Black-2.webp',
            'image.LONG SLEEVE/Shell” Longsleeve Black-3.webp',
            'image.LONG SLEEVE/Shell” Longsleeve Black-4.webp',
            'image.LONG SLEEVE/Shell” Longsleeve Black-5.png',
            'image.LONG SLEEVE/Shell” Longsleeve Black-6.png',
            'image.LONG SLEEVE/Shell” Longsleeve Black-7.png',
            'image.LONG SLEEVE/Shell” Longsleeve Black-8.jpg'
        ],
        imgPrimary: 'image.LONG SLEEVE/Shell” Longsleeve Black-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Shell” Longsleeve Black-1.webp',
        badge: '',
        installment: '1 622₽',
        description: 'Чёрный лонгслив “Shell”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 183 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== T-SHIRTS (8 товаров) ==========
    {
        id: 'tshirt1',
        category: 'tshirts',
        title: '“Union” T-Shirt',
        priceNew: '2 490₽',
        priceOld: '4 990₽',
        images: [
            'image.T-SHIRTS/Union” T-Shirt-1.webp',
            'image.T-SHIRTS/Union” T-Shirt-2.webp',
            'image.T-SHIRTS/Union” T-Shirt-3.webp',
            'image.T-SHIRTS/Union” T-Shirt-4.webp',
            'image.T-SHIRTS/Union” T-Shirt-5.webp',
            'image.T-SHIRTS/Union” T-Shirt-6.webp'
        ],
        imgPrimary: 'image.T-SHIRTS/Union” T-Shirt-1.webp',
        imgSecondary: 'image.T-SHIRTS/Union” T-Shirt-2.webp',
        badge: '',
        installment: '622₽',
        description: 'Классическая футболка “Union” из мягкого хлопка.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 180 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt2',
        category: 'tshirts',
        title: '“Void” T-Shirt',
        priceNew: '3 990₽',
        priceOld: '5 990₽',
        images: [
            'image.T-SHIRTS/Void” T-Shirt-1.png',
            'image.T-SHIRTS/Void” T-Shirt-2.webp',
            'image.T-SHIRTS/Void” T-Shirt-3.webp',
            'image.T-SHIRTS/Void” T-Shirt-4.webp',
            'image.T-SHIRTS/Void” T-Shirt-5.webp',
            'image.T-SHIRTS/Void” T-Shirt-6.webp',
            'image.T-SHIRTS/Void” T-Shirt-7.webp'
        ],
        imgPrimary: 'image.T-SHIRTS/Void” T-Shirt-1.png',
        imgSecondary: 'image.T-SHIRTS/Void” T-Shirt-2.webp',
        badge: '',
        installment: '997₽',
        description: 'Футболка “Void” с графичным принтом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 185 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt3',
        category: 'tshirts',
        title: '“Minimalistic” T-Shirt',
        priceNew: '2 990₽',
        priceOld: '4 990₽',
        images: [
            'image.T-SHIRTS/Minimalistic” T-Shirt-1.webp',
            'image.T-SHIRTS/Minimalistic” T-Shirt-2.webp',
            'image.T-SHIRTS/Minimalistic” T-Shirt-3.png',
            'image.T-SHIRTS/Minimalistic” T-Shirt-4.png',
            'image.T-SHIRTS/Minimalistic” T-Shirt-5.webp',
            'image.T-SHIRTS/Minimalistic” T-Shirt-6.webp',
            'image.T-SHIRTS/Minimalistic” T-Shirt-7.webp'
        ],
        imgPrimary: 'image.T-SHIRTS/Minimalistic” T-Shirt-2.webp',
        imgSecondary: 'image.T-SHIRTS/Minimalistic” T-Shirt-1.webp',
        badge: '',
        installment: '747₽',
        description: 'Минималистичная футболка без принта.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 177 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt4',
        category: 'tshirts',
        title: '“Heavenly” T-Shirt',
        priceNew: '3 490₽',
        priceOld: '5 490₽',
        images: [
            'image.T-SHIRTS/Anticline” T-Shirt-1.webp',
            'image.T-SHIRTS/Anticline” T-Shirt-2.webp',
            'image.T-SHIRTS/Anticline” T-Shirt-3.webp',
            'image.T-SHIRTS/Anticline” T-Shirt-4.png',
            'image.T-SHIRTS/Anticline” T-Shirt-5.webp',
            'image.T-SHIRTS/Anticline” T-Shirt-6.png',
            'image.T-SHIRTS/Anticline” T-Shirt-7.png',
            'image.T-SHIRTS/Anticline” T-Shirt-8.png',
            'image.T-SHIRTS/Anticline” T-Shirt-9.png',
            'image.T-SHIRTS/Anticline” T-Shirt-10.png'
        ],
        imgPrimary: 'image.T-SHIRTS/Anticline” T-Shirt-2.webp',
        imgSecondary: 'image.T-SHIRTS/Anticline” T-Shirt-1.webp',
        badge: '',
        installment: '872₽',
        description: 'Футболка “Heavenly” с мягкими оттенками.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt5',
        category: 'tshirts',
        title: '“Corrosion” T-Shirt',
        priceNew: '4 490₽',
        priceOld: '6 490₽',
        images: [
            'image.T-SHIRTS/T-Shirt “Eighty Six”-1.webp',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-1.webp',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-3.jpg',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-4.webp',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-5.jpg',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-6.jpg',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-7.jpg',
            'image.T-SHIRTS/T-Shirt “Eighty Six”-8.jpg'
        ],
        imgPrimary: 'image.T-SHIRTS/T-Shirt “Eighty Six”-3.jpg',
        imgSecondary: 'image.T-SHIRTS/T-Shirt “Eighty Six”-1.webp',
        badge: 'HIT',
        installment: '1 122₽',
        description: 'Футболка “Corrosion” с эффектом состаривания.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 187 см, размер XL',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt6',
        category: 'tshirts',
        title: '“Shell” T-Shirt Black',
        priceNew: '3 990₽',
        priceOld: '5 990₽',
        images: [
            'image.T-SHIRTS/Gap T-Shirt Black-1.png',
            'image.T-SHIRTS/Gap T-Shirt Black-2.webp',
            'image.T-SHIRTS/Gap T-Shirt Black-3.jpg',
            'image.T-SHIRTS/Gap T-Shirt Black-4.webp',
            'image.T-SHIRTS/Gap T-Shirt Black-5.webp'
        ],
        imgPrimary: 'image.T-SHIRTS/Gap T-Shirt Black-2.webp',
        imgSecondary: 'image.T-SHIRTS/Gap T-Shirt Black-1.png',
        badge: '',
        installment: '997₽',
        description: 'Чёрная футболка “Shell”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 184 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt7',
        category: 'tshirts',
        title: '“Shell” T-Shirt White',
        priceNew: '3 990₽',
        priceOld: '5 990₽',
        images: [
            'image.LONG SLEEVE/Gap T-Shirt White-1.webp',
            'image.LONG SLEEVE/Gap T-Shirt White-2.webp',
            'image.LONG SLEEVE/Gap T-Shirt White-3.webp',
            'image.LONG SLEEVE/Gap T-Shirt White-4.jpg',
            'image.LONG SLEEVE/Gap T-Shirt White-5.jpg'
        ],
        imgPrimary: 'image.LONG SLEEVE/Gap T-Shirt White-2.webp',
        imgSecondary: 'image.LONG SLEEVE/Gap T-Shirt White-1.webp',
        badge: '',
        installment: '997₽',
        description: 'Белая футболка “Shell”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 179 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'tshirt8',
        category: 'tshirts',
        title: '“Ex Sample” T-Shirt',
        priceNew: '2 990₽',
        priceOld: '4 990₽',
        images: [
            'image.T-SHIRTS/Flowing Body Grey-1.webp',
            'image.T-SHIRTS/Flowing Body Grey-2.webp',
            'image.T-SHIRTS/Flowing Body Grey-3.webp',
            'image.T-SHIRTS/Flowing Body Grey-4.png',
            'image.T-SHIRTS/Flowing Body Grey-5.png'
        ],
        imgPrimary: 'image.T-SHIRTS/Flowing Body Grey-1.webp',
        imgSecondary: 'image.T-SHIRTS/Flowing Body Grey-2.webp',
        badge: '',
        installment: '747₽',
        description: 'Базовая футболка “Ex Sample”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 181 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== PANTS (10 товаров) ==========
    {
        id: 'pants1',
        category: 'pants',
        title: '“Ex Sample Classic” Pants Black',
        priceNew: '6 490₽',
        priceOld: '6 990₽',
        images: [
            'image.PANTS/Absolute” Pants-1.webp',
            'image.PANTS/Absolute” Pants-2.webp',
            'image.PANTS/Absolute” Pants-3.webp',
            'image.PANTS/Absolute” Pants-4.webp',
            'image.PANTS/Absolute” Pants-5.webp',
            'image.PANTS/Absolute” Pants-6.webp',
            'image.PANTS/Absolute” Pants-7.webp',
            'image.PANTS/Absolute” Pants-8.webp',
            'image.PANTS/Absolute” Pants-9.webp'
        ],
        imgPrimary: 'image.PANTS/Absolute” Pants-1.webp',
        imgSecondary: 'image.PANTS/Absolute” Pants-2.webp',
        badge: 'NEW',
        installment: '1 622₽',
        description: 'Классические чёрные брюки.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 183 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants2',
        category: 'pants',
        title: '“Ex Sample Classic” Pants Gray',
        priceNew: '6 490₽',
        priceOld: '7 990₽',
        images: [
            'image.PANTS/Rarity” Jeans-1.webp',
            'image.PANTS/Rarity” Jeans-2.webp',
            'image.PANTS/Rarity” Jeans-3.webp',
            'image.PANTS/Rarity” Jeans-4.webp',
            'image.PANTS/Rarity” Jeans-5.webp',
            'image.PANTS/Rarity” Jeans-6.webp',
            'image.PANTS/Rarity” Jeans-7.webp',
            'image.PANTS/Rarity” Jeans-8.webp'
        ],
        imgPrimary: 'image.PANTS/Rarity” Jeans-1.webp',
        imgSecondary: 'image.PANTS/Rarity” Jeans-2.webp',
        badge: 'NEW',
        installment: '1 622₽',
        description: 'Серые классические брюки.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 186 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants3',
        category: 'pants',
        title: '“Criss Cross” Pants',
        priceNew: '7 990₽',
        priceOld: '9 990₽',
        images: [
            'image.PANTS/Criss Cross” Pants-1.webp',
            'image.PANTS/Criss Cross” Pants-2.webp',
            'image.PANTS/Criss Cross” Pants-3.webp',
            'image.PANTS/Criss Cross” Pants-4.webp'
        ],
        imgPrimary: 'image.PANTS/Criss Cross” Pants-1.webp',
        imgSecondary: 'image.PANTS/Criss Cross” Pants-2.webp',
        badge: 'NEW',
        installment: '1 997₽',
        description: 'Брюки “Criss Cross” с оригинальным кроем.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 180 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants4',
        category: 'pants',
        title: '“Void” Pants',
        priceNew: '5 990₽',
        priceOld: '8 990₽',
        images: [
            'image.PANTS/Ex Sample Classic” Pants Black-1.webp',
            'image.PANTS/Ex Sample Classic” Pants Black-2.webp',
            'image.PANTS/Ex Sample Classic” Pants Black-3.webp',
            'image.PANTS/Ex Sample Classic” Pants Black-4.png'
        ],
        imgPrimary: 'image.PANTS/Ex Sample Classic” Pants Black-1.webp',
        imgSecondary: 'image.PANTS/Ex Sample Classic” Pants Black-2.webp',
        badge: '',
        installment: '1 497₽',
        description: 'Брюки “Void” – свободный силуэт.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 175 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants5',
        category: 'pants',
        title: '“JJ” Pants',
        priceNew: '6 990₽',
        priceOld: '9 490₽',
        images: [
            'image.PANTS/Ex Sample Classic” Pants Gray-1.webp',
            'image.PANTS/Ex Sample Classic” Pants Gray-2.webp',
            'image.PANTS/Ex Sample Classic” Pants Gray-3.webp',
            'image.PANTS/Ex Sample Classic” Pants Gray-4.webp'
        ],
        imgPrimary: 'image.PANTS/Ex Sample Classic” Pants Gray-1.webp',
        imgSecondary: 'image.PANTS/Ex Sample Classic” Pants Gray-1.webp',
        badge: '',
        installment: '1 747₽',
        description: 'Брюки “JJ” с карманами.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants6',
        category: 'pants',
        title: '“Ex Sample” Pants',
        priceNew: '6 990₽',
        priceOld: '9 490₽',
        images: [
            'image.PANTS/Ex Sample Classic” Pants Brown-1.webp',
            'image.PANTS/Ex Sample Classic” Pants Brown-2.webp',
            'image.PANTS/Ex Sample Classic” Pants Brown-3.png',
            'image.PANTS/Ex Sample Classic” Pants Brown-4.png'
        ],
        imgPrimary: 'image.PANTS/Ex Sample Classic” Pants Brown-1.webp',
        imgSecondary: 'image.PANTS/Ex Sample Classic” Pants Brown-2.webp',
        badge: 'HIT',
        installment: '1 747₽',
        description: 'Популярная модель брюк “Ex Sample”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 188 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants7',
        category: 'pants',
        title: '“Waves” Pants',
        priceNew: '8 990₽',
        priceOld: null,
        images: [
            'image.PANTS/Ex Sample” Pants-1.webp',
            'image.PANTS/Ex Sample” Pants-2.webp',
            'image.PANTS/Ex Sample” Pants-3.webp',
            'image.PANTS/Ex Sample” Pants-4.webp',
            'image.PANTS/Ex Sample” Pants-5.webp',
            'image.PANTS/Ex Sample” Pants-6.webp',
            'image.PANTS/Ex Sample” Pants-7.webp'
        ],
        imgPrimary: 'image.PANTS/Ex Sample” Pants-1.webp',
        imgSecondary: 'image.PANTS/Ex Sample” Pants-2.webp',
        badge: 'NEW',
        installment: '2 247₽',
        description: 'Брюки “Waves” с волнообразным принтом.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 185 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants8',
        category: 'pants',
        title: '“Tape” Pants Black',
        priceNew: '8 990₽',
        priceOld: null,
        images: [
            'image.PANTS/Waves Pants-1.webp',
            'image.PANTS/Waves Pants-2.webp',
            'image.PANTS/Waves Pants-3.jpg',
            'image.PANTS/Waves Pants-4.webp',
            'image.PANTS/Waves Pants-5.webp',
            'image.PANTS/Waves Pants-6.webp'
        ],
        imgPrimary: 'image.PANTS/Waves Pants-1.webp',
        imgSecondary: 'image.PANTS/Waves Pants-2.webp',
        badge: '',
        installment: '2 247₽',
        description: 'Чёрные брюки “Tape” с лампасами.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 182 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants9',
        category: 'pants',
        title: '“Rarity” Jeans',
        priceNew: '8 990₽',
        priceOld: '11 490₽',
        images: [
            'image.PANTS/Rarity” Jeans-1.webp',
            'image.PANTS/Rarity” Jeans-2.webp',
            'image.PANTS/Rarity” Jeans-3.webp',
            'image.PANTS/Rarity” Jeans-4.webp',
            'image.PANTS/Rarity” Jeans-5.webp',
            'image.PANTS/Rarity” Jeans-6.webp',
            'image.PANTS/Rarity” Jeans-7.webp',
            'image.PANTS/Rarity” Jeans-8.webp'
        ],
        imgPrimary: 'image.PANTS/Rarity” Jeans-1.webp',
        imgSecondary: 'image.PANTS/Rarity” Jeans-2.webp',
        badge: 'HIT',
        installment: '2 247₽',
        description: 'Джинсы “Rarity” из плотного денима.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 187 см, размер XL',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'pants10',
        category: 'pants',
        title: '“Ex Sample” Pants Blue',
        priceNew: '5 990₽',
        priceOld: '8 990₽',
        images: [
            'image.PANTS/Ex Sample” Pants-1.webp',
            'image.PANTS/Ex Sample” Pants-2.webp',
            'image.PANTS/Ex Sample” Pants-3.webp',
            'image.PANTS/Ex Sample” Pants-4.webp',
            'image.PANTS/Ex Sample” Pants-5.webp',
            'image.PANTS/Ex Sample” Pants-6.webp',
            'image.PANTS/Ex Sample” Pants-7.webp'
        ],
        imgPrimary: 'image.PANTS/Ex Sample” Pants-1.webp',
        imgSecondary: 'image.PANTS/Ex Sample” Pants-2.webp',
        badge: '',
        installment: '1 497₽',
        description: 'Синие брюки “Ex Sample”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 179 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== SHORTS (4 товара) ==========
    {
        id: 'shorts1',
        category: 'shorts',
        title: '“Ex Sample” Shorts',
        priceNew: '3 990₽',
        priceOld: '6 490₽',
        images: [
            'image.SHORTS/Ex Sample” Shorts-1.webp',
            'image.SHORTS/Ex Sample” Shorts-2.webp',
            'image.SHORTS/Ex Sample” Shorts-3.webp',
            'image.SHORTS/Ex Sample” Shorts-4.webp',
            'image.SHORTS/Ex Sample” Shorts-5.webp',
            'image.SHORTS/Ex Sample” Shorts-6.webp',
            'image.SHORTS/Ex Sample” Shorts-7.webp'
        ],
        imgPrimary: 'image.SHORTS/Ex Sample” Shorts-1.webp',
        imgSecondary: 'image.SHORTS/Ex Sample” Shorts-2.webp',
        badge: 'SALE',
        installment: '997₽',
        description: 'Базовые шорты “Ex Sample”.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 180 см, размер M',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'shorts2',
        category: 'shorts',
        title: '“JJ” Shorts',
        priceNew: '4 690₽',
        priceOld: '6 590₽',
        images: [
            'image.SHORTS/JJ” Shorts-1.webp',
            'image.SHORTS/JJ” Shorts-2.webp',
            'image.SHORTS/JJ” Shorts-3.webp',
            'image.SHORTS/JJ” Shorts-4.webp',
            'image.SHORTS/JJ” Shorts-5.png',
            'image.SHORTS/JJ" Shorts-6.webp',
            'image.SHORTS/JJ” Shorts-7.png'
        ],
        imgPrimary: 'image.SHORTS/JJ” Shorts-1.webp',
        imgSecondary: 'image.SHORTS/JJ” Shorts-2.webp',
        badge: '',
        installment: '1 172₽',
        description: 'Шорты “JJ” – комфорт и стиль.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 175 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'shorts3',
        category: 'shorts',
        title: '“Void” Shorts',
        priceNew: '3 490₽',
        priceOld: '5 490₽',
        images: [
            'image.SHORTS/Quagmire Shorts-1.webp',
            'image.SHORTS/Quagmire Shorts-2.webp',
            'image.SHORTS/Quagmire Shorts-3.webp',
            'image.SHORTS/Quagmire Shorts-4.webp',
            'image.SHORTS/Quagmire Shorts-5.jpg',
            'image.SHORTS/Quagmire Shorts-6.webp',
            'image.SHORTS/Quagmire Shorts-7.webp'
        ],
        imgPrimary: 'image.SHORTS/Quagmire Shorts-1.webp',
        imgSecondary: 'image.SHORTS/Quagmire Shorts-2.webp',
        badge: '',
        installment: '872₽',
        description: 'Шорты “Void” свободного кроя.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 183 см, размер L',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    {
        id: 'shorts4',
        category: 'shorts',
        title: '“Basic” Shorts',
        priceNew: '2 990₽',
        priceOld: '4 990₽',
        images: [
            'image.SHORTS/Waves Shorts.webp',
            'image.SHORTS/Waves Shorts2.webp',
            'image.SHORTS/Waves Shorts3.webp',
            'image.SHORTS/Waves Shorts4.webp',
            'image.SHORTS/Waves Shorts5.webp',
            'image.SHORTS/Waves Shorts6.webp',
            'image.SHORTS/Waves Shorts7.webp'
        ],
        imgPrimary: 'image.SHORTS/Waves Shorts4.webp',
        imgSecondary: 'image.SHORTS/Waves Shorts.webp',
        badge: '',
        installment: '747₽',
        description: 'Классические базовые шорты.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Модель на фото: рост 178 см, размер S',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    },
    // ========== ACCESSORIES (1 товар) ==========
    {
        id: 'acc1',
        category: 'accessories',
        title: 'Бейсболка UNFORT',
        priceNew: '2 490₽',
        priceOld: null,
        images: [
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-1.webp',
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-2.webp',
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-3.webp',
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-4.webp',
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-5.webp',
            'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-6.webp'
        ],
        imgPrimary: 'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-1.webp',
        imgSecondary: 'image.ACCESSORIES/Crossbody Bag «Crooked Wood»-2.webp',
        badge: '',
        installment: '622₽',
        description: 'Бейсболка UNFORT с вышитым логотипом. Регулируемый размер.',
        characteristics: [
            'Ткань на хлопковой основе с водоотталкивающим покрытием: хлопок 65%, нейлон 35%, с подкладом',
            'Фурнитура: металлическая, нержавеющая',
            'Объемное лого из нержавеющей стали',
            'Фиксаторы снизу брюк — два режима носки (прямой / утянутый)',
            'Технологичный крой и индивидуальные лекала'
        ],
        sizeInfo: 'Регулируемый размер, подходит на любой объем головы.',
        care: 'Рекомендуем:\n— Перед стиркой вывернуть вещь наизнанку\n— Машинную стирку в деликатном режиме при температуре не выше 30°\n— Отжим на минимальных оборотах (до 600)\n— Сушку в естественных условиях, в разложенном виде вдали от прямых солнечных лучей\n— Гладить с изнанки или через хлопковую ткань(!) на средней температуре\n\nЗапрещается:\n— Химчистка и/или отбеливание вещи\n— Сушка на батарее или в стиральной машине',
        delivery: 'Бесплатная доставка от 14 990₽. Срок доставки: 7-14 дней. Отправка по всей России.',
        payment: 'Оплата картами Visa, Mastercard, МИР. Также доступна оплата долями (4 платежа).'
    }
];

// Функция для случайного перемешивания массива
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Создаём перемешанную копию массива для отображения на главной странице
const products = shuffleArray([...productsRaw]);

// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
});