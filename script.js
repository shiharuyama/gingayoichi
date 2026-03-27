// ========================================
// GSAP
// ========================================

gsap.registerPlugin(ScrollTrigger);

// ========================================
// Events Card Stagger
// ========================================

gsap.from('.stage-card', {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.events__stage-cards',
    start: 'top 80%',
  },
  onComplete: () => {
    document.querySelectorAll('.stage-card').forEach(el => {
      el.style.transform = '';
      el.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  }
});


// ========================================
// About Text Scroll Opacity
// ========================================

const aboutLines = document.querySelectorAll('.about__line');

aboutLines.forEach((line) => {
  gsap.to(line, {
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: line,
      start: 'top 95%',
      end: 'top 60%',
      scrub: 0.2,
    },
  });
});


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
// Cloud
// ========================================

(function () {
  const sections = document.querySelectorAll('.events, .map, .schedule, .shops');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cloud = entry.target.querySelector('.cloud');
          if (!cloud) return;
          cloud.classList.add('cloud--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

})();


// ========================================
// Lantern
// ========================================

(function () {
  const SVG = `<svg viewBox="0 0 62 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7754 0C47.7714 0 61.5494 2.48163 61.5508 5.54297C61.5508 5.96124 61.2921 6.36701 60.8047 6.75879C61.2679 7.28675 61.5507 7.97682 61.5508 8.73438V87.2236C61.5508 88.8805 60.2076 90.2236 58.5508 90.2236H3C1.34315 90.2236 0 88.8805 0 87.2236V8.73438C5.74166e-05 7.9771 0.282188 7.28668 0.745117 6.75879C0.258159 6.36719 0 5.96103 0 5.54297C0.00133332 2.48164 13.7794 1.03979e-05 30.7754 0Z" fill="url(#lantern-grad)"/>
<ellipse cx="30.3932" cy="86.9743" rx="30.3932" ry="10.1311" fill="#FFFED8" opacity="0.9"/>
<defs>
<linearGradient id="lantern-grad" x1="30.7754" y1="0" x2="30.7754" y2="90.2236" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8000"/>
<stop offset="1" stop-color="#F9F9B8"/>
</linearGradient>
</defs>
</svg>`;

  const sections = document.querySelectorAll('.events, .map, .schedule, .shops');

  function launchLantern(ambientLayer, sectionHeight) {
    const el = document.createElement('div');
    el.classList.add('lantern');
    el.innerHTML = SVG;
    el.style.left = (5 + Math.random() * 90) + '%';
    el.style.top = sectionHeight + 'px';
    ambientLayer.appendChild(el);

    const anima = el.animate(
      [
        { transform: 'translateY(0) translateX(0)', opacity: 0 },
        { transform: 'translateY(-160px) translateX(10px)', opacity: 0.7 },
        { transform: 'translateY(-330px) translateX(-7px)', opacity: 0.4 },
        { transform: 'translateY(-490px) translateX(9px)', opacity: 0.6 },
        { transform: 'translateY(-585px) translateX(-3px)', opacity: 0.9 },
        { transform: 'translateY(-650px) translateX(-1px)', opacity: 0 },
      ],
      {
        duration: 18000,
        easing: 'linear',
        fill: 'forwards',
      }
    );

    anima.onfinish = () => {
      el.remove();
      launchLantern(ambientLayer, sectionHeight);
    };
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ambientLayer = entry.target.querySelector('.ambient-layer');
          if (!ambientLayer) return;
          const sectionHeight = entry.target.offsetHeight + 80;
          launchLantern(ambientLayer, sectionHeight);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: '100px 0px 0px 0px' }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

})();