import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../../data/content'
import Brand from '../Brand/Brand'
import './Header.css'

const TRADE_WORKS = {
  label: 'Trade Works',
  to: '/trade-works',
  sub: [
    'Painting Services',
    'Roofing',
    'Tiling',
    'Carpentry',
    'Plastering',
  ],
  subTo: [
    '/trade-works/painting',
    '/trade-works/roofing',
    '/trade-works/tiling',
    '/trade-works/carpentry',
    '/trade-works/plastering',
  ],
}

// "Project Delivery" / "Projects Delivery" dono match honge
const isProjectDelivery = (n) => /projects?\s*delivery/i.test(n.label)

// Trade Works ko Project Delivery ke baad insert karta hai
function buildNavItems(nav) {
  const existing = nav.find((n) => n.label === TRADE_WORKS.label)
  const tradeWorks = existing || TRADE_WORKS

  // Pehle se NAV me ho to usko hata do, phir sahi jagah par daalo
  const base = nav.filter((n) => n.label !== TRADE_WORKS.label)
  const idx = base.findIndex(isProjectDelivery)

  // Project Delivery nahi mila to end me add hoga
  if (idx === -1) return [...base, tradeWorks]

  return [...base.slice(0, idx + 1), tradeWorks, ...base.slice(idx + 1)]
}

export default function Header() {
  const [sc, setSc] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setSc(window.scrollY > 40)

    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])

  const items = buildNavItems(NAV)

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
          {items.map((n) => (
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