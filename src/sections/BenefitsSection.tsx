import { CalendarDays, Images, MapPin, Music2, Smartphone, Users } from 'lucide-react'
import Container from '../components/Container'

const benefits = [
  { icon: Users, title: 'A thoughtful RSVP', description: 'Keep every guest response together and easy to find.' },
  { icon: CalendarDays, title: 'The days, counted', description: 'Let anticipation build with a live wedding countdown.' },
  { icon: Images, title: 'Your favorite frames', description: 'Bring your prenup photographs into the story.' },
  { icon: Music2, title: 'A song that means something', description: 'Set the tone with music chosen by you.' },
  { icon: MapPin, title: 'Everywhere they need to be', description: 'Share ceremony and reception details with map links.' },
  { icon: Smartphone, title: 'Made for their phones', description: 'A comfortable, polished experience on any screen.' },
]

function BenefitsSection() {
  return <section className="benefits-section"><Container><div className="benefits-heading"><p className="eyebrow">Every detail, in its place</p><h2>The practical things,<br /><em>beautifully remembered.</em></h2><p>Everything your guests need to feel close to the day and ready to celebrate.</p></div><div className="benefits-list">{benefits.map(({ icon: Icon, title, description }, index) => <article key={title}><span className="benefit-number">0{index + 1}</span><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></Container></section>
}

export default BenefitsSection
