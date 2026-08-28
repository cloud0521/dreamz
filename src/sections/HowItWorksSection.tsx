import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Choose Your Design',
    description:
      'Browse DreamZ invitation experiences and choose the style that feels right for your wedding.',
  },
  {
    number: '02',
    title: 'Send Your Details',
    description:
      'Share your names, wedding date, photos, venues, music, and other important details.',
  },
  {
    number: '03',
    title: 'We Personalize It',
    description:
      'DreamZ customizes the invitation around your story, theme, and wedding information.',
  },
  {
    number: '04',
    title: 'Preview & Approve',
    description:
      'Review your personalized invitation and request refinements before finalizing it.',
  },
]

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Simple From Start to Finish"
          title="How DreamZ Works."
          description="You focus on your wedding. We take care of turning your details into a beautiful digital experience."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="font-display text-5xl text-dreamz-gold">
                {step.number}
              </p>

              <h3 className="mt-4 font-display text-2xl font-medium text-dreamz-charcoal">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-dreamz-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorksSection