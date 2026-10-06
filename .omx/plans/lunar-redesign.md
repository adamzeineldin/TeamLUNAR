# LUNAR visual simplification

Preserve the existing React/Tailwind stack, published contact details, research overview, and working desktop/mobile navigation.

1. Remove the question headline, focus panel, decorative tags, and team CTA from the hero. Replace with LUNAR, a short introduction, and a native SVG moon.
2. Tie the moon phase to scroll position using a passive listener and requestAnimationFrame. Honor reduced-motion preferences and clean up listeners.
3. Replace the generic four-stage timeline with proposed Year 1–3 phases, specific milestones, and thesis completion. Avoid unsupported calendar dates or completion claims.
4. Add brief factual biographies and explicit roles to all student and faculty profiles. Preserve original data.
5. Validate build, lint, navigation, mobile layout, accessibility, moon scroll behavior, and reduced-motion behavior; inspect screenshots and persist visual verdicts before further visual edits.

Existing behavior is covered by the previous migration's browser checks at 320–1440px, including navigation, menu keyboard/outside/resize handling, preserved emails and assets, and accessibility.
