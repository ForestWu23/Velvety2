/* ── Video card ─────────────────────────────────────────── */
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
          width: '80%',               /* ← VIDEO CARD WIDTH (% of outer rect) */
          pointerEvents: 'auto',
          filter: 'drop-shadow(0 32px 64px rgba(0,0,0,.72))',
        }}
      >
        {/* Video frame */}
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
            }}
          />
          {/* Top-left badge */}
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
            #VELVETY
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Section ─────────────────────────────────────────────── */
export default function ShowcaseSection() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 3,
        height: '100vh',
        background: 'transparent',     /* transparent → fixed Color Bends shows through */
        overflow: 'hidden',            /* clips box-shadow so it can't bleed into SelectedWorks above */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}
      aria-label="VelvetY showcase"
    >
      {/*
       * The "window" rectangle.
       *
       * box-shadow: 0 0 0 9999px #000
       *   → paints everything OUTSIDE this element solid black
       *   → border-radius makes the cutout corners rounded
       *   → interior is transparent → fixed Color Bends (z-index 1) shines through
       *
       * overflow: hidden clips the video card to the rounded rectangle bounds.
       */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(360px, 92vw, 1380px)',   /* ← OUTER RECT WIDTH  */
          height: 'clamp(260px, 82vh, 800px)',   /* ← OUTER RECT HEIGHT */
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: '0 0 0 9999px #000',        /* ← the window mask   */
        }}
      >
        {/* Subtle vignette so edges darken into the frame */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,.48) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Video card */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
