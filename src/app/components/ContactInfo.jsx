'use client'

import Link from 'next/link'
import React from 'react'

const ContactInfo = () => {
  return (
    
    <div>
      <div className='location'>
        <h2 className="section-title">Локация</h2>
      </div>
      <div className="flex-container">
        <div className="contact-card">
          <div className="card-title"></div>
          <div className="contact-items">
            <div className="contact-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="label">Локация</div>
                <Link target='_blank' href='https://www.google.com/maps/place/Gryphon+center/@39.9031063,66.2664155,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4d8df7206a757d:0x367701c66f3aa987!8m2!3d39.9031063!4d66.2664155!16s%2Fg%2F11v5zbb811?authuser=0&entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D' className="info-text">Самаркандская область <br />
               Каттакурган, Амир Темур дом 1</Link>
              </div>
            </div>
            <div className="contact-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <div className="label">Рабочее время: </div>
                <span href="mailto:info@futurenav.com" className="info-link"> 8:00-21:00, с понедельника по субботу</span>
              </div>
            </div>

            <div className="contact-item">
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <div className="label">Телефон:</div>
                <a href="" className="info-link">+998 93 300 58 40</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo