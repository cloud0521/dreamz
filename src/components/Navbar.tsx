import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Container from './Container'

const navigation = [
  { name: 'The designs', to: '/designs' },
  { name: 'How it works', to: '/#how-it-works' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Questions', to: '/faq' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash])
  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])

  return (
    <header className="site-header">
      <Container className="nav-container">
        <Link to="/" className="brand-mark" aria-label="DreamZ home" onClick={() => setMenuOpen(false)}>
          <span>Dream<span className="brand-z">Z</span></span><small>Digital wedding experiences</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => item.to.startsWith('/#') ? <a key={item.name} href={item.to}>{item.name}</a> : <NavLink key={item.name} to={item.to}>{item.name}</NavLink>)}
          <Link to="/contact" className="nav-cta">Get a free preview <span>↗</span></Link>
        </nav>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X size={21} strokeWidth={1.6} /> : <Menu size={21} strokeWidth={1.6} />}
        </button>
        <AnimatePresence>
          {menuOpen && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            <p className="eyebrow">Explore DreamZ</p>
            {navigation.map((item) => item.to.startsWith('/#') ? <a key={item.name} href={item.to} onClick={() => setMenuOpen(false)}>{item.name}<span>↗</span></a> : <NavLink key={item.name} to={item.to} onClick={() => setMenuOpen(false)}>{item.name}<span>↗</span></NavLink>)}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mobile-nav-cta">Request a free preview <span>↗</span></Link>
          </motion.nav>}
        </AnimatePresence>
      </Container>
    </header>
  )
}

export default Navbar
