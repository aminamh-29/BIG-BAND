
/* =============================================
   nav.js — sticky nav with scroll style change
   ============================================= */
 
export function initNav() {
  const nav = document.getElementById('nav');
 
  window.addEventListener('scroll', () => {
    // Add .scrolled class after 60px of scrolling
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}
