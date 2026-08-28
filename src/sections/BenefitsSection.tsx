import { CalendarDays, Images, MapPin, Music2, Smartphone, Users } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

const benefits = [
  {
    icon: Users,
    title: 'RSVP Tracking',
    description:
      'Keep guest responses organized in one place so you can manage attendance more easily.',
  },
  {
    icon: CalendarDays,
    title: 'Live Wedding Countdown',
    description:
      'Build excitement with a live countdown leading up to your special day.',
  },
  {
    icon: Images,
    title: 'Photo & Prenup Gallery',
    description:
      'Turn your favorite prenup photos into part of the wedding experience.',
  },
  {
    icon: Music2,
    title: 'Background Music',
    description:
      'Set the mood with a meaningful song that plays throughout the invitation.',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integration',
    description:
      'Help guests find the ceremony and reception locations without searching manually.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly',
    description:
      'Designed to feel beautiful and easy to use on the phones your guests already have.',
  },
]

function BenefitsSection() {
  return (
    <section className="bg-white/40 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="More Than an Invitation"
          title="Everything Your Guests Need, Beautifully Presented."
          description="DreamZ combines the details of your wedding with an interactive experience that is simple for guests and easier for couples to manage."
        />

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dreamz-cream text-dreamz-burgundy">
                <Icon size={20} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium text-dreamz-charcoal">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-dreamz-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection