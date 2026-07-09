import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

type Props = {
  variant: 'home' | 'subpage'
  onHome?: boolean
  onServices?: boolean
  onAbout?: boolean
  onWorkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function isActivePath(pathname: string, segment: string) {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return normalized === `/${segment}` || normalized.endsWith(`/${segment}`)
}

export default function SiteNavMenu({
  variant,
  onHome = false,
  onServices = false,
  onAbout = false,
  onWorkClick,
}: Props) {
  const [open, setOpen] = useState(false)
  const isSubpage = variant === 'subpage'
  const linksClass = isSubpage ? 'about-top-nav__links' : 'nav-links'
  const ctaClass = isSubpage ? 'nav-cta nav-cta--shine about-top-nav__cta' : 'nav-cta nav-cta--shine'
  const drawerClass = isSubpage ? 'nav-drawer nav-drawer--light' : 'nav-drawer nav-drawer--dark'
  const toggleClass = isSubpage ? 'nav-toggle nav-toggle--light' : 'nav-toggle nav-toggle--dark'

  useEffect(() => {
    document.body.classList.toggle('nav-drawer-open', open)
    return () => document.body.classList.remove('nav-drawer-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  const workClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onWorkClick(e)
    close()
  }

  const homeClass = onHome ? 'is-active' : undefined

  const desktopLinks = (
    <>
      <Link to="/" className={homeClass} aria-current={onHome ? 'page' : undefined} onClick={close}>
        Home
      </Link>
      <Link
        to="/services"
        className={onServices ? 'is-active' : undefined}
        aria-current={onServices ? 'page' : undefined}
        onClick={close}
      >
        Services
      </Link>
      <a href="#work" onClick={workClick}>Work</a>
      <Link
        to="/about"
        className={onAbout ? 'is-active' : undefined}
        aria-current={onAbout ? 'page' : undefined}
        onClick={close}
      >
        About
      </Link>
      <Link to="/contact" className={ctaClass} onClick={close}>
        <span className="nav-cta__shine" aria-hidden="true" />
        <span className="nav-cta__label">Start a project</span>
      </Link>
    </>
  )

  return (
    <>
      <nav className={`${linksClass} ${linksClass}--desktop`} aria-label="Primary navigation">
        {desktopLinks}
      </nav>

      <button
        type="button"
        className={toggleClass}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-nav-drawer"
        onClick={() => setOpen(current => !current)}
      >
        {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
      </button>

      <div
        id="site-nav-drawer"
        className={`${drawerClass}${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        onClick={close}
      >
        <nav className="nav-drawer__panel" aria-label="Mobile navigation" onClick={e => e.stopPropagation()}>
          <Link to="/" className={homeClass} aria-current={onHome ? 'page' : undefined} onClick={close}>
            Home
          </Link>
          <Link
            to="/services"
            className={onServices ? 'is-active' : undefined}
            aria-current={onServices ? 'page' : undefined}
            onClick={close}
          >
            Services
          </Link>
          <a href="#work" onClick={workClick}>Work</a>
          <Link
            to="/about"
            className={onAbout ? 'is-active' : undefined}
            aria-current={onAbout ? 'page' : undefined}
            onClick={close}
          >
            About
          </Link>
          <Link to="/contact" className="nav-drawer__cta" onClick={close}>
            Start a project
          </Link>
        </nav>
      </div>
    </>
  )
}

export { isActivePath }
