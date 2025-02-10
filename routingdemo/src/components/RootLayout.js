import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
        <Navbar />
        {/*Dynamic content */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout