import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window === 'undefined' ||
    typeof IntersectionObserver === 'undefined' ||
    (typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (isVisible) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible])

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined

  return (
    <div ref={ref} style={style} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
