import type { LinksFunction, MetaFunction } from 'react-router'
import { PolicyPageLayout, PolicySection } from '../components/PolicyPageLayout'
import { businessInfo } from '../config/business'

export const meta: MetaFunction = () => [
  { title: 'Privacy Policy | DreamZ' },
  { name: 'description', content: 'How DreamZ handles information used to create, publish, and support personalized digital wedding invitations.' },
]

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://dreamzinvites.asia/privacy' }]

function PrivacyPage() {
  return (
    <PolicyPageLayout eyebrow="Your Information" title="Privacy Policy" introduction="This policy explains how information is handled when you request a preview, proceed with an invitation, use RSVP features, or contact DreamZ for support.">
      <PolicySection title="Information DreamZ May Handle">
        <p>Depending on the customer’s request and invitation features, DreamZ may handle customer names and contact information; the wedding date, venues, schedule, and couple’s names; photographs, videos, music preferences, stories, entourage information, and other wedding content; order details, approvals, messages, and support inquiries; and RSVP or guest-submitted information where an RSVP feature is included.</p>
        <p>DreamZ aims to collect only information reasonably needed for the requested preview, invitation, communication, support, or agreed service.</p>
      </PolicySection>
      <PolicySection title="The Free Preview and Messenger"><p>The preview-request form on the DreamZ website does not submit or store the details entered into it. When the customer selects the Messenger option, the website prepares those details on the customer’s device, attempts to copy them to the clipboard, and opens Messenger. Information is sent only when the customer chooses to paste and send it through Messenger.</p></PolicySection>
      <PolicySection title="Why Information Is Used">
        <p>DreamZ may use relevant information to create a personalized preview; communicate with the customer; prepare, revise, finalize, host, and publish the invitation; manage agreed RSVP features; provide support; maintain appropriate order and business records; and respond to privacy, correction, deletion, or service concerns.</p>
        <p>DreamZ does not sell personal information provided for these purposes.</p>
      </PolicySection>
      <PolicySection title="Guest and Third-Party Information"><p>Customers should share guest, entourage, and other third-party information only when they have an appropriate reason and authority to do so. When guests submit RSVP information, it may be made available to DreamZ and the relevant couple as needed to provide the RSVP feature.</p></PolicySection>
      <PolicySection title="Service Providers and External Platforms"><p>DreamZ may rely on service providers and external platforms needed to operate the service, including Meta Messenger, Vercel hosting, maps, media or music services, and other tools selected for an invitation. These providers may process technical or submitted information under their own terms and privacy practices. DreamZ shares or makes information available only as reasonably needed for the requested service or as required by law.</p></PolicySection>
      <PolicySection title="Retention and Security">
        <p>Information is retained only for as long as reasonably needed to prepare and support the requested service, maintain appropriate business records, resolve concerns, or meet legal obligations. Different information may require different retention periods depending on the project and service used.</p>
        <p>DreamZ uses reasonable technical and organizational safeguards appropriate for the service. No internet transmission, third-party platform, or storage system can be guaranteed to be completely secure. Customers and guests should not send passwords, payment-card details, government identifiers, or other unnecessary sensitive information through an invitation or preview request.</p>
      </PolicySection>
      <PolicySection title="Privacy Rights and Choices"><p>Subject to applicable law, a person may ask whether DreamZ holds their personal information, request access or correction, object to or limit certain processing, withdraw consent where consent is the basis used, or ask for deletion when continued retention is no longer necessary or legally required. A person may also raise a concern with the Philippine National Privacy Commission.</p></PolicySection>
      <PolicySection title="Privacy Contact"><p>Privacy questions and requests may be sent through <a href={businessInfo.messengerUrl} target="_blank" rel="noreferrer" className="font-medium text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy">{businessInfo.messengerLabel}</a>. Please explain the request and identify the relevant conversation or invitation so DreamZ can review it responsibly.</p></PolicySection>
    </PolicyPageLayout>
  )
}

export default PrivacyPage
