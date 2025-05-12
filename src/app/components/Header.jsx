'use client'

import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div className="header-unit">
                    <span className='name-logo'>GRYPHON SCHOOL</span>
                    <div className="navs">
                        <ul className='li-header'>
                            <li>Курсы</li>
                            <li>Местоположения</li>
                            <li>Скидки</li>
                        </ul>
                        <div className='btn-header'>
                            <Link href='/Register'>Получить скидку!</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header