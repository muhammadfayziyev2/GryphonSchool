'use client'

import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

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
        'https://authentification.pythonanywhere.com/api/accounts/signup/',
        studentUsers
      );
      if (response.status === 200 || response.status === 201) {
        setMessage('Ro‘yxatdan o‘tildi');
        if (rememberMe) {
          localStorage.setItem('student_phone', studentUsers.phone_number);
        }

        router.push('/students');
      } else {
        setMessage('Xatolik yuz berdi');
      }
    } catch (error) {
      console.error('Xatolik:', error.response?.data || error.message);
      setMessage('Serverda xatolik');
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
    alert('Parolni tiklash uchun administratorga murojaat qiling yoki tegishli sahifaga o‘ting.');
  };

  return (
    <div className="login-unit">
      <div className="contact-form-container">
        <h2>Ro‘yxatdan o‘tish</h2>
        <form onSubmit={handleRegister} className="contact-form">
          <label>F.I.Sh</label>
          <input
            type="text"
            placeholder="Familiya va ism"
            name="full_name"
            required
            value={studentUsers.full_name}
            onChange={handleChange}
          />
          <label>Telefon raqami</label>
          <input
            type="text"
            placeholder="Telefon raqam"
            name="phone_number"
            required
            value={studentUsers.phone_number}
            onChange={handleChange}
          />
          <label>Parol</label>
          <input
            type="password"
            placeholder="Parol"
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
              Eslab qolish
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
              Parolni unutdingizmi?
            </a>
          </div>

          <button type="submit">Yuborish</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    
  );
};

export default Page;
