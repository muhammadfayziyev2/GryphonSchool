'use client'

import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import About from './About'
import Kurs from './Kurs' 
import ServicesSection from './ServicesSection'
import ContactInfo from './ContactInfo'
import Footer from './Footer'
import StarBackground from './StarBackground'

const HomePage = () => {
  return (
    <div className='wrapper'>
      <StarBackground/>
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