import { useEffect, useRef, useState } from 'react'
import RainEffect from '@/components/RainEffect'
import WindowVideoCompare from '@/components/WindowVideoCompare'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
const img  = (f: string) => `${BASE}/assets/images/${f}`
const vid  = (f: string) => `${BASE}/assets/videos/${f}`

export default function VideoSection2() {
  const sectionRef = useRef<HTMLElement>(null)
  const [rainOn, setRainOn] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setRainOn(entry.isIntersecting),
      { rootMargin: '80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="video-section-2"
      aria-label="Project before and after comparison"
    >
      <div className="video-section-2__window">
        <RainEffect
          active={rainOn}
          citySrc={img('city-footer.jpg')}
          className="video-section-2__rain"
        />
        <div className="video-section-2__content">
          <WindowVideoCompare
            active={rainOn}
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
