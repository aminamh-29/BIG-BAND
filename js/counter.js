/* =============================================
   counter.js — animated number counters
   Usage: add data-target="340" to any element
   ============================================= */

export function initCounters() {
  // Find all elements with a data-target attribute
  const counters = document.querySelectorAll('.big-num[data-target]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el     = entry.target;
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix || '%';
        let current  = 0;
        const step   = target / 60;  // 60 frames to reach target

        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.round(current) + suffix;

          if (current >= target) {
            clearInterval(timer);
            el.textContent = target + suffix;
          }
        }, 20); // ~20ms per frame = ~1.2s total

        observer.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => observer.observe(el));
}