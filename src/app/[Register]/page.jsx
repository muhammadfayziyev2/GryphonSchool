"use client";

import React, { useState } from "react";
import RegisterPage from "../components/RegisterPage";
import axios from "axios";
import { ToastContainer } from 'react-toastify';

const page = () => {
  const [dispatch, setDispatch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendData = async (name, phone, message) => { 
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://zayavkabackend-production.up.railway.app/submit",
        {
          name,
          phone,
          message,
        }
      );
      if (res.status === 200) {
        setDispatch(res.data);
        console.log("Server ishladi:", res.data);
      }
    } catch (err) {
      console.error("Xatolik yuz berdi:", err);
      setError("So‘rov jo‘natishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <RegisterPage sendData={sendData} loading={loading} />
    </div>
  );
};

export default page;
