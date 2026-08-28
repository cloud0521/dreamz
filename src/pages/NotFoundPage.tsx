import { Link } from 'react-router-dom'
import Container from '../components/Container'
import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Page Not Found | DreamZ',
    },
    {
      name: 'description',
      content: 'The page you are looking for could not be found.',
    },
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ]
}

function NotFoundPage() {
  return (
    <>
     

      <main className="flex min-h-[70vh] items-center py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-dreamz-burgundy">
              404
            </p>

            <h1 className="mt-4 font-display text-5xl font-medium text-dreamz-charcoal sm:text-6xl">
              This page has wandered off.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-dreamz-muted">
              The page you’re looking for may have moved or no longer exists.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex rounded-full bg-dreamz-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-dreamz-burgundy-dark"
            >
              Return Home
            </Link>
          </div>
        </Container>
      </main>
    </>
  )
}

export default NotFoundPage