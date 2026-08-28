import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'

function FreePreviewSection() {
  const navigate = useNavigate()

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-dreamz-burgundy px-5 py-12 text-white sm:rounded-[2.5rem] sm:px-10 sm:py-14 lg:px-16 lg:py-18">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-gold">
              Free Personalized Preview
            </p>

            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              See Your Story Before You Decide.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Send us your names, wedding date, preferred design, and one
              favorite prenup photo. We’ll create a personalized preview so
              you can experience it before deciding.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => navigate('/contact')}
                className="bg-white/80 text-dreamz-burgundy hover:bg-dreamz-cream"
              >
                <span className=" text-dreamz-burgundy flex items-center gap-2">
                  Get My Free Preview
                  <ArrowRight size={17} />
                </span>
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/60">
              No obligation to continue if it’s not the right fit for you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FreePreviewSection
