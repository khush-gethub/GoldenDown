import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Arrivel from './components/Arrivel'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Arrivel/>
        <CTA/>
        <Features/>
        <Footer/>
    </>
  )
}
export default App