import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagehome from '../components/Pagehome'


function Home() {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Pagehome />
      <Footer />
    </div>
  )
}

export default Home
