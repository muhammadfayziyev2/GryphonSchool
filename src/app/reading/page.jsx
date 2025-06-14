'use client'

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Page = () => {
  const [tests, setTests] = useState([])
  const [selectedTest, setSelectedTest] = useState(null)
  const [userAnswers, setUserAnswers] = useState({})
  const [checkedQuestions, setCheckedQuestions] = useState({})

  useEffect(() => {
    axios.get(`https://iqrotalimapi.pythonanywhere.com/reading-tests/`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setTests(res.data)
        }
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err)
      })
  }, [])

  const handleTitleClick = (id) => {
    axios.get(`https://iqrotalimapi.pythonanywhere.com/reading-tests/${id}/`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSelectedTest(res.data)
          setUserAnswers({})
          setCheckedQuestions({})
        }
      })
      .catch((err) => {
        console.error("Ma'lumotlarni olishda xatolik:", err)
      })
  }

  const handleBack = () => {
    setSelectedTest(null)
    setUserAnswers({})
    setCheckedQuestions({})
  }

  const handleOptionChange = (questionNumber, option) => {
    setUserAnswers(prev => ({ ...prev, [questionNumber]: option }))
  }

  const handleCheckQuestion = (questionNumber) => {
    setCheckedQuestions(prev => ({ ...prev, [questionNumber]: true }))
  }

  return (
    <div className="reading-page">
      <Header />

      {!selectedTest ? (
        <div className='reading-list'>
          {tests.map((test) => (
            <div key={test.id} className='reading-card'>
              <h1 onClick={() => handleTitleClick(test.id)}>
                {test.title}
              </h1>
              <p>{test.question.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      ) : (
        <div className='test-details'>
          <h2>{selectedTest.title}</h2>
          <p className="subtitle">{selectedTest.title2}</p>
          <p className="main-question">{selectedTest.question}</p>

          {[1, 2, 3, 4, 5].map((num) => {
            const userAnswer = userAnswers[num]
            const correctAnswer = selectedTest[`answer${num}`]
            const isChecked = checkedQuestions[num]

            return selectedTest[`question${num}`] && (
              <div key={num} className='question-block'>
                <p><strong>Savol {num}:</strong> {selectedTest[`question${num}`]}</p>
                <div className='options'>
                  {['A', 'B', 'C', 'D'].map((opt) => (
                    <label key={opt}>
                      <input
                        type="radio"
                        name={`question${num}`}
                        value={opt}
                        checked={userAnswer === opt}
                        onChange={() => handleOptionChange(num, opt)}
                      />
                      <span>{opt}: {selectedTest[`${opt}${num}`]}</span>
                    </label>
                  ))}
                </div>

                <button className='check-btn' onClick={() => handleCheckQuestion(num)}>
                  Tekshirish
                </button>

                {isChecked && (
                  <div className='result'>
                    {userAnswer === correctAnswer ? (
                      <span className="correct">✅ To‘g‘ri javob!</span>
                    ) : (
                      <span className="incorrect">❌ Noto‘g‘ri. To‘g‘ri javob: <strong>{correctAnswer}</strong></span>
                    )}
                  </div>
                )}
              </div>
            )
          })}

          <button className='back-btn' onClick={handleBack}>
            Ortga
          </button>
        </div>
      )}
    </div>
  )
}

export default Page
