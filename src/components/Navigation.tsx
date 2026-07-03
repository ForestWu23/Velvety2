import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BrandName from '@/components/BrandName'
import { scrollToWorkSection } from '@/lib/scrollToWork'

function isHomePath(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalized = pathname.replace(/\/$/, '') || '/'
  if (normalized === '/' || normalized === '') return true
  if (base && normalized === base) return true
  return false
}

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = isHomePath(location.pathname)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onHome) {
      scrollToWorkSection()
      return
    }
    navigate('/#work')
  }

  return (
    <header
      className={[
        'top-nav',
        compact && 'top-nav--compact',
        onHome ? '' : 'top-nav--page',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="VelvetY main navigation"
    >
      <div className="top-nav__shell">
        <Link className="brand" to="/" aria-label="VelvetY home">
          <span className="brand-mark" aria-hidden="true" />
          <span><BrandName /></span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/services">Services</Link>
          <a href="#work" onClick={onWorkClick}>Work</a>
          <Link to="/about">About</Link>
          <Link to="/contact" className="nav-cta nav-cta--shine">
            <span className="nav-cta__shine" aria-hidden="true" />
            <span className="nav-cta__label">Start a project</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
