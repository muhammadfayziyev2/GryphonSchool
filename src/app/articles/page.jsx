'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Page = () => {
  const [articles, setArticles] = useState([])
  const [openArticleId, setOpenArticleId] = useState(null)
  const [articleDetails, setArticleDetails] = useState({})

  useEffect(() => {
    axios.get('https://iqrotalimapi.pythonanywhere.com/articles/')
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setArticles(res.data)
        }
      })
      .catch((error) => {
        console.error('Xatolik yuz berdi:', error)
      })
  }, [])

  const handleToggle = (id) => {
    if (openArticleId === id) {
      setOpenArticleId(null)
    } else {
      setOpenArticleId(id)
      if (!articleDetails[id]) {
        axios.get(`https://iqrotalimapi.pythonanywhere.com/articles/${id}/`)
          .then((res) => {
            if (res.status === 200) {
              setArticleDetails(prev => ({ ...prev, [id]: res.data }))
            }
          })
          .catch((error) => {
            console.error('Maqola yuklashda xatolik:', error)
          })
      }
    }
  }

  return (
    <div className='artikl'>
      <Header />
      <div className='articl-unit'>
        {articles.map((articl) => (
          <div key={articl.id} className='mb-4'>
            <div
              className='h1-articl cursor-pointer flex items-center justify-between p-2 bg-gray-100 rounded-md'
              onClick={() => handleToggle(articl.id)}
            >
              <span>{articl.title}</span>
              <span
                className={`transition-transform duration-300 transform ${openArticleId === articl.id ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                ▼
              </span>
            </div>

            {openArticleId === articl.id && articleDetails[articl.id] && (
              <div className='article-details p-4 bg-white border-l-4 border-gray-300'>
                <h2>Matn:</h2>
                <p>{articleDetails[articl.id].question}</p>

                <h2>Savol ?</h2>
                <p>{articleDetails[articl.id].vocabulary}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
