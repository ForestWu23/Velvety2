export default function Navigation() {
  return (
    <header className="top-nav" aria-label="VelvetY main navigation">
      <a className="brand" href="/" aria-label="VelvetY home">
        <span className="brand-mark" aria-hidden="true" />
        <span>VelvetY</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#studio">Studio</a>
        <a className="nav-cta" href="#contact">Start a project</a>
      </nav>
    </header>
  )
}
