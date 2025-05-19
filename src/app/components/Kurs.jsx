'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Kurs = () => {
    return (
        <div className="kurs">
            <section className="projects-section">
                <h2 className="section-title">КУРСЫ</h2>
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
                    <SwiperSlide>
                        <div className="project-card">
                            <div className="card-front">
                                IELTS/CEFR <br />
                                350 000 сум
                            </div>
                            <div className="card-back">
                                Фирменные учебники <br />
                                Дополнительные занятия<br />
                                В группе учеников 15-20 <br />
                                Student Support Teacher <br />
                                Speaking Club <br />
                                Writing Club <br />
                                Cinema Club
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="project-card">
                            <div className="card-front">
                                Pre IELTS <br />
                                300 000 сум
                            </div>
                            <div className="card-back">
                                Фирменные учебники <br />
                                В группе учеников 15-20 <br />
                                Student Support Teacher <br />
                                Speaking Club <br />
                                Writing Club
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-card">
                            <div className="card-front">
                                Elementary English group <br />
                                280 000 сум
                            </div>
                            <div className="card-back">
                                Фирменные учебники <br />
                                Дополнительные занятия<br />
                                В группе учеников 15-20 <br />
                                Student Support Teacher <br />
                                Cinema Club
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-card">
                            <div className="card-front">
                                Русский Язык <br />
                                250 000 сум
                            </div>
                            <div className="card-back">
                                Фирменные учебники <br />
                                Дополнительные занятия<br />
                                В группе учеников 15-20 <br />
                                Опытные ученики<br />
                                Гарантированные результаты
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default Kurs
