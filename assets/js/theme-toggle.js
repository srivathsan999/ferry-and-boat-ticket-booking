/**
 * Theme Toggle Logic
 * Handles Light/Dark mode switching and persistence via LocalStorage
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Check LocalStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'; // Sun icon for dark mode
        } else {
            htmlElement.classList.remove('dark-mode');
            if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>'; // Moon icon for light mode
        }
        localStorage.setItem('theme', theme);
    };

    // Apply saved theme or default to light (or system preference if we wanted, but default light per prompt colors)
    if (savedTheme === 'dark') {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle Event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (htmlElement.classList.contains('dark-mode')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
});
