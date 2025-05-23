'use client'

import Link from 'next/link'
import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  RU: {
    // ...
    main: {
      title: 'Раскройте свой потенциал с GRYPHON  вашим проводником в мир знаний!',
      subtitle: 'Добро пожаловать в GRYPHON, где знание становится силой!\nНаш центр предлагает обучение английскому и русскому языку, помогая вам достичь новых высот независимо от вашего уровня подготовки.',
      discountBtn: 'Получить скидку!',
      loginBtn: 'Войти',
    },
  },
  UZ: {
    // ...
    main: {
      title: 'GRYPHON bilan imkoniyatlaringizni oching — bilimlar olamiga yo‘l ko‘rsatuvchingiz!',
      subtitle: `GRYPHONga xush kelibsiz, bu yerda bilim — kuch!\n
Bizning markazimiz ingliz va rus tillarini o‘rgatadi, 
sizni tayyorgarlik darajangizdan qat’i nazar, yangi cho‘qqilarga olib chiqadi.`,
      discountBtn: 'Chegirmaga ega bo‘ling!',
      loginBtn: 'Kirish',
    },
  },
  EN: {
    // ...
    main: {
      title: 'Unleash your potential with GRYPHON — your guide to the world of knowledge!',
      subtitle: `Welcome to GRYPHON, where knowledge becomes power!\n
Our center offers English and Russian language training, 
helping you reach new heights regardless of your level.`,
      discountBtn: 'Get a discount!',
      loginBtn: 'Login',
    },
  },
}


const MainPage = () => {
  const { language } = useLanguage()
  const t = translations[language]?.main || translations.RU.main

  return (
    <div className="main">
      <div className="hero">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <div className="hero-buttons">
          <Link href="/Register" className="btn-primary">{t.discountBtn}</Link>
          <Link href="/login" className="btn-outline">{t.loginBtn}</Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
