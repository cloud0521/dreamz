import { Link } from 'react-router-dom'
import type { LinksFunction, MetaFunction } from 'react-router'
import { PolicyPageLayout, PolicySection } from '../components/PolicyPageLayout'
import { businessInfo } from '../config/business'

export const meta: MetaFunction = () => [
  { title: 'Terms of Service | DreamZ' },
  { name: 'description', content: 'Terms governing DreamZ personalized digital wedding invitation services.' },
]

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://dreamzinvites.asia/terms' }]

const legalLinkClass = 'font-medium text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy'

function TermsPage() {
  return (
    <PolicyPageLayout eyebrow="Working Together" title="Terms of Service" introduction="These terms explain the free preview process and what happens only if you choose DreamZ to create and publish your digital wedding invitation.">
      <PolicySection title="1. The DreamZ Service">
        <p>DreamZ creates personalized digital wedding invitation experiences. Depending on the agreed project, an invitation may include wedding details, photographs, video, music, maps, a countdown, RSVP features, and other personalized sections.</p>
        <p>The specific scope, price, schedule, hosting arrangement, and any custom requests will be communicated as part of the customer’s order.</p>
      </PolicySection>
      <PolicySection title="2. Free Personalized Preview">
        <p>A DreamZ personalized preview is free. Requesting or receiving a preview does not require payment and does not obligate the customer to continue. If the customer does not like the preview or simply decides not to proceed, the process may stop and nothing is owed for the preview.</p>
      </PolicySection>
      <PolicySection title="3. Confirming an Order and Payment">
        <p>An order becomes confirmed when the customer clearly chooses to proceed after the preview and DreamZ confirms the agreed service, price, and relevant project details. Payment becomes due only after the customer chooses to proceed, according to the amount and payment arrangement communicated for that order.</p>
        <p>Published prices are starting prices. Requests beyond the standard DreamZ experience may be quoted separately, and no additional charge will apply unless it is communicated and accepted.</p>
      </PolicySection>
      <PolicySection title="4. Customer Information and Materials">
        <p>The customer is responsible for providing accurate names, dates, venue information, schedules, stories, entourage details, photographs, videos, music preferences, RSVP requirements, approvals, and other materials reasonably needed for the invitation.</p>
        <p>The customer confirms that they have the right or appropriate permission to provide and use submitted materials and personal information. Materials must not infringe another person’s copyright, privacy, publicity, or other rights, and must not contain unlawful, harmful, deceptive, or abusive content.</p>
      </PolicySection>
      <PolicySection title="5. Revisions Until Finalization">
        <p>The standard DreamZ experience includes revisions until finalization. Revisions are reasonable adjustments to the agreed invitation, such as corrections to wording, wedding information, supplied media, colors, or presentation details.</p>
        <p>A completely different design direction, materially different experience, or substantial new features may be treated as a new project or custom request. DreamZ will discuss any resulting change in scope, price, or schedule before continuing.</p>
      </PolicySection>
      <PolicySection title="6. Review, Approval, and Finalization">
        <p>The customer should review names, spelling, dates, times, locations, links, media, and other details before giving final approval. DreamZ will address errors attributable to its implementation, while changes to information the customer previously supplied or approved may be treated as post-publication changes.</p>
      </PolicySection>
      <PolicySection title="7. Delivery, Publication, and Hosting">
        <p>Delivery or publication timing depends on the agreed project and on the customer providing complete materials and timely feedback. Missing details, delayed approvals, or replacement materials may move the expected schedule.</p>
        <p>Any applicable hosting period, renewal arrangement, and post-publication support will be communicated as part of the customer’s order. Changes after publication may depend on availability, project scope, and any additional amount communicated before work is performed.</p>
      </PolicySection>
      <PolicySection title="8. Intellectual Property and Portfolio Use">
        <p>Customers retain their rights in original photographs, videos, stories, and other materials they provide. They give DreamZ limited permission to use those materials only as reasonably needed to create, revise, publish, host, support, and deliver the agreed invitation.</p>
        <p>DreamZ retains its rights in its original templates, layouts, code, design systems, and reusable creative elements. The delivered invitation is for the customer’s personal wedding use and may not be resold or represented as a reusable DreamZ product created by another party.</p>
        <p>DreamZ may ask to display selected work in its portfolio or promotional materials. A customer may decline or opt out by telling DreamZ through the official contact channel.</p>
      </PolicySection>
      <PolicySection title="9. Third-Party Services and Availability">
        <p>Invitations may rely on third-party services such as Vercel hosting, Messenger, Google Maps, media players, music sources, or other embedded services. Their availability and separate terms are outside DreamZ’s direct control. DreamZ will use reasonable care when integrating them but cannot promise uninterrupted operation of every third-party service.</p>
        <p>Reasonable maintenance, updates, internet conditions, hosting incidents, or events outside either party’s control may temporarily affect availability. DreamZ will make reasonable efforts to correct issues attributable to the DreamZ implementation.</p>
      </PolicySection>
      <PolicySection title="10. Cancellations, Refunds, and Complaints">
        <p>Cancellation and refund requests are handled according to the project stage and the circumstances described in the <Link to="/refund-policy" className={legalLinkClass}>Refund &amp; Cancellation Policy</Link>. Nothing in these terms removes rights or remedies that apply under Philippine law.</p>
        <p>Questions, support requests, and complaints may be sent through <a href={businessInfo.messengerUrl} target="_blank" rel="noreferrer" className={legalLinkClass}>{businessInfo.messengerLabel}</a>. Please include enough project information for DreamZ to review and respond to the concern.</p>
      </PolicySection>
      <PolicySection title="11. Service Limitations and Philippine Law">
        <p>DreamZ will provide the agreed personalized service with reasonable care. Results may depend on the accuracy and quality of customer-supplied content, compatible devices and browsers, internet access, and third-party services. These terms are interpreted in the context of applicable Philippine law, including rights that cannot lawfully be excluded or limited.</p>
      </PolicySection>
    </PolicyPageLayout>
  )
}

export default TermsPage
