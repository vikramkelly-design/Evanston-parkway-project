import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const isHome = location.pathname === '/'

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${isHome ? 'nav--home' : 'nav--inner'}`}>
      <Link to="/" className="nav__logo">
        <span className="nav__logo-text">Evanston Parkway Project</span>
      </Link>

      <button
        className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        <li>
          <Link to="/chemistry" className={location.pathname === '/chemistry' ? 'active' : ''}>
            Chemistry
          </Link>
        </li>
        <li>
          <Link to="/idea" className={location.pathname === '/idea' ? 'active' : ''}>
            Idea
          </Link>
        </li>
      </ul>
    </nav>
  )
}
