document.addEventListener('DOMContentLoaded', function () {
    // 1. Sidebar Toggle for Mobile
    const sidebar = document.querySelector('.dashboard-sidebar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbarToggler && sidebar) {
        navbarToggler.addEventListener('click', function () {
            sidebar.classList.toggle('show');
        });

        // Close sidebar when a link is clicked (mobile)
        const sidebarLinks = document.querySelectorAll('.sidebar-nav-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // 992px matches the CSS media query
                    sidebar.classList.remove('show');
                }
            });
        });
    }

    // 2. Generic Button Click Handlers (Simulation)
    const allButtons = document.querySelectorAll('button:not(#theme-toggle), .dropdown-item');

    allButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const btnText = this.innerText.trim() || this.getAttribute('title') || 'Button';

            // Logic based on button type
            if (this.classList.contains('text-danger') || this.classList.contains('btn-link') && this.querySelector('.bi-trash')) {
                if (confirm(`Are you sure you want to perform: ${btnText}?`)) {
                    showToast(`Success`, `${btnText} action completed.`);
                }
            } else if (this.classList.contains('btn-primary-custom') || this.classList.contains('dropdown-item')) {
                // For logout, we just let it follow the link or show alert
                if (this.href && this.href.includes('login.html')) return;

                showToast(`Action Triggered`, `Performing: ${btnText}`);
            } else if (this.hasAttribute('title')) {
                showToast(`Action`, `${this.getAttribute('title')} initiated.`);
            }
        });
    });

    // 3. Simple Toast Function
    function showToast(title, message) {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            toastContainer.style.zIndex = '1100';
            document.body.appendChild(toastContainer);
        }

        const toastId = 'toast-' + Date.now();
        const toastHtml = `
            <div id="${toastId}" class="toast show glass-card border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header bg-transparent border-bottom border-secondary border-opacity-10 py-2">
                    <strong class="me-auto text-primary"><i class="bi bi-info-circle me-2"></i> ${title}</strong>
                    <button type="button" class="btn-close small" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body small py-3">
                    ${message}
                </div>
            </div>
        `;

        toastContainer.insertAdjacentHTML('beforeend', toastHtml);

        // Auto remove toast
        setTimeout(() => {
            const toast = document.getElementById(toastId);
            if (toast) {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 500);
            }
        }, 3000);
    }

    // 4. Data Refresh Simulation (for dashboard visibility)
    const refreshBtn = document.querySelector('.btn-primary-custom:contains("Add Route")');
    // Note: :contains isn't valid in document.querySelector, find it manually
    const addRouteBtn = Array.from(document.querySelectorAll('.btn-primary-custom')).find(b => b.innerText.includes('Add Route'));

    if (addRouteBtn) {
        addRouteBtn.onclick = function () {
            // Simulate adding dynamic data
            const tbody = document.querySelector('#schedule-section tbody');
            const newRow = tbody.rows[0].cloneNode(true);
            newRow.cells[0].innerText = "New Secret Cove Route " + (tbody.rows.length + 1);
            tbody.prepend(newRow);
            showToast("Success", "New route added to schedule!");
            return false; // prevent default
        };
    }
});
