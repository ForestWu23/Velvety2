import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const img = (f: string) => `${BASE}/assets/images/${f}`

const logos = [
  { src: img('HuagenLogo5x5.png'), alt: 'Huagen' },
  { src: img('ThriveLogo.png'),    alt: 'Thrive' },
  { src: img('MajorPetsLogo.png'), alt: 'Major Pets' },
  { src: img('HomeLinkLogo.jpg'),  alt: 'HomeLink' },
]

const REEL  = [...logos, ...logos, ...logos]
const SPEED = 0.6

export default function ClientsStrip() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const wrapRef   = useRef<HTMLDivElement>(null)
  const xRef      = useRef(0)
  const rafRef    = useRef(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    const wrap  = wrapRef.current
    if (!track || !wrap) return

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= SPEED
        const oneSetWidth = track.scrollWidth / 3
        if (Math.abs(xRef.current) >= oneSetWidth) xRef.current = 0
        track.style.transform = `translateX(${xRef.current}px)`
      }

      /* focal scaling: nearest to centre = biggest */
      const wrapRect = wrap.getBoundingClientRect()
      const centerX  = wrapRect.left + wrapRect.width / 2
      const halfZone = wrapRect.width * 0.28

      track.querySelectorAll<HTMLElement>('[data-logo-item]').forEach((item) => {
        const r      = item.getBoundingClientRect()
        const itemCX = r.left + r.width / 2
        const dist   = Math.abs(itemCX - centerX)
        const t      = Math.max(0, 1 - dist / halfZone)
        item.style.transform = `scale(${1 + t * 0.65})`
        item.style.opacity   = String(0.55 + t * 0.45)
      })

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 3,
        background: '#fff',
        padding: '64px 0',
        overflow: 'hidden',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: '#9ca3af',
          marginBottom: 40,
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        }}
      >
        Trusted by ambitious brands
      </p>

      {/* outer mask — soft fade on left + right edges */}
      <div
        ref={wrapRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 96,
            width: 'max-content',
            paddingBlock: 24,
            willChange: 'transform',
          }}
        >
          {REEL.map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              data-logo-item
              style={{
                flexShrink: 0,
                transformOrigin: 'center center',
                transition: 'transform 75ms, opacity 75ms',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: 64, width: 'auto', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
