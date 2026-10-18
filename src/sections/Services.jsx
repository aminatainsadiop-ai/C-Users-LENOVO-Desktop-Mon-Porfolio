import { GraduationCap, LayoutTemplate, Monitor, Palette } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { Reveal } from '../components/Reveal'

const services = [
  {
    id: 'sites-web',
    icon: 'monitor',
    title: 'Développement de sites web',
    description:
      "Création de sites vitrines et d'applications web avec HTML, CSS, JavaScript et React, du design à la mise en ligne.",
  },
  {
    id: 'interfaces',
    icon: 'layout',
    title: "Création d'interfaces utilisateur",
    description:
      "Conception d'interfaces claires, responsives et accessibles, centrées sur l'expérience de l'utilisateur.",
  },
  {
    id: 'formation',
    icon: 'graduation',
    title: 'Initiation et formation en informatique',
    description:
      'Accompagnement des débutants : notions de base, outils numériques et premiers pas en programmation.',
  },
  {
    id: 'design',
    icon: 'palette',
    title: 'Design graphique et communication digitale',
    description:
      "Création de supports visuels cohérents pour renforcer une identité et porter un message clair.",
  },
]

const iconMap = {
  monitor: Monitor,
  layout: LayoutTemplate,
  graduation: GraduationCap,
  palette: Palette,
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Domaines d'intérêt"
            title="Les domaines dans lesquels je peux contribuer"
            description="Ces domaines reflètent mes compétences et mes centres d'intérêt. N'hésitez pas à me contacter pour en discuter."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Monitor
            return (
              <Reveal key={service.id} delay={index * 60} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_18px_40px_-18px_rgba(59,130,246,0.3)]">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric/15 to-violet-soft/15 text-electric"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display mt-4 text-base font-semibold text-night">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
