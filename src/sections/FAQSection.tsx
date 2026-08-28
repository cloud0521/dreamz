import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

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
    question: 'Can we use our own colors and theme?',
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
    question: 'Can you add the ceremony and reception locations?',
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know."
          description="A few quick answers before you start creating your DreamZ wedding experience."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
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
                  <div id={`home-faq-answer-${index}`} className="pb-6 pr-8 sm:pr-10">
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
    </section>
  )
}

export default FAQSection
