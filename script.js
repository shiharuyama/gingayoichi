// ========================================
// Section Divider Slide-in
// ========================================

const dividers = document.querySelectorAll('.section-divider');

const dividerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        dividerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

dividers.forEach((el) => {
  dividerObserver.observe(el);
});


// ========================================
// Scroll Fade-in
// ========================================

const fadeinTargets = document.querySelectorAll(
  '.about__text, .about__divider, .stage-card, .mini-event, ' +
  '.map__frame, .schedule__frame, .shop-item, ' +
  '.notice__block, .contact__block, .contact__sns-icons'
);

fadeinTargets.forEach((el) => {
  el.classList.add('js-fadein');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeinTargets.forEach((el) => {
  observer.observe(el);
});


// ========================================
// Header scroll style
// ========================================

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

// ========================================
// About Text Scroll Opacity
// ========================================

gsap.registerPlugin(ScrollTrigger);

const aboutLines = document.querySelectorAll('.about__line');

aboutLines.forEach((line, i) => {
  gsap.to(line, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: line,
      start: 'top 85%',
      end: 'top 30%',
      scrub: 0.2,
    },
  });
});