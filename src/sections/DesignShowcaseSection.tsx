import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import DesignCard from '../components/DesignCard'
import { invitationDesigns } from '../data/designs'

function DesignShowcaseSection() {
  return (
    <section id="designs" className="collection-section">
      <Container>
        <div className="section-intro-row collection-heading">
          <div><p className="eyebrow">The DreamZ collection</p><h2>Find your perfect invitation.</h2></div>
          <p>Beautiful designs for your unforgettable day.</p>
          <Link to="/designs" className="text-link collection-all">View all designs <ArrowRight size={15} /></Link>
        </div>
        <div className="design-grid">
          {invitationDesigns.map((design) => <DesignCard key={design.id} design={design} />)}
        </div>
        <div className="collection-mobile-link"><Link to="/designs" className="text-link">View all designs <ArrowRight size={15} /></Link></div>
      </Container>
    </section>
  )
}

export default DesignShowcaseSection
