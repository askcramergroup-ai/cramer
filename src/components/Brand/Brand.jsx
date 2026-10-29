import { Link } from 'react-router-dom'
import './Brand.css'

const Letters = ({ text }) =>
  text.split('').map((ch, i) => <span key={i}>{ch}</span>)

export default function Brand({ size = 'md', onClick }) {
  const logoPath = `${import.meta.env.BASE_URL}logo-emblem.png`

  return (
    <Link
      to="/"
      className={`cgb cgb-${size}`}
      onClick={onClick}
      aria-label="Cramer Group home"
    >
      <img className="cgb-mark" src={logoPath} alt="Cramer Group logo" />

      <span className="cgb-text" aria-hidden="true">
        <span className="cgb-name"><Letters text="CRAMER" /></span>
        <span className="cgb-group"><Letters text="GROUP" /></span>
        <span className="cgb-tag">
          <span>Engineering</span>
          <i>|</i>
          <span>Projects</span>
          <i>|</i>
          <span>Mentoring</span>
        </span>
      </span>
    </Link>
  )
}