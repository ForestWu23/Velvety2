import FastCutCarousel from '@/components/FastCutCarousel'

type Props = {
  badge: string
  imageSrc?: string
  slides?: string[]
  imageAlt?: string
}

/** Video frame that always fits inside the transparent window with inset + visible rounded corners. */
export default function WindowVideoCard({
  badge,
  imageSrc,
  slides,
  imageAlt = 'VelvetY showreel',
}: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 'clamp(24px, 5vw, 48px)',
        containerType: 'size',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 'min(100cqw, calc(100cqh * 16 / 10))',
          maxHeight: '100cqh',
          aspectRatio: '16 / 10',
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          background: '#111',
          pointerEvents: 'auto',
          filter: 'drop-shadow(0 32px 64px rgba(0,0,0,.72))',
          flexShrink: 0,
        }}
      >
        {slides && slides.length > 0 ? (
          <FastCutCarousel slides={slides} alt={imageAlt} />
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}
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
            zIndex: 1,
          }}
        >
          {badge}
        </div>
      </div>
    </div>
  )
}
