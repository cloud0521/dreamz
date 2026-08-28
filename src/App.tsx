import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import DesignsPage from './pages/DesignsPage'
import ContactPage from './pages/ContactPage'
import DesignDetailPage from './pages/DesignDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import DigitalWeddingInvitationsPage from './pages/DigitalWeddingInvitationsPage'
import WeddingRSVPPage from './pages/WeddingRSVPPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'designs',
        element: <DesignsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'designs/:slug',
        element: <DesignDetailPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'faq',
        element: <FAQPage />,
      },
      {
        path: 'digital-wedding-invitations',
        element: <DigitalWeddingInvitationsPage />,
      },
      {
        path: 'wedding-rsvp',
        element: <WeddingRSVPPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App