import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'projets', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-night/90 shadow-[0_10px_30px_-15px_rgba(11,18,32,0.8)] backdrop-blur-md'
          : 'border-transparent bg-night/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20" aria-label="Navigation principale">
        <a href="#accueil" onClick={closeMenu} className="flex items-center gap-3">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-electric to-violet-soft font-display text-sm font-bold text-white"
            aria-hidden="true"
          >
            {profile.initials}
          </span>
          <span className="font-display text-base font-semibold text-ivory">{profile.fullName}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                onClick={closeMenu}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active === link.id
                    ? 'text-electric-light'
                    : 'text-ivory/70 hover:bg-white/5 hover:text-ivory'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.cvUrl ? (
            <li className="ml-2">
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-soft px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                CV
              </a>
            </li>
          ) : null}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-ivory transition hover:bg-white/10 md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-white/10 bg-night/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'invisible max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={closeMenu}
                aria-current={active === link.id ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  active === link.id
                    ? 'bg-white/5 text-electric-light'
                    : 'text-ivory/75 hover:bg-white/5 hover:text-ivory'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {profile.cvUrl ? (
            <li className="mt-2">
              <a
                href={profile.cvUrl}
                download
                onClick={closeMenu}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-soft px-4 py-2 text-sm font-semibold text-white"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Télécharger mon CV
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  )
}
