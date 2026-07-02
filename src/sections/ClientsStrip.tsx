import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const BASE   = import.meta.env.BASE_URL.replace(/\/$/, '')
const imgSrc = (f: string) => `${BASE}/assets/images/${f}`

/* ── Brand logo marquee (ported from velvety Clients.tsx) ─────── */
const LOGOS = [
  { src: imgSrc('HuagenLogo5x5.png'), alt: 'Huagen'     },
  { src: imgSrc('ThriveLogo.png'),    alt: 'Thrive'     },
  { src: imgSrc('MajorPetsLogo.png'), alt: 'Major Pets' },
  { src: imgSrc('HomeLinkLogo.jpg'),  alt: 'HomeLink'   },
]
const LOGO_REEL = [...LOGOS, ...LOGOS, ...LOGOS]
const MARQUEE_SPEED = 0.6

function BrandCarousel() {
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
        xRef.current -= MARQUEE_SPEED
        const oneSetWidth = track.scrollWidth / 3
        if (Math.abs(xRef.current) >= oneSetWidth) xRef.current = 0
        track.style.transform = `translateX(${xRef.current}px)`
      }

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
    <div style={{ padding: '24px 0 40px' }}>
      <div
        ref={wrapRef}
        className="mask-fade-edges"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'center',
            gap: 96,
            paddingBlock: 24,
            willChange: 'transform',
          }}
        >
          {LOGO_REEL.map((logo, idx) => (
            <div
              key={`${logo.alt}-${idx}`}
              data-logo-item
              style={{ flexShrink: 0, transformOrigin: 'center center' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                draggable={false}
                style={{ display: 'block', height: 56, width: 'auto', maxWidth: 180, objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FF   = 'Inter, ui-sans-serif, system-ui, sans-serif'
const LINE = '1px solid rgba(0,0,0,0.09)'

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
            <Link to="/about" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#08090b', textDecoration: 'none' }}>About ↗</Link>
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
