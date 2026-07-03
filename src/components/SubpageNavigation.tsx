import { useEffect, useState } from 'react'
import BrandName from '@/components/BrandName'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function isActivePath(pathname: string, segment: string) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return normalized === `/${segment}` || normalized.endsWith(`/${segment}`)
}

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
          <span className="brand-mark" aria-hidden="true" />
          <span><BrandName /></span>
        </Link>

        <div className="about-top-nav__right">
          <nav className="about-top-nav__links" aria-label="Primary navigation">
            <Link
              to="/services"
              className={onServices ? 'is-active' : undefined}
              aria-current={onServices ? 'page' : undefined}
            >
              Services
            </Link>
            <a href="#work" onClick={onWorkClick}>Work</a>
            <Link
              to="/about"
              className={onAbout ? 'is-active' : undefined}
              aria-current={onAbout ? 'page' : undefined}
            >
              About
            </Link>
          </nav>

          <Link to="/contact" className="nav-cta nav-cta--shine about-top-nav__cta">
            <span className="nav-cta__shine" aria-hidden="true" />
            <span className="nav-cta__label">Start a project</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
