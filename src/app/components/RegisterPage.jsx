import React, { useState } from 'react'

const RegisterPage = ({ sendData, loading }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setPhone("");
        setMessage("");
        sendData(name, phone, message);
    };
    return (
        <div>
            <form className='form_register' onSubmit={handleSubmit}>
                <div className='name_register'>
                    <span className='span_register'>GRYPHON SCHOOL</span>
                    <p className='register_name'>Пожалуйста, оставьте свои <br /> </p>
                    <span className='register_name'>контактные данные</span>
                </div>
                <div className='register_form'>
                    <div className='form'>
                        <label className='label_register'>Фамилия и имя</label>
                        <input
                            type="text"
                            placeholder='Фамилия и имя'
                            className='input_register'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label className='label_register'>Номер телефона</label>
                        <input
                            type="number"
                            placeholder='Номер телефона'
                            className='input_register'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label className='label_register'>Курс</label>
                        <select
                            name="" id=""
                            className='input_register'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                            <option value="IELTS / CEFR" >IELTS / CEFR</option>
                            <option value="Ангилийский язык">Ангилийский язык</option>
                            <option value="pre Ielts">pre Ielts</option>
                            <option value="Русский язык">Русский язык</option>
                        </select>
                        <div className='btn'>
                            <button
                                className='btn_register'
                                type="submit"
                                disabled={loading}>{loading ? "Отправляеться..." : "Отправить"}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage


