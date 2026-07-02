import { useInView } from '@/hooks/useInView'
import WindowVideoCard from '@/components/WindowVideoCard'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const gallery = (f: string) => `${BASE}/assets/gallery/${f}`

const SHOWCASE_SLIDES = [
  'alice.webp',
  'bnpl.webp',
  'cloth.webp',
  'david.webp',
  'done.webp',
  'expand.webp',
  'game.webp',
  'hand.webp',
  'lake.webp',
  'lexend.webp',
  'mindful.webp',
  'music.webp',
  'plan.webp',
  'real.webp',
  'sarah.webp',
  'sheep.webp',
  'smart.webp',
  'website.webp',
].map(gallery)

export default function ShowcaseSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
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
      aria-label="VelvetY showcase"
    >
      <div
        style={{
          position: 'relative',
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
          <WindowVideoCard badge="#VELVETY" slides={SHOWCASE_SLIDES} active={inView} />
        </div>
      </div>
    </section>
  )
}
