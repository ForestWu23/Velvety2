import { useRef, useEffect, useState } from 'react'

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: '0px', ...options },
    )
    io.observe(el)
    return () => io.disconnect()
    // options intentionally stable — callers pass inline literals rarely
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView }
}
