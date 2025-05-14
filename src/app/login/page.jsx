import React from 'react'

const page = () => {
  return (
    <div className='login-unit'>
      <div className="contact-form-container">
        <h2>Войти</h2>
        <form className="contact-form">
          <label htmlFor="">Фамилия и имя</label>
          <input type="text" placeholder="Фамилия и имя" name="name" required />
          <label htmlFor="">Номер телефона</label>
          <input type="text" placeholder="Номер телефона" name="email" required />
     <label htmlFor="">Пароль</label>
          <input type="password" placeholder="Пароль" name="subject" required />
        
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default page