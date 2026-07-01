import { useEffect, useRef, useState } from 'react'
import LetterGlitch from '@/components/LetterGlitch'

/** Matches https://reactbits.dev/tools/background-studio?bg=letter-glitch&glitchColors=3ff498%2Cdc61dc%2C61b3dc&glitchSpeed=10&centerVignette=false&smooth=false */
const GLITCH = {
  glitchColors: ['#3ff498', '#dc61dc', '#61b3dc'] as [string, string, string],
  glitchSpeed: 10,
  centerVignette: false,
  outerVignette: false,
  smooth: false,
}

function VideoCard() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '80%',
          pointerEvents: 'auto',
          filter: 'drop-shadow(0 32px 64px rgba(0,0,0,.72))',
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: 18,
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            background: '#111',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85"
            alt="VelvetY showreel"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,.08) 0%, rgba(0,0,0,.40) 100%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              background: 'rgba(0,0,0,.58)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: 11,
              letterSpacing: '0.06em',
              padding: '5px 12px',
              borderRadius: 999,
              fontFamily: 'SFMono-Regular, Consolas, monospace',
              textTransform: 'uppercase',
            }}
          >
            Video coming soon
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoSection2() {
  const sectionRef = useRef<HTMLElement>(null)
  const [glitchOn, setGlitchOn] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setGlitchOn(entry.isIntersecting),
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
      aria-label="VelvetY showreel"
    >
      {/*
       * Viewport-locked glitch (same feel as fixed ColorBends in ShowcaseSection).
       * Only mounted while this section is on screen.
       */}
      {glitchOn && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <LetterGlitch {...GLITCH} />
        </div>
      )}

      {/*
       * Transparent window cutout — fixed glitch shows through the interior.
       * box-shadow masks everything outside with solid black (no ColorBends).
       */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: 'clamp(360px, 92vw, 1380px)',
          height: 'clamp(260px, 82vh, 800px)',
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
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
