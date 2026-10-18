import {
  Cloud,
  ExternalLink,
  LayoutTemplate,
  Palette,
  ShoppingBag,
  User,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const icons = {
  user: User,
  layout: LayoutTemplate,
  cloud: Cloud,
  palette: Palette,
  shopping: ShoppingBag,
}

const statuses = {
  done: {
    label: 'Terminé',
    className: 'bg-emerald-50 text-emerald-700 ring-emerald-200/80',
  },
  progress: {
    label: 'En cours',
    className: 'bg-amber-50 text-amber-700 ring-amber-200/80',
  },
  academic: {
    label: 'Projet académique',
    className: 'bg-blue-50 text-blue-700 ring-blue-200/80',
  },
  toCustomize: {
    label: 'À personnaliser',
    className: 'bg-slate-100 text-slate-600 ring-slate-200/80',
  },
}

export function ProjectCard({ project }) {
  const Icon = icons[project.icon] ?? LayoutTemplate
  const status = statuses[project.status] ?? statuses.toCustomize
  const hasLinks = Boolean(project.demo || project.github)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_18px_40px_-18px_rgba(59,130,246,0.3)]">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-night via-night-700 to-electric/70">
        {project.image ? (
          <img
            src={project.image}
            alt={`Illustration du projet ${project.title}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center">
            <Icon
              className="h-12 w-12 text-white/80 transition duration-500 group-hover:scale-110"
              strokeWidth={1.3}
              aria-hidden="true"
            />
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ring-1 ${status.className}`}
        >
          {status.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-night">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-gradient-to-r from-electric/10 to-violet-soft/10 px-3 py-1 text-xs font-medium text-night/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4 text-sm font-semibold">
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-electric transition hover:text-violet-soft"
            >
              Voir la démo
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-night/70 transition hover:text-night"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
          ) : null}
          {!hasLinks ? (
            <span className="text-xs font-normal text-muted">
              Liens à venir — à configurer dans <code className="font-mono">src/data/projects.js</code>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  )
}
