import { SectionTitle } from '../components/SectionTitle'
import { Reveal } from '../components/Reveal'

const timeline = [
  {
    id: 'formatrice-ess',
    period: 'En cours',
    title: 'Formatrice',
    organisation: 'Incubateur ESS de Camberène',
    description:
      "Formation et accompagnement des porteurs de projets économiques et sociaux au sein de l'Incubateur ESS de Camberène.",
    isPlaceholder: false,
  },
  {
    id: 'stage-loum',
    period: 'Sept. - Déc. 2025',
    title: 'Stage - Community Manager',
    organisation: 'Merveilles de Casamance',
    description:
      'Stage en community management : gestion des réseaux sociaux, création de contenu et animation de communauté.',
    isPlaceholder: false,
  },
  {
    id: 'licence',
    period: 'En cours',
    title: 'Licence 3 Informatique',
    organisation: 'ESCOA',
    description:
      'Formation généraliste en informatique : programmation, développement web, bases de données et systèmes.',
    isPlaceholder: false,
  },
  {
    id: 'formation-precedente',
    period: '2022 - 2023',
    title: 'Baccalauréat - Mention Assez bien',
    organisation: 'Lycée Seydina Limamou Laye',
    description: 'Obtention du baccalauréat avec la mention Assez bien.',
    isPlaceholder: false,
  },
]

export function Parcours() {
  return (
    <section
      id="parcours"
      className="scroll-mt-24 border-y border-slate-200/70 bg-white py-20 sm:py-24"
    >
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Parcours"
            title="Formation, expériences et étapes clés"
            description="Une chronologie simple à mettre à jour au fil de mon parcours académique et professionnel."
          />
        </Reveal>

        <ol className="relative mt-14 ml-3 space-y-8 border-l border-slate-200 pl-8 sm:ml-4">
          {timeline.map((entry, index) => (
            <li key={entry.id} className="relative">
              <span
                className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-white ${
                  entry.isPlaceholder
                    ? 'bg-slate-300'
                    : 'bg-gradient-to-br from-electric to-violet-soft'
                }`}
                aria-hidden="true"
              />
              <Reveal delay={index * 70}>
                <div
                  className={`rounded-2xl p-6 ${
                    entry.isPlaceholder
                      ? 'border border-dashed border-slate-300 bg-slate-50/60'
                      : 'border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        entry.isPlaceholder
                          ? 'bg-slate-200/70 text-slate-500'
                          : 'bg-gradient-to-r from-electric/15 to-violet-soft/15 text-electric'
                      }`}
                    >
                      {entry.period}
                    </span>
                    {entry.isPlaceholder ? (
                      <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                        À compléter
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-display mt-3 text-lg font-semibold text-night">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted">{entry.organisation}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
