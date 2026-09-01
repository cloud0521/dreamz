import { Link } from 'react-router-dom'
import Container from './Container'

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-dreamz-cream/40 py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div>
            <Link
              to="/"
              className="font-display text-3xl font-semibold text-dreamz-burgundy"
            >
              DreamZ
            </Link>

            <p className="mt-3 text-sm text-dreamz-muted">
              Where Simplicity Meets Elegance.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-dreamz-muted">
              We don't build wedding websites. We craft digital wedding
              experiences.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-dreamz-charcoal">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-dreamz-muted">
              <Link to="/designs" className="hover:text-dreamz-burgundy">
                Designs
              </Link>

              <a href="/pricing" className="hover:text-dreamz-burgundy">
                Pricing
              </a>

              <a href="/faq" className="hover:text-dreamz-burgundy">
                FAQ
              </a>

              <Link to="/contact" className="hover:text-dreamz-burgundy">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-dreamz-charcoal">
              Start Your Invitation
            </p>

            <p className="mt-4 text-sm leading-6 text-dreamz-muted">
              Request a free personalized preview and see your wedding before
              you decide.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex rounded-full bg-dreamz-burgundy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
            >
              Get Free Preview
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/5 pt-6 text-sm text-dreamz-muted lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} DreamZ. All rights reserved.</p>
          <nav aria-label="Legal and business information">
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <Link to="/terms" className="hover:text-dreamz-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">Terms of Service</Link>
              <Link to="/refund-policy" className="hover:text-dreamz-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">Refund &amp; Cancellation</Link>
              <Link to="/privacy" className="hover:text-dreamz-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-dreamz-burgundy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">Contact</Link>
            </div>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
