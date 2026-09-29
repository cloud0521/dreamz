import type { LinksFunction, MetaFunction } from 'react-router'
import { Check } from 'lucide-react'
import Container from '../components/Container'

const inclusions = [
  'Personalized wedding design',
  'RSVP tracking',
  'Photo gallery',
  'Prenup video integration',
  'Background music',
  'Live countdown',
  'Google Maps integration',
  'Ceremony & reception details',
  'Dress code section',
  'Mobile-friendly experience',
  'Revisions until finalization',
]

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Digital Wedding Invitation Pricing | DreamZ',
    },
    {
      name: 'description',
      content:
        'See DreamZ digital wedding invitation pricing and what is included in the personalized wedding experience.',
    },
    {
      property: 'og:title',
      content: 'Digital Wedding Invitation Pricing | DreamZ',
    },
    {
      property: 'og:description',
      content:
        'See DreamZ digital wedding invitation pricing and what is included in the personalized wedding experience.',
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
      content: 'https://www.dreamzinvites.asia/pricing',
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
      content: 'Digital Wedding Invitation Pricing | DreamZ',
    },
    {
      name: 'twitter:description',
      content:
        'See DreamZ digital wedding invitation pricing and what is included in the personalized wedding experience.',
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
    href: 'https://www.dreamzinvites.asia/pricing',
  },
]

function PricingPage() {
  return (
    <>
      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
              Simple Pricing
            </p>

            <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
              One Elegant Experience.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">
              A complete digital wedding invitation experience without complicated packages.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-4xl border border-black/5 bg-white p-7 shadow-sm sm:p-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dreamz-burgundy">
                DreamZ Digital Wedding Experience
              </p>

              <div className="mt-5">
                <span className="font-display text-6xl font-medium text-dreamz-charcoal">
                  ₱1,000
                </span>

                <p className="mt-2 text-sm text-dreamz-muted">
                  Starting price
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dreamz-cream text-dreamz-burgundy">
                    <Check size={13} strokeWidth={2} />
                  </div>

                  <p className="text-sm leading-6 text-dreamz-charcoal">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-black/5 pt-6 text-center">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
              >
                Get My Free Preview
              </a>

              <p className="mt-4 text-sm leading-6 text-dreamz-muted">
                Final pricing may vary if you request features outside the standard DreamZ experience.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default PricingPage
