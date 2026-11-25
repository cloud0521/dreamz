import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import type { InvitationDesign } from '../types/design'

type DesignCardProps = { design: InvitationDesign }

function DesignCard({ design }: DesignCardProps) {
  return (
    <article className="design-card">
      <Link
        to={`/designs/${design.slug}`}
        className="design-card-link"
        aria-label={`View ${design.name}: ${design.shortDescription}`}
      >
        <span className="design-image">
          {design.previewImage ? (
            <img
              src={design.previewImage}
              alt={`${design.name} digital wedding invitation preview`}
              loading="lazy"
              decoding="async"
              width="423"
              height="833"
            />
          ) : (
            <span className="design-placeholder" aria-hidden="true">
              <span>{design.name}</span>
              <i>DreamZ invitation</i>
            </span>
          )}
        </span>
        <span className="design-meta">
          <span className="design-copy">
            <span className="design-name">{design.name}</span>
            <span className="design-description">{design.shortDescription}</span>
          </span>
          <span className="design-link">
            View design <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </Link>
    </article>
  )
}

export default DesignCard
