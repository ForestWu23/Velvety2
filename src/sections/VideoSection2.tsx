import { useEffect, useRef, useState } from 'react'
import WindowVideoCompare from '@/components/WindowVideoCompare'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const vid  = (f: string) => `${BASE}/assets/videos/${f}`

type Props = {
  onRainActiveChange?: (active: boolean) => void
}

export default function VideoSection2({ onRainActiveChange }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const [rainOn, setRainOn] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        const active = entry.isIntersecting
        setRainOn(active)
        onRainActiveChange?.(active)
      },
      { rootMargin: '80px 0px' },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      onRainActiveChange?.(false)
    }
  }, [onRainActiveChange])

  return (
    <section
      ref={sectionRef}
      className={`video-section-2${rainOn ? ' is-active' : ''}`}
      aria-label="Project before and after comparison"
    >
      <div className="video-section-2__window">
        <div className="video-section-2__vignette" aria-hidden />
        <div className="video-section-2__content">
          <WindowVideoCompare
            active={rainOn}
            playbackRate={0.5}
            syncEndTimes
            left={{
              badge: 'Before',
              label: 'Project — Old',
              videoSrc: vid('eastside-before.mp4'),
              imageAlt: 'Project before redesign',
            }}
            right={{
              badge: 'After',
              label: 'Project — New',
              videoSrc: vid('eastside-after.mp4'),
              imageAlt: 'Project after redesign',
            }}
          />
        </div>
      </div>
    </section>
  )
}
