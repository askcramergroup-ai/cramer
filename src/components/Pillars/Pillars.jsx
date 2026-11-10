import { Link } from 'react-router-dom'
import Reveal from '../Reveal/Reveal'
import { PILLARS } from '../../data/content'
import './Pillars.css'

export default function Pillars() {
  return (
    <section className="section alt pillars-section">
      <div className="container">

        <Reveal>
          <div className="center pillars-heading">
            <span className="eyebrow">Our Core Pillars</span>

            <h2 className="title">
              Five Pillars. One Integrated Firm.
            </h2>

            <p className="lead">
              A multidisciplinary consulting &amp; contracting partner
              for commercial, industrial, institutional and residential clients.
            </p>
          </div>
        </Reveal>

        <div className="grid g5 pg pillars-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} delay={i * 150}>
              <article className="pillar-card">

                <div className="pillar-card-inner">

                  {/* FRONT SIDE */}
                  <div className="pillar-face pillar-front">
                    <span className="pillar-number">
                      {p.n}
                    </span>

                    <span className="pillar-index">
                      PILLAR / 0{i + 1}
                    </span>

                    <div className="pillar-front-content">
                      <span className="pillar-kicker">
                        CRAMER GROUP
                      </span>

                      <h3>{p.t}</h3>

                      <p>{p.d}</p>

                      <span className="pillar-flip-hint">
                        HOVER TO EXPLORE
                        <span>↗</span>
                      </span>
                    </div>

                    <div className="pillar-orbit pillar-orbit-one" />
                    <div className="pillar-orbit pillar-orbit-two" />
                  </div>

                  {/* BACK SIDE */}
                  <div className="pillar-face pillar-back">
                    <span className="pillar-back-label">
                      WHAT WE DELIVER
                    </span>

                    <h3>{p.t}</h3>

                    <ul className="pillar-back-list">
                      {p.l.map((item) => (
                        <li key={item}>
                          <span className="pillar-check">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={p.to} className="pillar-explore">
                      Explore Pillar
                      <span>↗</span>
                    </Link>
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}