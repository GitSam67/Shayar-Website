import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Mausam from './Components/Mausam'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/Shayar-Website/" element={<App />}></Route>
      <Route path="/Shayar-Website/mausam" element={<Mausam />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
