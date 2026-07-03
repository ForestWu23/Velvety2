import { useRef } from 'react'
import { ArrowRight, Clock, Mail, Phone } from 'lucide-react'
import SubpageNavigation from '@/components/SubpageNavigation'
import { useProjectForm } from '@/components/ProjectFormWidget'
import { useSubpageScroll } from '@/hooks/useSubpageScroll'
import Footer from '@/sections/Footer'

const steps = [
  {
    num: '01',
    title: 'Reach Out',
    body: 'Send us an email or give us a call. Share a brief overview of your project, timeline, and goals.',
  },
  {
    num: '02',
    title: 'Free Consultation',
    body: 'We schedule a 30-minute call to understand your needs, discuss scope, and explore how we can help.',
  },
  {
    num: '03',
    title: 'Proposal & Kickoff',
    body: 'We deliver a tailored proposal with clear deliverables, timeline, and pricing. Once approved, we begin.',
  },
]

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const { openForm } = useProjectForm()
  useSubpageScroll(pageRef)

  return (
    <div className="about-page subpage-scroll" ref={pageRef}>
      <SubpageNavigation />

      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">VelvetY LLC .</span>
          <h1 className="about-title">Contact</h1>
          <div className="about-rule" />
        </div>
      </section>

      <section className="about-intro">
        <div className="about-container about-intro__grid">
          <div>
            <span className="about-eyebrow">Get in touch</span>
            <h2 className="about-contact__heading">
              Let&rsquo;s start a <em>conversation</em>
            </h2>
            <p className="about-copy">
              Whether you need branding, web design, packaging, or a full digital transformation —
              we&rsquo;d love to hear about your project. Reach out by phone or email and we&rsquo;ll
              get back to you within one business day.
            </p>
            <button type="button" className="about-cta__btn about-contact__inquiry-btn" onClick={openForm}>
              Free Inquiry
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="about-contact-cards">
            <a className="about-contact-card" href="mailto:info@velvetydesign.com">
              <div className="about-contact-card__icon" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div>
                <p className="about-contact-card__label">Email</p>
                <p className="about-contact-card__value">info@velvetydesign.com</p>
                <p className="about-contact-card__hint">We typically respond within 24 hours</p>
              </div>
            </a>

            <a className="about-contact-card" href="tel:+12066015969">
              <div className="about-contact-card__icon" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <p className="about-contact-card__label">Phone</p>
                <p className="about-contact-card__value">(206) 601-5969</p>
                <p className="about-contact-card__hint">Mon – Fri, 9:00 AM – 6:00 PM PST</p>
              </div>
            </a>

            <div className="about-contact-card about-contact-card--static">
              <div className="about-contact-card__icon" aria-hidden="true">
                <Clock size={20} />
              </div>
              <div>
                <p className="about-contact-card__label">Business Hours</p>
                <p className="about-contact-card__value">Mon – Fri, 9 AM – 6 PM</p>
                <p className="about-contact-card__hint">Pacific Standard Time (PST)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-marquee contact-marquee" aria-hidden="true">
        <div className="about-marquee__track">
          {['Reach Out', 'Consultation', 'Kickoff', 'Collaborate', 'Reach Out', 'Consultation', 'Kickoff', 'Collaborate'].map((text, i) => (
            <span key={`${text}-${i}`} className="about-marquee__item">{text}</span>
          ))}
        </div>
      </section>

      <section className="contact-process">
        <div className="about-container">
          <div className="contact-process__header">
            <span className="about-stats__eyebrow">How we work</span>
            <h2 className="contact-process__title">
              Simple <span>&amp;</span> transparent process
            </h2>
            <p className="contact-process__lead">
              From first hello to project kickoff — a clear path with no surprises.
            </p>
          </div>

          <div className="contact-process__grid">
            {steps.map((step, i) => (
              <article key={step.num} className="contact-process__card">
                <div className="contact-process__card-top">
                  <span className="contact-process__num">{step.num}</span>
                  {i < steps.length - 1 && (
                    <span className="contact-process__connector" aria-hidden="true" />
                  )}
                </div>
                <h3 className="contact-process__card-title">{step.title}</h3>
                <p className="contact-process__card-body">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta about-contact-cta">
        <div className="about-container about-contact-cta__inner">
          <h2 className="about-contact-cta__title">
            Ready to build something <em>meaningful</em>?
          </h2>
          <p className="about-cta__body about-contact-cta__body">
            We&rsquo;d love to learn about your brand and goals. Get in touch and let&rsquo;s create
            something great together.
          </p>
          <div className="about-contact-cta__actions">
            <a className="about-cta__btn" href="mailto:info@velvetydesign.com">
              Email Us
              <Mail size={14} />
            </a>
            <a className="about-contact-cta__outline" href="tel:+12066015969">
              Call (206) 601-5969
              <Phone size={14} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
