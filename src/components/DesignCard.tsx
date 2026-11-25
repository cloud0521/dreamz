import { ArrowUpRight } from 'lucide-react'
import type { InvitationDesign } from '../types/design'
import { Link } from 'react-router'

type DesignCardProps = { design: InvitationDesign; index?: number }

function DesignCard({ design, index = 0 }: DesignCardProps) {
  return (
    <article className="design-card group">
      <Link to={`/designs/${design.slug}`} className="design-image" aria-label={`Explore ${design.name} wedding invitation design`}>
        {design.previewImage ? <img src={design.previewImage} alt={`${design.name} digital wedding invitation preview`} loading="lazy" decoding="async" /> : <div className="design-placeholder"><span>{design.theme}</span><strong>{design.name}</strong><i>DreamZ invitation</i></div>}
        <span className="design-index">0{index + 1}</span>
        <span className="design-open" aria-hidden="true"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="design-meta"><div><p className="eyebrow">{design.theme}</p><h3>{design.name}</h3><p>{design.shortDescription}</p></div><Link to={`/designs/${design.slug}`} className="design-link">Discover <ArrowUpRight size={15} /></Link></div>
    </article>
  )
}

export default DesignCard
