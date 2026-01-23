// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
        });

        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navOverlay.classList.remove('active');
            });
        }

        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
            });
        });
    }
});
