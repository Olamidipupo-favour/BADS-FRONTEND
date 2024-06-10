import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Login from './login.jsx'
import Allergy from './allergy.jsx'
import Add from './add.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allergy" element={<App />} />
        <Route path="/patientData" element={<Allergy />} />
        <Route path="/addData" element={<Add />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
