'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'


// lib/translations.js
const translations = {
    RU: {
        aboutTitle: 'Почему GRYPHON SCHOOL?',
        aboutCards: [
            'Gryphon — первый образовательный центр в Каттакургане с собственным сайтом!',
            'Мы специализируемся на обучении Английскому и Русскому языку.',
            'Наши учителя — это не только профессионалы, но и наставники, которые помогают каждому освоить материал легко и с уверенностью.',
            'Индивидуальный подход к каждому ученику!',
        ],
    },
    UZ: {
        aboutTitle: 'Nega GRYPHON SCHOOL?',
        aboutCards: [
            'Gryphon — Kattaqo‘rg‘onda o‘z veb-saytiga ega bo‘lgan birinchi o‘quv markazi!',
            'Biz ingliz va rus tillarini o‘rgatishga ixtisoslashganmiz.',
            'Bizning o‘qituvchilarimiz nafaqat professionallar, balki har bir o‘quvchiga materialni oson va ishonch bilan o‘zlashtirishga yordam beruvchi ustozlardir.',
            'Har bir o‘quvchiga individual yondashuv!',
        ],
    },
    EN: {
        aboutTitle: 'Why GRYPHON SCHOOL?',
        aboutCards: [
            'Gryphon is the first educational center in Kattakurgan with its own website!',
            'We specialize in teaching English and Russian languages.',
            'Our teachers are not just professionals but mentors who help every student grasp the material with ease and confidence.',
            'Individual approach to each student!',
        ],
    },
};

  
const About = () => {
    const { language } = useLanguage()
    const t = translations[language] || translations.RU

    return (
        <div id="about" className="flex items-center py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center md:text-left mb-8 md:mb-12">
                        <div className="mb-3">
                            <h2 className="gryphon text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                {t.aboutTitle}
                            </h2>
                        </div>
                    </div>

                    <div className="cards grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                        {t.aboutCards.map((text, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:bg-purple-500/30 transition-all duration-500"></div>
                                <div className="relative bg-gray-900/70 backdrop-blur-lg border border-purple-500/20 p-4 sm:p-6 rounded-xl shadow-xl group-hover:border-purple-500/40 transition-all duration-300">
                                    <p className="pad text-gray-400 text-base sm:text-lg">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
