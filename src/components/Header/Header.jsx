
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../../data/content'
import Brand from '../Brand/Brand'
import './Header.css'

export default function Header() {
  const [sc, setSc] = useState(false)
  const [open, setOpen] = useState(false)

  const base = import.meta.env.BASE_URL

  useEffect(() => {
    const f = () => setSc(window.scrollY > 40)

    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <header className={`hd ${sc ? 'sc' : ''}`}>
      <div className="topbar">
        <div className="container">
          <span>📞 +61 452 456 745</span>
          <span>✉ careers@cramergroup.au</span>
          <a href="tel:1800CRAMER" className="em">
            24/7 Emergency: 1800-CRAMER
          </a>
        </div>
      </div>

      <div className="container bar">
        <Brand size="md" onClick={() => setOpen(false)} />

        <nav className={open ? 'open' : ''}>
          {NAV.map((n) => (
            <div className="item" key={n.label}>
              <NavLink
                to={n.to}
                end={n.to === '/'}
                onClick={() => setOpen(false)}
              >
                {n.label}
                {n.sub && <i>▾</i>}
              </NavLink>

              {n.sub && (
                <ul className="drop">
                  {n.sub.map((s, i) => (
                    <li key={s}>
                      <Link
                        to={n.subTo ? n.subTo[i] : n.to}
                        onClick={() => setOpen(false)}
                      >
                        {s}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="btn btn-primary cta"
            onClick={() => setOpen(false)}
          >
            Request Consultation
          </Link>
        </nav>

        <button
          className={`burger ${open ? 'x' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
