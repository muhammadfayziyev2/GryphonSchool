'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiMiniCog } from "react-icons/hi2";

const ChatbotSetup = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [studentName, setStudentName] = useState('');


  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };
  
  useEffect(() => {
    const name = localStorage.getItem('student_name');
    if (name) {
      setStudentName(name);
    }
  }, []);

  return (
    <div className='ws-container'>
      <header className="hero-navbar">
        <div className="logo-users">
          <FaUserCircle style={{ width: '40px', height: '40px', color: 'white' }} />
          <div className='user-name'>{studentName}</div>
        </div>
        <div className="nav-actions">
          <HiMiniCog
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="dropdown-menu">
              <a href="/" className="menu-link">Nзменить имя</a>
            </div>
          )}
        </div>
      </header>

      <div className="container">
        <h2>Set up your chatbot</h2>
        <div className="grid">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">📄</div>
              <Link href='/articles' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Articles</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">📚</div>
              <Link href='/books' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Books</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🎧</div>
              <Link href='/listning' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Listening</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">✍️</div>
              <Link href='/writing' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Writing</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🗣️</div>
              <Link href='/speaking' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Speaking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSetup;
