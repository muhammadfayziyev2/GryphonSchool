"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext"; 
import Link from "next/link";

const translations = {
  ru: {
    title: "Скидики и Акции !",
    discountTitle: "Приведи друга – получи скидку!",
    description1: "В GRYPHON SCHOOL мы ценим вашу преданность и стремление к знаниям! Поэтому у нас действует уникальная система поощрений для наших учеников:",
    discount1: "✔️ 10% скидка за каждого нового ученика, которого вы приведёте. Достаточно, чтобы он записался на занятия по вашей рекомендации!",
    discount2: "✔️ Ежемесячные призы для трёх самых активных и успешных учеников. Мы поощряем трудолюбие, усердие и достижения!",
    encouragement: "Не упускайте возможность учиться с выгодой и получать подарки! Делитесь знаниями и приглашайте друзей в GRYPHON SCHOOL.",
    registerNow: "Получить скидку!",
  },
  uz: {
    title: "Chegirma va aksiyalar !",
    discountTitle: "Do‘stingizni olib keling – chegirma oling!",
    description1: "GRYPHON SCHOOL sizning sadoqatingiz va bilimga bo‘lgan intilishingizni qadrlaydi! Shuning uchun biz o‘quvchilarimiz uchun maxsus rag‘batlantirish tizimini yaratdik:",
    discount1: "✔️ Har bir yangi o‘quvchi uchun 10% chegirma. Do‘stingiz sizning tavsiyangiz bilan darslarga yozilsa, chegirma olasiz!",
    discount2: "✔️ Har oy eng faol va muvaffaqiyatli uchta o‘quvchiga sovg‘alar! Mehnatsevarlik, tirishqoqlik va yutuqlarni qadrlaymiz!",
    encouragement: "Bilim ulashing va do‘stlaringizni GRYPHON SCHOOL ga taklif qiling!",
    registerNow: "Bepul dars!",
  },
};

const Aktion = () => {
  const { language } = useLanguage(); 
  const t = translations[language] || translations["ru"];

  return (
    <section id="Aktion">
      <div> 
        <div className="aktion">
          <span className="span_aktion">{t.title}</span>
        </div>
        <div className="aktion_div">
          <h2 className="h2_aktion">{t.discountTitle}</h2>
          <span className="span_aktion_2">{t.description1}</span>
          <span className="span_aktion_2">{t.discount1}</span>
          <span className="span_aktion_2">{t.discount2}</span>
          <span className="span_aktion_2">{t.encouragement}</span>
          <div className="link">
            <Link target="_blank" href="/Register" className="btn_header">
              {t.registerNow}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aktion;
