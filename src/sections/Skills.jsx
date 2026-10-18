import { skillCategories } from '../data/skills'
import { SectionTitle } from '../components/SectionTitle'
import { SkillCard } from '../components/SkillCard'
import { Reveal } from '../components/Reveal'

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-24 border-y border-slate-200/70 bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Compétences"
            title="Des compétences concrètes, organisées par domaine"
            description="Les technologies que j'utilise au quotidien pour développer, concevoir et transmettre, sans chiffres artificiels."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 60} className="h-full">
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
