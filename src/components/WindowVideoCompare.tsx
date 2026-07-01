type Slot = {
  badge: string
  label: string
  imageSrc?: string
  videoSrc?: string
  imageAlt?: string
}

type Props = {
  left: Slot
  right: Slot
}

function Media({ imageSrc, videoSrc, imageAlt, label }: Pick<Slot, 'imageSrc' | 'videoSrc' | 'imageAlt' | 'label'>) {
  const style = { width: '100%', height: '100%', objectFit: 'cover' as const, display: 'block' }
  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        muted
        loop
        playsInline
        autoPlay
        style={style}
        aria-label={imageAlt ?? label}
      />
    )
  }
  return <img src={imageSrc} alt={imageAlt ?? label} style={style} />
}

function VideoSlot({ badge, label, imageSrc, videoSrc, imageAlt }: Slot) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        pointerEvents: 'auto',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          fontFamily: 'SFMono-Regular, Consolas, monospace',
        }}
      >
        {label}
      </p>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          maxHeight: '100%',
          borderRadius: 16,
          overflow: 'hidden',
          background: '#111',
          filter: 'drop-shadow(0 24px 48px rgba(0,0,0,.65))',
        }}
      >
        <Media imageSrc={imageSrc} videoSrc={videoSrc} imageAlt={imageAlt} label={label} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,.06) 0%, rgba(0,0,0,.38) 100%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: 'rgba(0,0,0,.58)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: 10,
            letterSpacing: '0.08em',
            padding: '4px 10px',
            borderRadius: 999,
            fontFamily: 'SFMono-Regular, Consolas, monospace',
            textTransform: 'uppercase',
          }}
        >
          {badge}
        </div>
      </div>
    </div>
  )
}

/** Side-by-side before/after videos inside the rain window. */
export default function WindowVideoCompare({ left, right }: Props) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 'clamp(16px, 2.5vw, 32px)',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(12px, 2vw, 28px)',
        pointerEvents: 'none',
        boxSizing: 'border-box',
      }}
    >
      <VideoSlot {...left} />
      <VideoSlot {...right} />
    </div>
  )
}
