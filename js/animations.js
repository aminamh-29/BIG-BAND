/* =============================================
   animations.js — scroll-triggered reveal
   ============================================= */
 
export function initScrollReveal() {
  // Select all elements with the .reveal class
  const revealEls = document.querySelectorAll('.reveal');
 
  // Create an IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add .visible to trigger the CSS transition
          entry.target.classList.add('visible');
          // Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }   // trigger when 12% of the element is visible
  );
 
  // Observe every reveal element
  revealEls.forEach((el) => observer.observe(el));
}
 
