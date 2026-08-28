import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function RootLayout() {
  return (
    <div className="min-h-screen bg-dreamz-ivory text-dreamz-charcoal">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default RootLayout