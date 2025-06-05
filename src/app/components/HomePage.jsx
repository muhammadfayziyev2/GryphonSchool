'use client'

import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import AboutUs from './AboutUs'

const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <AboutUs/>
    </div>
  )
}

export default HomePage