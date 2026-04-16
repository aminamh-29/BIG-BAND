/* =============================================
   main.js — entry point, imports all modules
   ============================================= */

import { initCursor }       from './cursor.js';
import { initNav }          from './nav.js';
import { initScrollReveal } from './animations.js';
import { initCounters }     from './counter.js';
import { initTestimonials } from './testimonials.js';

// Run everything once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initScrollReveal();
  initCounters();
  initTestimonials();

  console.log('Luminary website loaded ✓');
});