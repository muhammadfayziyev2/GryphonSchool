'use client'

import React from 'react';
import { useLanguage } from '../context/LanguageContext';  


const translations = {
    RU: {
        services: {
            title: 'Скидки и Акции !',
            subtitle: 'Приведи друга – получи скидку!',
            cards: [
                'В GRYPHON SCHOOL мы ценим вашу преданность и стремление к знаниям! Поэтому у нас действует уникальная система поощрений для наших учеников:',
                '10% скидка за каждого нового ученика, которого вы приведёте. Достаточно, чтобы он записался на занятия по вашей рекомендации!',
                'Ежемесячные призы для трёх самых активных и успешных учеников. Мы поощряем трудолюбие, усердие и достижения!.',
            ],
        },
    },
    UZ: {
        services: {
            title: 'Chegirmalar va Aksiyalar!',
            subtitle: 'Do‘stingizni olib keling – chegirma oling!',
            cards: [
                'GRYPHON SCHOOLda biz sizning bilimga bo‘lgan sadoqatingiz va intilishingizni qadrlaymiz! Shuning uchun bizda o‘quvchilarimiz uchun noyob rag‘batlantirish tizimi mavjud:',
                'Har bir yangi o‘quvchi uchun 10% chegirma, uni sizning tavsiyangiz bilan darslarga yozilgan bo‘lsa kifoya qiladi!',
                'Eng faol va muvaffaqiyatli uch o‘quvchiga oyma-oy sovrinlar. Biz mehnatsevarlik, tirishqoqlik va yutuqlarni rag‘batlantiramiz!',
            ],
        },
    },
    EN: {
        services: {
            title: 'Discounts and Promotions!',
            subtitle: 'Bring a friend – get a discount!',
            cards: [
                'At GRYPHON SCHOOL, we value your dedication and eagerness to learn! That’s why we have a unique reward system for our students:',
                '10% discount for every new student you bring. It’s enough that they enroll based on your recommendation!',
                'Monthly prizes for the three most active and successful students. We encourage hard work, diligence, and achievements!',
            ],
        },
    },
};
  
const ServicesSection = () => {
    const { language } = useLanguage();
    const t = translations[language]?.services || translations.RU.services;

    return (
        <section className="services-section">
            <div className="section-header">
                <h2 className="section-title">{t.title}</h2>
                <p className="section-subtitle">{t.subtitle}</p>
            </div>

            <div className="cards-wrapper">
                {t.cards.map((desc, index) => (
                    <div key={index} className="service-card">
                        {/* Agar title kerak bo'lsa, qo'shishingiz mumkin */}
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
