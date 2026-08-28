import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'

function FinalCTASection() {
  const navigate = useNavigate()

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
            Your Story Starts Here
          </p>

          <h2 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
            Ready to Turn Your Invitation Into an Experience?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">
            Explore a DreamZ design or request your personalized preview and
            see how your wedding can come to life online.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-dreamz-burgundy-dark"
            >
              Get My Free Preview
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => navigate('/designs')}
              className="rounded-full border border-dreamz-burgundy px-6 py-3 text-sm font-semibold text-dreamz-burgundy transition-all duration-300 hover:-translate-y-0.5 hover:bg-dreamz-burgundy hover:text-white"
            >
              View Live Designs
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTASection
