'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  ru: {
    loading: "Загрузка...",
    noTests: "Нет доступных тестов",
  },
  uz: {
    loading: "Yuklanmoqda...",
    noTests: "Testlar mavjud emas",
  },
  en: {
    loading: "Loading...",
    noTests: "No tests available",
  },
};

const Page = () => {
  const [listening, setListening] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [listeningTests, setListeningTests] = useState({});
  const { language } = useLanguage();
  const t = translations[language] || translations['ru'];

  useEffect(() => {
    axios.get('https://iqrotalimapi.pythonanywhere.com/api/listening-tests/')
      .then((res) => {
        setListening(res.data);
      });
  }, []);

  const toggle = (index, id) => {
    const isSame = openIndex === index;
    setOpenIndex(isSame ? null : index);

    if (!listeningTests[id] && !isSame) {
      axios.get(`https://iqrotalimapi.pythonanywhere.com/api/listening-tests/${id}/`)
        .then((res) => {
          setListeningTests(prev => ({ ...prev, [id]: [res.data] }));
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='unit-list'>
        {listening.map((list, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className='unit-item'>
              {!isOpen && (
                <div className='list' onClick={() => toggle(index, list.id)}>
                  {list.title}
                </div>
              )}

              {isOpen && (
                <div className='test-list'>
                  {listeningTests[list.id] ? (
                    listeningTests[list.id].length > 0 ? (
                      listeningTests[list.id].map((test, idx) => (
                        <div key={idx} className="test-card">
                          {test.telegram_file_url && (
                            <audio controls src={test.telegram_file_url} />
                          )}
                          <h4>{test.question}</h4>
                        </div>
                      ))
                    ) : (
                      <p>{t.noTests}</p>
                    )
                  ) : (
                    <p>{t.loading}</p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page;
