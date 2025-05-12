/* Reveal sections on scroll using Intersection Observer */
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appear = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          appear.unobserve(entry.target); // stop observing once visible
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach(section => appear.observe(section));

  // Apple-style scroll-reveal animation
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealOnScroll.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => revealOnScroll.observe(el));
});
