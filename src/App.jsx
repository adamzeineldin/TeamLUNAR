import Header from './components/Header.jsx';
import Team from './components/Team.jsx';
import Moon from './components/Moon.jsx';
import { team } from './data/team.js';

const questions = [
  { title: 'Transport options', question: 'Which methods could carry cargo across the Moon’s southern region?', detail: 'We’re comparing options for moving supplies and equipment.' },
  { title: 'Shadows and terrain', question: 'How do shadows and uneven ground affect cargo transport?', detail: 'We’re looking at the conditions a transport system would need to handle.' },
  { title: 'Practical limits', question: 'How much cargo can each option move, and what does it require?', detail: 'We’ll compare carrying capacity, power needs, and reliability.' },
];

const stages = [
  {
    year: 'Year 1',
    title: 'Background research',
    detail: 'Study the southern region and identify possible ways to transport cargo.',
    milestones: ['Review lunar cargo transport research', 'Identify terrain and lighting constraints', 'Set comparison criteria and write a research proposal'],
    outcome: 'Research proposal',
  },
  {
    year: 'Year 2',
    title: 'Compare and test',
    detail: 'Evaluate transport options under conditions relevant to the southern region.',
    milestones: ['Select options for further study', 'Develop tests for uneven and shadowed terrain', 'Collect and compare performance data'],
    outcome: 'Test results and comparisons',
  },
  {
    year: 'Year 3',
    title: 'Analysis and thesis',
    detail: 'Review the results and complete our Gemstone thesis.',
    milestones: ['Assess each option’s strengths and limitations', 'Document findings and remaining questions', 'Write, present, and submit the team thesis'],
    outcome: 'Completed thesis',
  },
];

const container = 'mx-auto max-w-7xl px-6 sm:px-10';
const eyebrow = 'text-xs font-medium uppercase tracking-widest text-muted';

