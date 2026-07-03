import Stack from '@/components/Stack'
import { assets } from '@/lib/assets'

export default function SeattlePhotoStack() {
  const cards = assets.seattlePhotos.map((photo) => (
    <img
      key={photo.src}
      src={photo.src}
      alt={photo.alt}
      className="card-image"
      loading="lazy"
      decoding="async"
    />
  ))

  return (
    <div className="about-stack-wrap" aria-label="Seattle city photo stack">
      <Stack
        cards={cards}
        randomRotation
        autoplay
        autoplayDelay={1000}
        sensitivity={100}
        pauseOnHover
      />
    </div>
  )
}
