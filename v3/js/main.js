(() => {
  'use strict';

  // ---------- Nav scroll state ----------
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile drawer ----------
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.mobile-drawer-close');
  const openDrawer = () => {
    drawer && drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    window.bhanixsTrack && window.bhanixsTrack('nav_mobile_open');
  };
  const closeDrawer = () => {
    drawer && drawer.classList.remove('open');
    document.body.style.overflow = '';
  };
  toggle && toggle.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawer && drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeDrawer));

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // NOTE: click/section/scroll-depth/form-submit *tracking* lives in
  // js/analytics.js (generic .btn/.link-teal/nav/[data-case-slug]/
  // [data-filter] listeners + #contact-form submit tracking) so it
  // isn't duplicated here.

  // ---------- Contact form (simulated submit — no backend wired yet) ----------
  const form = document.querySelector('#contact-form');
  const toast = document.querySelector('.toast');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
        form.reset();
        if (toast) {
          toast.textContent = 'Message received — a principal reads every message and replies within 48 hours.';
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 4200);
        }
      }, 700);
    });
  }
})();
