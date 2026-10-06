import { useEffect, useState } from 'react';

function shadowPath(progress) {
  const angle = progress * Math.PI * 2;
  const cosine = Math.cos(angle);
  const rightSide = progress <= 0.5;
  const radius = Math.max(Math.abs(cosine) * 124, 0.001);
  const outerSweep = rightSide ? 1 : 0;
  const innerSweep = cosine >= 0 ? 1 - outerSweep : outerSweep;

  return `M 160 36 A 124 124 0 0 ${outerSweep} 160 284 A ${radius} 124 0 0 ${innerSweep} 160 36 Z`;
}

export default function Moon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    function update() {
      frame = 0;
      const distance = Math.max(window.innerHeight * 0.65, 400);
      setProgress(reduceMotion.matches ? 0 : Math.min(Math.max(window.scrollY / distance, 0), 1));
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduceMotion.addEventListener('change', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      reduceMotion.removeEventListener('change', schedule);
    };
  }, []);

  return (
    <svg viewBox="0 0 320 320" aria-hidden="true" focusable="false" data-moon className="mx-auto w-60 text-ink sm:w-72 lg:w-full lg:max-w-96">
      <circle cx="160" cy="160" r="124" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
        <circle cx="115" cy="118" r="18" />
        <circle cx="190" cy="197" r="25" />
        <circle cx="197" cy="103" r="8" />
      </g>
      <path data-moon-shadow d={shadowPath(progress)} fill="currentColor" />
    </svg>
  );
}
