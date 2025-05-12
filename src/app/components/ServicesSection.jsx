'use client'

import React from 'react';

const services = [
    {
        description: 'В GRYPHON SCHOOL мы ценим вашу преданность и стремление к знаниям! Поэтому у нас действует уникальная система поощрений для наших учеников:',
        color: 'purple'
    },
    {

        description: '10% скидка за каждого нового ученика, которого вы приведёте. Достаточно, чтобы он записался на занятия по вашей рекомендации!',
        color: 'magenta'
    },
    {
        description: ' Ежемесячные призы для трёх самых активных и успешных учеников. Мы поощряем трудолюбие, усердие и достижения!.',
        color: 'cyan'
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="section-header">
                <h2 className="section-title">Скидки и Акции !</h2>
                <p className="section-subtitle">Приведи друга – получи скидку!</p>
            </div>

            <div className="cards-wrapper">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
