import type { LinksFunction, MetaFunction } from 'react-router'
import Container from '../components/Container'
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
      content: 'https://www.dreamzinvites.asia/designs',
    },
    {
      property: 'og:image',
      content: 'https://www.dreamzinvites.asia/og-dreamz.jpg',
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
      content: 'https://www.dreamzinvites.asia/og-dreamz.jpg',
    },
  ]
}

export const links: LinksFunction = () => [
  {
    rel: 'canonical',
    href: 'https://www.dreamzinvites.asia/designs',
  },
]

function DesignsPage() {
  return (
    <>
    

      <main className="collection-page">
        <Container>
          <div className="collection-page-heading">
            <p className="eyebrow">DreamZ collection</p>
            <h1>Find your perfect invitation.</h1>
            <p>Beautiful designs for your unforgettable day.</p>
          </div>
          <div className="design-grid">
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
