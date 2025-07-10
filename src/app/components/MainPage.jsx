'use client'

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ru: {
    title: "Раскройте свой потенциал с GRYPHON — вашим проводником в мир знаний!",
    subtitle: `Добро пожаловать в GRYPHON, где знание становится силой!
Наш центр предлагает обучение английскому и русскому языку,
помогая вам достичь новых высот независимо от вашего уровня подготовки.`,
  },
  uz: {
    title: "GRYPHON bilan o‘z salohiyatingizni oching — bilim olamiga yo‘l boshlovchingiz!",
    subtitle: `GRYPHON markaziga xush kelibsiz! Bu yerda bilim — kuchga aylanadi.
Bizning markaz ingliz va rus tillarini o‘rgatadi,
sizning tayyorgarlik darajangizdan qat’i nazar, yangi cho‘qqilarni zabt etishga yordam beradi.`,
  },
  en: {
    title: "Unleash your potential with GRYPHON — your guide to the world of knowledge!",
    subtitle: `Welcome to GRYPHON, where knowledge becomes power!
Our center offers English and Russian language training,
helping you reach new heights regardless of your current level.`,
  },
};

const MainPage = () => {
  const { language } = useLanguage();
  const t = translations[language] ?? translations['ru'];

  return (
    <div className='main'>
      <div className='unit-main'>
        <div>
          <p className='home-p'>{t.title}</p>
          <p className='main-p'>
            {t.subtitle.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div>
          <img className='main-img' src="photo.png" alt="Main visual" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
