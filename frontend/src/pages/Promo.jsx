import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagepromo from '../components/Pagepromo'

function Promo() {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Pagepromo />
      <Footer />
    </div>
  )
}

export default Promo
