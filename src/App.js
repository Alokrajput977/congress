import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Money from './components/money';
import AboutPage from './components/about/about';
import OurInitiatives from './components/Initiatives/initiative';
import Gallery from './components/Gallery/gallery';
import ContactPage from './components/contect/contect';
import Multimedia from './components/media/media';
import WomanSafety from './components/icc/icc';

const App = () => {
  return (
    <Router>
     <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/money" element={<Money/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/initiatives" element={<OurInitiatives/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/media" element={<Multimedia/>}/>
          <Route path="/woman-safety" element={<WomanSafety/>}/>
        </Routes>
    </Router>
  )
}

export default App