"use client";

import Link from "next/link";
import { useState } from "react";
import { RiHome4Line, RiTelegram2Fill } from "react-icons/ri";
import { PiArticleNyTimes } from "react-icons/pi";
import { SiBookstack } from "react-icons/si";
import { FaTeamspeak, FaEarListen, FaReadme } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { IoIosSettings } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { Menu, X } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';

const translations = {
    ru: {
        home: "Домашняя страница",
        settings: "Настройки",
    },
    uz: {
        home: "Bosh sahifa",
        settings: "Sozlamalar",
    },
    en: {
        home: "Home",
        settings: "Settings",
    },
  };

export default function Sidebar({ children }) {
    const [open, setOpen] = useState(false);
    const { language } = useLanguage();
      const t = translations[language] ?? translations['ru'];

    return (
        <>
            <div className="sidebar">
                <div className="logo" />
                <nav className="nav">
                    <Link href="/home" className="nav-item"><RiHome4Line style={{ width: '25px', height: '25px' }} />
                        {t.home}</Link>
                    <Link href="/articles" className="nav-item"><PiArticleNyTimes style={{ width: '25px', height: '25px' }} /> Articles</Link>
                    <Link href="/books" className="nav-item"><SiBookstack style={{ width: '25px', height: '25px' }} /> Kitoblar</Link>
                    <Link href="/listning" className="nav-item"><FaEarListen style={{ width: '25px', height: '25px' }} /> Listening</Link>
                    <Link href="/reading" className="nav-item"><FaReadme style={{ width: '25px', height: '25px' }} /> Reading</Link>
                    <Link href="/speaking" className="nav-item"><FaTeamspeak style={{ width: '25px', height: '25px' }} /> Speaking</Link>
                    <Link href="/writing" className="nav-item"><TfiWrite style={{ width: '25px', height: '25px' }} /> Writing</Link>
                    <Link href="/seting" className="nav-item"><IoIosSettings style={{ width: '25px', height: '25px' }} />
                    {t.settings}</Link>
                </nav>
                <div className="icons-sidebar">
                    <a target="_blanke" href="https://t.me/gryphon_academy_english"><RiTelegram2Fill style={{ color: 'blue', width: '25px', height: '25px' }} /></a>
                    <a target="_blanke" href="https://www.instagram.com/gryphon_educational_center?igsh=cHV6Zmk3OWU5ajlu"><IoLogoInstagram style={{ color: '#E1306C ', width: '25px', height: '25px' }} /></a>
                </div>
            </div>
            <main className="main-content">{children}</main>
        </>
    );
}