export default function App() {
  const liaison = team.find((member) => member.role === 'Team Liaison');

  return (
    <>
      <a href="#main" className="fixed top-3 left-4 z-50 -translate-y-24 rounded bg-ink px-5 py-3 text-paper focus:translate-y-0">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section id="home" aria-labelledby="home-title" className={container}>
          <div className="grid gap-8 pt-12 pb-14 sm:py-20 lg:min-h-150 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
            <div>
              <h1 id="home-title" className="text-[clamp(5rem,13vw,10rem)] leading-none font-medium tracking-[-0.075em]">LUNAR</h1>
              <p className="mt-6 max-w-xl font-serif text-xl leading-relaxed sm:mt-8 sm:text-2xl">We’re a UMD Gemstone research team investigating cargo transport options for the Moon’s southern region, where shadows and rough terrain make moving supplies difficult.</p>
            </div>
            <Moon />
          </div>
          <div className="border-t border-line py-12 sm:py-16">
            <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <div>
                <p className={eyebrow}>Research overview</p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Cargo transport in the Moon’s southern region</h2>
              </div>
              <div className="space-y-5 text-base leading-8 sm:text-lg">
                <p>We’re investigating cargo transport options for the Moon’s southern region. We’ll compare how much cargo each option can carry, how much power it needs, and how it handles rough ground and shadows.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-7 md:grid-cols-2 md:gap-14">
              <article className="border-t border-line pt-6">
                <h3 className="text-xl font-medium tracking-tight">Why it matters</h3>
                <p className="mt-3 leading-7 text-muted">Lunar missions need to move equipment and supplies beyond their landing sites. Transport that works in shadowed terrain could help missions reach and work in more of the southern region.</p>
              </article>
              <article className="border-t border-line pt-6">
                <h3 className="text-xl font-medium tracking-tight">Our approach</h3>
                <p className="mt-3 leading-7 text-muted">We’re comparing transport options against the conditions of this region. Shadows and terrain are part of that comparison, alongside carrying capacity, power needs, and reliability.</p>
              </article>
            </div>
          </div>
          <div className="border-t border-line py-12 sm:py-16">
            <p className={eyebrow}>Guiding questions</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">What we’re investigating</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
              {questions.map((item, index) => (
                <article key={item.title} className="border-t border-line pt-6">
                  <p className="mb-6 font-serif text-3xl text-accent">0{index + 1}</p>
                  <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-7">{item.question}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" aria-labelledby="timeline-title" className={container}>
          <div className="border-t border-line py-12 sm:py-16">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className={eyebrow}>Timeline</p><h2 id="timeline-title" className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Our three-year research plan</h2></div>
              <p className="max-w-sm text-sm leading-7 text-muted">A proposed schedule for our Gemstone project. We’ll update it as the research progresses.</p>
            </div>
            <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-0">
              {stages.map((stage) => (
                <li key={stage.year} className="relative border-l border-line pl-7 lg:border-t lg:border-l-0 lg:pt-8 lg:pr-10 lg:pl-0">
                  <span aria-hidden="true" className="absolute top-0 -left-1.5 size-3 rounded-full border-2 border-ink bg-paper lg:-top-1.5 lg:left-0" />
                  <p className="text-sm font-medium text-accent">{stage.year}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{stage.detail}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6">
                    {stage.milestones.map((milestone) => <li key={milestone} className="flex gap-3"><span aria-hidden="true" className="text-accent">•</span><span>{milestone}</span></li>)}
                  </ul>
                  <p className="mt-6 border-t border-line pt-4 text-sm font-medium">{stage.outcome}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Team />

        <section id="contact" aria-labelledby="contact-title" className={container}>
          <div className="grid gap-8 border-t border-line py-12 sm:py-16 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div><p className={eyebrow}>Contact Us</p><h2 id="contact-title" className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">Contact the team</h2><p className="mt-5 max-w-md leading-7 text-muted">For questions about our research or potential collaboration, email our team liaison, Adish Katwal.</p></div>
            <div className="min-w-0 rounded-lg bg-surface p-6 sm:p-8">
              <p className={eyebrow}>Project inquiries</p>
              <h3 className="mt-4 text-xl font-medium">{liaison.name}</h3>
              <p className="mt-1 text-sm text-muted">{liaison.role} · Team LUNAR</p>
              <a href={`mailto:${liaison.email}`} className="mt-4 inline-flex min-h-12 max-w-full items-center gap-4 text-lg text-accent underline decoration-line underline-offset-4 hover:decoration-accent [overflow-wrap:anywhere]">{liaison.email}<span aria-hidden="true">↗</span></a>
              <p className="mt-5 border-t border-line pt-5 text-sm leading-7 text-muted">Gemstone Honors Program<br />University of Maryland<br />College Park, Maryland</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={container}>
        <div className="flex flex-col justify-between gap-8 border-t border-line py-8 sm:flex-row sm:items-center">
          <div><a href="#home" className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight">LUNAR</a><p className="mt-1 text-xs text-muted">© {new Date().getFullYear()} Team LUNAR</p></div>
          <div className="flex items-center gap-4">
            <a href="https://umd.edu/" aria-label="University of Maryland" className="shrink-0"><img src={`${import.meta.env.BASE_URL}logo-umd.png`} alt="University of Maryland seal" width="56" height="56" loading="lazy" className="size-14 object-contain" /></a>
            <a href="https://gemstone.umd.edu/" className="inline-flex min-h-11 items-center text-sm text-muted underline-offset-4 hover:underline">Gemstone Honors Program <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
          <nav aria-label="Footer navigation" className="flex gap-6 text-sm"><a href="#team" className="inline-flex min-h-11 items-center hover:text-accent">The team</a><a href="#home" className="inline-flex min-h-11 items-center hover:text-accent">Back to top <span aria-hidden="true" className="ml-2">↑</span></a></nav>
        </div>
      </footer>
    </>
  );
}
