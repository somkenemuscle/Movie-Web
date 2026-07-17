import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isAuthPage =
    location.pathname === '/login' || location.pathname === '/signup'

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar__logo-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <rect x="2" y="7" width="28" height="20" rx="3" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
              <rect x="2" y="7" width="5" height="20" fill="currentColor" opacity="0.25" />
              <rect x="25" y="7" width="5" height="20" fill="currentColor" opacity="0.25" />
              <rect x="4" y="10" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="4" y="17" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="25" y="10" width="3" height="4" rx="1" fill="currentColor" />
              <rect x="25" y="17" width="3" height="4" rx="1" fill="currentColor" />
              <polygon points="13,12 13,22 22,17" fill="currentColor" opacity="0.9" />
            </svg>
          </span>
          <span className="navbar__logo-text">CineVault</span>
        </Link>

        {!isAuthPage && (
          <>
            <nav
              className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
              aria-label="Main navigation"
            >
              <a href="#home" className="navbar__link" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#featured" className="navbar__link" onClick={() => setMenuOpen(false)}>
                Movies
              </a>
              <a href="#features" className="navbar__link" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <Link
                to="/login"
                className="navbar__link navbar__link--mobile-only"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="navbar__link navbar__link--mobile-only"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </nav>

            <div className="navbar__actions">
              <Button to="/login" variant="ghost" size="sm">
                Login
              </Button>
              <Button to="/signup" variant="primary" size="sm">
                Sign Up
              </Button>
            </div>

            <button
              type="button"
              className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </>
        )}

        {isAuthPage && (
          <Link to="/" className="navbar__back">
            ← Back to Home
          </Link>
        )}
      </div>
    </header>
  )
}
