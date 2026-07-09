import { useEffect, useState } from 'react'
import BrandEyeLogo from '@/components/BrandEyeLogo'
import BrandName from '@/components/BrandName'
import SiteNavMenu, { isActivePath } from '@/components/SiteNavMenu'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function SubpageNavigation() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [compact, setCompact] = useState(false)

  const onServices = isActivePath(pathname, 'services')
  const onAbout = isActivePath(pathname, 'about')

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.subpage-scroll')
    if (!root) return

    const onScroll = () => setCompact(root.scrollTop > 48)
    onScroll()
    root.addEventListener('scroll', onScroll, { passive: true })
    return () => root.removeEventListener('scroll', onScroll)
  }, [])

  const onWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate('/#work')
  }

  return (
    <header
      className={`about-top-nav${compact ? ' about-top-nav--compact' : ''}`}
      aria-label="VelvetY navigation"
    >
      <div className="about-top-nav__shell">
        <Link className="about-top-nav__brand" to="/" aria-label="VelvetY home">
          <BrandEyeLogo />
          <span><BrandName /></span>
        </Link>

        <div className="about-top-nav__right">
          <SiteNavMenu
            variant="subpage"
            onServices={onServices}
            onAbout={onAbout}
            onWorkClick={onWorkClick}
          />
        </div>
      </div>
    </header>
  )
}
