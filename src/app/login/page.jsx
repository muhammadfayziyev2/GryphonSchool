'use client'

import axios from 'axios';
import React, { useState } from 'react';
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
    forgotPasswordAlert: "Для восстановления пароля обратитесь к администратору или перейдите на соответствующую страницу.",
    successMessage: "Регистрация прошла успешно",
    errorMessage: "Произошла ошибка",
    serverErrorMessage: "Ошибка сервера",
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
    forgotPasswordAlert: "Parolni tiklash uchun administratorga murojaat qiling yoki tegishli sahifaga o‘ting.",
    successMessage: "Ro‘yxatdan o‘tildi",
    errorMessage: "Xatolik yuz berdi",
    serverErrorMessage: "Serverda xatolik",
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
    forgotPasswordAlert: "To reset your password, please contact the administrator or visit the relevant page.",
    successMessage: "Registration successful",
    errorMessage: "An error occurred",
    serverErrorMessage: "Server error",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://iqrotalimapi.pythonanywhere.com/accounts/signup/',
        studentUsers
      );

      if (response.status === 200 || response.status === 201) {
        setMessage(t.successMessage);
        localStorage.setItem('student_name', studentUsers.full_name);
        localStorage.setItem('student_phone', studentUsers.phone_number);

        router.push('/students');
      } else {
        setMessage(t.errorMessage);
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setMessage(t.serverErrorMessage);
    }
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
    alert(t.forgotPasswordAlert);
  };

  return (
    <div className="login-unit">
      <div className="contact-form-container">
        <h2>{t.registerTitle}</h2>
        <form onSubmit={handleRegister} className="contact-form">
          <label>{t.fullName}</label>
          <input
            type="text"
            placeholder={t.placeholderFullName}
            name="full_name"
            required
            value={studentUsers.full_name}
            onChange={handleChange}
          />
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
                textDecoration: 'underline'
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