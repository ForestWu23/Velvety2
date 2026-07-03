import { useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import SubpageNavigation from '@/components/SubpageNavigation'
import ContactPhotoStack from '@/components/ContactPhotoStack'
import SeattlePhotoStack from '@/components/SeattlePhotoStack'
import { useProjectForm } from '@/components/ProjectFormWidget'
import { useSubpageScroll } from '@/hooks/useSubpageScroll'
import AboutTeamStructure from '@/sections/AboutTeamStructure'
import Footer from '@/sections/Footer'

const marqueeItems = ['Web Design', 'Product Design', 'Brand Identity', 'Visual Design']

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { openForm } = useProjectForm()
  useSubpageScroll(pageRef)

  return (
    <div className="about-page subpage-scroll" ref={pageRef}>
      <SubpageNavigation />

      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">VelvetY LLC .</span>
          <h1 className="about-title">About</h1>
          <div className="about-rule" />
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro__grid">
          <div>
            <p className="about-copy">
              <strong>VELVETY LLC</strong> is a Washington-based design agency founded in February
              2025. We specialize in branding, visual design, web and product design, and marketing
              content tailored for small to mid-sized enterprises in real estate, finance, food, and
              industrial sectors.
            </p>
            <p className="about-copy">
              We help our clients build cohesive, conversion-driven brand identities with a focus on
              both beauty and functionality.
            </p>
          </div>
          <div className="about-intro__media">
            <SeattlePhotoStack />
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

      <section className="about-stats">
        <div className="about-container about-stats__layout">
          <div className="about-stats__intro">
            <span className="about-stats__eyebrow">Capability</span>
            <h2 className="about-stats__heading">
              We&rsquo;re a creative and talented team of designers
            </h2>
            <div className="about-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
          </div>

          <p className="about-stats__body">
            Our designers all hold master&rsquo;s degrees in digital design-related fields and bring
            over a decade of combined industry experience. This academic foundation and hands-on
            practice inform every project we deliver.
          </p>

          <div className="about-stats__numbers">
            <div className="about-stat">
              <span className="about-stat__value">100+</span>
              <p className="about-stat__label">Creative &amp; futuristic projects delivered</p>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">10yr</span>
              <p className="about-stat__label">Combined industry experience</p>
            </div>
          </div>
        </div>
      </section>

      <AboutTeamStructure />

      <section className="about-cta">
        <div className="about-container">
          <div className="about-rule about-cta__rule" aria-hidden="true" />
          <div className="about-cta__grid">
          <div>
            <span className="about-eyebrow">Work with us</span>
            <h2 className="about-cta__title">
              Let&rsquo;s create something
              <br />
              <em>remarkable</em> together
            </h2>
            <p className="about-cta__body">
              From brand identity to digital products, our team pairs strategy with craft on
              every engagement. Share your vision — we&rsquo;d love to be part of it.
            </p>
            <button type="button" className="about-cta__btn" onClick={openForm}>
              Book a Free Consultation
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="about-cta__media">
            <ContactPhotoStack />
          </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
