'use client'

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
                <div className="card-icon">🧠</div> 
                <button className="preview-btn">Начать</button>
              </div>
              <div className="card-title"></div>
              <div className="card-desc"></div>
            </div>
            <div className="card">
            <div className="card-header">
              <div className="card-icon">🧠</div> 
              <button className="preview-btn">Начать</button>
            </div>
            <div className="card-title"></div>
            <div className="card-desc"></div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🧠</div>
              <button className="preview-btn">Начать</button>
            </div>
            <div className="card-title"></div>
            <div className="card-desc"></div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🧠</div>
              <button className="preview-btn">Начать</button>
            </div>
            <div className="card-title"></div>
            <div className="card-desc"></div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🧠</div>
              <button className="preview-btn">Начать</button>
            </div>
            <div className="card-title"></div>
            <div className="card-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSetup;
