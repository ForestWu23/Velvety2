import { assets } from '@/lib/assets'

const members = [
  {
    name: 'Ya Li',
    role: 'Founder & Marketing Manager',
    bio: 'Seasoned professional in business management and marketing strategy, with deep expertise in Shopify store setup, optimization, and e-commerce consulting. Drives brand growth through data-informed campaigns and operational excellence.',
    photo: assets.yaLiPhoto,
    layout: '',
    small: false,
  },
  {
    name: 'Sihang Yang',
    role: 'Product Design Lead',
    bio: "9 years of experience in design and product strategy, Sihang leads VelvetY's creative vision across branding, digital products, and marketing. She combines deep expertise in UI/UX, visual identity, and cross-platform design to deliver cohesive experiences that drive real business impact.",
    photo: assets.sihangYangPhoto,
    layout: 'about-member--reverse',
    small: true,
  },
  {
    name: 'Sammi Tang',
    role: 'Digital Media Specialist',
    bio: 'Experienced in digital experience design and digital marketing across real estate, education, fashion, non-profit, e-commerce, and broadcasting.',
    photo: assets.sammiTangPhoto,
    layout: 'about-member--offset',
    small: false,
  },
  {
    name: 'Jin Xu',
    role: 'Product & UX Designer',
    bio: 'Focused on designing strategic digital experiences for AI SaaS, e-commerce, and mobility products. Experienced in UX research, interaction design, and design systems, combining analytical thinking with creative problem-solving to improve user decision-making and engagement.',
    photo: assets.jinXuPhoto,
    layout: 'about-member--reverse',
    small: true,
  },
  {
    name: 'Forest Wu',
    role: 'Technical Advisor',
    bio: 'Amazon software engineer with 11 years of experience at top tech companies. Specializes in full-stack development, e-commerce platforms, and Shopify storefront engineering, delivering scalable and high-performance digital products.',
    photo: assets.forestWuPhoto,
    layout: 'about-member--center',
    small: false,
  },
  {
    name: 'Leslie Chen',
    role: 'External Development Partner',
    bio: 'Googler software engineer with 8 years of full-stack development experience. Brings deep technical expertise across front-end and back-end systems, delivering scalable and reliable digital products.',
    photo: assets.leslieChenPhoto,
    layout: 'about-member--reverse',
    small: true,
  },
] as const

export default function AboutTeamStructure() {
  return (
    <section className="about-team">
      <h2 className="about-team__title">Team Structure</h2>
      <div className="about-team__list">
        {members.map((member) => (
          <article key={member.name} className={`about-member ${member.layout}`.trim()}>
            <div className={`about-avatar${member.small ? ' about-avatar--sm' : ''}`}>
              <img src={member.photo} alt={member.name} />
            </div>
            <div className="about-member__info">
              <h3 className="about-member__name">{member.name}</h3>
              <p className="about-member__role">{member.role}</p>
              <p className="about-member__bio">{member.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
