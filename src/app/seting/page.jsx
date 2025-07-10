'use client'

import React, { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'

const translations = {
  ru: {
    settings: 'Настройки',
    profile: 'Профиль',
    changeName: 'Изменить имя профиля',
    enterName: 'Введите ваше имя',
    background: 'Фон',
    language: 'Язык',
    save: 'Сохранить',
    saving: 'Сохранение...',
  },
  uz: {
    settings: 'Sozlamalar',
    profile: 'Profil',
    changeName: 'Profil ismini o‘zgartirish',
    enterName: 'Ismingizni kiriting',
    background: 'Fon',
    language: 'Til',
    save: 'Saqlash',
    saving: 'Saqlanmoqda...',
  },
  en: {
    settings: 'Settings',
    profile: 'Profile',
    changeName: 'Change profile name',
    enterName: 'Enter your name',
    background: 'Background',
    language: 'Language',
    save: 'Save',
    saving: 'Saving...',
  },
}

const SettingsPage = () => {
  const { language, setLanguage } = useLanguage()
  const [name, setName] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const t = translations[language] ?? translations['ru']

  useEffect(() => {
    const savedName = localStorage.getItem('userName')
    if (savedName) setName(savedName)

    const savedLang = localStorage.getItem('language')
    if (savedLang && ['ru', 'uz', 'en'].includes(savedLang)) {
      setLanguage(savedLang)
    }
  }, [setLanguage])

  const handleSave = () => {
    setIsSaving(true)
    localStorage.setItem('userName', name)
    localStorage.setItem('language', language)

    setTimeout(() => {
      setIsSaving(false)
    }, 1500)
  }

  return (
    <div>
      <Header />
      <div className='seti'>
        <div className="settings-container">
          <h2 className="settings-title">{t.settings}</h2>

          <div className="settings-section">
            <h3 className="section-title">{t.profile}</h3>
            <label className="setting-label">
              {t.changeName}
              <input
                type="text"
                placeholder={t.enterName}
                className="setting-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
                const newLang = e.target.value
                if (['ru', 'uz', 'en'].includes(newLang)) {
                  setLanguage(newLang)
                  localStorage.setItem('language', newLang)
                }
              }}
            >
              <option value="ru">Русский</option>
              <option value="uz">O‘zbekcha</option>
              <option value="en">English</option>
            </select>
          </div>

          <button
            className="save-button flex items-center justify-center gap-2"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                  />
                </svg>
                {t.saving}
              </>
            ) : (
              t.save
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
