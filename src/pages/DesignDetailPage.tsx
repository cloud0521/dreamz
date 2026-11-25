import { Link, useParams } from 'react-router-dom'
import type { MetaFunction } from 'react-router'
import Container from '../components/Container'
import DesignProductDetails from '../components/DesignProductDetails'
import { invitationDesigns } from '../data/designs'

export const meta: MetaFunction = ({ params }) => {
  const titles: Record<string, string> = {
    'burgundy-romance': 'Burgundy Romance Wedding Invitation | DreamZ',
    'timeless-ivory': 'Timeless Ivory Wedding Invitation | DreamZ',
    'sage-garden': 'Sage Garden Wedding Invitation | DreamZ',
  }

  const descriptions: Record<string, string> = {
    'burgundy-romance':
      'Explore the Burgundy Romance digital wedding invitation by DreamZ, a romantic and richly elegant wedding experience.',
    'timeless-ivory':
      'Explore the Timeless Ivory digital wedding invitation by DreamZ, a minimal, classic, and refined wedding experience.',
    'sage-garden':
      'Explore the Sage Garden digital wedding invitation by DreamZ, a soft, natural, and garden-inspired wedding experience.',
  }

  const title = titles[params.slug ?? ''] ?? 'Wedding Invitation Design | DreamZ'
  const description = descriptions[params.slug ?? ''] ?? 'Explore an elegant digital wedding invitation design by DreamZ.'
  const url = `https://www.dreamzinvites.asia/designs/${params.slug}`

  return [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'DreamZ' },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:url', content: url },
    { property: 'og:image', content: 'https://www.dreamzinvites.asia/og-dreamz.jpg' },
    { property: 'og:image:alt', content: `${title} preview` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://www.dreamzinvites.asia/og-dreamz.jpg' },
  ]
}

function DesignDetailPage() {
  const { slug } = useParams()
  const design = invitationDesigns.find((item) => item.slug === slug)

  if (!design) {
    return (
      <main className="product-not-found">
        <Container>
          <div>
            <p className="eyebrow">DreamZ collection</p>
            <h1>Design not found.</h1>
            <p>The invitation design you’re looking for doesn’t exist.</p>
            <Link className="button-primary" to="/designs">Back to all designs</Link>
          </div>
        </Container>
      </main>
    )
  }

  return <DesignProductDetails design={design} />
}

export default DesignDetailPage
