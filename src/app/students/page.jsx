'use client'

import React, { useState } from 'react'

const questions = [
  "Can you introduce yourself?",
  "What are your hobbies?",
  "Why are you learning English?",
  "Tell me about your favorite movie.",
  "What do you usually do on weekends?"
]

const Page = () => {
  const [transcript, setTranscript] = useState('')
  const [highlighted, setHighlighted] = useState('')
  const [questionIndex, setQuestionIndex] = useState(0)

  const currentQuestion = questions[questionIndex]

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setTranscript('Listening...')
      setHighlighted('')
    }

    recognition.onresult = async (event) => {
      const spokenText = event.results[0][0].transcript
      setTranscript(spokenText)
      await checkGrammar(spokenText)
      nextQuestion()
    }

    recognition.onerror = (e) => {
      setTranscript('Error: ' + e.error)
    }

    recognition.start()
  }

  const checkGrammar = async (text) => {
    const res = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        text: text,
        language: 'en-US'
      })
    })
    const data = await res.json()
    let output = text

    data.matches.reverse().forEach(match => {
      const before = output.slice(0, match.offset)
      const error = output.slice(match.offset, match.offset + match.length)
      const after = output.slice(match.offset + match.length)
      output = `${before}<span style="color:red;font-weight:bold;">${error}</span>${after}`
    })

    setHighlighted(output)
  }

  const nextQuestion = () => {
    setQuestionIndex((prev) => (prev + 1 < questions.length ? prev + 1 : 0))
  }

  return (
    <div className="ws-container">
      <h1 className="ws-title">🎓 AI English Speaking Practice</h1>
      <p className="ws-subtitle">Practice your speaking with automatic grammar checking!</p>

      <div className="ws-chat-card">
        <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
          ❓ <span>{currentQuestion}</span>
        </div>

        <textarea
          value={transcript}
          placeholder="Speak or type your answer..."
          onChange={(e) => setTranscript(e.target.value)}
        />
        <div className="ws-buttons">
          <button className="forecast-btn" onClick={startRecording}>🎤 Speak</button>
          <button className="cancel-btn" onClick={() => setTranscript('')}>Cancel ESC</button>
          <button
            className="send-btn"
            onClick={async () => {
              await checkGrammar(transcript)
              nextQuestion()
            }}
          >➤</button>
        </div>
      </div>

      {highlighted && (
        <div style={{ marginTop: '1rem' }}>
          <h3>📝 Grammar Feedback:</h3>
          <p dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      )}

      <div className="ws-features">
        <div className="ws-feature-card">
          <h3>💬 Chat</h3>
          <p>Answer AI questions to practice your English speaking and writing.</p>
        </div>
        <div className="ws-feature-card">
          <h3>🧠 Grammar Check</h3>
          <p>Automatically detects and highlights grammar mistakes in red.</p>
        </div>
        <div className="ws-feature-card">
          <h3>🎤 Speech-to-Text</h3>
          <p>Use your microphone to speak answers — no typing needed!</p>
        </div>
      </div>
    </div>
  )
}

export default Page
