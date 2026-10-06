import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash || '#home');
  const header = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    function updateHash() {
      setActive(window.location.hash || '#home');
      setOpen(false);
    }
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function closeOutside(event) {
      if (!header.current?.contains(event.target)) setOpen(false);
    }
    const desktop = window.matchMedia('(min-width: 640px)');
    function closeOnDesktop(event) {
      if (event.matches) setOpen(false);
    }
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  function navLinks(mobile = false) {
    return links.map(({ label, href }) => (
      <a
        key={href}
        href={href}
        aria-current={active === href || (href === '#home' && active === '#team') ? 'location' : undefined}
        onClick={() => { setActive(href); setOpen(false); }}
        className={mobile
          ? 'flex min-h-12 items-center border-t border-line py-3 text-lg hover:text-accent aria-[current]:text-accent'
          : 'flex min-h-11 items-center text-sm underline-offset-8 hover:text-accent aria-[current]:underline'}
      >
        {label}
      </a>
    ));
  }

  return (
    <header ref={header} className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:h-22 sm:px-10">
        <a href="#home" onClick={() => setOpen(false)} aria-label="LUNAR home" className="py-3 text-2xl font-bold tracking-[-0.055em]">LUNAR</a>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 sm:flex">{navLinks()}</nav>
        <button
          ref={toggle}
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center sm:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="absolute inset-x-0 border-b border-line bg-paper px-6 pb-4 sm:hidden">
        {navLinks(true)}
      </nav>
    </header>
  );
}
