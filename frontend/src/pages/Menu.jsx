import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagemenu from '../components/Pagemenu'

function Menu() {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Pagemenu />
      <Footer />
    </div>
  )
}

export default Menu
