import { useEffect, useRef, useState } from 'react'

function shouldSkipAnimation() {
  if (typeof window === 'undefined') return true
  if (typeof IntersectionObserver === 'undefined') return true
  if (typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(shouldSkipAnimation)

  useEffect(() => {
    if (visible) return undefined

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
