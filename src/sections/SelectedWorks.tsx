import { assets } from '@/lib/assets'

const works = [
  {
    id: 1,
    label: 'BuyerFolio',
    size: 'small' as const,
    img: assets.selectedWorks[1].src,
    alt: assets.selectedWorks[1].alt,
  },
  {
    id: 2,
    label: 'NutriBites',
    size: 'large' as const,
    img: assets.selectedWorks[0].src,
    alt: assets.selectedWorks[0].alt,
  },
  {
    id: 3,
    label: 'Huagen Culture Center',
    size: 'small' as const,
    img: assets.selectedWorks[2].src,
    alt: assets.selectedWorks[2].alt,
  },
  {
    id: 4,
    label: 'Green Apple Art',
    size: 'medium' as const,
    img: assets.selectedWorks[3].src,
    alt: assets.selectedWorks[3].alt,
  },
  {
    id: 5,
    label: 'Coming soon',
    size: 'medium' as const,
    img: assets.selectedWorks[4].src,
    alt: assets.selectedWorks[4].alt,
  },
  {
    id: 6,
    label: 'Coming soon',
    size: 'medium' as const,
    img: assets.selectedWorks[5].src,
    alt: assets.selectedWorks[5].alt,
  },
]

export default function SelectedWorks() {
  return (
    <section className="selected-works" id="work" aria-label="Selected works">
      <h2 className="works-title">
        Selected works <span className="works-count">{works.length}</span>
      </h2>
      <div className="works-grid">
        {works.map((w) => (
          <article key={w.id} className={`work-card ${w.size}`}>
            <span className="work-label">{w.label}</span>
            <img src={w.img} alt={w.alt} loading="lazy" />
          </article>
        ))}
      </div>
    </section>
  )
}
