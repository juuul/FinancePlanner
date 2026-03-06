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

    // Get App button device detection
    const getAppBtn = document.getElementById('getAppBtn');
    if (getAppBtn) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Detect iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            getAppBtn.href = 'https://apps.apple.com/us/app/finance-planner/id6743322133';
        }
        // Detect Android
        else if (/android/i.test(userAgent)) {
            getAppBtn.href = 'https://play.google.com/store/apps/details?id=nl.crwsolutions.CalcApi.Mobile';
        }
        // Default to app store section on page
        else {
            // Use relative navigation to the homepage anchor
            const currentPath = window.location.pathname;
            const isInSubdir = currentPath.includes('/nl/') || currentPath.split('/').filter(p => p).length > 1;
            getAppBtn.href = isInSubdir ? '../index.html#get-the-app' : 'index.html#get-the-app';
        }
    }
});

