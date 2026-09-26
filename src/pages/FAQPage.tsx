import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../components/Container'
import type { LinksFunction, MetaFunction } from 'react-router'

const faqs = [
  {
    question: 'What is a digital wedding invitation?',
    answer:
      'A digital wedding invitation is an interactive online experience where guests can view your wedding details, photos, videos, venue information, countdown, and RSVP using their phone or computer.',
  },
  {
    question: 'Do our guests need to install an app?',
    answer:
      'No. Guests simply open the invitation through a link. Nothing needs to be downloaded or installed.',
  },
  {
    question: 'How does RSVP work?',
    answer:
      'Guests can submit their attendance response directly through the invitation, helping you keep responses organized in one place.',
  },
  {
    question: 'Can we update wedding details later?',
    answer:
      'Yes. Wedding information can be refined and updated before the invitation is finalized.',
  },
  {
    question: 'Can we choose our own colors and theme?',
    answer:
      'Yes. DreamZ can personalize the design direction to better match your wedding theme and preferences.',
  },
  {
    question: 'Can we use our own background music?',
    answer:
      'Yes. You can request music that feels meaningful to you, subject to technical and usage considerations.',
  },
  {
    question: 'Can our prenup video be included?',
    answer:
      'Yes. Prenup videos can be integrated into the invitation experience when appropriate.',
  },
  {
    question: 'Can you add ceremony and reception locations?',
    answer:
      'Yes. Ceremony and reception information can include direct Google Maps links to make navigation easier for guests.',
  },
  {
    question: 'Does it work on mobile phones?',
    answer:
      'Yes. DreamZ invitations are designed mobile-first because most guests will open them from their phones.',
  },
  {
    question: 'How does the free personalized preview work?',
    answer:
      'Send your names, wedding date, preferred design, and one favorite prenup photo. DreamZ will create a personalized preview so you can see the experience before deciding whether to continue.',
  },
]

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Digital Wedding Invitation FAQ | DreamZ',
    },
    {
      name: 'description',
      content:
        'Find answers about DreamZ digital wedding invitations, RSVP tracking, personalization, music, wedding details, and free previews.',
    },
    {
      property: 'og:title',
      content: 'Digital Wedding Invitation FAQ | DreamZ',
    },
    {
      property: 'og:description',
      content:
        'Find answers about DreamZ digital wedding invitations, RSVP tracking, personalization, music, wedding details, and free previews.',
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
      content: 'https://dreamzinvites.asia/faq',
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
      content: 'Digital Wedding Invitation FAQ | DreamZ',
    },
    {
      name: 'twitter:description',
      content:
        'Find answers about DreamZ digital wedding invitations, RSVP tracking, personalization, music, wedding details, and free previews.',
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
    href: 'https://dreamzinvites.asia/faq',
  },
]

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
 

      <main className="py-12 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
              Frequently Asked Questions
            </p>

            <h1 className="mt-4 font-display text-[2.6rem] font-medium leading-[1.05] text-dreamz-charcoal sm:text-6xl">
              Everything You Need to Know.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dreamz-muted">
              Quick answers about how DreamZ digital wedding invitations work.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-display text-2xl font-medium text-dreamz-charcoal">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-dreamz-burgundy transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${index}`} className="pb-6 pr-8 sm:pr-10">
                      <p className="leading-7 text-dreamz-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </main>
    </>
  )
}

export default FAQPage
