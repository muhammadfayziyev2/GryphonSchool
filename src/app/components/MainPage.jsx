'use client'

import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
   <div className="main">
      <div className="hero">
        <h1 className="hero-title">Раскройте свой потенциал с GRYPHON <br /> вашим проводником в мир знаний!</h1>
        <p className="hero-subtitle">
          Добро пожаловать в GRYPHON, где знание становится силой! <br /> Наш центр предлагает обучение английскому и русскому языку, 
           <br />помогая вам достичь новых высот независимо от вашего уровня подготовки.
        </p>
        <div className="hero-buttons">
          <Link href="/Register" className="btn-primary">Получить скидку!</Link>
          <Link href="/login" className="btn-outline">Войти</Link>
        </div>
      </div>
   </div>
  )
}

export default MainPage 