import { useMemo } from 'react'
import Stack from '@/components/Stack'
import { assets } from '@/lib/assets'

function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

export default function ServicesCtaPhotoStack() {
  const cards = useMemo(
    () =>
      shuffle([...assets.servicesCtaPhotos]).map((photo) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="card-image"
          loading="lazy"
          decoding="async"
        />
      )),
    [],
  )

  return (
    <div className="services-cta-stack-wrap" aria-label="Project showcase photo stack">
      <Stack
        cards={cards}
        randomRotation
        autoplay
        autoplayDelay={4500}
        sensitivity={100}
        pauseOnHover
        animationConfig={{ stiffness: 200, damping: 26 }}
      />
    </div>
  )
}
