import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

function FreePreviewSection() {
  return <section className="preview-invite"><Container><div className="preview-invite-inner"><div><p className="eyebrow">A preview, made personal</p><h2>See your story<br /><em>before you say yes.</em></h2><p>Share a few details and a favorite photo. We’ll create a personalized preview so you can feel the experience for yourself.</p></div><Link to="/contact" className="button-light">Request a free preview <ArrowUpRight size={17} /></Link></div></Container></section>
}

export default FreePreviewSection
