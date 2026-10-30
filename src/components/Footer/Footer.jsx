import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './Footer.css'

/* ==============================
   SOCIAL ICONS (inline SVG)
============================== */

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
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

/* Future use — uncomment when you need them
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M6.9 8.6H3.6V20h3.3V8.6zM5.3 3.3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.2c0-3-1.6-4.8-4.1-4.8-1.4 0-2.4.8-2.8 1.5V8.6h-3.3V20h3.3v-6.1c0-1.6.6-2.7 2-2.7s1.7 1.1 1.7 2.7V20h3.3l-.1-6.8z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
  </svg>
)
*/

export default function Footer() {
  const base = import.meta.env.BASE_URL

  return (
    <footer className="ft">
      <div className="container fg">

        {/* Brand */}
        <div className="footer-brand">
          <Brand size="lg" />

          <p>
            Engineering high-performance, energy-efficient environments,
            delivering complex projects seamlessly, and empowering industry
            talent through mentorship.
          </p>

          <div className="soc">
            {[
              // { label: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://www.linkedin.com/' },
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
              // { label: 'YouTube', icon: <YouTubeIcon />, href: 'https://www.youtube.com/' },
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

          <p>📍 [Street Address / Suite #, City, Country]</p>
          <p>
            📞 <a href="tel:+61452456745">+61 452 456 745</a>
          </p>
          <p>
            ☎ <a href="tel:1800272637">+1 (800) CRAMER-HQ</a>
          </p>

          <p>
            ✉{' '}
            <a href="mailto:info@cramergroup.com">
              careers@cramergroup.au
            </a>
          </p>

          {/* <p>
            ✉{' '}
            <a href="mailto:careers@cramergroup.com">
              careers@cramergroup.com
              careers@cramergroup.au
            </a>
          </p> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="fb">
        <div className="container">
          <span>
            © {new Date().getFullYear()} Cramer Group. All rights reserved.
          </span>

          <span className="ftag">
            Engineering<b>|</b>Projects<b>|</b>Mentoring
          </span>
        </div>
      </div>
    </footer>
  )
}