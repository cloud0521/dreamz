import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import Container from '../components/Container'
import { invitationDesigns } from '../data/designs'
import { businessInfo } from '../config/business'
import type { LinksFunction, MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Contact DreamZ | Free Wedding Invitation Preview',
    },
    {
      name: 'description',
      content:
        'Request a free personalized DreamZ wedding invitation preview using your names, wedding date, and preferred design.',
    },
    {
      property: 'og:title',
      content: 'Contact DreamZ | Free Wedding Invitation Preview',
    },
    {
      property: 'og:description',
      content:
        'Request a free personalized DreamZ wedding invitation preview using your names, wedding date, and preferred design.',
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
      content: 'https://dreamzinvites.asia/contact',
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
      content: 'Contact DreamZ | Free Wedding Invitation Preview',
    },
    {
      name: 'twitter:description',
      content:
        'Request a free personalized DreamZ wedding invitation preview using your names, wedding date, and preferred design.',
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
    href: 'https://dreamzinvites.asia/contact',
  },
]

function ContactPage() {
  const [searchParams] = useSearchParams()
  const requestedDesign = invitationDesigns.find(
    (item) => item.slug === searchParams.get('design'),
  )
  const [brideName, setBrideName] = useState('')
  const [groomName, setGroomName] = useState('')
  const [weddingDate, setWeddingDate] = useState('')
  const [design, setDesign] = useState(
    requestedDesign?.name ?? invitationDesigns[0].name,
  )
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const handleMessenger = async () => {
  if (!brideName.trim() || !groomName.trim() || !weddingDate) {
    setError('Please complete the names and wedding date before continuing.')
    return
  }

  setError('')

  const message = `Hi DreamZ! I'm interested in a free personalized preview.

    Bride: ${brideName}
    Groom: ${groomName}
    Wedding Date: ${weddingDate}
    Preferred Design: ${design}`

      try {
        await navigator.clipboard.writeText(message)
        setCopied(true)
      } catch {
        setCopied(false)
      }

      window.open(
        'https://m.me/dreamzinvitationsph',
        '_blank',
        'noopener,noreferrer',
      )
    }

  return (
    <>
   

      <main className="py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
                Free Personalized Preview
              </p>

              <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
                See Your Story Before You Decide.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">
                Share a few wedding details with us, then continue through
                Messenger. We’ll use them to prepare your personalized DreamZ
                preview.
              </p>
            </div>

            <div className="mt-12 rounded-4xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="bride-name"
                    className="text-sm font-semibold text-dreamz-charcoal"
                  >
                    Bride's Name
                  </label>

                  <input
                    id="bride-name"
                    type="text"
                    autoComplete="given-name"
                    value={brideName}
                    onChange={(event) => setBrideName(event.target.value)}
                    placeholder="e.g. Andrea"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-dreamz-ivory px-4 py-3 outline-none transition focus:border-dreamz-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="groom-name"
                    className="text-sm font-semibold text-dreamz-charcoal"
                  >
                    Groom's Name
                  </label>

                  <input
                    id="groom-name"
                    type="text"
                    autoComplete="given-name"
                    value={groomName}
                    onChange={(event) => setGroomName(event.target.value)}
                    placeholder="e.g. Michael"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-dreamz-ivory px-4 py-3 outline-none transition focus:border-dreamz-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="wedding-date"
                    className="text-sm font-semibold text-dreamz-charcoal"
                  >
                    Wedding Date
                  </label>

                  <input
                    id="wedding-date"
                    type="date"
                    autoComplete="off"
                    value={weddingDate}
                    onChange={(event) => setWeddingDate(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-dreamz-ivory px-4 py-3 outline-none transition focus:border-dreamz-burgundy"
                  />
                </div>

                <div>
                  <label
                    htmlFor="design"
                    className="text-sm font-semibold text-dreamz-charcoal"
                  >
                    Preferred Design
                  </label>

                  <select
                    id="design"
                    value={design}
                    aria-describedby="design-help"
                    onChange={(event) => setDesign(event.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-dreamz-ivory px-4 py-3 outline-none transition focus:border-dreamz-burgundy"
                  >
                    {invitationDesigns.map((item) => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                {error && (
                  <p
                    role="alert"
                    className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {error}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleMessenger}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dreamz-burgundy px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-dreamz-burgundy-dark sm:w-auto"
                >
                  
                  Copy Details & Continue in Messenger
                  <MessageCircle size={18} />
                </button>
                  {copied && (
                    <p className="mt-3 text-sm font-medium text-dreamz-burgundy">
                      Details copied. Paste them into Messenger and send your prenup photo. ✨
                    </p>
                  )}
                <p id="design-help" className="mt-4 text-sm leading-6 text-dreamz-muted">
                  Your details will be copied automatically. When Messenger opens,
                  simply paste them into the conversation and send your prenup photo.
                </p>
                <p className="mt-3 text-xs leading-5 text-dreamz-muted">
                  By continuing, you choose to share these details through Messenger.
                  See our{' '}
                  <Link to="/privacy" className="underline underline-offset-2 hover:text-dreamz-burgundy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <section className="mt-16 border-t border-black/10 pt-12 sm:mt-20 sm:pt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">Business Information</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-dreamz-charcoal sm:text-5xl">Contact DreamZ</h2>
              <p className="mt-5 max-w-2xl leading-8 text-dreamz-muted">Preview requests, customer support, and complaints are currently handled through the official DreamZ Messenger conversation.</p>
              <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
                <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Trade name</dt><dd className="text-dreamz-muted">{businessInfo.tradeName}</dd></div>
                <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Messenger</dt><dd><a href={businessInfo.messengerUrl} target="_blank" rel="noreferrer" className="text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">{businessInfo.messengerLabel}</a></dd></div>
                <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Email</dt><dd>{businessInfo.email ? <a href={`mailto:${businessInfo.email}`} className="text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">{businessInfo.email}</a> : <span className="text-dreamz-muted">Not yet provided</span>}</dd></div>
                <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Phone</dt><dd>{businessInfo.phone ? <a href={`tel:${businessInfo.phone.replace(/\s/g, '')}`} className="text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">{businessInfo.phone}</a> : <span className="text-dreamz-muted">Not yet provided</span>}</dd></div>
                <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Business address</dt><dd className="text-dreamz-muted">{businessInfo.address ?? 'Not yet provided'}</dd></div>
                {businessInfo.businessHours && <div className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"><dt className="font-semibold text-dreamz-charcoal">Business hours</dt><dd className="text-dreamz-muted">{businessInfo.businessHours}</dd></div>}
              </dl>
              <p className="mt-5 text-sm leading-6 text-dreamz-muted">A verified business address will be published here once it is supplied.</p>
            </section>
          </div>
        </Container>
      </main>
    </>
  )
}

export default ContactPage
