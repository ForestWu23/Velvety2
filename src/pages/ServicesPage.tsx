import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import SubpageNavigation from '@/components/SubpageNavigation'
import ServicesCtaPhotoStack from '@/components/ServicesCtaPhotoStack'
import { BoldSeoGeoIcon, BoldShopifyIcon } from '@/components/ServicePageBoldIcons'
import { useProjectForm } from '@/components/ProjectFormWidget'
import { useSubpageScroll } from '@/hooks/useSubpageScroll'
import { assets } from '@/lib/assets'
import Footer from '@/sections/Footer'

const marqueeItems = ['Brand Identity', 'Web Design', 'Product Design', 'Packaging', 'Social Campaigns']

type ServiceIconKind = 'shopify' | 'seo-geo'

type ServiceOffering = {
  icon: string | ServiceIconKind
  title: string
  body: string
}

const leftOfferings: ServiceOffering[] = [
  {
    icon: assets.servicePageBrandIdentityIcon,
    title: 'Brand Identity & Logo Design',
    body: 'Creating logos, brand systems, and style guides that communicate clearly and consistently.',
  },
  {
    icon: assets.servicePagePackagingIcon,
    title: 'Packaging & Print Collateral',
    body: 'Brochures, product labels, pitch decks, posters, and POS materials for physical and digital use.',
  },
  {
    icon: 'shopify',
    title: 'Shopify Store Design & Development',
    body: 'Custom Shopify theme design, store setup, product page optimization, and conversion-focused e-commerce experiences.',
  },
]

const rightOfferings: ServiceOffering[] = [
  {
    icon: assets.servicePageWebProductIcon,
    title: 'Web & Product Design',
    body: 'UX/UI design for websites, dashboards, mobile interfaces, with usability-focused prototyping.',
  },
  {
    icon: assets.servicePageSocialIcon,
    title: 'Social Media & Campaign Assets',
    body: 'Instagram reels, WeChat articles, and visual storytelling customized for multicultural audiences.',
  },
  {
    icon: 'seo-geo',
    title: 'SEO & GEO',
    body: 'Search and generative engine optimization—technical SEO, site structure, and brand presence tuned for Google and AI answer tools.',
  },
]

function ServiceIcon({ icon }: { icon: string | ServiceIconKind }) {
  if (icon === 'shopify') return <BoldShopifyIcon />
  if (icon === 'seo-geo') return <BoldSeoGeoIcon />
  return <img src={icon} alt="" />
}

function ServiceColumn({ items }: { items: ServiceOffering[] }) {
  return (
    <div className="about-services-column">
      {items.map(item => (
        <article key={item.title} className="about-service-item">
          <div className="about-service-item__icon" aria-hidden="true">
            <ServiceIcon icon={item.icon} />
          </div>
          <div className="about-service-item__content">
            <h3 className="about-service-item__title">{item.title}</h3>
            <p className="about-service-item__body">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

const reasons = [
  {
    title: 'Designing with intention',
    body: 'Every decision is grounded in research and context, focusing on clarity, usability, and long-term consistency.',
  },
  {
    title: 'Building with experience',
    body: "Our designers hold master's degrees in digital design-related fields, bringing over a decade of combined industry experience.",
  },
  {
    title: 'Delivering with real-world focus',
    body: 'From digital products to physical packaging, we create systems that work across platforms, touchpoints, and constraints.',
  },
]

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { openForm } = useProjectForm()
  useSubpageScroll(pageRef)

  return (
    <div className="about-page subpage-scroll" ref={pageRef}>
      <SubpageNavigation />

      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">VelvetY LLC .</span>
          <h1 className="about-title">Services</h1>
          <div className="about-rule" />
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro__grid">
          <div>
            <p className="about-copy">
              At <strong>VelvetY</strong>, we design brand, web, and visual systems with clarity and
              consistency in mind—supporting brands across digital and physical touchpoints.
            </p>
            <p className="about-copy">
              From identity systems to Shopify storefronts, every engagement is shaped to help
              small and mid-sized teams look credible, communicate clearly, and convert with
              confidence.
            </p>
          </div>
          <div className="about-intro__media">
            <div className="about-photo-wrap">
              <div className="about-photo-shadow" aria-hidden="true" />
              <img
                className="about-photo"
                src={assets.ourServicesImage}
                alt="VelvetY studio services collage"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-marquee" aria-hidden="true">
        <div className="about-marquee__track">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <span key={`${text}-${i}`} className="about-marquee__item">{text}</span>
          ))}
        </div>
      </section>

      <section className="about-team">
        <h2 className="about-team__title">What we&rsquo;re offering</h2>
        <div className="about-container about-services-list">
          <ServiceColumn items={leftOfferings} />
          <ServiceColumn items={rightOfferings} />
        </div>
      </section>

      <section className="about-stats">
        <div className="about-container about-stats__layout">
          <div className="about-stats__intro">
            <span className="about-stats__eyebrow">Why choose us</span>
            <h2 className="about-stats__heading">
              Providing the best services
            </h2>
          </div>

          <div className="about-reasons">
            {reasons.map(reason => (
              <div key={reason.title} className="about-reason">
                <div className="about-reason__mark" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <p className="about-reason__title">{reason.title}</p>
                  <p className="about-reason__body">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta services-cta">
        <div className="about-container services-cta__grid">
          <div className="services-cta__visual">
            <ServicesCtaPhotoStack />
          </div>

          <div className="services-cta__copy">
            <span className="about-eyebrow">Your project</span>
            <h2 className="about-cta__title">
              Ready to bring your
              <br />
              brand <em>to life?</em>
            </h2>
            <p className="about-cta__body">
              Whether you need a new identity, a website, or campaign assets — we tailor our
              services to your goals, timeline, and budget. Let&rsquo;s define what success looks
              like.
            </p>
            <ul className="services-cta__tags" aria-label="Service areas">
              <li>Brand Identity</li>
              <li>Web &amp; Product</li>
              <li>Print &amp; Packaging</li>
            </ul>
            <button type="button" className="about-cta__btn" onClick={openForm}>
              Book a Free Consultation
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
