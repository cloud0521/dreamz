import { HeartHandshake, Eye, WandSparkles } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const trustPoints = [
  {
    icon: WandSparkles,
    title: 'Personalized for Your Wedding',
    description:
      'Your names, photos, colors, story, music, venues, and details are carefully adapted to match your wedding.',
  },
  {
    icon: Eye,
    title: 'Preview Before You Decide',
    description:
      'See a personalized preview first so you can experience how your invitation will feel before finalizing anything.',
  },
  {
    icon: HeartHandshake,
    title: 'Made With Care',
    description:
      'Every DreamZ invitation is refined around your story instead of being treated like a generic one-size-fits-all template.',
  },
]

function TrustSection() {
  return (
    <section className="bg-dreamz-cream/45 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Designed Around You"
          title="Your Wedding Deserves Something Personal."
          description="DreamZ focuses on thoughtful personalization, a simple process, and an experience you can see before you decide."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="border-t border-dreamz-gold/40 pt-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-dreamz-ivory text-dreamz-burgundy">
                <Icon size={20} strokeWidth={1.7} />
              </div>

              <h3 className="mt-5 font-display text-3xl font-medium text-dreamz-charcoal">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-dreamz-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustSection