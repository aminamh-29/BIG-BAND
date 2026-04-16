/* =============================================
   testimonials.js — auto-advancing slider
   ============================================= */

export function initTestimonials() {
  const track   = document.getElementById('tTrack');
  const dots    = document.querySelectorAll('.t-dot');
  const total   = dots.length;
  let current   = 0;
  let autoTimer = null;

  function goTo(index) {
    current = index;

    // Slide the track: each card is 50% of container width + 15px gap
    track.style.transform = `translateX(calc(-${index * 50}% - ${index * 15}px))`;

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function next() {
    goTo((current + 1) % total);
  }

  // Dot click navigation
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      clearInterval(autoTimer);
      goTo(Number(dot.dataset.i));
      startAuto();
    });
  });

  // Auto-advance every 5 seconds
  function startAuto() {
    autoTimer = setInterval(next, 5000);
  }

  startAuto();
}