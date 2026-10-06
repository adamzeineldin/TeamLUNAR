# Team LUNAR

A responsive React JavaScript website styled with Tailwind CSS and built with Vite.

## Development

Requires Node.js 22.12+ (or 20.19+) and npm.

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to a static host. The relative asset base supports hosting at a domain root or in a subdirectory.

## Content

- `src/App.jsx`: LUNAR introduction, research overview, proposed three-year roadmap, contact section, and footer.
- `src/components/Header.jsx`: desktop and mobile navigation.
- `src/components/Moon.jsx`: scroll-driven SVG moon phases, with a static moon when reduced motion is preferred.
- `src/components/Team.jsx`: student and faculty mentor profiles.
- `src/data/team.js`: student names, roles, fields of study, factual biographies, and published email addresses.
- `public/`: existing team photos and university/program logos.
- `src/styles.css`: Tailwind import, theme, and shared accessibility styles.

Home, Timeline, and Contact Us link to sections on the home page; team profiles appear below the roadmap and are linked from the footer. The roadmap covers proposed Year 1–3 milestones through thesis completion rather than claiming calendar dates or completed milestones. General inquiries go to the existing team liaison, Adish Katwal.

Student biographies summarize supplied majors and roles without inventing personal interests or experience. Daniel Yu and Miguel Simeon use the general role Research Team Member because no officer role was supplied. Calendar dates and richer team-authored biographies can be added when available.
