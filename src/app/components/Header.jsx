'use client'

import React from 'react'
import { FiMoon } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import Link from 'next/link';

const Header = () => {
    return (
        <div className='header'>
            <div>
                <p className='logo-name'>GRYPHON SCHOOL</p>
            </div>
            <div className='icons-header'>
                <Link href='/Register' className='btn-header'>Получить скидку!</Link>
                <FiMoon style={{ width: '25px', height: '20px' }} />
                <FaCircleUser style={{ width: '30px', height: '35px' }} />
            </div>
        </div>
    )
}

export default Header