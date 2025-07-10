'use client'

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
    ru: {
        title: "Почему GRYPHON SCHOOL?",
        items: [
            "Gryphon — первый образовательный центр в Каттакургане с собственным сайтом!",
            "Мы специализируемся на обучении Английскому и Русскому языку.",
            "Наши учителя — это не только профессионалы, но и наставники, которые помогают каждому освоить материал легко и с уверенностью.",
            "Индивидуальный подход к каждому ученику!",
        ],
    },
    uz: {
        title: "Nega GRYPHON SCHOOL?",
        items: [
            "Gryphon — Kattako‘rgonda o‘zining shaxsiy saytiga ega birinchi ta’lim markazi!",
            "Biz ingliz va rus tillarini o‘qitishga ixtisoslashganmiz.",
            "O‘qituvchilarimiz nafaqat professional, balki har bir o‘quvchiga oson va ishonch bilan o‘rganishga yordam beradigan murabbiylardir.",
            "Har bir o‘quvchiga individual yondashuv!",
        ],
    },
    en: {
        title: "Why GRYPHON SCHOOL?",
        items: [
            "Gryphon is the first educational center in Kattakurgan with its own website!",
            "We specialize in teaching English and Russian languages.",
            "Our teachers are not only professionals but also mentors who help each student master the material easily and confidently.",
            "An individual approach to every student!",
        ],
    },
};

const AboutUs = () => {
    const { language } = useLanguage();
    const t = translations[language] ?? translations['ru'];

    return (
        <div className='about'>
            <div className='about-home-p'>
                <p>{t.title}</p>
            </div>
            <div className='about-us'>
                {t.items.map((text, index) => (
                    <div className='units-about' key={index}>
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
