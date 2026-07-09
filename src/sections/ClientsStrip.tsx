import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './ClientsStrip.css'

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

function StripCell({
  children,
  style,
  variant,
}: {
  children: ReactNode
  style?: CSSProperties
  variant?: 'studio' | 'about' | 'service'
}) {
  const [hovered, setHovered] = useState(false)
  const variantClass = variant ? ` clients-strip__cell--${variant}` : ''

  return (
    <div
      className={`clients-strip__cell${variantClass}${hovered ? ' is-hovered' : ''}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
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
        <div className="clients-strip__top" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: LINE, borderLeft: LINE }}>
          <StripCell variant="studio" style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(24px,3vw,40px)' }}>
            <div className="clients-strip__label-row">
              <span className="clients-strip__dot" />
              <p className="clients-strip__eyebrow clients-strip__eyebrow--studio">Studio</p>
            </div>
            <h2 className="clients-strip__title">
              We are a Seattle studio with a shared obsession for brands that matter.
            </h2>
          </StripCell>
          <StripCell variant="about" style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(24px,3vw,40px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p className="clients-strip__muted clients-strip__about-copy">
              The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets.
            </p>
            <Link to="/about" className="clients-strip__link clients-strip__about-link">About ↗</Link>
          </StripCell>
        </div>
        <div className="clients-strip__services-block" style={{ borderLeft: LINE, flex: '1 0 0' }}>
          <div className="clients-strip__services-intro">
            <div className="clients-strip__label-row">
              <span className="clients-strip__dot" />
              <p className="clients-strip__eyebrow clients-strip__section-label">Our Services</p>
            </div>
            <Link to="/services" className="clients-strip__link clients-strip__services-link">All services ↗</Link>
          </div>
          <div className="clients-strip__services">
          {services.map(s => (
            <StripCell key={s.num} variant="service" style={{ borderRight: LINE, borderBottom: LINE, padding: 'clamp(22px,2.5vw,36px)' }}>
              <span className="clients-strip__eyebrow clients-strip__service-num">{s.num}</span>
              <h3 className="clients-strip__heading">{s.title}</h3>
              <p className="clients-strip__muted clients-strip__service-desc">{s.desc}</p>
              <ul className="clients-strip__service-list">
                {s.items.map(item => (
                  <li key={item} className="clients-strip__list-item">
                    <span className="clients-strip__bullet" />{item}
                  </li>
                ))}
              </ul>
            </StripCell>
          ))}
          </div>
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
