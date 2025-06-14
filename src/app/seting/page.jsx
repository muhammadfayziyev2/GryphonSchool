'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  uz: {
    settings: 'Sozlamalar',
    profile: 'Profil',
    changeName: 'Profil ismini uzgartirish',
    enterName: 'Ismingizni kiriting',
    background: 'Fon',
    language: 'Til',
    save: 'Saqlash',
  },
  en: {
    settings: 'Settings',
    profile: 'Profile',
    changeName: 'Change profile name',
    enterName: 'Enter your name',
    background: 'Background',
    language: 'Language',
    save: 'Save',
  },
  ru: {
    settings: 'Настройки',
    profile: 'Профиль',
    changeName: 'Изменить имя профиля',
    enterName: 'Введите ваше имя',
    background: 'Фон',
    language: 'Язык',
    save: 'Сохранить',
  },
}

const SettingsPage = () => {
  const { language, setLanguage } = useLanguage()
  const t = translations[language] ?? translations['uz']

  return (
    <div className="settings-container">
      <h2 className="settings-title">{t.settings}</h2>

      <div className="settings-section">
        <h3 className="section-title">{t.profile}</h3>
        <label className="setting-label">
          {t.changeName}
          <input type="text" placeholder={t.enterName} className="setting-input" />
        </label>
      </div>

      <div className="settings-section">
        <label className="setting-label toggle-label">
          {t.background}
          <input type="checkbox" className="setting-toggle" />
          <span className="toggle-slider"></span>
        </label>
      </div>

      <div className="settings-section">
        <h3 className="section-title">{t.language}</h3>
        <select
          className="setting-select"
          value={language}
          onChange={(e) => {
            const newLang = e.target.value || 'uz' | 'en' | 'ru'
            if (['uz', 'en', 'ru'].includes(newLang)) {
              setLanguage(newLang)
            }
          }}
        >
          <option value="uz">O‘zbekcha</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      <button className="save-button">{t.save}</button>
    </div>
  )
}

export default SettingsPage
