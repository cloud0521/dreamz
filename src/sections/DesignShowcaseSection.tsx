import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import DesignCard from '../components/DesignCard'
import { invitationDesigns } from '../data/designs'

function DesignShowcaseSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Designs"
          title="Find an Invitation That Feels Like You."
          description="Explore elegant digital wedding experiences designed to match different wedding moods, styles, and stories."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {invitationDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default DesignShowcaseSection