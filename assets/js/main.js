/**
 * Main JavaScript
 * Handles Navigation, Mobile Menu, and General UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.querySelector('.navbar-custom');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.classList.contains('dark-mode')) {
                navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            }
        } else {
            navbar.classList.remove('shadow-sm');
            // Revert to glass/transparent defined in CSS
            navbar.style.background = '';
        }
    });

    // Initialize Tooltips if using Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});
