import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Footer.css'

/* ==============================
   SOCIAL ICONS (inline SVG)
============================== */

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.3-1.6 1.7-1.6H17V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.3h2.8V22h3.2z" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="ft">
      <div className="container fg">

        {/* Brand */}
        <div className="footer-brand">
          <Brand size="lg" />

          <p>
            Engineering high-performance, energy-efficient environments,
            delivering complex projects seamlessly, building quality trade
            works, and empowering industry talent through mentorship.
          </p>

          <div className="soc">
            {[
              {
                label: 'Facebook',
                icon: <FacebookIcon />,
                href: 'https://www.facebook.com/share/1SEQ6DDWAt/?mibextid=wwXIfr',
              },
              {
                label: 'Instagram',
                icon: <InstagramIcon />,
                href: 'https://www.instagram.com/cramergroupengineering?srtk=bDdzOWU3bG9qcGw3&utm_source=qr',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <Link to="/services/hvac">HVAC &amp; Mechanical</Link>
          <Link to="/services/hvac#mep">MEP Engineering</Link>
          <Link to="/services/projects">Project Delivery</Link>
          <Link to="/mentoring">Mentoring &amp; Advisory</Link>
        </div>

        {/* Trade Works */}
        <div className="footer-column footer-trade">
          <h4>Trade Works</h4>
          <Link to="/services/trade-works#painting">Painting Services</Link>
          <Link to="/services/trade-works#roofing">Roofing</Link>
          <Link to="/services/trade-works#tiling">Tiling</Link>
          <Link to="/services/trade-works#carpentry">Carpentry</Link>
          <Link to="/services/trade-works#plastering">Plastering</Link>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/about#values">Our Values</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h4>Get in Touch</h4>

          <p>📍 Unit 1, 38 Ross St, Goulburn NSW 2580</p>
          <p>
            📞 <a href="tel:+61452456745">+61 452 456 745</a>
          </p>
          <p>
            ☎ <a href="tel:1800272637">+1 (800) CRAMER-HQ</a>
          </p>
          <p>
            ✉ <a href="mailto:Admin@cramergroup.au">Admin@cramergroup.au</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="fb">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Cramer Group. All rights reserved.
          </span>

          <span className="ftag">
            Engineering<b>|</b>Projects<b>|</b>Trade Works<b>|</b>Mentoring
          </span>
        </div>
      </div>
    </footer>
  )
}