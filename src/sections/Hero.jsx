import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { profile } from '../data/profile'

const stack = ['React', 'Tailwind CSS', 'JavaScript', 'Java', 'Git']

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-night pb-20 pt-28 text-ivory lg:pb-28 lg:pt-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-electric/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-violet-soft/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-ivory/80">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-electric to-violet-soft"
                aria-hidden="true"
              />
              {profile.role} · Formatrice en informatique
            </p>

            <h1 className="font-display mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Bonjour, je suis{' '}
              <span className="bg-gradient-to-r from-electric-light to-violet-soft bg-clip-text text-transparent">
                {profile.fullName}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
              Étudiante en Licence 3 Informatique, passionnée par le développement web, le design
              et les technologies numériques.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/60">
              {profile.taglineSecondary}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-soft px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(59,130,246,0.9)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Découvrir mes projets
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-electric-light hover:bg-white/5"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Me contacter
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wider text-ivory/45">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-electric via-violet-soft to-electric p-1 shadow-[0_30px_70px_-30px_rgba(59,130,246,0.7)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-night-800">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait de ${profile.fullName}`}
                    className="aspect-[4/5] w-full object-cover"
                    width="640"
                    height="800"
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center">
                    <span className="font-display bg-gradient-to-r from-electric-light to-violet-soft bg-clip-text text-6xl font-bold text-transparent">
                      {profile.initials}
                    </span>
                    <span className="sr-only">Emplacement réservé à la photo de profil</span>
                  </div>
                )}
              </div>

              <span className="absolute -right-3 top-6 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-night/90 px-3 py-1.5 text-[11px] font-semibold text-ivory/85 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-soft" aria-hidden="true" />
                {profile.kicker}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
