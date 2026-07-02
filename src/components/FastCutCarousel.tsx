import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

/**
 * Cinematic 3-act hold times (seconds) for 18 slides.
 *   Act I  — kinetic opener: rapid flashes
 *   Act II — mid breath: slightly slower, building
 *   Act III — product finale: deliberate showcase holds
 */
const CINEMATIC_HOLDS_18: readonly number[] = [
  0.09, 0.09, 0.10, 0.11, 0.12, 0.13,
  0.20, 0.24, 0.28, 0.32, 0.36, 0.40,
  0.46, 0.52, 0.58, 0.66, 0.76, 0.92,
]

function buildHolds(count: number): number[] {
  if (count === CINEMATIC_HOLDS_18.length) return [...CINEMATIC_HOLDS_18]
  const min = 0.09
  const max = 0.92
  return Array.from({ length: count }, (_, i) => {
    const t = count <= 1 ? 0 : i / (count - 1)
    const eased = t * t * (3 - 2 * t)
    return min + (max - min) * eased
  })
}

function fadeForHold(hold: number, index: number, total: number) {
  const act3 = index >= Math.floor(total * 2 / 3)
  const cap  = act3 ? 0.072 : 0.048
  const floor = index < Math.floor(total / 3) ? 0.022 : 0.032
  return Math.min(cap, Math.max(floor, hold * 0.16))
}

function crossfadeEase(index: number, total: number) {
  return index >= Math.floor((total * 2) / 3) ? 'power1.inOut' : 'none'
}

type Props = {
  slides: string[]
  alt?: string
  /** When false, animation pauses; when true again, restarts from first slide */
  active?: boolean
}

export default function FastCutCarousel({ slides, alt = 'VelvetY showcase', active = true }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  const [ready, setReady]       = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduced || slides.length === 0) return

    let alive = true
    Promise.all(
      slides.map(
        src =>
          new Promise<void>(resolve => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => resolve()
            img.src = src
          }),
      ),
    ).then(() => {
      if (alive) setReady(true)
    })

    return () => {
      alive = false
      setReady(false)
    }
  }, [slides, reduced])

  useEffect(() => {
    if (reduced || !ready || !wrapRef.current || !active) return

    const layers = Array.from(
      wrapRef.current.querySelectorAll<HTMLElement>('[data-fastcut-slide]'),
    )
    const n = layers.length
    if (n === 0) return

    const holds = buildHolds(n)
    gsap.set(layers, { opacity: 0, zIndex: 1 })
    gsap.set(layers[0], { opacity: 1, zIndex: 2 })

    const tl = gsap.timeline({ repeat: -1 })
    let cursor = 0

    for (let i = 1; i < n; i++) {
      const hold = holds[i - 1]
      const fade = fadeForHold(hold, i - 1, n)
      const ease = crossfadeEase(i - 1, n)
      cursor += hold
      const at = cursor - fade

      tl.to(layers[i - 1], { opacity: 0, duration: fade, ease, zIndex: 1 }, at)
      tl.to(layers[i],     { opacity: 1, duration: fade, ease, zIndex: 2 }, at)
    }

    const lastHold = holds[n - 1]
    const lastFade = fadeForHold(lastHold, n - 1, n)
    const lastEase = crossfadeEase(n - 1, n)
    cursor += lastHold
    const loopAt = cursor - lastFade

    tl.to(layers[n - 1], { opacity: 0, duration: lastFade, ease: lastEase, zIndex: 1 }, loopAt)
    tl.to(layers[0],     { opacity: 1, duration: lastFade, ease: lastEase, zIndex: 2 }, loopAt)

    return () => {
      tl.kill()
    }
  }, [ready, reduced, slides, active])

  if (slides.length === 0) return null

  if (reduced) {
    return (
      <img
        src={slides[0]}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    )
  }

  return (
    <div ref={wrapRef} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#111' }}>
      {slides.map((src, i) => (
        <img
          key={src}
          data-fastcut-slide
          src={src}
          alt=""
          decoding="sync"
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 2 : 1,
            willChange: 'opacity',
          }}
        />
      ))}
    </div>
  )
}
