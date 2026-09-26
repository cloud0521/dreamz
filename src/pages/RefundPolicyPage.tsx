import { Link } from 'react-router-dom'
import type { LinksFunction, MetaFunction } from 'react-router'
import { PolicyPageLayout, PolicySection } from '../components/PolicyPageLayout'
import { businessInfo } from '../config/business'

export const meta: MetaFunction = () => [
  { title: 'Refund & Cancellation Policy | DreamZ' },
  { name: 'description', content: 'How cancellations, service concerns, and refunds are handled for DreamZ personalized digital wedding invitations.' },
]

export const links: LinksFunction = () => [{ rel: 'canonical', href: 'https://dreamzinvites.asia/refund-policy' }]

const legalLinkClass = 'font-medium text-dreamz-burgundy underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dreamz-burgundy'

function RefundPolicyPage() {
  return (
    <PolicyPageLayout eyebrow="A Fair, Simple Process" title="Refund & Cancellation Policy" introduction="The preview comes first and is completely free. Payment is required only when you decide that you want DreamZ to proceed.">
      <PolicySection title="Before Requesting a Preview"><p>No payment is required to explore the DreamZ website or before requesting a personalized preview.</p></PolicySection>
      <PolicySection title="After Receiving the Free Preview"><p>The customer may review the personalized preview and decide not to continue. If the customer declines the preview or does not choose to proceed, no payment is due for the preview and there is nothing to cancel.</p></PolicySection>
      <PolicySection title="After Choosing to Proceed"><p>Payment becomes due only after the customer confirms that they want DreamZ to proceed and the agreed order amount has been communicated. DreamZ may then continue with further personalization, revisions, finalization, and publication according to the agreed project.</p></PolicySection>
      <PolicySection title="After Payment While Work Is Ongoing">
        <p>A customer may ask to cancel, but the appropriate outcome will depend on how much personalized work has already been completed and whether costs have already been incurred. A voluntary cancellation after substantial work has been performed does not automatically qualify for a full refund.</p>
        <p>DreamZ will review the work completed, remaining work, recoverable costs, and reason for cancellation, then communicate a reasonable resolution consistent with the agreed order and applicable consumer rights.</p>
      </PolicySection>
      <PolicySection title="After Final Approval or Publication"><p>Once a personalized invitation has received final approval or has been published, a voluntary cancellation or change of mind generally does not automatically result in a refund because the agreed personalized service has already been substantially or fully delivered.</p></PolicySection>
      <PolicySection title="DreamZ Service Failure or Technical Defect">
        <p>If DreamZ fails to provide the agreed service, the delivered invitation does not reasonably match the confirmed order, or a genuine technical defect is attributable to DreamZ, the customer should contact DreamZ promptly with a description or screenshot of the issue.</p>
        <p>Depending on the circumstances, DreamZ may provide a correction, remediation, republication, replacement of the affected work, or an appropriate refund. This policy does not remove remedies available under applicable Philippine law.</p>
      </PolicySection>
      <PolicySection title="Customer Delays or Missing Materials"><p>Delays caused by missing photographs, names, wedding details, links, approvals, replacement files, or other required information may move the expected delivery or publication timeline. DreamZ will resume work when the required materials or decisions are available, subject to reasonable scheduling.</p></PolicySection>
      <PolicySection title="How to Request Help or Cancellation">
        <p>Contact <a href={businessInfo.messengerUrl} target="_blank" rel="noreferrer" className={legalLinkClass}>{businessInfo.messengerLabel}</a> and include the customer name, invitation design, and a clear explanation of the request. DreamZ will review the project stage and respond through the same channel.</p>
        <p>For the complete service agreement, please also read the <Link to="/terms" className={legalLinkClass}>Terms of Service</Link>.</p>
      </PolicySection>
    </PolicyPageLayout>
  )
}

export default RefundPolicyPage
