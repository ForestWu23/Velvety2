/** Scroll to Selected Works (#work), retrying until the section is mounted. */
export function scrollToWorkSection() {
  const attempt = (tries = 0) => {
    const el = document.getElementById('work')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', '#work')
      return true
    }
    if (tries < 40) requestAnimationFrame(() => attempt(tries + 1))
    return false
  }
  return attempt()
}
