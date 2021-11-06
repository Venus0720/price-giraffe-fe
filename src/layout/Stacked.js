import React from 'react'
import LandingPageNavbar from 'components/Navbar/LandingPageNavbar'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import Notification from 'components/Notification/Notification'

const Stacked = ({ landingPage = false, bgColor = 'bg-white', children }) => {
  return (
    <>
      {landingPage ? <LandingPageNavbar /> : <Navbar />}
      <Notification />
      <div className={bgColor + ' min-h-3/4screen'}>{children}</div>
      <Footer />
    </>
  )
}

export default Stacked
