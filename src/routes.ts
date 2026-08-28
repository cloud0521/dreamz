import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  layout('layouts/RootLayout.tsx', [
    index('pages/HomePage.tsx'),

    route('designs', 'pages/DesignsPage.tsx'),
    route('designs/:slug', 'pages/DesignDetailPage.tsx'),

    route(
      'digital-wedding-invitations',
      'pages/DigitalWeddingInvitationsPage.tsx',
    ),

    route(
      'wedding-rsvp',
      'pages/WeddingRSVPPage.tsx',
    ),

    route('pricing', 'pages/PricingPage.tsx'),
    route('faq', 'pages/FAQPage.tsx'),
    route('contact', 'pages/ContactPage.tsx'),

    route('*', 'pages/NotFoundPage.tsx'),
  ]),
] satisfies RouteConfig