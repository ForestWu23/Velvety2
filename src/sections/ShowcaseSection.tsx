import WindowVideoCard from '@/components/WindowVideoCard'

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=85'

export default function ShowcaseSection() {
  return (
    <section
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
          <WindowVideoCard badge="#VELVETY" imageSrc={PLACEHOLDER} />
        </div>
      </div>
    </section>
  )
}
