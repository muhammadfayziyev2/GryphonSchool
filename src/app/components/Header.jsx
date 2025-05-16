'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <>
            <header className="header bg-white fixed top-0 w-full z-50 border-b">
                <div className="header-unit max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="name-logo text-2xl font-bold text-black">
                        GRYPHON SCHOOL
                    </Link>

                    {/* Desktop Nav */}
                    <div className="navs hidden md:flex items-center space-x-8">
                        <ul className="li-header flex space-x-6 text-[16px] font-medium text-gray-800">
                            <li><Link href="#" className="hover:text-blue-600 transition">Курсы</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Местоположения</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition">Скидки</Link></li>
                        </ul>
                        <div className="btn-header ml-6">
                            <Link href="/Register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                Получить скидку!
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleSidebar} aria-label="Toggle Menu">
                            <BiMenu size={20} className="text-black" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={closeSidebar}
                />
            )}

            {/* Mobile Sidebar */}
            <div className={`sidebar fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="sidebar_header flex justify-between items-center px-4 py-4 border-b">
                    <span className="text-lg font-bold text-black">GRYPHON SCHOOL</span>
                    <button onClick={closeSidebar}>
                        <IoClose size={24} />
                    </button>
                </div>
                <div className="flex flex-col px-4 py-4 space-y-4 text-[16px] font-medium text-gray-800">
                    <Link href="#" onClick={closeSidebar} className="hover:text-blue-600 transition">Курсы</Link>
                    <Link href="#" onClick={closeSidebar} className="hover:text-blue-600 transition">Местоположения</Link>
                    <Link href="#" onClick={closeSidebar} className="hover:text-blue-600 transition">Скидки</Link>
                    <Link
                        href="/Register"
                        onClick={closeSidebar}
                        className="hover:text-blue-600 transition"
                    >
                        Получить скидку!
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
