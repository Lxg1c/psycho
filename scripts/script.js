document.addEventListener('DOMContentLoaded', function() {
    // Ваш код для аккордеона
    const educationHeaders = document.querySelectorAll('.education-header');
    educationHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.education-item');
            item.classList.toggle('active');
        });
    });
});