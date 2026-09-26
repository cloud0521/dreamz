import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import './index.css'
// app/root.tsx (or src/root.tsx)
import type { LinksFunction } from 'react-router'

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/png',
    href: '/dreamz.png',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="google-site-verification"
          content="EB56MhpvITLTm-QQlCFjgfWWtU8u1jaU4CZREbKkZFo"
        />

        <Meta />
        <Links />
      </head>

      <body>
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
