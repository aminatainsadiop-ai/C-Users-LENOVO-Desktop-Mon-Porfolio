import { GraduationCap, Laptop, Palette, Users } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionTitle } from '../components/SectionTitle'
import { Reveal } from '../components/Reveal'

const icons = {
  graduation: GraduationCap,
  laptop: Laptop,
  users: Users,
  palette: Palette,
}

export function About() {
  return (
    <section id="apropos" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="À propos"
            title="Une étudiante curieuse, entre code, design et transmission"
            description="Un profil qui associe la rigueur du développement web, le souci de l'esthétique et le goût de la pédagogie."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal className="space-y-5">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid gap-4">
              {profile.about.highlights.map((highlight) => {
                const Icon = icons[highlight.icon] ?? Laptop
                return (
                  <li
                    key={highlight.label}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                  >
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric/15 to-violet-soft/15 text-electric"
                      aria-hidden="true"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {highlight.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-night">{highlight.value}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
