'use client'

import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  RU: {
    // ...
    footer: {
      courses: 'Курсы',
      location: 'Местоположения',
      discounts: 'Скидки',
    },
  },
  UZ: {
    // ...
    footer: {
      courses: 'Kurslar',
      location: 'Joylashuv',
      discounts: 'Chegirmalar',
    },
  },
  EN: {
    // ...
    footer: {
      courses: 'Courses',
      location: 'Location',
      discounts: 'Discounts',
    },
  },
};


const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language]?.footer || translations.RU.footer;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-logo-wrapper">
            <div className="footer-title">GRYPHON SCHOOL</div>
          </div>
          <div className="footer-links">
            <a href="#home">{t.courses}</a>
            <a href="#about">{t.location}</a>
            <a href="#services">{t.discounts}</a>
          </div>
          <div className="footer-social">
            <a target="_blank" href="https://t.me/gryphon_academy_english" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 496 512">
                <path d="M248 8C111 8 0 119 ... (shortened for brevity) ..." />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/gryphon_educational_center/" rel="noopener noreferrer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 ... (shortened for brevity) ..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
