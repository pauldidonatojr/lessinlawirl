import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Header from './components/Header'
import HomePage from './pages/HomePage';

// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Navbar />

          <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
      </BrowserRouter>
  )
}

export default App;
