"use client";

import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useLanguage } from "../context/LanguageContext"; // 🔥 Kontekstni chaqirish

const translations = {
    ru: {
        courses: "Курсы",
        about: "О нас",
        location: "Наша местоположения",
        discount: "Скидки",
        getDiscount: "Получить скидку!",
    },
    uz: {
        courses: "Kurslar",
        about: "Biz haqimizda",
        location: "Manzilimiz",
        discount: "Chegirmalar",
        getDiscount: "Chegirma olish!",
    },
};

const Header = () => {
    const { language, changeLanguage } = useLanguage(); // 🔥 Tildan foydalanish
    const t = translations[language] || translations["ru"];

    return (
        <header>
            <div className="header">
                <h1 className="font_header">GRYPHON SCHOOL</h1>
                <ul id="nav-mobile" className="ul_header">
                    <li className="li">
                        <ScrollLink to="Kurs" smooth={true} duration={500} className="nav-link">
                            {t.courses}
                        </ScrollLink>
                    </li>
                    <li className="li">
                        <ScrollLink to="Komanda" smooth={true} duration={500} className="nav-link">
                            {t.about}
                        </ScrollLink>
                    </li>
                    <li className="li">
                        <ScrollLink to="Location" smooth={true} duration={500} className="nav-link">
                            {t.location}
                        </ScrollLink>
                    </li>
                    <li className="li"> 
                        <ScrollLink to="Aktion" smooth={true} duration={500} className="nav-link">
                            {t.discount}
                        </ScrollLink>
                    </li>
                </ul>
                <div>
                    <Link target="_blank" href="/Register" className="btn_header">
                        {t.getDiscount}
                    </Link>
                    <select
                        className="select_header"
                        value={language}
                        onChange={(e) => changeLanguage(e.target.value)} 
                    >
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                </div> 
            </div>
        </header>
    );
};

export default Header;
