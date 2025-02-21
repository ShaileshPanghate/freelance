import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
