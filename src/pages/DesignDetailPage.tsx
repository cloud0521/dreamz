import { useParams } from 'react-router-dom'
import { CalendarDays, Check, Images, MapPin, Music2, Users } from 'lucide-react'
import Container from '../components/Container'
import type { MetaFunction } from 'react-router'
import { invitationDesigns } from '../data/designs'

const experienceMoments = [
  {
    number: '01',
    title: 'A Romantic Welcome',
    description:
      'Your guests arrive through an elegant, mobile-first opening shaped around your names, wedding date, and chosen design.',
  },
  {
    number: '02',
    title: 'Your Story Unfolds',
    description:
      'Photos, music, your love story, and wedding details flow together as one thoughtful experience—not a collection of separate pages.',
  },
  {
    number: '03',
    title: 'Guests Respond',
    description:
      'The experience leads naturally into venue information, maps, and RSVP so guests know what matters and can respond with ease.',
  },
]

const includedFeatures = [
  { icon: CalendarDays, label: 'Live wedding countdown' },
  { icon: Images, label: 'Prenup photo gallery' },
  { icon: Music2, label: 'Background music' },
  { icon: MapPin, label: 'Venue details and maps' },
  { icon: Users, label: 'Guest RSVP tracking' },
  { icon: Check, label: 'Personalized wedding details' },
]

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

  const title =
    titles[params.slug ?? ''] ?? 'Wedding Invitation Design | DreamZ'

  const description =
    descriptions[params.slug ?? ''] ??
    'Explore an elegant digital wedding invitation design by DreamZ.'

  const url = `https://dreamz-lime.vercel.app/designs/${params.slug}`

  return [
    { title },
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
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
      tagName: 'link',
      rel: 'canonical',
      href: `https://dreamz-lime.vercel.app/designs/${params.slug}`,
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:image',
      content: 'https://dreamz-lime.vercel.app/og-dreamz.jpg',
    },
    {
      property: 'og:image:alt',
      content: `${title} preview`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: 'https://dreamz-lime.vercel.app/og-dreamz.jpg',
    },
  ]
}



function DesignDetailPage() {
  const { slug } = useParams()

  const design = invitationDesigns.find((item) => item.slug === slug)

  if (!design) {
    return (
      <main className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-5xl text-dreamz-charcoal">
              Design Not Found
            </h1>

            <p className="mt-4 text-dreamz-muted">
              The invitation design you’re looking for doesn’t exist.
            </p>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <>
     
      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
              {design.theme}
            </p>

            <h1 className="mt-4 font-display text-[2.75rem] font-medium leading-none text-dreamz-charcoal sm:text-6xl lg:text-7xl">
              {design.name}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">
              {design.description}
            </p>

            <div className="mt-10 flex justify-center">
              {design.liveDemoUrl ? (
                <div className="w-full">
                  <div className="mx-auto overflow-hidden rounded-[2rem] border border-black/10 bg-dreamz-charcoal p-2 shadow-2xl shadow-black/15 sm:max-w-[25rem] sm:rounded-[2.5rem] sm:p-3">
                    <div className="flex items-center justify-center gap-1.5 py-1.5" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                      <span className="h-1.5 w-12 rounded-full bg-white/15" />
                    </div>
                    <iframe
                      src={design.liveDemoUrl}
                      title={`${design.name} interactive wedding invitation demo`}
                      loading="eager"
                      allow="autoplay; fullscreen"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                      referrerPolicy="no-referrer"
                      className="-ml-2.5 h-[70svh] min-h-[32rem] w-[calc(100%+1.25rem)] rounded-[1.4rem] bg-black sm:h-[42rem] sm:rounded-[1.8rem]"
                    />
                  </div>

                  <div className="mt-5 flex flex-col items-center gap-3">
                    <p className="max-w-xl text-sm leading-6 text-dreamz-muted">
                      This is a live interactive invitation. Tap inside to begin the
                      experience, or open it full-screen for the complete presentation.
                    </p>
                    <a
                      href={design.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark sm:w-auto"
                    >
                      Open Full Experience
                    </a>
                  </div>
                </div>
              ) : design.previewImage ? (
                <img
                  src={design.previewImage}
                  alt={`${design.name} digital wedding invitation preview`}
                  loading="eager"
                  decoding="async"
                  className="block h-auto max-h-[72svh] w-auto max-w-full rounded-3xl object-contain sm:rounded-4xl"
                />
              ) : (
                <div className="flex min-h-[22rem] w-full max-w-md items-center justify-center rounded-4xl border border-black/5 bg-dreamz-cream px-6 sm:min-h-[30rem]">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.25em] text-dreamz-burgundy">
                      Preview Coming Soon
                    </p>
                    <p className="mt-4 font-display text-4xl text-dreamz-charcoal sm:text-5xl">
                      {design.name}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {!design.liveDemoUrl && (
              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-dreamz-muted">
                Preview image shown for visual direction. Your finished invitation is
                personalized with your own story, photos, music, details, and RSVP.
              </p>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`/contact?design=${encodeURIComponent(design.slug)}`}
                className="rounded-full border border-dreamz-burgundy px-6 py-3 text-sm font-semibold text-dreamz-burgundy transition-colors hover:bg-dreamz-burgundy hover:text-white"
              >
                Get This Design
              </a>
            </div>
          </div>

          <section className="mx-auto mt-20 max-w-6xl border-y border-black/10 py-14 sm:mt-24 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-dreamz-burgundy sm:text-xs sm:tracking-[0.25em]">
                Beyond the Preview
              </p>
              <h2 className="mt-4 font-display text-[2.35rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-5xl">
                More Than a Beautiful Cover.
              </h2>
              <p className="mt-5 leading-7 text-dreamz-muted sm:text-lg sm:leading-8">
                {design.name} becomes a complete digital wedding journey built
                around the way your guests discover, feel, and respond to your story.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
              {experienceMoments.map((moment) => (
                <article key={moment.number} className="border-t border-dreamz-gold/40 pt-6">
                  <p className="font-display text-4xl text-dreamz-gold">
                    {moment.number}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-medium text-dreamz-charcoal">
                    {moment.title}
                  </h3>
                  <p className="mt-3 leading-7 text-dreamz-muted">
                    {moment.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl py-14 sm:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-dreamz-burgundy sm:text-xs sm:tracking-[0.25em]">
                  Included in the Experience
                </p>
                <h2 className="mt-4 font-display text-[2.35rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-5xl">
                  Beautiful, Useful, and Easy for Guests.
                </h2>
                <p className="mt-5 leading-7 text-dreamz-muted">
                  Every section is adapted to your wedding while keeping the
                  experience simple to open and explore on any phone.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {includedFeatures.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex min-h-20 items-center gap-4 rounded-2xl border border-black/5 bg-white/70 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dreamz-cream text-dreamz-burgundy">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-6 text-dreamz-charcoal">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 rounded-[2rem] bg-dreamz-burgundy px-5 py-10 text-center text-white sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-dreamz-gold">
                See It With Your Story
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
                A Screenshot Shows the Style. Your Free Preview Shows the Feeling.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
                Send your names, wedding date, preferred design, and one favorite
                prenup photo. We’ll prepare a personalized preview before you decide.
              </p>
              <a
                href="/contact"
                className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-dreamz-burgundy transition-colors hover:bg-dreamz-cream sm:w-auto"
              >
                Get My Free Preview
              </a>
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}

export default DesignDetailPage
