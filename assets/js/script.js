// Modern Stockholm Design - Finance Planner
// Animation system with Intersection Observer

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // HAMBURGER MENU FUNCTIONALITY
    // ========================================
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

    // ========================================
    // GET APP BUTTON - DEVICE DETECTION
    // ========================================
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

    // ========================================
    // SCROLL ANIMATION SYSTEM
    // ========================================

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Add 'animations-ready' class to body to enable animation initial states
        document.body.classList.add('animations-ready');

        // Intersection Observer configuration
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
            threshold: 0.1 // Trigger when 10% of element is visible
        };

        // Create the observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when element enters viewport
                    entry.target.classList.add('is-visible');

                    // Optional: Stop observing once animated (performance optimization)
                    // Uncomment if you want animations to happen only once
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Find all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom, .animate-fade-in'
        );

        // Observe each animated element
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Handle dynamically added elements (if needed)
        // This is useful for single-page apps or dynamically loaded content
        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Check if the added node itself has animation classes
                        if (node.matches && node.matches('.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom, .animate-fade-in')) {
                            observer.observe(node);
                        }
                        // Check for child elements with animation classes
                        const childAnimatedElements = node.querySelectorAll && node.querySelectorAll(
                            '.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom, .animate-fade-in'
                        );
                        if (childAnimatedElements) {
                            childAnimatedElements.forEach(element => {
                                observer.observe(element);
                            });
                        }
                    }
                });
            });
        });

        // Start observing the document for changes
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        // For users who prefer reduced motion, make sure all elements are visible
        const animatedElements = document.querySelectorAll(
            '.animate-from-left, .animate-from-right, .animate-from-top, .animate-from-bottom, .animate-fade-in'
        );
        animatedElements.forEach(element => {
            element.classList.add('is-visible');
        });
    }

    // ========================================
    // ACCORDION FUNCTIONALITY
    // ========================================

    // Add js-enabled class to body for progressive enhancement
    document.body.classList.add('js-enabled');

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.accordion');
            const isActive = accordion.classList.contains('active');

            // Toggle the clicked accordion
            accordion.classList.toggle('active');

            // Update ARIA attribute for accessibility
            header.setAttribute('aria-expanded', !isActive);
        });
    });

    // Set initial ARIA attributes
    accordionHeaders.forEach(header => {
        const accordion = header.closest('.accordion');
        const isActive = accordion.classList.contains('active');

        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        header.setAttribute('tabindex', '0');

        // Add aria-controls for better accessibility
        const content = accordion.querySelector('.accordion-content');
        if (content) {
            const contentId = content.id || `accordion-content-${Math.random().toString(36).substr(2, 9)}`;
            if (!content.id) content.id = contentId;
            header.setAttribute('aria-controls', contentId);
        }

        // Allow keyboard navigation
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
});
