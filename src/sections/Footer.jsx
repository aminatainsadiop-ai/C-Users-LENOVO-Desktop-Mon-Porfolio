import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/profile'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { label: 'E-mail', href: `mailto:${profile.email}`, icon: Mail, show: true },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon, show: Boolean(profile.linkedin) },
  { label: 'GitHub', href: profile.github, icon: GithubIcon, show: Boolean(profile.github) },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night text-ivory">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-violet-soft font-display text-sm font-bold text-white"
              aria-hidden="true"
            >
              {profile.initials}
            </span>
            <span className="font-display text-lg font-semibold">{profile.fullName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
            {profile.role}. Développement web, design graphique et formation en informatique.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ivory/90">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-ivory/60 transition hover:text-electric-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-ivory/90">
            Me retrouver
          </h2>
          <ul className="mt-4 space-y-2.5">
            {socialLinks
              .filter((link) => link.show)
              .map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 text-sm text-ivory/60 transition hover:text-electric-light"
                  >
                    <link.icon className="h-4 w-4" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {currentYear} {profile.fullName}. Tous droits réservés.
          </p>
          <p>Conçu avec React et Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
