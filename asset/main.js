/**
 * main.js - Essential Interactivity and Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scrolled State
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // 2. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    };
  
    const revealOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -100px 0px', // trigger a bit before it enters
      threshold: 0.1 // 10% visibility
    };
  
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
    
    // Initial check for elements already in viewport
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });

    // 3. Set Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  });
  
