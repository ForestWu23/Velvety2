const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const url = (file: string) => `${base}/assets/images/${file}`
const seattle = (file: string) => `${base}/assets/images/seattle/${file}`
const contact = (file: string) => `${base}/assets/images/contact/${file}`
const servicesCta = (file: string) => `${base}/assets/images/services-cta/${file}`

export const assets = {
  whoWeAreImage: url('whoWeAreImage.jpg'),
  ourServicesImage: url('ourServicesImage.png'),
  brightRightImage: url('BrightRightImage.png'),
  servicePageBrandIdentityIcon: url('ServicePageBrandIdentityIcon.png'),
  servicePageWebProductIcon: url('ServicePageWebProductIconImage.png'),
  servicePagePackagingIcon: url('ServicePagePackagingIconImage.png'),
  servicePageSocialIcon: url('ServicePageSocialIconImage.png'),
  yaLiPhoto: url('YaLiPhoto2.jpg'),
  sihangYangPhoto: url('SihangYangPhoto2.png'),
  sammiTangPhoto: url('SammiTangPhoto2.png'),
  jinXuPhoto: url('JinXuPhoto.jpg'),
  forestWuPhoto: url('ForestWuPhoto.png'),
  leslieChenPhoto: url('LeslieChenPhoto.png'),
  seattlePhotos: [
    { src: seattle('seattle-1.jpg'), alt: 'Seattle skyline with mountain backdrop' },
    { src: seattle('seattle-2.jpg'), alt: 'Downtown Seattle at dusk' },
    { src: seattle('seattle-3.jpg'), alt: 'Space Needle at golden hour' },
    { src: seattle('seattle-4.jpg'), alt: 'Seattle waterfront and city skyline' },
    { src: seattle('seattle-5.jpg'), alt: 'Seattle Great Wheel on the waterfront' },
  ],
  contactPhotos: [
    { src: contact('contact-1.jpg'), alt: 'Creative workspace with laptop' },
    { src: contact('contact-2.jpg'), alt: 'Designer collaborating at a desk' },
    { src: contact('contact-3.jpg'), alt: 'Team meeting in a modern studio' },
    { src: contact('contact-4.jpg'), alt: 'Professional working on a project' },
  ],
  servicesCtaPhotos: [
    { src: servicesCta('services-cta-1.jpg'), alt: 'Designer reviewing creative work at a desk' },
    { src: servicesCta('services-cta-2.jpg'), alt: 'Team collaborating on a branding project' },
    { src: servicesCta('services-cta-3.jpg'), alt: 'Creative professional in a studio environment' },
    { src: servicesCta('services-cta-4.jpg'), alt: 'Modern workspace with design materials' },
    { src: servicesCta('services-cta-5.jpg'), alt: 'Hands working on a visual design layout' },
  ],
} as const
