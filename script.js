// ========================================
// Scroll Fade-in
// ========================================

const fadeinTargets = document.querySelectorAll(
  '.about__text, .about__divider, .mini-event, ' +
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
// Section Niche Slide-in
// ========================================

const niches = document.querySelectorAll('.section-niche');

const nicheObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        nicheObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

niches.forEach((el) => {
  nicheObserver.observe(el);
});





// ========================================
// Header scroll style
// ========================================

// const header = document.getElementById('header');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 10) {
//     header.classList.add('is-scrolled');
//   } else {
//     header.classList.remove('is-scrolled');
//   }
// });





// GSAP
gsap.registerPlugin(ScrollTrigger);

// ========================================
// Lantern Parallax
// ========================================

const lanterns = document.querySelectorAll('.lantern');

lanterns.forEach((lantern, i) => {
  gsap.to(lantern, {
    yPercent: -120,
    ease: 'none',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5,
    },
  });
});


// ========================================
// About Text Scroll Opacity
// ========================================

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