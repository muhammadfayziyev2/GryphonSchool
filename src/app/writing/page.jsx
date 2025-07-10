'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  uz: {
    download: "PDF-ni yuklab olish",
    back: "Ortga",
  },
  ru: {
    download: "Скачать PDF",
    back: "Назад",
  },
  en: {
    download: "Download PDF",
    back: "Back",
  },
};

const Page = () => {
  const [writingList, setWritingList] = useState([]);
  const [selectedWriting, setSelectedWriting] = useState(null);
  const { language } = useLanguage();
  const t = translations[language] || translations.uz;

  useEffect(() => {
    axios
      .get(`https://iqrotalimapi.pythonanywhere.com/writing-materials/`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setWritingList(res.data);
        }
      });
  }, []);

  const fetchWritingById = async (id) => {
    try {
      const res = await axios.get(
        `https://iqrotalimapi.pythonanywhere.com/writing-materials/${id}/`
      );
      if (res.status === 200 || res.status === 201) {
        setSelectedWriting(res.data);
      }
    } catch (err) {
      console.error("Ma'lumotni olishda xatolik:", err);
    }
  };

  const goBack = () => {
    setSelectedWriting(null);
  };

  return (
    <div className="writing">
      <Header />
      {!selectedWriting ? (
        <div className="writing-unit">
          {writingList.map((writ) => (
            <div key={writ.id} className="writing-item">
              <p
                className="writing-p cursor-pointer text-blue-600"
                onClick={() => fetchWritingById(writ.id)}
              >
                {writ.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="details">
          <div className="writing-details">
            <h2 className="text-xl font-bold mb-2">{selectedWriting.title}</h2>
            <p className="mb-4">{selectedWriting.text}</p>

            {selectedWriting.pdf_book?.telegram_file_url && (
              <a
                href={selectedWriting.pdf_book.telegram_file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                download={`${selectedWriting.title}.pdf`}
              >
                {t.download}
              </a>
            )}

            <div className="mt-4">
              <button
                onClick={goBack}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {t.back}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
