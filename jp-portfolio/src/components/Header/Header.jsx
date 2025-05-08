import React, {useState, useEffect} from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Header = ()  =>{

  return (
    <header>
      <Navbar />
      <div className="text-box">
          <h1>Hey, I'm JP!</h1>
          <p>I like creating things, and this website is one of them. Check out my blog from my last internship, look into my projects, or just hang around.</p>
          <p>I plan to put changeable themes on this website, so look out for those!</p>
          <h2>Inspiration</h2>
          <p>I hope to create things that showcase who I am. Enjoy!</p>
      </div>  
      <Footer/>
    </header>
  )
}

export default Header;