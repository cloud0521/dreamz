import type { LinksFunction, MetaFunction } from 'react-router'
import HeroSection from '../sections/HeroSection'
import DesignShowcaseSection from '../sections/DesignShowcaseSection'
import BenefitsSection from '../sections/BenefitsSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import TrustSection from '../sections/TrustSection'
import FreePreviewSection from '../sections/FreePreviewSection'
import PricingSection from '../sections/PricingSection'
import FAQSection from '../sections/FAQSection'
import FinalCTASection from '../sections/FinalCTASection'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'DreamZ | Digital Wedding Invitations Philippines',
    },
    {
      name: 'description',
      content:
        'DreamZ creates elegant digital wedding invitations with RSVP tracking, countdowns, galleries, music, maps, and more.',
    },
    {
      property: 'og:title',
      content: 'DreamZ | Digital Wedding Invitations Philippines',
    },
    {
      property: 'og:description',
      content:
        'DreamZ creates elegant digital wedding invitations with RSVP tracking, countdowns, galleries, music, maps, and more.',
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
      content: 'https://www.dreamzinvites.asia/',
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
      content: 'DreamZ | Digital Wedding Invitations Philippines',
    },
    {
      name: 'twitter:description',
      content:
        'DreamZ creates elegant digital wedding invitations with RSVP tracking, countdowns, galleries, music, maps, and more.',
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
    href: 'https://www.dreamzinvites.asia/',
  },
]

function HomePage() {
  const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DreamZ',
  url: 'https://www.dreamzinvites.asia/',
  logo: 'https://www.dreamzinvites.asia/og-dreamz.jpg',
  sameAs: [
    'https://www.facebook.com/dreamzinvitationsph',
  ],
  description:
    'DreamZ creates elegant digital wedding invitations with RSVP tracking, countdowns, galleries, music, maps, and personalized wedding experiences.',
}
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationSchema),
  }}
/>
      <main>
        <HeroSection />
        <DesignShowcaseSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TrustSection />
        <FreePreviewSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  )
}

export default HomePage
