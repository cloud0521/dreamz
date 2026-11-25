import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import heroInvitation from '../assets/hero-invitation.jpg'

function HeroSection() {
  return (
    <section className="landing-hero">
      <Container className="landing-hero-inner">
        <div className="landing-hero-copy">
          <h1>Your wedding,<br /><em>beautifully yours.</em></h1>
          <p className="landing-hero-description">
            A digital invitation shaped around your story and made lovely to open, share, and remember.
          </p>
        </div>

        <figure className="landing-hero-visual">
          <img
            className="landing-phone"
            src={heroInvitation}
            alt="A DreamZ digital wedding invitation preview in burgundy"
            width={403}
            height={800}
            fetchPriority="high"
            decoding="async"
          />
        </figure>

        <div className="landing-hero-actions">
          <Link to="/contact" className="landing-hero-primary">
            Get a free preview <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link to="/designs" className="landing-hero-secondary">Explore invitation designs</Link>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
