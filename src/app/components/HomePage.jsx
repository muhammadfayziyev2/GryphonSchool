'use client'

import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import About from './About'
import Kurs from './Kurs'
import ServicesSection from './ServicesSection'
import ContactInfo from './ContactInfo'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <About />
      <ServicesSection/>
      <Kurs/>
      <ContactInfo />
      <Footer />
    </div>
  )
}

export default HomePage