import { Check } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const inclusions = [
  'Personalized wedding design',
  'RSVP tracking',
  'Photo gallery',
  'Prenup video integration',
  'Background music',
  'Live countdown',
  'Google Maps integration',
  'Ceremony & reception details',
  'Dress code section',
  'Mobile-friendly experience',
  'Revisions until finalization',
]

function PricingSection() {
  return (
    <section id="pricing" className="bg-white/40 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple Pricing"
          title="One Elegant Experience. No Complicated Packages."
          description="Start with everything you need for a beautiful digital wedding invitation."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-4xl border border-black/5 bg-white p-7 shadow-sm sm:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dreamz-burgundy">
                DreamZ Digital Wedding Experience
              </p>

              <div className="mt-5">
                <span className="font-display text-6xl font-medium text-dreamz-charcoal">
                  ₱1,000
                </span>

                <p className="mt-2 text-sm text-dreamz-muted">
                  Starting price
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dreamz-cream text-dreamz-burgundy">
                    <Check size={13} strokeWidth={2} />
                  </div>

                  <p className="text-sm leading-6 text-dreamz-charcoal">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-black/5 pt-6 text-center">
              <p className="text-sm leading-6 text-dreamz-muted">
                Final pricing may depend on custom requests beyond the standard
                DreamZ experience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PricingSection