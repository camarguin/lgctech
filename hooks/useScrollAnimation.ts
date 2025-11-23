import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('animate-fade-in-up')
        observer.unobserve(element)
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options,
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return ref
}
