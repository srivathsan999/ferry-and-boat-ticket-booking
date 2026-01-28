/**
 * GSAP Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Only run if GSAP and ScrollTrigger are available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        if (document.querySelector('.hero-content')) {
            gsap.from('.hero-content h1', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from('.hero-content p', {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.4
            });

            gsap.from('.booking-widget', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.6
            });
        }

        // Handle fade-up elements
        gsap.utils.toArray('.fade-up-scroll').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Handle generic fade-up (immediate)
        gsap.utils.toArray('.fade-up:not(.fade-up-scroll)').forEach(element => {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                onComplete: () => {
                    element.classList.add('visible');
                }
            });
        });

        // Staggered List Animation
        if (document.querySelector('.stagger-list')) {
            gsap.from('.stagger-list > *', {
                scrollTrigger: {
                    trigger: '.stagger-list',
                    start: "top 80%"
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    } else {
        // Fallback: If GSAP fails, just show everything
        document.querySelectorAll('.fade-up').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        console.warn("GSAP not found, using fallback visibility");
    }
});
