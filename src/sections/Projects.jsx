import { projects } from '../data/projects'
import { SectionTitle } from '../components/SectionTitle'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-24 bg-ivory py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Projets"
            title="Des réalisations à découvrir"
            description="Un aperçu de mes projets web, académiques et créatifs. Les projets à personnaliser sont signalés comme tels."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
