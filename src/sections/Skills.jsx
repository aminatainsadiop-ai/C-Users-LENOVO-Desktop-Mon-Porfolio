import { CodeXml, Cpu, GraduationCap, Palette, Terminal } from 'lucide-react'
import { SectionTitle } from '../components/SectionTitle'
import { Reveal } from '../components/Reveal'

const categories = [
  {
    id: 'frontend',
    icon: 'code',
    title: 'Développement frontend',
    description:
      "Des interfaces soignées, responsives et accessibles, du premier maquettage jusqu'à la mise en ligne.",
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'outils',
    icon: 'terminal',
    title: 'Outils de développement',
    description: 'Un environnement de travail efficace et un suivi rigoureux des versions du code.',
    items: ['Git', 'GitHub', 'VS Code', 'npm', 'Vite'],
  },
  {
    id: 'programmation',
    icon: 'cpu',
    title: 'Programmation et informatique',
    description:
      'Des bases solides en programmation et en algorithmique acquises au cours de ma licence.',
    items: ['Java', 'Algorithmique'],
  },
  {
    id: 'design',
    icon: 'palette',
    title: 'Design graphique et communication digitale',
    description:
      "Une attention particulière à l'esthétique, à la lisibilité du message et à l'identité visuelle.",
    items: ['Design graphique', 'Communication digitale', 'Création de supports visuels'],
  },
  {
    id: 'formation',
    icon: 'graduation',
    title: 'Formation et accompagnement',
    description: 'Transmettre des compétences numériques avec pédagogie, patience et clarté.',
    items: ['Formation en informatique', 'Initiation des débutants', 'Support pédagogique'],
  },
]

const iconMap = {
  code: CodeXml,
  terminal: Terminal,
  cpu: Cpu,
  palette: Palette,
  graduation: GraduationCap,
}

function SkillCard({ category }) {
  const Icon = iconMap[category.icon] ?? CodeXml

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_18px_40px_-18px_rgba(59,130,246,0.3)]">
      <div className="flex items-center gap-4">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet-soft text-white shadow-[0_8px_20px_-8px_rgba(59,130,246,0.7)]"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <h3 className="font-display text-base font-semibold text-night">{category.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{category.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-slate-200 bg-ivory px-3 py-1 text-xs font-medium text-night/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export function Skills() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 border-y border-slate-200/70 bg-white py-20 sm:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Compétences"
            title="Des compétences concrètes, organisées par domaine"
            description="Les technologies que j'utilise au quotidien pour développer, concevoir et transmettre, sans chiffres artificiels."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.id} delay={index * 60} className="h-full">
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
