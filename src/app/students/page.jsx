'use client'

import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiMiniCog } from "react-icons/hi2";

const Page = ({ children }) => {
  return (
    <div className="ws-container">
      <section className="hero-section">
        <header className="hero-navbar">
          <div className="logo-users">
            <FaUserCircle style={{ width: '40px', height: '40px', color: 'white' }} />
            <div className='user-name'>Fayziyev Muhammad</div>
          </div>
          <div className="nav-actions">
            <Link className='nav-links' href="/articles">Articles</Link>
            <Link className='nav-links' href="/books">Books</Link>
            <Link className='nav-links' href="/listning">Listning</Link>
            <button className="get-started">Speaking</button>
            <button className="get-started">Writing</button>
            <HiMiniCog style={{ width: '30px', height: '30px' }} />
          </div>
        </header>

        <main>
          {children}
        </main>
      </section>
    </div>
  );
};

export default Page;
