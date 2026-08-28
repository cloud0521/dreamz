import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Container from '../components/Container'
import { fadeUp, gentleFloat, stagger } from '../lib/motion'
import heroInvitation from '../assets/hero-invitation.jpg'

function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 py-10 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-12 lg:py-16"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-dreamz-gold/30 bg-white/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-dreamz-burgundy sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <Sparkles size={14} />
              Digital Wedding Experiences
            </div>

            <h1 className="font-display text-[2.75rem] font-medium leading-[0.98] text-dreamz-charcoal min-[375px]:text-5xl sm:text-6xl lg:text-7xl">
              Your Wedding Invitation,
              <span className="block text-dreamz-burgundy">
                Reimagined.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-dreamz-muted sm:text-lg">
              DreamZ transforms your wedding details, photos, music, and love
              story into an elegant interactive experience your guests can
              open, explore, and remember.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => navigate('/contact')}>
                <span className="flex items-center gap-2">
                  Get My Free Preview
                  <ArrowRight size={17} />
                </span>
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate('/designs')}
              >
                View Live Designs
              </Button>
            </div>

            <p className="mt-5 text-sm text-dreamz-muted">
              See your personalized preview before deciding.
            </p>
          </motion.div>

          <motion.div
              variants={gentleFloat}
              initial="initial"
              animate="floating"
              className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm lg:max-w-md"
            >
            <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-dreamz-burgundy/10 blur-3xl" />
            <div className="absolute -right-8 bottom-12 h-40 w-40 rounded-full bg-dreamz-gold/15 blur-3xl" />

            <div className="relative mx-auto w-fit rounded-[2rem] border border-black/5 bg-white/60 p-3 shadow-2xl shadow-black/10 backdrop-blur sm:rounded-[2.5rem] sm:p-4">
              <div className="mx-auto block h-auto max-h-[65svh] w-auto max-w-full object-contain lg:max-h-[70vh]">
                <img
                  src={heroInvitation}
                  alt="DreamZ digital wedding invitation preview"
                  width={900}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="mx-auto block h-auto max-h-[65svh] w-auto max-w-full object-contain lg:max-h-[70vh]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default HeroSection
