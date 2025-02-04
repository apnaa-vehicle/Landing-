document.addEventListener('DOMContentLoaded', function () {
    // Cursor effects
    const cursor = document.getElementById('cursor');
    const cursor2 = document.getElementById('cursor2');
    const cursor3 = document.getElementById('cursor3');

    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor2.style.left = e.clientX + 'px';
        cursor2.style.top = e.clientY + 'px';
        cursor3.style.left = e.clientX + 'px';
        cursor3.style.top = e.clientY + 'px';
    });

    // Hover effects
    document.querySelectorAll('.hover-target').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor2.classList.add('hover');
            cursor3.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor2.classList.remove('hover');
            cursor3.classList.remove('hover');
        });
    });

    // Navigation
    document.querySelectorAll('[data-section]').forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            section.classList.add('active');
        });
    });

    // Side navigation
    document.querySelector('.about-text').addEventListener('click', () => {
        document.getElementById('about').classList.add('active');
    });

    document.querySelector('.contact-text').addEventListener('click', () => {
        document.getElementById('contact').classList.add('active');
    });

    // Close buttons
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.closest('.section');
            section.classList.remove('active');
        });
    });

    // Create gallery items
    document.querySelectorAll('[repeat]').forEach(template => {
        const count = parseInt(template.getAttribute('repeat'));
        const parent = template.parentNode;
        for (let i = 1; i < count; i++) {
            parent.appendChild(template.cloneNode(true));
        }
    });
});