"use client";

import React, { useState } from "react";

const Page = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleCheckGrammar = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch("https://api.languagetoolplus.com/v2/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          text: inputText,
          language: "en-US",
        }),
      });

      const data = await response.json();
      setResults(data.matches);
    } catch (error) {
      console.error("Grammar check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText("");
    setResults([]);
  };

  return (
    <div className='writing' style={{ padding: "20px", fontFamily: "Arial" }}>
      <div className='word-writing'>
        <h1>Writing</h1>
      </div>

      <div className="chat-container" style={{ marginTop: "20px" }}>
        <textarea
          className="chat-input"
          placeholder="Type your English text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            fontSize: "16px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        ></textarea>

        <div className="chat-actions" style={{ marginTop: "10px" }}>
          <button
            className="forecast-btn"
            onClick={handleCheckGrammar}
            disabled={loading}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {loading ? "Checking..." : "Check Grammar ✨"}
          </button>

          <button
            className="cancel-btn"
            onClick={handleClear}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Clear ❌
          </button>
        </div>
      </div>

      {results.length > 0 && (
        <div className="results" style={{ marginTop: "30px" }}>
          <h2>Grammar Issues:</h2>
          {results.map((match, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffe0e0",
                padding: "10px",
                marginBottom: "10px",
                borderLeft: "4px solid red",
                borderRadius: "5px"
              }}
            >
              <strong>Error:</strong> {match.message} <br />
              <strong>Suggestions:</strong>{" "}
              {match.replacements.map((r) => r.value).join(", ") || "None"} <br />
              <strong>Context:</strong> {match.context.text}
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && !loading && inputText.trim() !== "" && (
        <p style={{ marginTop: "20px", color: "green" }}>✅ No grammar issues found!</p>
      )}
    </div>
  );
};

export default Page;
