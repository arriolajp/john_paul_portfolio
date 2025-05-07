import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

import './App.css';


const App = ()  =>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App;