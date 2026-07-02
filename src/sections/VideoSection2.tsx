import { useEffect, useRef, useState } from 'react'
import RainEffect from '@/components/RainEffect'
import WindowVideoCompare from '@/components/WindowVideoCompare'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const img  = (f: string) => `${BASE}/assets/images/${f}`
const vid  = (f: string) => `${BASE}/assets/videos/${f}`

/* Replace with real project assets when ready */

export default function VideoSection2() {
  const sectionRef = useRef<HTMLElement>(null)
  const [rainOn, setRainOn] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setRainOn(entry.isIntersecting),
      { rootMargin: '80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 3,
        height: '100vh',
        background: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}
      aria-label="Project before and after comparison"
    >
      <RainEffect
        fixed
        active={rainOn}
        citySrc={img('city-footer.jpg')}
        zIndex={2}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: 'clamp(400px, 96vw, 1680px)',
          height: 'clamp(320px, 88vh, 920px)',
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: '0 0 0 9999px #000',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          <WindowVideoCompare
            active={rainOn}
            left={{
              badge: 'Before',
              label: 'Project — Old',
              videoSrc: vid('eastside-before.mp4'),
              imageAlt: 'Project before redesign',
            }}
            right={{
              badge: 'After',
              label: 'Project — New',
              videoSrc: vid('eastside-after.mp4'),
              imageAlt: 'Project after redesign',
            }}
          />
        </div>
      </div>
    </section>
  )
}
