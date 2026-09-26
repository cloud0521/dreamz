import type { LinksFunction, MetaFunction } from 'react-router'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import DesignCard from '../components/DesignCard'
import { invitationDesigns } from '../data/designs'


export const meta: MetaFunction = () => {
  return [
    {
      title: 'Wedding Invitation Designs | DreamZ',
    },
    {
      name: 'description',
      content:
        'Explore elegant DreamZ digital wedding invitation designs and find a style that fits your wedding story.',
    },
    {
      property: 'og:title',
      content: 'Wedding Invitation Designs | DreamZ',
    },
    {
      property: 'og:description',
      content:
        'Explore elegant DreamZ digital wedding invitation designs and find a style that fits your wedding story.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: 'DreamZ',
    },
    {
      property: 'og:url',
      content: 'https://dreamzinvites.asia/designs',
    },
    {
      property: 'og:image',
      content: 'https://dreamzinvites.asia/og-dreamz.jpg',
    },
    {
      property: 'og:image:alt',
      content: 'DreamZ — Elegant digital wedding invitations',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Wedding Invitation Designs | DreamZ',
    },
    {
      name: 'twitter:description',
      content:
        'Explore elegant DreamZ digital wedding invitation designs and find a style that fits your wedding story.',
    },
    {
      name: 'twitter:image',
      content: 'https://dreamzinvites.asia/og-dreamz.jpg',
    },
  ]
}

export const links: LinksFunction = () => [
  {
    rel: 'canonical',
    href: 'https://dreamzinvites.asia/designs',
  },
]

function DesignsPage() {
  return (
    <>
    

      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="DreamZ Collection"
            title="Find an Invitation That Feels Like You."
            description="Explore our growing collection of elegant digital wedding experiences, each designed with a distinct mood and personality."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {invitationDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}

export default DesignsPage
