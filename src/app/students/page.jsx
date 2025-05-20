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
  const [loading, setLoading] = useState(false)

  const currentQuestion = questions[questionIndex]

  const nextQuestion = () => {
    setQuestionIndex((prev) => (prev + 1 < questions.length ? prev + 1 : 0))
  }

  const checkGrammar = async (text) => {
    const res = await fetch('https://api.languagetool.org/v2/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        text,
        language: 'en-US',
      }),
    })

    const data = await res.json()
    let output = text

    data.matches.reverse().forEach((match) => {
      const before = output.slice(0, match.offset)
      const error = output.slice(match.offset, match.offset + match.length)
      const after = output.slice(match.offset + match.length)
      output = `${before}<span style="color:red;font-weight:bold;">${error}</span>${after}`
    })

    setHighlighted(output)
  }

  const startRecording = async () => {
    setTranscript('Recording...')
    setHighlighted('')
    setLoading(true)

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      const audioChunks = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data)
      }

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' })

        // Upload to AssemblyAI
        const uploadRes = await fetch('https://api.assemblyai.com/v2/upload', {
          method: 'POST',
          headers: {
            authorization: process.env.NEXT_PUBLIC_ASSEMBLYAI_API_KEY || '',
          },
          body: audioBlob,
        })

        const uploadData = await uploadRes.json()
        const audioUrl = uploadData.upload_url

        // Request transcription
        const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
          method: 'POST',
          headers: {
            authorization: process.env.NEXT_PUBLIC_ASSEMBLYAI_API_KEY || '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            audio_url: audioUrl,
          }),
        })

        const transcriptData = await transcriptRes.json()
        const transcriptId = transcriptData.id

        // Polling for result
        let completed = false
        let finalText = ''

        while (!completed) {
          await new Promise((r) => setTimeout(r, 3000))
          const pollingRes = await fetch(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
            headers: { authorization: process.env.NEXT_PUBLIC_ASSEMBLYAI_API_KEY || '' },
          })

          const pollingData = await pollingRes.json()
          if (pollingData.status === 'completed') {
            finalText = pollingData.text
            completed = true
          } else if (pollingData.status === 'error') {
            throw new Error('Transcription failed')
          }
        }

        setTranscript(finalText)
        await checkGrammar(finalText)
        nextQuestion()
        setLoading(false)
      }

      mediaRecorder.start()

      setTimeout(() => {
        mediaRecorder.stop()
      }, 5000)

    } catch (err) {
      console.error(err)
      setTranscript('Error recording or transcribing audio.')
      setLoading(false)
    }
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
          <button className="forecast-btn" onClick={startRecording} disabled={loading}>
            {loading ? 'Listening...' : '🎤 Speak'}
          </button>
          <button className="cancel-btn" onClick={() => setTranscript('')}>Cancel ESC</button>
          <button className="send-btn" onClick={async () => {   
            await checkGrammar(transcript)
            nextQuestion()
          }}>➤</button>
        </div>
      </div>

      {highlighted && (
        <div style={{ marginTop: '1rem' }}>
          <h3>📝 Grammar Feedback:</h3>
          <p dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      )}
    </div>
  )
}

export default Page
