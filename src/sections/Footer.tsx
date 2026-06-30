import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const img  = (f: string) => `${BASE}/assets/images/${f}`

const NAV = [
  { label: 'Contact Us', to: '/contact' },
  { label: 'About',      to: '/about'   },
  { label: 'Services',   to: '/services'},
  { label: 'Projects',   to: '/projects'},
]

/* ── tiny SVG icons (no lucide dep) ──────────────────────────── */
const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M22 7l-10 7L2 7"/>
  </svg>
)
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
  </svg>
)

const CREAM  = 'rgba(255,253,245,1)'
const CREAM70 = 'rgba(255,253,245,0.70)'
const CREAM85 = 'rgba(255,253,245,0.85)'
const CREAM60 = 'rgba(255,253,245,0.60)'
const CREAM20 = 'rgba(255,253,245,0.20)'
const CREAM15 = 'rgba(255,253,245,0.15)'
const CREAM10 = 'rgba(255,253,245,0.10)'

export default function Footer() {
  const [hovered, setHovered] = useState<string | null>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
        color: CREAM,
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        zIndex: 3,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 40px 40px',
        }}
      >
        {/* Logo mark */}
        <img
          src={img('logoSmall2.png')}
          alt="VelvetY"
          style={{ height: 48, width: 'auto', display: 'block' }}
        />

        {/* Divider */}
        <div style={{ marginTop: 32, height: 1, background: CREAM15 }} />

        {/* 3-column grid */}
        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 48,
          }}
        >
          {/* Left — contact info */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: CREAM70,
                margin: 0,
              }}
            >
              Let&rsquo;s start working together
            </p>
            <a
              href="mailto:info@velvetydesign.com"
              style={{
                display: 'inline-block',
                marginTop: 16,
                fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: '#fff',
                textDecoration: 'none',
                lineHeight: 1.1,
                transition: 'color 0.2s',
              }}
            >
              info@velvetydesign.com
            </a>

            <ul
              style={{
                marginTop: 32,
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                fontSize: 13,
                color: CREAM85,
              }}
            >
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconPin />
                <span>2203B 22nd AVE S, Seattle, WA 98144</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconMail />
                <a
                  href="mailto:info@velvetydesign.com"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = CREAM85)}
                >
                  info@velvetydesign.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <IconPhone />
                <span>(206) 601-5969</span>
              </li>
            </ul>
          </div>

          {/* Middle — nav */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: CREAM70,
                margin: 0,
              }}
            >
              Company
            </p>
            <ul
              style={{
                marginTop: 20,
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                fontSize: 14,
                color: CREAM85,
              }}
            >
              {NAV.map(n => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      color: CREAM85,
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => {
                      setHovered(n.label)
                      ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
                    }}
                    onMouseLeave={e => {
                      setHovered(null)
                      ;(e.currentTarget as HTMLAnchorElement).style.color = CREAM85
                    }}
                  >
                    {n.label}
                    <span
                      style={{
                        display: 'block',
                        height: 1,
                        background: CREAM85,
                        width: hovered === n.label ? 20 : 0,
                        transition: 'width 0.3s',
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — subscribe */}
          <div>
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: CREAM70,
                margin: 0,
              }}
            >
              Subscribe
            </p>
            <form
              onSubmit={e => e.preventDefault()}
              style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderRadius: 999,
                border: `1px solid ${CREAM20}`,
                background: 'rgba(255,255,255,0.05)',
                padding: '4px 4px 4px 16px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: 13,
                  color: '#fff',
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                style={{
                  flexShrink: 0,
                  background: '#fff',
                  color: '#0a0a0a',
                  border: 'none',
                  borderRadius: 999,
                  padding: '8px 16px',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = CREAM)}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 56,
            borderTop: `1px solid ${CREAM10}`,
            paddingTop: 24,
            textAlign: 'center',
            fontSize: 12,
            color: CREAM60,
          }}
        >
          © Copyright 2026 by VELVETY LLC
        </div>
      </div>
    </footer>
  )
}
