import Container from '../components/Container'

const steps = [
  { number: '01', title: 'Choose your mood', description: 'Find a design that feels like the beginning of your story.' },
  { number: '02', title: 'Share your details', description: 'Send your names, date, photos, places, and the little things.' },
  { number: '03', title: 'See it come alive', description: 'We shape your details into a personal, interactive invitation.' },
  { number: '04', title: 'Make it yours', description: 'Review your preview and refine it before you decide.' },
]

function HowItWorksSection() {
  return <section id="how-it-works" className="process-section"><Container><div className="process-head"><div><p className="eyebrow">Simple from the first hello</p><h2>From your story<br /><em>to their screens.</em></h2></div><p>No complicated setup for you or your guests. We take care of the craft; you get to enjoy the reveal.</p></div><div className="process-steps">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></Container></section>
}

export default HowItWorksSection
