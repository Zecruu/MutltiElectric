// Main JavaScript file 

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                // Show menu: remove hidden, add transition classes
                mobileMenu.classList.remove('hidden');
                // Use setTimeout to allow display change before starting transition
                setTimeout(() => {
                   mobileMenu.classList.remove('scale-y-0');
                   mobileMenu.classList.add('scale-y-100');
                }, 10); // Small delay
            } else {
                // Hide menu: add transition class first, then hidden
                mobileMenu.classList.remove('scale-y-100');
                mobileMenu.classList.add('scale-y-0');
                // Wait for transition to finish before adding hidden
                 mobileMenu.addEventListener('transitionend', () => {
                    mobileMenu.classList.add('hidden');
                }, { once: true }); // Ensure listener runs only once
            }
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement){
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu if open after clicking a link
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                 mobileMenu.classList.remove('scale-y-100');
                 mobileMenu.classList.add('scale-y-0');
                 mobileMenu.addEventListener('transitionend', () => {
                    mobileMenu.classList.add('hidden');
                }, { once: true });
            }
        });
    });
}); 