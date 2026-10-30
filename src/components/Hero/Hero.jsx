import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../../data/media'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)
  const videoSrc = `${import.meta.env.BASE_URL}videos/hero_videos.mp4`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // React me "muted" DOM par reliably set nahi hota, iOS ke liye zaroori hai
    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      const p = video.play()
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          /* Autoplay blocked (Low Power Mode): poster image dikhegi */
        })
      }
    }

    tryPlay()

    const onVisible = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }

    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('touchstart', tryPlay, { once: true, passive: true })

    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('touchstart', tryPlay)
    }
  }, [])

  return (
    <section className="hero">
      {/* Background Video (wrapper animates, video stays static) */}
      <div className="hbg" aria-hidden="true">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={IMG.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          tabIndex={-1}
        />
      </div>

      {/* Background Overlays */}
      <div className="hov" />
      <div className="grid-lines" />

      {/* Hero Content */}
      <div className="container hc">
        <span className="eyebrow">Engineering | Projects | Mentoring</span>

        <h1>
          <span className="line">Precision Engineering.</span>
          <span className="line">
            <em>Turnkey Project Delivery.</em>
          </span>
          <span className="line">Industry Mentorship.</span>
        </h1>

        <p>
          Cramer Group provides high-performance commercial HVAC,
          multidisciplinary MEP engineering, and comprehensive project
          governance—backed by an enduring commitment to building the
          next generation of technical leaders.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="hb">
          <Link to="/contact" className="btn btn-primary">
            Request a Project Consultation →
          </Link>

          <a href="tel:1800CRAMER" className="btn btn-ghost">
            24/7 HVAC Emergency Service Line →
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll">
        <span />
      </div> */}
    </section>
  )
}