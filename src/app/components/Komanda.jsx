"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext"; // 🔥 Til konteksti

const translations = {
  ru: {
    title: "Наш",
    school: "GRYPHON SCHOOL",
    students: "Учеников за все время",
    teachers: "Самых опытных учителей",
    results: "Результатов IELTS / CEFR",
  },
  uz: {
    title: "Bizning",
    school: "GRYPHON SCHOOL",
    students: "Jami o‘quvchilar soni",
    teachers: "Eng tajribali o‘qituvchilar",
    results: "IELTS / CEFR natijalari",
  },
};

const Komanda = () => {
  const { language } = useLanguage(); // 🔥 Tilni olish
  const t = translations[language] || translations["ru"];

  return (
    <section id="Komanda">
      <main className="komanda">
        <div>
          <div>
            <span className="span_komand">
              {t.title} <span className="span_komoand_2">{t.school}</span>
            </span>
          </div>
          <div className="main_komanda">
            <div>
              <img src="studentttt.jpg" alt="#" className="img_komanda" />
            </div>
            <div className="information_main">
              <div>
                <span className="information">2000+</span>
                <p className="information_2">{t.students}</p>
              </div>
              <div>
                <span className="information">10</span>
                <p className="information_2">{t.teachers}</p>
              </div>
              <div>
                <span className="information">200+</span>
                <p className="information_2">{t.results}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Komanda;
