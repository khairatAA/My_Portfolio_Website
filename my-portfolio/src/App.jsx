import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';


{/* All the compontents are called here */}
const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Will include the navber in every page */}
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <About />
        <Portfolio />
        <ContactMe />
      </div>
    </Router>
  )
}

export default App
