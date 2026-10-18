import { Code2, Cpu, GraduationCap, Palette, Terminal } from 'lucide-react'

const icons = {
  code: Code2,
  terminal: Terminal,
  cpu: Cpu,
  palette: Palette,
  graduation: GraduationCap,
}

export function SkillCard({ category }) {
  const Icon = icons[category.icon] ?? Code2

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
