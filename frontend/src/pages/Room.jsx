import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Pagemenu from '../components/Pagemenu'
import Pageroom from '../components/Pageroom'

function Room() {
  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <Pageroom />
      <Footer />
    </div>
  )
}

export default Room
