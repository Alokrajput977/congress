import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Money from './components/money';
import AboutPage from './components/about/about';
import OurInitiatives from './components/Initiatives/initiative';

const App = () => {
  return (
    <Router>
     <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/money" element={<Money/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/initiatives" element={<OurInitiatives/>}/>
        </Routes>
    </Router>
  )
}

export default App