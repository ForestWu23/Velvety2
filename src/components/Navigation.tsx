import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useProjectForm } from '@/components/ProjectFormWidget'

function scrollToWork() {
  const el = document.getElementById('work')
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', '#work')
  return true
}

export default function Navigation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { openForm } = useProjectForm()

  const onWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const onHome = location.pathname === '/' || location.pathname === ''
    if (onHome) {
      scrollToWork()
      return
    }
    navigate('/')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToWork())
    })
  }

  return (
    <header className="top-nav" aria-label="VelvetY main navigation">
      <Link className="brand" to="/" aria-label="VelvetY home">
        <span className="brand-mark" aria-hidden="true" />
        <span>VelvetY</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#work" onClick={onWorkClick}>Work</a>
        <Link to="/about">About</Link>
        <button type="button" className="nav-cta" onClick={openForm}>Start a project</button>
      </nav>
    </header>
  )
}
