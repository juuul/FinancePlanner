// ==========================================================================
// Finance Planner - Modern Stockholm Animations
// Fly-in animations, mixed directions, Swedish tech aesthetic
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Hamburger Menu Functionality
    // ==========================================================================
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
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
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
                document.body.style.overflow = '';
            });
        });
    }

    // ==========================================================================
    // 2. Get App Button Device Detection
    // ==========================================================================
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
            const currentPath = window.location.pathname;
            const isInSubdir = currentPath.includes('/nl/') || currentPath.split('/').filter(p => p).length > 1;
            getAppBtn.href = isInSubdir ? '../index.html#get-the-app' : 'index.html#get-the-app';
        }
    }

    // ==========================================================================
    // 3. FLY-IN ANIMATIONS - Mixed Directions on Scroll
    // ==========================================================================
    const initFlyInAnimations = () => {
        const animatedElements = document.querySelectorAll('[class*="animate-from-"], [class*="animate-fade-"]');

        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    };

    // Start fly-in animations
    setTimeout(initFlyInAnimations, 100);



    // ==========================================================================
    // 6. Smooth Scroll for Anchor Links
    // ==========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================================================
    // 7. Button Press Effect - Swedish Minimal
    // ==========================================================================
    const buttons = document.querySelectorAll('.btn, .btn-get-app, .lang-toggle');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Touch support
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });

    // ==========================================================================
    // 8. Card Hover Enhancements - Asymmetric Movement
    // ==========================================================================
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        // Alternate directions for dynamic feel
        const direction = index % 2 === 0 ? 'left' : 'right';
        
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            if (direction === 'left') {
                this.style.transform = 'translateX(8px)';
            } else {
                this.style.transform = 'translateX(-8px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
            this.style.transform = '';
        });
    });

    const exampleCards = document.querySelectorAll('.example-file-card');
    
    exampleCards.forEach((card, index) => {
        // Alternate directions for magazine-style layout
        const direction = index % 2 === 0 ? 'right' : 'left';
        
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
            if (direction === 'left') {
                this.style.transform = 'translateX(-8px)';
            } else {
                this.style.transform = 'translateX(8px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '';
            this.style.transform = '';
        });
    });

    // ==========================================================================
    // 9. Active Navigation Highlight on Scroll
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');

    if (sections.length > 0) {
        const navIsSticky = () => {
            if (!nav) return true;
            const style = window.getComputedStyle(nav);
            return style.position === 'sticky' || style.position === 'fixed';
        };

        window.addEventListener('scroll', () => {
            if (!navIsSticky()) return;
            
            let current = '';
            const scrollPos = window.scrollY + 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPos >= sectionTop && scrollPos < (sectionTop + sectionHeight)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkHref = link.getAttribute('href');
                if (linkHref === current || linkHref === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==========================================================================
    // 10. Back to Top Button
    // ==========================================================================
    const createBackToTop = () => {
        let backToTop = document.querySelector('.back-to-top');
        
        if (!backToTop) {
            backToTop = document.createElement('a');
            backToTop.className = 'back-to-top';
            backToTop.innerHTML = '↑';
            backToTop.href = '#top';
            backToTop.title = 'Back to top';
            backToTop.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--color-blue);
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                text-decoration: none;
                opacity: 0;
                visibility: hidden;
                transition: var(--transition-fast);
                z-index: 999;
                border: 2px solid var(--color-border);
            `;
            document.body.appendChild(backToTop);
        }

        const toggleBackToTop = () => {
            if (window.scrollY > 500) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        };

        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();
    };

    createBackToTop();

    // ==========================================================================
    // 11. Image Lazy Loading Enhancement
    // ==========================================================================
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }



    // ==========================================================================
    // 12. Reduce Motion Preference
    // ==========================================================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.transition = 'none';
            el.style.animation = 'none';
        });
    }

    // ==========================================================================
    // 14. Keyboard Navigation Enhancement
    // ==========================================================================
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape') {
            hamburger?.classList.remove('active');
            nav?.classList.remove('active');
            navOverlay?.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // ==========================================================================
    // 15. Form Focus Enhancement
    // ==========================================================================
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});

// ==========================================================================
// Utility Functions
// ==========================================================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}