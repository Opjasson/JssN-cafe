import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Page from '../components/Page'

function Home() {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Page />
      <Footer />
    </div>
  )
}

export default Home
