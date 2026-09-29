import Container from '../components/Container'
import type { LinksFunction, MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Digital Wedding Invitations Philippines | DreamZ',
    },
    {
      name: 'description',
      content:
        'Create an elegant digital wedding invitation with RSVP tracking, photos, music, countdowns, venue details, maps, and more with DreamZ.',
    },
    {
      property: 'og:title',
      content: 'Digital Wedding Invitations Philippines | DreamZ',
    },
    {
      property: 'og:description',
      content:
        'Create an elegant digital wedding invitation with RSVP tracking, photos, music, countdowns, venue details, maps, and more with DreamZ.',
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
      content: 'https://www.dreamzinvites.asia/digital-wedding-invitations',
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
      content: 'Digital Wedding Invitations Philippines | DreamZ',
    },
    {
      name: 'twitter:description',
      content:
        'Create an elegant digital wedding invitation with RSVP tracking, photos, music, countdowns, venue details, maps, and more with DreamZ.',
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
    href: 'https://www.dreamzinvites.asia/digital-wedding-invitations',
  },
]

function DigitalWeddingInvitationsPage() {
  return (
    <>
     

      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
                Digital Wedding Invitations
              </p>

              <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
                A Wedding Invitation Your Guests Can Experience.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dreamz-muted">
                DreamZ creates personalized digital wedding invitations for
                couples in the Philippines who want a beautiful, interactive,
                and convenient way to share their wedding story and important
                details with guests.
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl font-medium text-dreamz-charcoal">
                  More Than a Digital Card
                </h2>

                <p className="mt-5 leading-8 text-dreamz-muted">
                  Instead of sending a static image, your guests can open a
                  complete wedding experience containing your countdown,
                  photos, prenup video, ceremony details, reception location,
                  dress code, RSVP, and more.
                </p>
              </div>

              <div>
                <h2 className="font-display text-4xl font-medium text-dreamz-charcoal">
                  Simple for Your Guests
                </h2>

                <p className="mt-5 leading-8 text-dreamz-muted">
                  There is no app to install. Guests simply open the link on
                  their phone, explore the invitation, check wedding details,
                  and respond through the RSVP experience.
                </p>
              </div>
            </div>

            <div className="mt-16 border-y border-black/10 py-12">
              <h2 className="font-display text-4xl font-medium text-dreamz-charcoal">
                What Can Be Included?
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Personalized wedding design',
                  'RSVP tracking',
                  'Wedding countdown',
                  'Prenup photo gallery',
                  'Prenup video',
                  'Background music',
                  'Ceremony information',
                  'Reception information',
                  'Google Maps integration',
                  'Dress code',
                  'Wedding entourage',
                  'Love story',
                ].map((item) => (
                  <p
                    key={item}
                    className="border-l-2 border-dreamz-gold pl-4 text-dreamz-charcoal"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="font-display text-4xl font-medium text-dreamz-charcoal">
                See Your Wedding Before You Decide.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-dreamz-muted">
                Request a free personalized preview using your names, wedding
                date, preferred design, and favorite prenup photo.
              </p>

              <a
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
              >
                Get My Free Preview
              </a>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default DigitalWeddingInvitationsPage
