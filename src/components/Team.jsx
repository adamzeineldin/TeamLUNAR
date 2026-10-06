import { team } from '../data/team.js';

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="mx-auto max-w-7xl px-6 sm:px-10">
      <div className="border-t border-line py-12 sm:py-16">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted">Meet the team</p>
            <h2 id="team-title" className="text-3xl font-medium tracking-tight sm:text-4xl">Our team</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">Our team is part of the Gemstone Honors Program at the University of Maryland.</p>
        </div>
        <section aria-labelledby="mentor-title" className="mb-12 border-t border-line pt-10 sm:mb-16 sm:pt-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">Faculty mentor</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">University of Maryland<br />College Park</p>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <img src={`${import.meta.env.BASE_URL}images/team/eric-silk.webp`} alt="Dr. Eric Silk" width="160" height="180" loading="lazy" decoding="async" className="size-36 shrink-0 rounded-full border border-line object-cover object-[center_25%] sm:size-44" />
              <div>
                <h3 id="mentor-title" className="text-3xl font-medium tracking-tight sm:text-4xl">Dr. Eric Silk</h3>
                <p className="mt-3 text-sm font-medium">Ph.D. in Mechanical Engineering</p>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted">Dr. Silk mentors our team through the Gemstone Honors Program.</p>
              </div>
            </div>
          </div>
        </section>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((member) => (
            <li key={member.email} className="min-w-0 border-b border-line pb-6">
              <img src={`${import.meta.env.BASE_URL}${member.image}`} alt={member.name} width="640" height="800" loading="lazy" decoding="async" className="aspect-4/5 w-full rounded-md bg-surface object-cover object-[center_25%]" />
              <h3 className="mt-4 text-lg leading-snug font-medium tracking-tight">{member.name}</h3>
              <p className="mt-1 text-sm font-medium">{member.role}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{member.study}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
              <a href={`mailto:${member.email}`} className="mt-2 block min-h-11 max-w-full content-center text-sm text-accent underline decoration-line underline-offset-4 hover:decoration-accent [overflow-wrap:anywhere]">{member.email.split('@')[0]}@<wbr />{member.email.split('@')[1]}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
