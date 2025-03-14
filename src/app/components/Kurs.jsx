"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "../context/LanguageContext"; // 🔥 Til konteksti
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const translations = {
  ru: {
    title: "КУРСЫ",
    courses: [
      {
        nomi: "IELTS/CEFR",
        narx: "350 000 сум",
        tavsif: [
          "Фирменные учебники",
          "Дополнительные занятия",
          "В группе учеников 15-20",
          "Student Support Teacher",
          "Speaking Club",
          "Writing Club",
          "Cinema Club",
        ],
      },
      {
        nomi: "Pre IELTS",
        narx: "250 000 сум",
        tavsif: [
          "Фирменные учебники",
          "В группе учеников 15-20",
          "Student Support Teacher",
          "Speaking Club",
          "Writing Club",
          "Cinema Club",
        ],
      },
      {
        nomi: "Elementary English group",
        narx: "250 000 сум",
        tavsif: [
          "Фирменные учебники",
          "Дополнительные занятия",
          "В группе учеников 15-25",
          "Student Support Teacher",
          "Cinema Club",
        ],
      },
      {
        nomi: "Русский Язык",
        narx: "250 000 сум",
        tavsif: [
          "Фирменные учебники",
          "Дополнительные занятия",
          "В группе учеников 15-20",
          "Опытные ученики",
          "Гарантированные результаты",
        ],
      },
    ],
  },
  uz: {
    title: "KURSLAR",
    courses: [
      {
        nomi: "IELTS/CEFR",
        narx: "350 000 so‘m",
        tavsif: [
          "Brend darsliklar",
          "Qo‘shimcha mashg‘ulotlar",
          "Guruhda 15-20 nafar o‘quvchi",
          "Student Support Teacher",
          "Speaking Club",
          "Writing Club",
          "Cinema Club",
        ],
      },
      {
        nomi: "Pre IELTS",
        narx: "250 000 so‘m",
        tavsif: [
          "Brend darsliklar",
          "Guruhda 15-20 nafar o‘quvchi",
          "Student Support Teacher",
          "Speaking Club",
          "Writing Club",
          "Cinema Club",
        ],
      },
      {
        nomi: "Elementary English group",
        narx: "250 000 so‘m",
        tavsif: [
          "Brend darsliklar",
          "Qo‘shimcha mashg‘ulotlar",
          "Guruhda 15-25 nafar o‘quvchi",
          "Student Support Teacher",
          "Cinema Club",
        ],
      },
      {
        nomi: "Rus Tili",
        narx: "250 000 so‘m",
        tavsif: [
          "Brend darsliklar",
          "Qo‘shimcha mashg‘ulotlar",
          "Guruhda 15-20 nafar o‘quvchi",
          "Tajribali o‘qituvchilar",
          "Kafolatlangan natijalar",
        ],
      },
    ],
  },
};

const Kurs = () => {
  const { language } = useLanguage(); 
  const t = translations[language] || translations["ru"];

  return (
    <section id="Kurs">
      <main className="main_kurs">
        <div className="kurs_name">
          <h1 className="kurs_name_h1">{t.title}</h1>
        </div>
        <Swiper
          modules={[ Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {t.courses.map((kurs, index) => (
            <SwiperSlide key={index}>
              <div className="kurs_home">
                <div className="kurs_home_2">
                  <p className="kurs_home_p">{kurs.nomi}</p>
                  <p className="kurs_home_p">{kurs.narx}</p>
                </div>
                {kurs.tavsif.map((item, i) => (
                  <span key={i} className="kurs_span">- {item}</span>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
};

export default Kurs;
