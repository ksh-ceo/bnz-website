// АКТИВНЫЕ ЭЛЕМЕНТЫ
const notifyButtons = document.querySelectorAll('.btn-notify');
const modal = document.getElementById('notifyModal');
const closeModal = document.querySelector('.close-modal');
const productNameSpan = document.getElementById('productName');
const confirmButton = document.getElementById('confirmNotify');
const emailInput = document.getElementById('userEmail');
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

// КЛИК ПО КНОПКЕ "УВЕДОМИТЬ"
notifyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        productNameSpan.textContent = product;
        modal.style.display = 'flex';
    });
});

// ЗАКРЫТИЕ МОДАЛКИ
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// ЗАКРЫТИЕ ПО КЛИКУ ВНЕ МОДАЛКИ
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ПОДТВЕРЖДЕНИЕ УВЕДОМЛЕНИЯ
confirmButton.addEventListener('click', () => {
    const email = emailInput.value;
    const product = productNameSpan.textContent;
    
    if (email) {
        alert(`Спасибо! Мы уведомим вас о поступлении "${product}" на email: ${email}`);
    } else {
        alert(`Отлично! Как только "${product}" появится в продаже, мы напишем вам в Telegram.`);
    }
    
    // Сброс и закрытие
    emailInput.value = '';
    modal.style.display = 'none';
    
    // Можно добавить отправку на сервер (позже)
    console.log(`Уведомление запрошено для: ${product}, email: ${email || 'не указан'}`);
});

// МОБИЛЬНОЕ МЕНЮ
menuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    if (nav.style.display === 'flex') {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '70px';
        nav.style.right = '20px';
        nav.style.background = 'white';
        nav.style.padding = '20px';
        nav.style.borderRadius = '10px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        nav.style.gap = '15px';
    }
});

// ПЛАВНАЯ ПРОКРУТКА ДЛЯ ССЫЛОК В МЕНЮ
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрытие мобильного меню
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        }
    });
});

// АНИМАЦИЯ ПРИ СКРОЛЛЕ
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        header.style.padding = '15px 0';
    }
});

// ЗАГРУЗКА САЙТА
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Сайт HoopFlow загружен!');
    console.log('👨‍💻 Разработчик: студент-программист 2 курс');
    console.log('🎥 Контент: ежедневный монтаж в TikTok/Instagram');
    console.log('👕 Бизнес: баскетбольные футболки + коллабы');
});