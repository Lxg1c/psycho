document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll(".education__button");

    for (let i = 0; i < accordionBtns.length; i++) {
        accordionBtns[i].addEventListener("click", function(e) {
            e.preventDefault();
            toggleAccordion(i);
        });
    }

    function toggleAccordion(index) {
        const accordions = document.querySelectorAll('.education__details');
        const icons = document.querySelectorAll('.education__icon');
        
        accordions.forEach((accordion, i) => {
            if (i === index) {
                // Переключаем текущий элемент
                const isOpen = accordion.classList.toggle('active');
                icons[i].classList.toggle('active');
                accordionBtns[i].setAttribute('aria-expanded', isOpen);
            } else {
                // Закрываем все остальные
                accordion.classList.remove('active');
                icons[i].classList.remove('active');
                accordionBtns[i].setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Corrected burger menu selectors
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            nav.classList.toggle('nav--active');
        });

        // (опционально) Закрывать меню при клике по ссылке
        document.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--active');
                burger.classList.remove('burger--active');
            });
        });
    }
});