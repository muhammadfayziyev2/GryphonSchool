'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = ({ sendData, loading }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !message) {
            toast.error('Пожалуйста, заполните все поля!');
            return;
        } 
        sendData(name, phone, message);
        setName('');
        setPhone('');
        setMessage('');
        toast.success('Ваши данные успешно отправлены!');
    };

    return (
        <div className="cont">
            <div className="register-container">
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-header">
                        <h2 className='name-logo'>GRYPHON SCHOOL</h2>
                        <p>Пожалуйста, оставьте свои контактные данные</p>
                    </div>

                    <div className="form-group two-columns">
                        <div className="forms">
                            <div>
                                <label htmlFor="name">Фамилия и имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Фамилия и имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='inp'>
                                <label htmlFor="phone">Номер телефона</label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Номер телефона"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="course">Курс</label>
                        <select
                            id="course"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        >
                            <option value="">Выберите курс</option>
                            <option value="IELTS / CEFR">IELTS / CEFR</option>
                            <option value="Английский язык">Английский язык</option>
                            <option value="Pre IELTS">Pre IELTS</option>
                            <option value="Русский язык">Русский язык</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Отправляется...' : 'Отправить'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
