// Enhanced Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add stagger effect for child elements
                const staggerElements = entry.target.querySelectorAll('.stagger-1, .stagger-2, .stagger-3, .stagger-4');
                staggerElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animated');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes (except hero section)
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.mobile-hero-section):not(.mobile-hero-section *)');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Also observe service items and video cards specifically
    const serviceItems = document.querySelectorAll('.service-item');
    const videoCards = document.querySelectorAll('.video-card');
    
    serviceItems.forEach(el => {
        observer.observe(el);
    });
    
    videoCards.forEach(el => {
        observer.observe(el);
    });

    // Gallery auto-scroll management
    function initializeGalleryAutoScroll() {
        const galleries = document.querySelectorAll('.gallery-track.auto-scroll');
        
        galleries.forEach(gallery => {
            const items = gallery.querySelectorAll('.gallery-item');
            const itemWidth = 320; // 300px width + 20px margin
            let currentIndex = 0;
            let isHovered = false;
            let autoScrollInterval;

            // Pause animation on hover
            gallery.addEventListener('mouseenter', () => {
                isHovered = true;
                gallery.style.animationPlayState = 'paused';
            });

            gallery.addEventListener('mouseleave', () => {
                isHovered = false;
                gallery.style.animationPlayState = 'running';
            });

            // Manual scroll controls
            const container = gallery.closest('.gallery-container');
            const leftBtn = container.querySelector('.gallery-scroll-left');
            const rightBtn = container.querySelector('.gallery-scroll-right');

            if (leftBtn && rightBtn) {
                leftBtn.addEventListener('click', () => {
                    currentIndex = Math.max(0, currentIndex - 1);
                    gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                    gallery.classList.remove('auto-scroll');
                });

                rightBtn.addEventListener('click', () => {
                    currentIndex = Math.min(items.length - 1, currentIndex + 1);
                    gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                    gallery.classList.remove('auto-scroll');
                });
            }
        });
    }

    // Initialize gallery functionality
    initializeGalleryAutoScroll();

    // Smooth scroll for navigation links
    function initializeSmoothScroll() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initialize smooth scroll
    initializeSmoothScroll();

    // Active navigation highlighting
    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    // Remove active class from all nav links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // Add active class to current section's nav link
                    const activeLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
                    activeLinks.forEach(link => {
                        link.classList.add('active');
                    });
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-80px 0px -80px 0px'
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Initialize navigation highlighting
    updateActiveNavigation();

    // Add loading states
    function addLoadingStates() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
            
            // Add error handling
            img.addEventListener('error', () => {
                img.classList.add('error');
                console.warn(`Failed to load image: ${img.src}`);
            });
        });
    }

    // Initialize loading states
    addLoadingStates();

    // Performance optimization: Throttle scroll events
    let ticking = false;

    function updateOnScroll() {
        // Add any scroll-based updates here
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick, { passive: true });

    console.log('Enhanced scroll animations initialized');
});
