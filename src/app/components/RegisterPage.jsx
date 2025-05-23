'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLanguage } from '../context/LanguageContext';


const translations = {
    RU: {
        register: {
            header: 'Пожалуйста, оставьте свои контактные данные',
            nameLabel: 'Фамилия и имя',
            namePlaceholder: 'Фамилия и имя',
            phoneLabel: 'Номер телефона',
            phonePlaceholder: 'Номер телефона',
            courseLabel: 'Курс',
            courseOptions: {
                default: 'Выберите курс',
                ielts: 'IELTS / CEFR',
                english: 'Английский язык',
                preIelts: 'Pre IELTS',
                russian: 'Русский язык',
            },
            submitBtn: 'Отправить',
            sendingBtn: 'Отправляется...',
            errorFillAll: 'Пожалуйста, заполните все поля!',
            successSend: 'Ваши данные успешно отправлены!',
        }
    },
    UZ: {
        register: {
            header: 'Iltimos, aloqa ma\'lumotlaringizni qoldiring',
            nameLabel: 'Familiya va ism',
            namePlaceholder: 'Familiya va ism',
            phoneLabel: 'Telefon raqami',
            phonePlaceholder: 'Telefon raqami',
            courseLabel: 'Kurs',
            courseOptions: {
                default: 'Kursni tanlang',
                ielts: 'IELTS / CEFR',
                english: 'Ingliz tili',
                preIelts: 'Pre IELTS',
                russian: 'Rus tili',
            },
            submitBtn: 'Yuborish',
            sendingBtn: 'Yuborilmoqda...',
            errorFillAll: 'Iltimos, barcha maydonlarni to\'ldiring!',
            successSend: 'Ma\'lumotlaringiz muvaffaqiyatli yuborildi!',
        }
    },
    EN: {
        register: {
            header: 'Please leave your contact details',
            nameLabel: 'Full Name',
            namePlaceholder: 'Full Name',
            phoneLabel: 'Phone Number',
            phonePlaceholder: 'Phone Number',
            courseLabel: 'Course',
            courseOptions: {
                default: 'Select a course',
                ielts: 'IELTS / CEFR',
                english: 'English Language',
                preIelts: 'Pre IELTS',
                russian: 'Russian Language',
            },
            submitBtn: 'Submit',
            sendingBtn: 'Sending...',
            errorFillAll: 'Please fill in all fields!',
            successSend: 'Your data has been sent successfully!',
        }
    }
};

  
const RegisterPage = ({ sendData, loading }) => {
    const { language } = useLanguage();
    const t = translations[language]?.register || translations.RU.register;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !message) {
            toast.error(t.errorFillAll);
            return;
        }
        sendData(name, phone, message);
        setName('');
        setPhone('');
        setMessage('');
        toast.success(t.successSend);
    };

    return (
        <div className="cont">
            <div className="register-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-header">
                        <h2 className="name-logo text-2xl font-bold text-black">GRYPHON SCHOOL</h2>
                        <p>{t.header}</p>
                    </div>

                    <div className="form-group two-columns">
                        <div className="forms">
                            <div>
                                <label htmlFor="name">{t.nameLabel}</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={t.namePlaceholder}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='inp'>
                                <label htmlFor="phone">{t.phoneLabel}</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder={t.phonePlaceholder}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">{t.courseLabel}</label>
                        <select
                            id="course"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                            <option value="">{t.courseOptions.default}</option>
                            <option value="IELTS / CEFR">{t.courseOptions.ielts}</option>
                            <option value="Английский язык">{t.courseOptions.english}</option>
                            <option value="Pre IELTS">{t.courseOptions.preIelts}</option>
                            <option value="Русский язык">{t.courseOptions.russian}</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" disabled={loading}>
                            {loading ? t.sendingBtn : t.submitBtn}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
