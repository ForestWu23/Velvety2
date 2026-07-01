import { useEffect, useRef, useState } from 'react'

const BASE   = import.meta.env.BASE_URL.replace(/\/$/, '')
const imgSrc = (f: string) => `${BASE}/assets/images/${f}`

const logos = [
  { src: imgSrc('HuagenLogo5x5.png'), alt: 'Huagen'     },
  { src: imgSrc('ThriveLogo.png'),    alt: 'Thrive'     },
  { src: imgSrc('MajorPetsLogo.png'), alt: 'Major Pets' },
  { src: imgSrc('HomeLinkLogo.jpg'),  alt: 'HomeLink'   },
]

const FF       = 'Inter, ui-sans-serif, system-ui, sans-serif'
const LINE     = '1px solid rgba(0,0,0,0.09)'
const N        = logos.length
const SLOT_W   = 180
const SLOT_GAP = 64
const STEP     = SLOT_W + SLOT_GAP

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

/* ── Brand carousel ───────────────────────────────────────────────── */
function BrandCarousel() {
  const [index, setIndex]       = useState(0)
  const [dragX, setDragX]       = useState(0)
  const [dragging, setDragging] = useState(false)

  const viewportRef = useRef<HTMLDivElement>(null)
  const indexRef  = useRef(0)
  const dragStart = useRef({ x: 0, trackX: 0, pointerId: -1 })
  const movedRef  = useRef(0)
  const idleRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  const trackX = (i: number) => -i * STEP

  const goTo = (i: number) => {
    const next = clamp(i, 0, N - 1)
    indexRef.current = next
    setIndex(next)
    setDragX(0)
  }

  const clearIdle = () => { if (idleRef.current) clearTimeout(idleRef.current) }
  const armIdle = () => {
    clearIdle()
    idleRef.current = setTimeout(() => {
      goTo((indexRef.current + 1) % N)
      armIdle()
    }, 5000)
  }

  useEffect(() => { armIdle(); return clearIdle }, [])

  /* pointer on viewport */
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    clearIdle()
    setDragging(true)
    movedRef.current = 0
    dragStart.current = { x: e.clientX, trackX: trackX(indexRef.current), pointerId: e.pointerId }
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    const dx = e.clientX - dragStart.current.x
    movedRef.current = Math.max(movedRef.current, Math.abs(dx))
    const min = trackX(N - 1)
    setDragX(clamp(dragStart.current.trackX + dx, min, 0) - trackX(indexRef.current))
  }

  const onUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setDragging(false)
    try { e.currentTarget.releasePointerCapture(e.pointerId) } catch { /* noop */ }

    if (movedRef.current < 5) {
      const rect = e.currentTarget.getBoundingClientRect()
      const localX = e.clientX - rect.left
      const currentTx = trackX(indexRef.current) + dragX
      const viewportCenter = rect.width / 2

      let nearest = 0
      let nearestDist = Number.POSITIVE_INFINITY
      for (let i = 0; i < N; i++) {
        const logoCenter = viewportCenter + i * STEP + currentTx
        const d = Math.abs(localX - logoCenter)
        if (d < nearestDist) {
          nearestDist = d
          nearest = i
        }
      }

      // click on logo zone -> jump to exact logo
      if (nearestDist <= SLOT_W * 0.5) {
        goTo(nearest)
      } else {
        goTo(e.clientX < rect.left + rect.width / 2 ? indexRef.current - 1 : indexRef.current + 1)
      }
    } else {
      const total = trackX(indexRef.current) + dragX
      goTo(Math.round(-total / STEP))
    }
    armIdle()
  }

  const tx = trackX(index) + dragX

  return (
    <div style={{ padding: '24px 0 32px' }}>
      <div
        ref={viewportRef}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        style={{
          position:    'relative',
          overflow:    'hidden',
          height:      110,
          cursor:      dragging ? 'grabbing' : 'grab',
          touchAction: 'none',
          userSelect:  'none',
        }}
      >
        <div
          style={{
            display:     'flex',
            alignItems:  'center',
            height:      '100%',
            gap:         SLOT_GAP,
            paddingLeft: `calc(50% - ${SLOT_W / 2}px)`,
            paddingRight:`calc(50% - ${SLOT_W / 2}px)`,
            transform:   `translateX(${tx}px)`,
            transition:  dragging ? 'none' : 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
            willChange:  'transform',
            pointerEvents: 'auto',
          }}
        >
          {logos.map((logo, i) => {
            const dist = Math.abs(i - index)
            const t    = clamp(dist, 0, 2) / 2
            return (
              <button
                key={logo.alt}
                type="button"
                onClick={() => {
                  clearIdle()
                  goTo(i)
                  armIdle()
                }}
                style={{
                  flexShrink:     0,
                  width:          SLOT_W,
                  height:         '100%',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  background:     'transparent',
                  border:         'none',
                  padding:        0,
                  cursor:         'pointer',
                  transform:      `scale(${1 - t * 0.2})`,
                  opacity:        1 - t * 0.55,
                  filter:         `grayscale(${t * 55}%)`,
                  transition:     dragging ? 'none' : 'transform 0.4s, opacity 0.4s, filter 0.4s',
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  style={{ maxHeight: 60, maxWidth: '90%', objectFit: 'contain', display: 'block' }}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em', color: '#374151', fontFamily: FF }}>
          {logos[index].alt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {logos.map((logo, i) => (
            <button
              key={logo.alt}
              type="button"
              aria-label={`Show ${logo.alt}`}
              onClick={() => { clearIdle(); goTo(i); armIdle() }}
              style={{
                width: i === index ? 22 : 7, height: 7, borderRadius: 4,
                border: 'none', padding: 0, cursor: 'pointer',
                background: i === index ? '#08090b' : '#d1d5db',
                transition: 'width 0.25s, background 0.25s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Services + section ───────────────────────────────────────────── */
const services = [
  { num: '01', title: 'Design', desc: "Most design looks like most other design. Safe and predictable. We ask uncomfortable questions that dig into the real problems — and build identities that earn attention.", items: ['Web Design', 'UX Design', 'Branding', 'Graphic Design'] },
  { num: '02', title: 'Development', desc: 'The right technology depends on the problem. We build fast, scalable websites and Shopify stores — all here in Seattle, by the people who manage every aspect of your project.', items: ['Web Development', 'Shopify Stores', 'UI Systems', 'Web Support'] },
  { num: '03', title: 'Strategy', desc: "Creative without data is guesswork. Data without creativity is bland. We'd rather do the harder thing and build campaigns that look stunning and perform. That's where the results are.", items: ['Brand Strategy', 'Social Media', 'SEO', 'GEO'] },
]

export default function ClientsStrip() {
  const PAD_X = 'clamp(24px, 4.5vw, 72px)'
  const PAD_T = 'clamp(48px, 6vw, 80px)'

  return (
    <section style={{ position: 'relative', zIndex: 3, minHeight: '100vh', background: '#f5f5f3', display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: FF, color: '#08090b' }}>
      <div style={{ flex: '1 0 0', padding: `${PAD_T} ${PAD_X} 0`, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: LINE, borderLeft: LINE }}>
          <div style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(24px,3vw,40px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#08090b' }} />
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#9ca3af', margin: 0 }}>Studio</p>
            </div>
            <h2 style={{ margin: 0, fontSize: 'clamp(24px,3vw,44px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.04em' }}>
              We are a Seattle studio with a shared obsession for brands that matter.
            </h2>
          </div>
          <div style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p style={{ margin: '0 0 32px', fontSize: 'clamp(13px,1.05vw,15px)', lineHeight: 1.74, color: '#4b5563', maxWidth: 440 }}>
              The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets.
            </p>
            <a href="#" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#08090b', textDecoration: 'none' }}>Our Work ↗</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderLeft: LINE, flex: '1 0 0' }}>
          {services.map(s => (
            <div key={s.num} style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(22px,2.5vw,36px)' }}>
              <span style={{ display: 'block', fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: '#c8c8c8', marginBottom: 10 }}>{s.num}</span>
              <h3 style={{ margin: '0 0 12px', fontSize: 'clamp(15px,1.4vw,19px)', fontWeight: 500 }}>{s.title}</h3>
              <p style={{ margin: '0 0 18px', fontSize: 'clamp(12px,0.88vw,13px)', lineHeight: 1.70, color: '#6b7280' }}>{s.desc}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.items.map(item => (
                  <li key={item} style={{ fontSize: 'clamp(12px,0.92vw,14px)', color: '#374151', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#d1d5db' }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p style={{ textAlign: 'center', fontSize: 10, fontWeight: 600, letterSpacing: '0.30em', textTransform: 'uppercase', color: '#bbb', margin: '24px 0 0', fontFamily: FF }}>
          Trusted by ambitious brands
        </p>
        <BrandCarousel />
      </div>
    </section>
  )
}
