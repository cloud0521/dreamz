import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand"><Link to="/" className="brand-mark"><span>Dream<span className="brand-z">Z</span></span><small>Digital wedding experiences</small></Link><p>We don't build wedding websites.<br />We craft digital wedding experiences.</p></div>
          <div className="footer-links"><p>Explore</p><Link to="/designs">The designs</Link><Link to="/pricing">Pricing</Link><Link to="/faq">Questions</Link><Link to="/contact">Contact</Link></div>
          <div className="footer-invite"><p className="eyebrow">For your once-in-a-lifetime</p><h2>Let your story<br /><em>make the first impression.</em></h2><Link to="/contact" className="footer-cta">Request your preview <ArrowUpRight size={16} /></Link></div>
        </div>
        <div className="footer-signature">Crafted with love by DreamZ, creating timeless digital wedding experiences.</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} DreamZ. All rights reserved.</span><nav aria-label="Legal and business information"><Link to="/terms">Terms</Link><Link to="/refund-policy">Refunds</Link><Link to="/privacy">Privacy</Link></nav></div>
      </Container>
    </footer>
  )
}

export default Footer
