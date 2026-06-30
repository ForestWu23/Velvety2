const works = [
  {
    id: 1,
    label: 'Prendiville Group',
    size: 'small' as const,
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82',
    alt: 'Website displayed on a tablet for a hospitality project',
  },
  {
    id: 2,
    label: 'Walyalup Fremantle Arts Centre',
    size: 'large' as const,
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1500&q=82',
    alt: 'Outdoor creative posters and cultural venue imagery',
  },
  {
    id: 3,
    label: 'Luxwin',
    size: 'small' as const,
    img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=82',
    alt: 'Crystal glass abstract product brand visual',
  },
  {
    id: 4,
    label: 'RTRFM 92.1',
    size: 'medium' as const,
    img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=82',
    alt: 'Audio mixing console and digital radio interface',
  },
  {
    id: 5,
    label: 'Revo Fitness',
    size: 'medium' as const,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=82',
    alt: 'Fitness studio interior for gym website project',
  },
  {
    id: 6,
    label: 'Pacific Energy',
    size: 'medium' as const,
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=82',
    alt: 'Solar energy project image with blue sky',
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
