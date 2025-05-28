'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ru: {
    fullName: "Ф.И.О.",
    phoneNumber: "Номер телефона",
    password: "Пароль",
    placeholderFullName: "Фамилия и имя",
    placeholderPhone: "Номер телефона",
    placeholderPassword: "Пароль",
    rememberMe: "Запомнить меня",
    forgotPassword: "Забыли пароль?",
    submit: "Отправить",
    registerTitle: "Регистрация",
    forgotPasswordAlert: "Введите новый пароль",
    newPassword: "Новый пароль",
    savePassword: "Сохранить пароль",
    successMessage: "Регистрация прошла успешно",
    passwordUpdated: "Пароль успешно обновлен",
    errorMessage: "Произошла ошибка",
  },
  uz: {
    fullName: "F.I.Sh",
    phoneNumber: "Telefon raqami",
    password: "Parol",
    placeholderFullName: "Familiya va ism",
    placeholderPhone: "Telefon raqam",
    placeholderPassword: "Parol",
    rememberMe: "Eslab qolish",
    forgotPassword: "Parolni unutdingizmi?",
    submit: "Yuborish",
    registerTitle: "Ro‘yxatdan o‘tish",
    forgotPasswordAlert: "Yangi parolni kiriting",
    newPassword: "Yangi parol",
    savePassword: "Parolni saqlash",
    successMessage: "Ro‘yxatdan o‘tildi",
    passwordUpdated: "Parol muvaffaqiyatli yangilandi",
    errorMessage: "Xatolik yuz berdi",
  },
  en: {
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    password: "Password",
    placeholderFullName: "Full Name",
    placeholderPhone: "Phone Number",
    placeholderPassword: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    submit: "Submit",
    registerTitle: "Registration",
    forgotPasswordAlert: "Enter a new password",
    newPassword: "New Password",
    savePassword: "Save Password",
    successMessage: "Registration successful",
    passwordUpdated: "Password updated successfully",
    errorMessage: "An error occurred",
  }
};

const Page = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language] || translations['ru'];

  const [studentUsers, setStudentUsers] = useState({
    full_name: '',
    phone_number: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('student_name');
    const savedPhone = localStorage.getItem('student_phone');
    const savedPassword = localStorage.getItem('student_password');

    if (savedName && savedPhone) {
      setStudentUsers({
        full_name: savedName,
        phone_number: savedPhone,
        password: savedPassword || '',
      });
      setRememberMe(true);
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    // Demo uchun serverga hech narsa yubormaymiz
    if (rememberMe) {
      localStorage.setItem('student_name', studentUsers.full_name);
      localStorage.setItem('student_phone', studentUsers.phone_number);
      localStorage.setItem('student_password', studentUsers.password);
    } else {
      localStorage.removeItem('student_name');
      localStorage.removeItem('student_phone');
      localStorage.removeItem('student_password');
    }

    setMessage(t.successMessage);
    router.push('/students');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleForgotPassword = () => {
    setStudentUsers((prev) => ({ ...prev, password: '' }));
    setShowResetPassword(true);
    setMessage(t.forgotPasswordAlert);
  };

  const handleResetPassword = () => {
    if (!newPassword) {
      setMessage(t.errorMessage);
      return;
    }

    localStorage.setItem('student_password', newPassword);
    setStudentUsers((prev) => ({ ...prev, password: newPassword }));
    setShowResetPassword(false);
    setMessage(t.passwordUpdated);
  };

  return (
    <div className="login-unit">
      <div className="contact-form-container">
        <h2>{t.registerTitle}</h2>
        <form onSubmit={handleRegister} className="contact-form">
          {!rememberMe && (
            <>
              <label>{t.fullName}</label>
              <input
                type="text"
                placeholder={t.placeholderFullName}
                name="full_name"
                required
                value={studentUsers.full_name}
                onChange={handleChange}
              />
            </>
          )}

          <label>{t.phoneNumber}</label>
          <input
            type="text"
            placeholder={t.placeholderPhone}
            name="phone_number"
            required
            value={studentUsers.phone_number}
            onChange={handleChange}
          />

          <label>{t.password}</label>
          <input
            type="password"
            placeholder={t.placeholderPassword}
            name="password"
            required
            value={studentUsers.password}
            onChange={handleChange}
          />

          {showResetPassword && (
            <>
              <label>{t.newPassword}</label>
              <input
                type="password"
                placeholder={t.newPassword}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="button" onClick={handleResetPassword}>
                {t.savePassword}
              </button>
            </>
          )}

          <div className="options" style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                style={{ marginRight: '8px' }}
              />
              {t.rememberMe}
            </label>
            <a
              onClick={handleForgotPassword}
              style={{
                marginLeft: 'auto',
                color: '#0070f3',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {t.forgotPassword}
            </a>
          </div>

          <button type="submit">{t.submit}</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Page;
