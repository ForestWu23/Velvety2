import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BrandEyeLogo from '@/components/BrandEyeLogo'
import BrandName from '@/components/BrandName'
import SiteNavMenu from '@/components/SiteNavMenu'
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
          <BrandEyeLogo />
          <span><BrandName /></span>
        </Link>
        <SiteNavMenu variant="home" onHome={onHome} onWorkClick={onWorkClick} />
      </div>
    </header>
  )
}
