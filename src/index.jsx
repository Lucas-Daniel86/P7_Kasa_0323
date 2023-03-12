import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import Home from './pages/Home'
import About from './pages/About'
import Apartment from './pages/Apartment'
import Error from './components/Error'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/apartment/:id" element={<Apartment />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
)
