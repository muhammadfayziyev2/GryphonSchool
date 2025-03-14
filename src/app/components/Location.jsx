"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext"; // 🔥 Til konteksti
import Link from "next/link";

const translations = {
    ru: {
        title: "Локация",
        region: "Самаркандская область",
        address: "Каттакурган, Амир Темур дом 1",
        phone: "Телефон: +998 93 300 58 40",
        hours: "Рабочее время: 8:00-21:00, с понедельника по субботу",
        map: "https://maps.app.goo.gl/eSseJdyfmrRpGMyo7",
    },
    uz: {
        title: "Manzil",
        region: "Samarqand viloyati",
        address: "Kattakurgan, Amir Temur ko‘chasi 1-uy",
        phone: "Telefon: +998 93 300 58 40",
        hours: "Ish vaqti: 8:00-21:00, Dushanba - Shanba",
        map: "https://maps.app.goo.gl/eSseJdyfmrRpGMyo7",
    },
};

const Location = () => {
    const { language } = useLanguage(); 
    const t = translations[language] || translations["ru"];

    return (
        <section id="Location">
            <footer>
                <div>
                    <span className="name_location">{t.title}</span>
                </div> 
                <div className="main_location">
                    <div className="main_location_words">
                        <p className="p_location">{t.region}</p>
                        <span className="span_location">{t.address}</span>
                        <a target="_blank" href={t.map}>
                            <img src="karta.png" alt="Map" className="img_location" />
                        </a>
                    </div>
                    <div className="main_location_words">
                        <p className="span_location">{t.phone}</p>
                        <span className="span_location">{t.hours}</span>
                        <img src="logo2.jpg" alt="Students" className="img_location" />
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Location;
