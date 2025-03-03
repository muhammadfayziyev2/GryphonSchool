import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import Komanda from './Komanda'
import Kurs from './Kurs'
import Location from './Location'
import Footer from './Footer'
import Aktion from './Aktion'
import MainImg from './MainImg'

const HomePage = () => {
    return (
        <div className='container'>
            <Header />
            <MainImg />
            <MainPage />
            <Komanda />
            <Aktion />
            <Kurs />
            <Location />
            <Footer />
        </div>
    )
}

export default HomePage
