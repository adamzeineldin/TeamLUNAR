/*
 * Page behaviour — mobile menu, active nav link, scroll reveal, footer year.
 */
(function () {
  'use strict';

  const MOBILE_BREAKPOINT_PX = 800;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ── Mobile menu ── */
  function initMenu() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.getElementById('mobile-nav');
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    }

    toggle.addEventListener('click', () => setOpen(menu.hidden));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', (event) => {
      if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || menu.hidden) return;
      setOpen(false);
      toggle.focus();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > MOBILE_BREAKPOINT_PX && !menu.hidden) setOpen(false);
    });
  }

  /* ── Highlight the nav link for the section in view ── */
  function initScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    const links = Array.from(document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]'));

    const markActive = (id) => links.forEach((link) => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) markActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach((section) => spy.observe(section));
  }

  /* ── Scroll reveal ── */
  function initReveal() {
    if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

    targets.forEach((target) => {
      target.classList.add('reveal-pending');
      observer.observe(target);
    });
  }

  /* ── Footer year ── */
  function initYear() {
    const year = String(new Date().getFullYear());
    document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = year; });
  }

  initMenu();
  initScrollSpy();
  initReveal();
  initYear();
})();
