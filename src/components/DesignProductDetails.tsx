import { ArrowDownRight, ArrowLeft, ArrowUpRight, CalendarDays, Check, Images, MapPin, Music2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import DesignCard from './DesignCard'
import DesignProductGallery from './DesignProductGallery'
import { invitationDesigns } from '../data/designs'
import type { InvitationDesign } from '../types/design'

const includedFeatures = [
  { icon: CalendarDays, label: 'Live wedding countdown' },
  { icon: Images, label: 'Prenup photo gallery' },
  { icon: Music2, label: 'Background music' },
  { icon: MapPin, label: 'Venue details and map links' },
  { icon: Users, label: 'Guest RSVP tracking' },
  { icon: Check, label: 'Personalized wedding details' },
]

type DesignProductDetailsProps = { design: InvitationDesign }

function DesignProductDetails({ design }: DesignProductDetailsProps) {
  const relatedDesigns = invitationDesigns.filter((item) => item.id !== design.id)

  return (
    <main className="product-page">
      <Container>
        <Link to="/designs" className="product-back-link">
          <ArrowLeft size={16} aria-hidden="true" /> All invitation designs
        </Link>

        <section className="product-layout" aria-labelledby="product-title">
          <DesignProductGallery design={design} />

          <div className="product-information">
            <p className="eyebrow">{design.theme}</p>
            <h1 id="product-title">{design.name}</h1>
            <p className="product-description">{design.description}</p>

            {design.palette && design.palette.length > 0 && (
              <div className="product-palette">
                <h2>Color palette</h2>
                <ul>
                  {design.palette.map((color) => (
                    <li key={color.name}>
                      <span
                        className="product-color-swatch"
                        style={{ backgroundColor: color.value }}
                        aria-hidden="true"
                      />
                      <span>{color.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-actions">
              {design.liveDemoUrl ? (
                <a
                  className="button-primary product-action-primary"
                  href={design.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Experience Live Demo <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <p className="product-demo-note">Interactive demo coming soon for this design.</p>
              )}
              <a
                className={design.liveDemoUrl ? 'product-action-secondary' : 'button-primary product-action-primary'}
                href={`/contact?design=${encodeURIComponent(design.slug)}`}
              >
                Get a Free Personalized Preview <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <a className="product-included-link" href="#product-features">
              Explore what’s included <ArrowDownRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="product-features" id="product-features" aria-labelledby="product-features-title">
          <div className="product-section-heading">
            <p className="eyebrow">Made for your celebration</p>
            <h2 id="product-features-title">Everything your guests need.</h2>
            <p>Every detail is personalized for your day and brought together in one easy-to-share invitation.</p>
          </div>
          <ul className="product-feature-list">
            {includedFeatures.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </section>

        {relatedDesigns.length > 0 && (
          <section className="product-related" aria-labelledby="related-designs-title">
            <div className="product-related-heading">
              <div>
                <p className="eyebrow">A few more to love</p>
                <h2 id="related-designs-title">Explore other designs.</h2>
              </div>
              <Link to="/designs" className="text-link">View all designs <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
            <div className="design-grid product-related-grid">
              {relatedDesigns.map((relatedDesign) => (
                <DesignCard key={relatedDesign.id} design={relatedDesign} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  )
}

export default DesignProductDetails
