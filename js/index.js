// index.js — логика главной страницы

/* ========== ПЕРЕМЕННЫЕ ========== */
let categoryTabs, productsGrid, pagination, prevPageBtn, nextPageBtn, pageButtons;
const ITEMS_PER_PAGE = 36;
let currentPage = 1;
let totalPages = 1;

// Оригинальный порядок товаров (как в data.js) - НИКОГДА НЕ МЕНЯЕТСЯ
let originalProducts = [];

// Перемешанный массив для вкладки ALL - создаётся ОДИН раз при загрузке страницы
let shuffledProducts = [];

/* ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ========== */
// Функция для случайного перемешивания массива
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Сохраняем оригинальный порядок при загрузке (только один раз)
if (typeof products !== 'undefined') {
    originalProducts = [...products];
    shuffledProducts = shuffleArray(originalProducts);
}

/* ========== РЕНДЕР ========== */
function renderProducts(productsArray) {
    productsGrid.innerHTML = '';
    productsArray.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.productId = product.id;
        card.dataset.category = product.category;

        card.innerHTML = `
            <a href="product.html?id=${product.id}" class="product-card__link">
                <div class="product-card__image-wrapper">
                    <img src="${product.imgPrimary}" alt="${product.title}" class="product-card__image product-card__image--primary">
                    <img src="${product.imgSecondary}" alt="${product.title} hover" class="product-card__image product-card__image--secondary">
                    <button class="product-card__favorite" aria-label="Добавить в избранное">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
                </div>
                <h3 class="product-card__title">${product.title}</h3>
                <div class="product-card__prices">
                    <span class="product-card__price product-card__price--new">${product.priceNew}</span>
                    ${product.priceOld ? `<span class="product-card__price product-card__price--old">${product.priceOld}</span>` : ''}
                </div>
                <div class="product-card__installment">Долями по ${product.installment}</div>
            </a>
        `;

        if (favorites.includes(product.id)) {
            card.querySelector('.product-card__favorite').classList.add('active');
        }

        productsGrid.appendChild(card);
    });

    document.querySelectorAll('.product-card__favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.product-card');
            const productId = card.dataset.productId;
            if (!productId) return;
            toggleFavorite(productId, btn);
        });
    });
}

function renderAllPage(page) {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    renderProducts(shuffledProducts.slice(start, end));
    currentPage = page;
    updatePagination();
    pagination.classList.remove('hidden');
}

function renderCategory(category) {
    // Используем оригинальный порядок (НЕ перемешанный)
    const filtered = originalProducts.filter(p => p.category === category);
    renderProducts(filtered);
    pagination.classList.add('hidden');
}

function filterProducts(category) {
    if (category === 'all') {
        // Для вкладки ALL используем перемешанный массив
        totalPages = Math.ceil(shuffledProducts.length / ITEMS_PER_PAGE);
        renderAllPage(1);
    } else {
        // Для остальных категорий используем оригинальный порядок
        renderCategory(category);
    }
}

function updatePagination() {
    const paginationPages = document.querySelector('.pagination__pages');
    if (!paginationPages) return;
    
    paginationPages.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pagination__page ${i === currentPage ? 'active' : ''}`;
        btn.dataset.page = i;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            if (i !== currentPage) {
                currentPage = i;
                const start = (currentPage - 1) * ITEMS_PER_PAGE;
                const end = start + ITEMS_PER_PAGE;
                renderProducts(shuffledProducts.slice(start, end));
                updatePagination();
            }
        });
        paginationPages.appendChild(btn);
    }
    
    pageButtons = document.querySelectorAll('.pagination__page');
    if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
    if (nextPageBtn) nextPageBtn.disabled = currentPage === totalPages;
}

/* ========== ИНИЦИАЛИЗАЦИЯ ========== */
function initIndex() {
    categoryTabs = document.querySelectorAll('.category-tab');
    productsGrid = document.getElementById('products-grid');
    pagination = document.getElementById('pagination');
    prevPageBtn = document.getElementById('prevPage');
    nextPageBtn = document.getElementById('nextPage');
    pageButtons = document.querySelectorAll('.pagination__page');

    if (!productsGrid) return;

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterProducts(tab.dataset.category);
        });
    });

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                const start = (currentPage - 1) * ITEMS_PER_PAGE;
                const end = start + ITEMS_PER_PAGE;
                renderProducts(shuffledProducts.slice(start, end));
                updatePagination();
            }
        });
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                const start = (currentPage - 1) * ITEMS_PER_PAGE;
                const end = start + ITEMS_PER_PAGE;
                renderProducts(shuffledProducts.slice(start, end));
                updatePagination();
            }
        });
    }

    // Запускаем с вкладки ALL
    filterProducts('all');
}

document.addEventListener('componentsLoaded', initIndex);
if (document.querySelector('.category-tab')) initIndex();

/* ========== PRELOADER ========== */
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    const preloaderShown = sessionStorage.getItem('preloaderShown');
    
    if (preloaderShown) {
        preloader.classList.add('hidden');
    } else {
        setTimeout(function() {
            preloader.classList.add('hidden');
            sessionStorage.setItem('preloaderShown', 'true');
        }, 2000);
    }
});