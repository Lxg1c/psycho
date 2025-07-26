document.addEventListener('DOMContentLoaded', function() {
    const accordionBtns = document.querySelectorAll(".accordion-button")

    for (let i = 0; i < accordionBtns.length; i++) {
        accordionBtns[i].addEventListener("click", () => toggleAccordion(i))
    }
    // Accordion functionality
        function toggleAccordion(index) {
            const accordions = document.querySelectorAll('.accordion-content');
            const chevrons = document.querySelectorAll('.chevron');
            
            accordions.forEach((accordion, i) => {
                if (i === index) {
                    accordion.classList.toggle('active');
                    chevrons[i].classList.toggle('active');
                } else {
                    accordion.classList.remove('active');
                    chevrons[i].classList.remove('active');
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
});