import { CheckCircle2, Smartphone, Users } from 'lucide-react'
import Container from '../components/Container'
import type { LinksFunction, MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Online Wedding RSVP Philippines | DreamZ',
    },
    {
      name: 'description',
      content:
        'Manage wedding guest responses more easily with DreamZ digital wedding invitations and built-in RSVP tracking.',
    },
    {
      property: 'og:title',
      content: 'Online Wedding RSVP Philippines | DreamZ',
    },
    {
      property: 'og:description',
      content:
        'Manage wedding guest responses more easily with DreamZ digital wedding invitations and built-in RSVP tracking.',
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
      content: 'https://www.dreamzinvites.asia/wedding-rsvp',
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
      content: 'Online Wedding RSVP Philippines | DreamZ',
    },
    {
      name: 'twitter:description',
      content:
        'Manage wedding guest responses more easily with DreamZ digital wedding invitations and built-in RSVP tracking.',
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
    href: 'https://www.dreamzinvites.asia/wedding-rsvp',
  },
]

function WeddingRSVPPage() {
  return (
    <>
  

      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
                Wedding RSVP
              </p>

              <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
                Make Guest Responses Easier to Manage.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dreamz-muted">
                DreamZ lets guests respond directly through your digital wedding invitation,
                helping you keep attendance responses organized in one place.
              </p>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              <div>
                <Users className="text-dreamz-burgundy" size={28} strokeWidth={1.7} />

                <h2 className="mt-5 font-display text-3xl font-medium text-dreamz-charcoal">
                  Organized Responses
                </h2>

                <p className="mt-3 leading-7 text-dreamz-muted">
                  Keep track of guests who have responded without relying only on scattered
                  Messenger conversations and manual notes.
                </p>
              </div>

              <div>
                <Smartphone className="text-dreamz-burgundy" size={28} strokeWidth={1.7} />

                <h2 className="mt-5 font-display text-3xl font-medium text-dreamz-charcoal">
                  Simple for Guests
                </h2>

                <p className="mt-3 leading-7 text-dreamz-muted">
                  Guests can open your invitation on their phone and submit their response
                  without installing an app.
                </p>
              </div>

              <div>
                <CheckCircle2
                  className="text-dreamz-burgundy"
                  size={28}
                  strokeWidth={1.7}
                />

                <h2 className="mt-5 font-display text-3xl font-medium text-dreamz-charcoal">
                  Easy to Review
                </h2>

                <p className="mt-3 leading-7 text-dreamz-muted">
                  View submitted responses in one place so wedding planning becomes easier
                  to manage.
                </p>
              </div>
            </div>

            <div className="mt-16 rounded-4xl bg-dreamz-cream/60 p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
                How It Works
              </p>

              <h2 className="mt-4 font-display text-4xl font-medium text-dreamz-charcoal">
                Your Guests Simply Open, Respond, and Continue.
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-semibold text-dreamz-charcoal">
                    01 — Open the invitation
                  </p>
                  <p className="mt-2 text-dreamz-muted">
                    Guests receive the same digital invitation link you share with them.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dreamz-charcoal">
                    02 — Find the RSVP section
                  </p>
                  <p className="mt-2 text-dreamz-muted">
                    They can confirm whether they are attending through the invitation.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dreamz-charcoal">
                    03 — Response is recorded
                  </p>
                  <p className="mt-2 text-dreamz-muted">
                    Their submitted RSVP becomes part of the couple's response tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="font-display text-4xl font-medium text-dreamz-charcoal">
                Experience RSVP Inside a Real Invitation.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-dreamz-muted">
                Explore a live DreamZ design or request a personalized preview for your own
                wedding.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/designs"
                  className="rounded-full border border-dreamz-burgundy px-6 py-3 text-sm font-semibold text-dreamz-burgundy transition-colors hover:bg-dreamz-burgundy hover:text-white"
                >
                  View Live Designs
                </a>

                <a
                  href="/contact"
                  className="rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
                >
                  Get My Free Preview
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default WeddingRSVPPage
