import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import DesignCard from '../components/DesignCard'
import { invitationDesigns } from '../data/designs'

function DesignShowcaseSection() {
  return (
    <section id="designs" className="collection-section">
      <Container>
        <div className="section-intro-row">
          <div><p className="eyebrow">The DreamZ collection</p><h2>Find the feeling<br /><em>that feels like you.</em></h2></div>
          <p>Each invitation begins with a distinct mood. Choose a design to explore the details, motion, and story inside.</p>
          <Link to="/designs" className="text-link collection-all">View all designs <ArrowRight size={15} /></Link>
        </div>
        <div className="design-grid">
          {invitationDesigns.map((design, index) => <DesignCard key={design.id} design={design} index={index} />)}
        </div>
        <div className="collection-mobile-link"><Link to="/designs" className="text-link">Explore the full collection <ArrowRight size={15} /></Link></div>
      </Container>
    </section>
  )
}

export default DesignShowcaseSection
