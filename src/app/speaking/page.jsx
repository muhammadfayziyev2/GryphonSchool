'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  uz: {
    description: "Tavsif",
    download: "PDF kitobni yuklab olish",
    loading: "Yuklanmoqda...",
  },
  ru: {
    description: "Описание",
    download: "Скачать PDF-книгу",
    loading: "Загрузка...",
  },
  en: {
    description: "Description",
    download: "Download PDF book",
    loading: "Loading...",
  }
}

const Page = () => {
  const [speaking, setSpeaking] = useState([]);
  const { language } = useLanguage();
  const t = translations[language] || translations.uz;

  useEffect(() => {
    axios.get(`https://iqrotalimapi.pythonanywhere.com/speaking-materials/`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSpeaking(res.data);
        }
      })
      .catch((err) => {
        console.error("API dan ma'lumot olishda xatolik:", err);
      });
  }, []);

  const handleDownload = (url, filename = 'kitob.pdf') => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Header />
      <div className='speaking p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {speaking.length > 0 ? (
          speaking.map((item) => (
            <div key={item.id} className='speaking-card'>
              <p className='date'>{item.created_data}</p>
              <video
                src={`https://iqrotalimapi.pythonanywhere.com/media/speaking_videos/${item.video}`}
                controls
                className='w-full mb-4 rounded'
              />
              <p className='font-semibold mb-2'>{t.description}: {item.question}</p>
              <button
                onClick={() => handleDownload(item.pdf_book.telegram_file_url, `Speaking-${item.id}.pdf`)}
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
              >
                {t.download}
              </button>
            </div>
          ))
        ) : (
          <p>{t.loading}</p>
        )}
      </div>
    </div>
  );
}

export default Page;
