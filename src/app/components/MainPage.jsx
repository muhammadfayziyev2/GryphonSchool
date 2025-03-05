"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  ru: {
    title: "Раскройте свой потенциал с GRYPHON – вашим проводником в мир знаний!",
    description:
      "Добро пожаловать в GRYPHON, где знание становится силой! Наш центр предлагает обучение английскому языку и русскому языку, помогая вам достичь новых высот независимо от вашего уровня подготовки.",
    whyTitle: "Почему GRYPHON SCHOOL?",
    features: [
      {
        img: "/DALL·E.jpg",
        text: "Gryphon — первый образовательный центр в Каттакургане с собственным сайтом!",
      },
      {
        img: "/Flux_Dev_We_specialize_in_teaching_English_and_mathematicsAn_i_2.jpeg",
        text: "Мы специализируемся на обучении Английскому и Русскому языку.",
      },
      {
        img: "/Flux_Dev_Illustration_in_a_minimalist_style_the_teacher_helps_2.jpeg",
        text: "Наши учителя — это не только профессионалы, но и наставники, которые помогают каждому освоить материал легко и с уверенностью.",
      },
      {
        img: "/notebook.webp",
        text: "Индивидуальный подход к каждому ученику!",
      },
    ],
  },
  uz: {
    title: "GRYPHON bilan salohiyatingizni oching – bilim olamiga yo‘lboshchingiz!",
    description:
      "GRYPHON ga xush kelibsiz! Biz sizga ingliz tili va rus tilidanА ta’lim beramiz, tayyorgarlik darajangizdan qat’i nazar, sizni yangi yutuqlarga yetaklaymiz.",
    whyTitle: "Nega aynan GRYPHON SCHOOL?",
    features: [
      {
        img: "/DALL·E.jpg",
        text: "Gryphon — Kattakurgandagi o‘z veb-saytiga ega bo‘lgan birinchi ta’lim markazi!",
      },
      {
        img: "/Flux_Dev_We_specialize_in_teaching_English_and_mathematicsAn_i_2.jpeg",
        text: "Biz ingliz va rus tillarini o‘qitishga ixtisoslashganmiz.",
      },
      {
        img: "/Flux_Dev_Illustration_in_a_minimalist_style_the_teacher_helps_2.jpeg",
        text: "Bizning o‘qituvchilarimiz nafaqat mutaxassislar, balki bilimlarni ishonch bilan o‘zlashtirishga yordam beradigan murabbiylardir.",
      },
      {
        img: "/notebook.webp",
        text: "Har bir o‘quvchiga individual yondashuv!",
      },
    ],
  },
};

const MainPage = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations["ru"];

  return (
    <main>
      <div className="main_page">
        <div className="main_page_2">
          <h1 className="main_word">{t.title}</h1>
          <div className="main_span">
            <span>{t.description}</span>
          </div>
        </div>
        <img src="/school.jpg" alt="School" className="img_main" />
      </div>

      <div className="name_school">
        <p>
          {t.whyTitle} <span className="name_school_2"></span>
        </p>
      </div>

      <div className="public_mane">
        {t.features.map((feature, index) => (
          <div key={index} className="public">
            <img src={feature.img} alt="Feature" className="img_mane" />
            <span className="public_span">{feature.text}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainPage;
