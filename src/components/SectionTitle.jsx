export function SectionTitle({ eyebrow, title, description, align = 'center', tone = 'light' }) {
  const centered = align === 'center'
  const onDark = tone === 'dark'

  return (
    <div
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <p
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
          onDark ? 'text-electric-light' : 'text-electric'
        }`}
      >
        <span className="h-px w-6 bg-gradient-to-r from-electric to-violet-soft" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`font-display max-w-3xl text-3xl font-bold leading-tight sm:text-4xl ${
          onDark ? 'text-ivory' : 'text-night'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-base leading-relaxed ${onDark ? 'text-ivory/60' : 'text-muted'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
