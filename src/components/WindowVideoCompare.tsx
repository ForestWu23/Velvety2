import { useEffect, useRef, useState, type Ref } from 'react'

type Slot = {
  badge: string
  label: string
  imageSrc?: string
  videoSrc?: string
  imageAlt?: string
}

type Side = 'left' | 'right'

type Props = {
  left: Slot
  right: Slot
  /** Restart videos from 0 each time section enters view */
  active?: boolean
}

function Media({
  imageSrc,
  videoSrc,
  imageAlt,
  label,
  videoRef,
}: Pick<Slot, 'imageSrc' | 'videoSrc' | 'imageAlt' | 'label'> & {
  videoRef?: Ref<HTMLVideoElement>
}) {
  const style = { width: '100%', height: '100%', objectFit: 'cover' as const, display: 'block' }
  if (videoSrc) {
    return (
      <video
        ref={videoRef}
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

function VideoSlot({
  side,
  badge,
  label,
  imageSrc,
  videoSrc,
  imageAlt,
  videoRef,
  isFocused,
  isShrunk,
  onEnter,
  onClick,
}: Slot & {
  side: Side
  videoRef?: Ref<HTMLVideoElement>
  isFocused: boolean
  isShrunk: boolean
  onEnter: () => void
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className={[
        'video-compare__slot',
        `video-compare__slot--${side}`,
        isFocused && 'video-compare__slot--focused',
        isShrunk && 'video-compare__slot--shrunk',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      onClick={onClick}
      aria-pressed={isFocused}
      aria-label={`${label} — ${isFocused ? 'expanded' : 'collapsed'}`}
    >
      <p className="video-compare__label">{label}</p>
      <div className="video-compare__frame">
        <Media imageSrc={imageSrc} videoSrc={videoSrc} imageAlt={imageAlt} label={label} videoRef={videoRef} />
        <div className="video-compare__shade" aria-hidden="true" />
        <div className="video-compare__badge">{badge}</div>
      </div>
    </button>
  )
}

/** Side-by-side before/after videos inside the rain window. */
export default function WindowVideoCompare({ left, right, active = true }: Props) {
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)
  const wasActiveRef = useRef(false)
  const [hovered, setHovered] = useState<Side | null>(null)
  const [pinned, setPinned] = useState<Side | null>(null)

  const focused = pinned ?? hovered

  useEffect(() => {
    if (!active) {
      wasActiveRef.current = false
      return
    }
    if (wasActiveRef.current) return
    wasActiveRef.current = true

    for (const ref of [leftVideoRef, rightVideoRef]) {
      const v = ref.current
      if (!v) continue
      v.currentTime = 0
      void v.play()
    }
  }, [active])

  const handleLeave = () => {
    if (!pinned) setHovered(null)
  }

  const handleClick = (side: Side) => {
    setPinned(current => (current === side ? null : side))
    setHovered(side)
  }

  return (
    <div
      className={[
        'video-compare',
        focused === 'left' && 'video-compare--left-focus',
        focused === 'right' && 'video-compare--right-focus',
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseLeave={handleLeave}
    >
      <VideoSlot
        {...left}
        side="left"
        videoRef={leftVideoRef}
        isFocused={focused === 'left'}
        isShrunk={focused === 'right'}
        onEnter={() => setHovered('left')}
        onClick={() => handleClick('left')}
      />
      <VideoSlot
        {...right}
        side="right"
        videoRef={rightVideoRef}
        isFocused={focused === 'right'}
        isShrunk={focused === 'left'}
        onEnter={() => setHovered('right')}
        onClick={() => handleClick('right')}
      />
    </div>
  )
}
