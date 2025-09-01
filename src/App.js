import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Money from './components/money';

const App = () => {
  return (
    <Router>
     <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/money" element={<Money/>} />
        </Routes>
    </Router>
  )
}

export default App