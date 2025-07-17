'use client';

import React, { useEffect, useState } from 'react';
import { FiMoon, FiMenu } from 'react-icons/fi';
import { FaCircleUser } from 'react-icons/fa6';
import Link from 'next/link';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [studentName, setStudentName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);


    useEffect(() => {
        const name = localStorage.getItem('student_name');
        const phone = localStorage.getItem('student_phone');

        if (name && phone) {
            setIsLoggedIn(true);
            setStudentName(name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('student_name');
        localStorage.removeItem('student_phone');
        setIsLoggedIn(false);
        setShowModal(false);
        window.location.href = '/login';
    };

    return (
        <>
            <div
                className={`nav-sedeber-wrapper fixed top-0 left-0 h-full w-64 bg-black text-white z-50 p-5 transition-transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-lg font-bold">Меню</h2>
                    <button onClick={() => setShowSidebar(false)}>✕</button>
                </div>
                <nav className="flex flex-col gap-4 ">
                    <Link href="/" onClick={() => setShowSidebar(false)}>
                    Домашняя страница</Link>
                    <Link href="/Register" onClick={() => setShowSidebar(false)}>Получить скидку!</Link>
                    <Link href="/articles" >
                        Articles
                    </Link>
                    <Link href="/books">
                        Kitoblar
                    </Link>
                    <Link href="/listning">
                        Listening
                    </Link>
                    <Link href="/reading"> Reading
                    </Link>
                    <Link href="/speaking">
                        Speaking
                    </Link>
                    <Link href="/writing"> Writing
                    </Link>
                    <Link href="/seting">

                        Настройки
                    </Link>
                    {isLoggedIn && <Link href="/seting" onClick={() => setShowSidebar(false)}>
                    Настройки</Link>}
                </nav>
            </div>

            <div className="header flex items-center justify-between px-4 py-3 bg-white shadow-md z-40 relative">
                <div className="flex items-center gap-4">
                    <FiMenu
                        className="cursor-pointer text-2xl fimenu"
                        onClick={() => setShowSidebar(!showSidebar)}
                    />
                    <p className="logo-name font-bold text-lg">GRYPHON SCHOOL</p>
                </div>

                <div className="icons-header flex items-center relative">
                    <Link href="/Register" className="btn-header">
                        Получить скидку!
                    </Link>

                    {isLoggedIn ? (
                        <>
                            <FaCircleUser
                                onClick={() => setShowModal(!showModal)}
                                style={{
                                    width: '30px',
                                    height: '35px',
                                    cursor: 'pointer',
                                }}
                                title={studentName}
                            />
                            {showModal && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50px',
                                        right: '0',
                                        backgroundColor: 'black',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                                        borderRadius: '8px',
                                        padding: '12px 16px',
                                        zIndex: 100,
                                        minWidth: '200px',
                                        color: '#fff',
                                    }}
                                >
                                    <p style={{ margin: '0 0 10px 0' }}>
                                        <strong>{studentName}</strong>
                                    </p>
                                    <div>
                                        <Link href='/seting'>
                                        Настройки</Link>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            marginTop: '10px',
                                            padding: '6px 12px',
                                            backgroundColor: '#ff4d4f',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link href="/login" className="btn-header-login">
                            Войти
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;
