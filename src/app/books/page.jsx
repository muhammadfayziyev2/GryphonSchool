'use client'

import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [books, setBooks] = useState([]);

  const handlePdf = async () => {
    try {
      const response = await axios.get('https://iqrotalimapi.pythonanywhere.com/api/pdfs/');
      if (response.status === 200 || response.status === 201) {
        setBooks(response.data);
        
      }
    } catch (error) {
      console.log('Serverda hatolik:', error);
    }
  };

  useEffect(() => {
    handlePdf();
  }, []);
  const BASE_URL = "https://iqrotalimapi.pythonanywhere.com";

  return (
    <div className='books'>
      <h1 className='kitob'>PDF Kitoblar</h1>
      {books.map((book, index) => (
        <div key={index} className="pdf-card">
          <a
            href={`${BASE_URL}${book.pdf_file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            PDF-ni ko‘rish
          </a>
        </div>
      ))}
    </div>
  );
};

export default Page;
