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
            <a
              target="_blank"
              href="https://t.me/gryphon_academy_english"
              rel="noopener noreferrer"
              aria-label="Gryphon Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500 hover:text-blue-600 transition"
                viewBox="0 0 496 512"
                fill="currentColor"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 
               248 248-111 248-248S385 8 248 8zm104.9 
               169.1l-39.8 187.3c-3 13.6-11.1 
               17-22.5 10.6l-62.3-45.9-30 
               28.9c-3.3 3.3-6 6-12.3 6l4.4-62.4 
               113.5-102c5-4.4-1.1-6.9-7.8-2.5L154.2 
               296.6l-59.4-18.5c-12.9-4-13.1-12.9 
               2.7-19.1l232.6-89.6c10.7-4.1 
               20.1 2.5 16.8 18.7z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              target="_blank"
              href="https://www.instagram.com/gryphon_educational_center/"
              rel="noopener noreferrer"
              aria-label="Gryphon Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-pink-500 hover:text-pink-600 transition"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 
               114.9S160.5 370.9 224.1 370.9 339 
               319.6 339 256 287.7 141 224.1 
               141zm0 186c-39.2 0-71.1-31.9-71.1-71.1 
               0-39.2 31.9-71.1 71.1-71.1 
               39.2 0 71.1 31.9 71.1 71.1 
               0 39.2-31.9 71.1-71.1 71.1zm146.4-194.3c0 
               14.9-12.1 27-27 27s-27-12.1-27-27 
               12.1-27 27-27 27 12.1 27 27zm76.1 
               27.2c-.9-19.6-5.2-37-19-50.8s-31.2-18.1-50.8-19C346.3 
               48 293.3 48 224 48s-122.3 0-152.8 
               1.1c-19.6.9-37 5.2-50.8 19S2.1 
               99.4 1.1 119c-1.1 30.5-1.1 83.5-1.1 
               152.8s0 122.3 1.1 152.8c.9 19.6 5.2 
               37 19 50.8s31.2 18.1 50.8 19C101.7 
               464 154.7 464 224 464s122.3 0 152.8-1.1c19.6-.9 
               37-5.2 50.8-19s18.1-31.2 19-50.8c1.1-30.5 
               1.1-83.5 1.1-152.8s0-122.3-1.1-152.8zM398.8 
               388c-3.5 8.9-10.3 15.7-19.2 
               19.2-13.3 5.3-44.8 4.1-155.6 
               4.1s-142.3 1.2-155.6-4.1c-8.9-3.5-15.7-10.3-19.2-19.2-5.3-13.3-4.1-44.8-4.1-155.6s-1.2-142.3 
               4.1-155.6c3.5-8.9 10.3-15.7 19.2-19.2 13.3-5.3 
               44.8-4.1 155.6-4.1s142.3-1.2 155.6 
               4.1c8.9 3.5 15.7 10.3 19.2 19.2 5.3 13.3 
               4.1 44.8 4.1 155.6s1.2 142.3-4.1 155.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
