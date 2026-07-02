import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#f5f5f3',
        color: '#08090b',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        padding: 'clamp(96px, 12vh, 140px) clamp(24px, 5vw, 72px)',
      }}
      aria-label="About VelvetY"
    >
      <p
        style={{
          margin: '0 0 18px',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          color: '#9ca3af',
        }}
      >
        About
      </p>
      <h1
        style={{
          margin: '0 0 24px',
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          maxWidth: 720,
        }}
      >
        We are a Seattle studio with a shared obsession for brands that matter.
      </h1>
      <p style={{ margin: '0 0 40px', maxWidth: 520, fontSize: 16, lineHeight: 1.75, color: '#4b5563' }}>
        The team is a mix — creative, technical, practical, opinionated. Some of us make noise, some make spreadsheets.
      </p>
      <Link
        to="/"
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#08090b',
          textDecoration: 'none',
        }}
      >
        ← Back home
      </Link>
    </section>
  )
}
