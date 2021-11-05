import React from 'react'
import LandingPageNavbar from 'components/Navbar/LandingPageNavbar'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import Notification from 'components/Notification/Notification'

const Stacked = ({ landingPage = false, children }) => {
  return (
    <>
      {landingPage ? <LandingPageNavbar /> : <Navbar />}
      <Notification />
      {children}
      <Footer />
    </>
  )
}

export default Stacked
