

/* =============================================
   cursor.js — custom animated cursor
   ============================================= */
 
export function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
 
  // Current mouse position
  let mx = 0, my = 0;
  // Ring follows with lag
  let rx = 0, ry = 0;
 
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    // Dot snaps immediately
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });
 
  // Animate the lagging ring
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();
 
  // Enlarge ring on interactive elements
  const interactives = document.querySelectorAll(
    'a, button, .service-card, .work-card, .t-dot, input, textarea, select'
  );
 
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}
