import { useCallback, useEffect, useRef, type Ref } from 'react'

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
  /** Base playback speed for the right (after) video */
  playbackRate?: number
  /** Match loop length so both videos start and end together */
  syncEndTimes?: boolean
}

function Media({
  imageSrc,
  videoSrc,
  imageAlt,
  label,
  videoRef,
  onLoadedMetadata,
}: Pick<Slot, 'imageSrc' | 'videoSrc' | 'imageAlt' | 'label'> & {
  videoRef?: Ref<HTMLVideoElement>
  onLoadedMetadata?: () => void
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
        onLoadedMetadata={onLoadedMetadata}
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
  onLoadedMetadata,
}: Slot & {
  side: Side
  videoRef?: Ref<HTMLVideoElement>
  onLoadedMetadata?: () => void
}) {
  return (
    <div className={`video-compare__slot video-compare__slot--${side}`}>
      <p className="video-compare__label">{label}</p>
      <div className="video-compare__frame">
        <Media
          imageSrc={imageSrc}
          videoSrc={videoSrc}
          imageAlt={imageAlt}
          label={label}
          videoRef={videoRef}
          onLoadedMetadata={onLoadedMetadata}
        />
        <div className="video-compare__badge">{badge}</div>
      </div>
    </div>
  )
}

/** Side-by-side before/after videos inside the rain window. */
export default function WindowVideoCompare({
  left,
  right,
  active = true,
  playbackRate = 1,
  syncEndTimes = false,
}: Props) {
  const leftVideoRef = useRef<HTMLVideoElement>(null)
  const rightVideoRef = useRef<HTMLVideoElement>(null)
  const wasActiveRef = useRef(false)
  const readyRef = useRef({ left: false, right: false })

  const applyPlaybackRates = useCallback(() => {
    const leftVideo = leftVideoRef.current
    const rightVideo = rightVideoRef.current
    if (!leftVideo || !rightVideo) return

    const rightRate = playbackRate
    const leftRate = syncEndTimes && leftVideo.duration && rightVideo.duration
      ? playbackRate * (leftVideo.duration / rightVideo.duration)
      : playbackRate

    rightVideo.playbackRate = rightRate
    leftVideo.playbackRate = leftRate
  }, [playbackRate, syncEndTimes])

  const onVideoMetadata = useCallback(() => {
    const leftVideo = leftVideoRef.current
    const rightVideo = rightVideoRef.current
    readyRef.current.left = Boolean(leftVideo?.duration)
    readyRef.current.right = Boolean(rightVideo?.duration)
    if (!readyRef.current.left || !readyRef.current.right) return
    applyPlaybackRates()
  }, [applyPlaybackRates])

  useEffect(() => {
    applyPlaybackRates()
  }, [applyPlaybackRates])

  useEffect(() => {
    if (!active) {
      wasActiveRef.current = false
      readyRef.current = { left: false, right: false }
      return
    }
    if (wasActiveRef.current) return
    wasActiveRef.current = true

    for (const ref of [leftVideoRef, rightVideoRef]) {
      const v = ref.current
      if (!v) continue
      applyPlaybackRates()
      v.currentTime = 0
      void v.play()
    }
  }, [active, applyPlaybackRates])

  return (
    <div className="video-compare">
      <VideoSlot {...left} side="left" videoRef={leftVideoRef} onLoadedMetadata={onVideoMetadata} />
      <VideoSlot {...right} side="right" videoRef={rightVideoRef} onLoadedMetadata={onVideoMetadata} />
    </div>
  )
}
