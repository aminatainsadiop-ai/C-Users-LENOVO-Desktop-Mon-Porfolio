import { useState } from 'react'
import {
  CircleAlert as AlertCircle,
  CircleCheck as CheckCircle2,
  FileText,
  Info,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/profile'
import { SectionTitle } from '../components/SectionTitle'
import { Reveal } from '../components/Reveal'

const initialValues = { name: '', email: '', subject: '', message: '' }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Veuillez indiquer votre nom.'
  else if (values.name.trim().length < 2) errors.name = 'Le nom doit contenir au moins 2 caractères.'

  if (!values.email.trim()) errors.email = 'Veuillez indiquer votre adresse e-mail.'
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Cette adresse e-mail semble invalide.'

  if (!values.subject.trim()) errors.subject = 'Veuillez indiquer un sujet.'

  if (!values.message.trim()) errors.message = 'Veuillez écrire votre message.'
  else if (values.message.trim().length < 10)
    errors.message = 'Le message doit contenir au moins 10 caractères.'

  return errors
}

export function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState(null)

  const contactLinks = [
    {
      icon: Mail,
      label: 'E-mail',
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    profile.linkedin && {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Profil professionnel',
      href: profile.linkedin,
      external: true,
    },
    profile.github && {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'Code et projets',
      href: profile.github,
      external: true,
    },
    profile.whatsapp && {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: `+${profile.whatsapp}`,
      href: `https://wa.me/${profile.whatsapp}`,
      external: true,
    },
    {
      icon: FileText,
      label: 'CV',
      value: 'Télécharger mon CV',
      href: '/cv.pdf',
      external: false,
      download: true,
    },
  ].filter(Boolean)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => {
      if (!previous[name]) return previous
      const next = { ...previous }
      delete next[name]
      return next
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFeedback(null)

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      const firstInvalid = Object.keys(validationErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    if (profile.formEndpoint) {
      setStatus('sending')
      try {
        const response = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })
        if (!response.ok) throw new Error('Envoi impossible')
        setValues(initialValues)
        setFeedback({
          type: 'success',
          text: 'Merci ! Votre message a bien été envoyé. Je vous répondrai dès que possible.',
        })
      } catch {
        setFeedback({
          type: 'error',
          text: "L'envoi a échoué. Vous pouvez réessayer ou m'écrire directement par e-mail.",
        })
      } finally {
        setStatus('idle')
      }
      return
    }

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio] ${values.subject}`,
    )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`
    window.location.href = mailtoLink
    setFeedback({
      type: 'info',
      text: "Votre messagerie s'ouvre avec le message préparé. L'envoi automatique du formulaire sera activé dès qu'un service (type Formspree) sera renseigné dans src/data/profile.js.",
    })
  }

  const fieldClass = (hasError) =>
    `w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 transition focus:outline-none focus:ring-2 focus:ring-electric/40 ${
      hasError ? 'border-red-400/70' : 'border-white/15 hover:border-white/25'
    }`

  const feedbackStyles = {
    success: {
      className: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
      icon: CheckCircle2,
    },
    error: {
      className: 'border-red-400/30 bg-red-400/10 text-red-200',
      icon: AlertCircle,
    },
    info: {
      className: 'border-electric/30 bg-electric/10 text-electric-light',
      icon: Info,
    },
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-night py-20 text-ivory sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            tone="dark"
            title="Discutons de votre projet ou d'une opportunité"
            description="Une question, un stage, une collaboration ou simplement envie d'échanger : je vous réponds avec plaisir."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <ul className="grid gap-4">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    download={link.download ? 'CV_Aminata_Diop.pdf' : undefined}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-electric/50 hover:bg-white/10"
                  >
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet-soft text-white"
                      aria-hidden="true"
                    >
                      <link.icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ivory/50">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-ivory">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ivory/80">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    className={fieldClass(Boolean(errors.name))}
                    placeholder="Votre nom"
                  />
                  {errors.name ? (
                    <p id="error-name" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ivory/80">
                    Adresse e-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={fieldClass(Boolean(errors.email))}
                    placeholder="vous@exemple.com"
                  />
                  {errors.email ? (
                    <p id="error-email" role="alert" className="mt-1.5 text-xs text-red-300">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ivory/80">
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                  className={fieldClass(Boolean(errors.subject))}
                  placeholder="Stage, collaboration, question…"
                />
                {errors.subject ? (
                  <p id="error-subject" role="alert" className="mt-1.5 text-xs text-red-300">
                    {errors.subject}
                  </p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ivory/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  className={`${fieldClass(Boolean(errors.message))} resize-y`}
                  placeholder="Décrivez votre demande en quelques lignes."
                />
                {errors.message ? (
                  <p id="error-message" role="alert" className="mt-1.5 text-xs text-red-300">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet-soft px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(59,130,246,0.9)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
                <p className="text-xs text-ivory/50">
                  Vos informations restent confidentielles.
                </p>
              </div>

              {!profile.formEndpoint ? (
                <p className="mt-5 flex items-start gap-2 rounded-xl border border-electric/25 bg-electric/10 p-3 text-xs leading-relaxed text-electric-light">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Le formulaire n'est pas encore relié à un service d'envoi : il ouvrira votre
                  messagerie avec le message pré-rempli. Pour activer l'envoi automatique,
                  renseignez <code className="font-mono">formEndpoint</code> dans{' '}
                  <code className="font-mono">src/data/profile.js</code>.
                </p>
              ) : null}

              {feedback ? (
                <p
                  role="status"
                  className={`mt-5 flex items-start gap-2 rounded-xl border p-3 text-xs leading-relaxed ${
                    feedbackStyles[feedback.type].className
                  }`}
                >
                  {(() => {
                    const Icon = feedbackStyles[feedback.type].icon
                    return <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  })()}
                  {feedback.text}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
        
      </div>
    </section>
  )
}