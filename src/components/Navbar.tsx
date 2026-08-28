import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Designs', to: '/designs' },
  { name: 'How It Works', to: '/#how-it-works' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'FAQ', to: '/faq' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-dreamz-ivory/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            to="/"
            className="font-display text-3xl font-semibold tracking-wide text-dreamz-burgundy"
            aria-label="DreamZ home"
            onClick={() => setMenuOpen(false)}
          >
            DreamZ
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) =>
              item.to.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.to}
                  className="text-sm font-medium text-dreamz-muted transition-colors hover:text-dreamz-burgundy"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-dreamz-burgundy'
                        : 'text-dreamz-muted hover:text-dreamz-burgundy'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ),
            )}

            <a
              href="/contact"
              className="rounded-full bg-dreamz-burgundy px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-dreamz-burgundy-dark"
            >
              Get a Free Preview
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-dreamz-charcoal lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-black/5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.to.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-medium text-dreamz-charcoal transition-colors hover:bg-dreamz-cream"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-11 items-center rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-dreamz-cream text-dreamz-burgundy'
                          : 'text-dreamz-charcoal hover:bg-dreamz-cream'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ),
              )}

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-dreamz-burgundy px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get a Free Preview
              </a>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}

export default Navbar
