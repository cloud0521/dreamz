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
            className="group inline-flex shrink-0 flex-col text-dreamz-burgundy transition-colors duration-300 hover:text-dreamz-burgundy-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dreamz-gold/60 focus-visible:ring-offset-4 focus-visible:ring-offset-dreamz-ivory"
            aria-label="DreamZ home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-display text-[1.75rem] font-medium leading-[0.8] tracking-[0.01em] sm:text-[1.875rem]">
              <span className="text-[1.08em]">D</span>ream
              <span className="relative inline-block translate-y-px text-[1.08em] italic">Z</span>
            </span>
            <span className="mt-1 hidden items-center gap-1.5 whitespace-nowrap text-[0.5rem] font-medium leading-none tracking-[0.2em] text-dreamz-gold/80 transition-colors duration-300 group-hover:text-dreamz-gold min-[390px]:flex sm:text-[0.525rem] sm:tracking-[0.23em]">
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rotate-45 border border-current"
              />
              DIGITAL WEDDING EXPERIENCES
            </span>
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
