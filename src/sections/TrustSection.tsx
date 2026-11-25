import { Eye, HeartHandshake, WandSparkles } from 'lucide-react'
import Container from '../components/Container'

const points = [
  { icon: WandSparkles, title: 'Made around you', description: 'Your names, colors, photographs, and story guide every choice.' },
  { icon: Eye, title: 'Preview it first', description: 'See a personalized glimpse of your wedding before you decide.' },
  { icon: HeartHandshake, title: 'A careful process', description: 'Thoughtful collaboration, from the first draft to the final detail.' },
]

function TrustSection() {
  return <section className="care-section"><Container><div className="care-intro"><p className="eyebrow">Considered, personal, yours</p><h2>A little more <em>you</em><br />in every detail.</h2></div><div className="care-points">{points.map(({ icon: Icon, title, description }, index) => <article key={title}><span className="care-index">0{index + 1}</span><Icon size={22} strokeWidth={1.5} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div></Container></section>
}

export default TrustSection
