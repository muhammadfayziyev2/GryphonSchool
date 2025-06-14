'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Page = () => {
  const [listening, setListening] = useState([])
  const [openIndex, setOpenIndex] = useState(null)
  const [listeningTests, setListeningTests] = useState({}) 

  useEffect(() => {
    axios.get('https://iqrotalimapi.pythonanywhere.com/api/listening-tests/')
      .then((res) => {
        setListening(res.data)
      })
  }, [])

  const toggle = (index, id) => {
    const isSame = openIndex === index
    setOpenIndex(isSame ? null : index)

    if (!listeningTests[id] && !isSame) {
      axios.get(`https://iqrotalimapi.pythonanywhere.com/api/listening-tests/${id}/`)
        .then((res) => {
          setListeningTests(prev => ({ ...prev, [id]: [res.data] }))
        })
    }
  }

  return (
    <div  >
      <Header />
      <div className='unit-list'>
        {listening.map((list, index) => (
          <div key={index} className='unit-item'>
            <div className='list' onClick={() => toggle(index, list.id)}>
              {list.title}
            </div>

            {openIndex === index && (
              <div className='test-list'>
                {listeningTests[list.id] ? (
                  listeningTests[list.id].map((test, idx) => (
                    <div key={idx} className="test-card">
                      <h4>{test.title}</h4>
                      {test.telegram_file_url && (
                        <audio controls src={test.telegram_file_url} />
                      )}

                      <ul className="options">
                        <li>A: {test.A}</li>
                        <li>B: {test.B}</li>
                        <li>C: {test.C}</li>
                        <li>D: {test.D}</li>
                      </ul>
                    </div>
                  ))
                ) : (
                  <p>Yuklanmoqda...</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
