'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const TELEGRAM_BOT_TOKEN = '8074892032:AAEbEH9wC0WnYEqFZB5J_4p6X7xGg8GB9og';
const FILE_ID = 'BQACAgIAAyEGAASY2kpoAAMOaDqWPuK5I_QOOJ7ixFQPPByCzWEAAvCBAAJ-udlJLXxtERBjoTE2BA';

const Page = () => {
  const [books, setBooks] = useState([]);

  const downloadFromTelegram = async () => {
    try {
      const fileInfo = await axios.get(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${FILE_ID}`
      );

      const filePath = fileInfo.data.result.file_path;
      const fileUrl = `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${filePath}`;
      const response = await axios.get(fileUrl, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'application/pdf' });

      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'kitob.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Xatolik:', error);
      alert("Yuklab olishda muammo yuz berdi.");
    }
  };

  useEffect(() => {
    axios
      .get('https://iqrotalimapi.pythonanywhere.com/api/pdfs/')
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setBooks(res.data);
        }
      });
  }, []);

  return (
    <div className="books">
      <Header />
      <div className='container'>  
        <h1 className='title'></h1>
        {books.map((book, index) => (
          <div key={index} className='book-card'>
            <p className='book-date'>
              Число: {new Date(book.created_data).toLocaleString()}
            </p>
            <button className='download-button' onClick={downloadFromTelegram}>
              Скачать
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
