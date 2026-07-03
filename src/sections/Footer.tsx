import { useCallback, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { scrollToWorkSection } from '@/lib/scrollToWork'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const img  = (f: string) => `${BASE}/assets/images/${f}`

type NavItem =
  | { label: string; kind: 'link'; to: string }
  | { label: string; kind: 'work' }

const NAV: NavItem[] = [
  { label: 'Contact Us', kind: 'link', to: '/contact' },
  { label: 'About', kind: 'link', to: '/about' },
  { label: 'Services', kind: 'link', to: '/services' },
  { label: 'Projects', kind: 'work' },
]

const KEY_COUNT = 6

const LIGHT = {
  muted:   'rgba(255,253,245,0.70)',
  body:    'rgba(255,253,245,0.85)',
  faint:   'rgba(255,253,245,0.60)',
  email:   '#fff',
  border:  'rgba(255,253,245,0.20)',
  inputBg: 'rgba(255,255,255,0.05)',
  input:   '#fff',
  underline: 'rgba(255,253,245,0.85)',
}

const DARK = {
  muted:   'rgba(8,9,11,0.68)',
  body:    'rgba(8,9,11,0.85)',
  faint:   'rgba(8,9,11,0.60)',
  email:   '#08090b',
  border:  'rgba(8,9,11,0.18)',
  inputBg: 'rgba(8,9,11,0.05)',
  input:   '#08090b',
  underline: 'rgba(8,9,11,0.85)',
}

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
)

type Palette = typeof LIGHT

type BodyProps = {
  palette: Palette
  hovered: string | null
  setHovered?: (v: string | null) => void
  interactive?: boolean
  onProjectsClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function isHomePath(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalized = pathname.replace(/\/$/, '') || '/'
  if (normalized === '/' || normalized === '') return true
  if (base && normalized === base) return true
  return false
}

function FooterBody({ palette: c, hovered, setHovered, interactive = false, onProjectsClick }: BodyProps) {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px 40px' }}>
      <img src={img('logoSmall2.png')} alt="VelvetY" style={{ height: 48, width: 'auto', display: 'block' }} />

      <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
        <div>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.muted, margin: 0 }}>Let&rsquo;s start working together</p>
          <a
            href="mailto:info@velvetydesign.com"
            style={{ display: 'inline-block', marginTop: 16, fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-0.04em', color: c.email, textDecoration: 'none', lineHeight: 1.1, pointerEvents: interactive ? 'auto' : 'none' }}
          >
            info@velvetydesign.com
          </a>
          <ul style={{ marginTop: 32, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13, color: c.body }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}><IconPin /><span>2203B 22nd AVE S, Seattle, WA 98144</span></li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <IconMail />
              <a href="mailto:info@velvetydesign.com" style={{ color: 'inherit', textDecoration: 'none', pointerEvents: interactive ? 'auto' : 'none' }}>info@velvetydesign.com</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}><IconPhone /><span>(206) 601-5969</span></li>
          </ul>
        </div>

        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.muted, margin: 0 }}>Company</p>
          <ul style={{ marginTop: 20, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, color: c.body }}>
            {NAV.map(n => (
              <li key={n.label}>
                {n.kind === 'work' ? (
                  <a
                    href="#work"
                    onClick={onProjectsClick}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c.body, textDecoration: 'none', pointerEvents: interactive ? 'auto' : 'none' }}
                    onMouseEnter={() => setHovered?.(n.label)}
                    onMouseLeave={() => setHovered?.(null)}
                  >
                    {n.label}
                    <span style={{ display: 'block', height: 1, background: c.underline, width: hovered === n.label ? 20 : 0, transition: 'width 0.3s' }} />
                  </a>
                ) : (
                  <Link
                    to={n.to}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: c.body, textDecoration: 'none', pointerEvents: interactive ? 'auto' : 'none' }}
                    onMouseEnter={() => setHovered?.(n.label)}
                    onMouseLeave={() => setHovered?.(null)}
                  >
                    {n.label}
                    <span style={{ display: 'block', height: 1, background: c.underline, width: hovered === n.label ? 20 : 0, transition: 'width 0.3s' }} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: c.muted, margin: 0 }}>Subscribe</p>
          <form
            onSubmit={e => e.preventDefault()}
            style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8, borderRadius: 999, border: `1px solid ${c.border}`, background: c.inputBg, padding: '4px 4px 4px 16px', pointerEvents: interactive ? 'auto' : 'none' }}
          >
            <input type="email" placeholder="Enter your email" aria-label="Email" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 13, color: c.input, minWidth: 0 }} />
            <button type="submit" style={{ flexShrink: 0, background: c.email, color: c.email === '#fff' ? '#0a0a0a' : '#fff', border: 'none', borderRadius: 999, padding: '8px 16px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>Submit</button>
          </form>
        </div>
      </div>

      <p style={{ marginTop: 56, paddingTop: 24, textAlign: 'center', fontSize: 12, color: c.faint }}>
        © Copyright 2026 by VELVETY LLC
      </p>
    </div>
  )
}

function keyIndexAtX(clientX: number, keyEls: (HTMLDivElement | null)[]) {
  for (let i = 0; i < keyEls.length; i++) {
    const el = keyEls[i]
    if (!el) continue
    const r = el.getBoundingClientRect()
    if (clientX >= r.left && clientX < r.right) return i
  }
  return -1
}

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [hovered, setHovered]     = useState<string | null>(null)
  const [activeKey, setActiveKey] = useState<number | null>(null)
  const [darkClip, setDarkClip]   = useState('inset(0 100% 0 0)')

  const footerRef = useRef<HTMLElement>(null)
  const keyRefs   = useRef<(HTMLDivElement | null)[]>([])

  const onProjectsClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isHomePath(location.pathname)) {
      scrollToWorkSection()
      return
    }
    navigate('/#work')
  }, [location.pathname, navigate])

  const updateDarkClip = useCallback((keyIdx: number | null) => {
    if (keyIdx === null) {
      setDarkClip('inset(0 100% 0 0)')
      return
    }
    const footer = footerRef.current
    const key    = keyRefs.current[keyIdx]
    if (!footer || !key) return
    const fr = footer.getBoundingClientRect()
    const kr = key.getBoundingClientRect()
    const left  = Math.max(0, kr.left - fr.left)
    const right = Math.max(0, fr.right - kr.right)
    setDarkClip(`inset(0 ${right}px 0 ${left}px)`)
  }, [])

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const idx = keyIndexAtX(e.clientX, keyRefs.current)
    if (idx === activeKey) return
    const next = idx >= 0 ? idx : null
    setActiveKey(next)
    updateDarkClip(next)
  }

  const onMouseLeave = () => {
    setActiveKey(null)
    updateDarkClip(null)
  }

  return (
    <footer
      ref={footerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative',
        overflow: 'hidden',
        zIndex: 3,
        minHeight: 520,
        background: '#f5f5f3',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div className="footer-piano-white" aria-hidden />
      <div className="footer-piano-curtain" aria-hidden>
        {Array.from({ length: KEY_COUNT }, (_, i) => (
          <div
            key={i}
            ref={el => { keyRefs.current[i] = el }}
            className={`footer-piano-key fk${i + 1}${activeKey === i ? ' is-lifted' : ''}`}
          />
        ))}
      </div>

      <div className="footer-content-layer footer-content-layer--interactive" style={{ zIndex: 2 }}>
        <FooterBody palette={LIGHT} hovered={hovered} setHovered={setHovered} interactive onProjectsClick={onProjectsClick} />
      </div>

      <div
        className="footer-content-layer"
        style={{
          zIndex: 3,
          clipPath: darkClip,
          transition: 'clip-path 0.08s linear',
        }}
        aria-hidden
      >
        <FooterBody palette={DARK} hovered={hovered} onProjectsClick={onProjectsClick} />
      </div>
    </footer>
  )
}
