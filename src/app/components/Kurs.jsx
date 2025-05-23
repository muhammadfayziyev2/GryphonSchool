'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useLanguage } from '../context/LanguageContext'

const translations = {
    RU: {
        // ...
        kurs: {
            title: 'КУРСЫ',
            ielts: [
                'Фирменные учебники',
                'Дополнительные занятия',
                'В группе учеников 15-20',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
                'Cinema Club',
            ],
            preIelts: [
                'Фирменные учебники',
                'В группе учеников 15-20',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
            ],
            elementary: [
                'Фирменные учебники',
                'Дополнительные занятия',
                'В группе учеников 15-20',
                'Student Support Teacher',
                'Cinema Club',
            ],
            russian: [
                'Фирменные учебники',
                'Дополнительные занятия',
                'В группе учеников 15-20',
                'Опытные ученики',
                'Гарантированные результаты',
            ],
        },
    },
    UZ: {
        // ...
        kurs: {
            title: 'KURSLAR',
            ielts: [
                'Brend darsliklar',
                'Qo‘shimcha mashg‘ulotlar',
                'Guruhda 15-20 o‘quvchi',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
                'Cinema Club',
            ],
            preIelts: [
                'Brend darsliklar',
                'Guruhda 15-20 o‘quvchi',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
            ],
            elementary: [
                'Brend darsliklar',
                'Qo‘shimcha mashg‘ulotlar',
                'Guruhda 15-20 o‘quvchi',
                'Student Support Teacher',
                'Cinema Club',
            ],
            russian: [
                'Brend darsliklar',
                'Qo‘shimcha mashg‘ulotlar',
                'Guruhda 15-20 o‘quvchi',
                'Tajribali o‘qituvchilar',
                'Kafolatlangan natijalar',
            ],
        },
    },
    EN: {
        // ...
        kurs: {
            title: 'COURSES',
            ielts: [
                'Branded textbooks',
                'Extra classes',
                '15–20 students per group',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
                'Cinema Club',
            ],
            preIelts: [
                'Branded textbooks',
                '15–20 students per group',
                'Student Support Teacher',
                'Speaking Club',
                'Writing Club',
            ],
            elementary: [
                'Branded textbooks',
                'Extra classes',
                '15–20 students per group',
                'Student Support Teacher',
                'Cinema Club',
            ],
            russian: [
                'Branded textbooks',
                'Extra classes',
                '15–20 students per group',
                'Experienced teachers',
                'Guaranteed results',
            ],
        },
    },
  }
const Kurs = () => {
    const { language } = useLanguage()
    const t = translations[language]?.kurs || translations.RU.kurs

    const courses = [
        {
            title: 'IELTS/CEFR',
            price: '350 000 сум',
            benefits: t.ielts,
        },
        {
            title: 'Pre IELTS',
            price: '300 000 сум',
            benefits: t.preIelts,
        },
        {
            title: 'Elementary English group',
            price: '280 000 сум',
            benefits: t.elementary,
        },
        {
            title: 'Русский Язык',
            price: '250 000 сум',
            benefits: t.russian,
        },
    ]

    return (
        <div className="kurs">
            <section className="projects-section">
                <h2 className="section-title">{t.title}</h2>
                <div className="underline"></div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    className="projects-grid"
                >
                    {courses.map((course, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-card">
                                <div className="card-front">
                                    {course.title} <br />
                                    {course.price}
                                </div>
                                <div className="card-back">
                                    {course.benefits.map((item, idx) => (
                                        <div key={idx}>{item}</div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    )
}

export default Kurs
