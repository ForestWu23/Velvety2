import LetterGlitch from '@/components/LetterGlitch'

/**
 * VideoSection2 — second video/showreel section.
 *
 * Same "window cutout" layout as ShowcaseSection:
 *   - Full viewport, black background
 *   - Rounded rectangle punched out of the black with box-shadow
 *   - Interior shows the LetterGlitch canvas (replace with <video> when ready)
 *
 * To swap in a real video later, replace <LetterGlitch /> with:
 *   <video src="/your-video.mp4" autoPlay muted loop playsInline
 *     style={{ width:'100%', height:'100%', objectFit:'cover' }} />
 */
export default function VideoSection2() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 3,
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      }}
      aria-label="VelvetY showreel"
    >
      {/*
       * Window rectangle — identical to ShowcaseSection.
       * box-shadow: 0 0 0 9999px #000  paints black everywhere outside this rect.
       * overflow: hidden clips the LetterGlitch to the rounded corners.
       */}
      <div
        style={{
          position: 'relative',
          width:  'clamp(360px, 92vw, 1380px)',
          height: 'clamp(260px, 82vh, 800px)',
          borderRadius: 28,
          overflow: 'hidden',
          boxShadow: '0 0 0 9999px #000',
        }}
      >
        {/* LetterGlitch background — swap for <video> when ready */}
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          outerVignette={true}
          centerVignette={false}
        />

        {/* Subtle radial vignette over the glitch */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.52) 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Placeholder label — remove when video is inserted */}
        <div
          style={{
            position: 'absolute',
            top: 18,
            left: 18,
            background: 'rgba(0,0,0,0.58)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: 11,
            letterSpacing: '0.08em',
            padding: '5px 14px',
            borderRadius: 999,
            fontFamily: 'SFMono-Regular, Consolas, monospace',
            textTransform: 'uppercase',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          Video coming soon
        </div>
      </div>
    </section>
  )
}
