import React from 'react'

const page = () => {
  return (
    <div className='writing'>
      <div className='word-writing'>
        <h1>Writing</h1>
      </div>
      <div className="chat-container">
        <textarea
          className="chat-input"
          placeholder="Type your financial question or upload a document to analyze..."
        ></textarea>
        <div className="chat-actions">
          <button className="forecast-btn">Forecast ✨</button>
          <button className="cancel-btn">Cancel ESC</button>
        </div>
      </div>
    </div>
  )
}

export default page