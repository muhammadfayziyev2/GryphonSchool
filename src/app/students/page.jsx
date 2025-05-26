'use client'

import Link from 'next/link';
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { HiMiniCog } from "react-icons/hi2";


const ChatbotSetup = () => {
  return (
    <div className='ws-container'>
      <header className="hero-navbar">
        <div className="logo-users">
          <FaUserCircle style={{ width: '40px', height: '40px', color: 'white' }} />
          <div className='user-name'>Fayziyev Muhammad</div>
        </div>
        <div className="nav-actions">
          <HiMiniCog style={{ width: '30px', height: '30px' }} />
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
              <div className="card-icon">📚</div> {/* Books */}
              <Link href='/books' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Books</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🎧</div> {/* Listening */}
              <Link href='/listning' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Listening</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">✍️</div> {/* Writing */}
              <Link href='/writing' className="preview-btn">Начать</Link>
            </div>
            <div className="card-title">Writing</div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🗣️</div> {/* Speaking */}
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
