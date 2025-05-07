import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const Header = ()  =>{

  return (
    <header>
      
      <div className="top-bar">
        <div className="name">
          <Link to="/">
            <h1>japes</h1>
            </Link>
        </div>
      </div>
      <div className="background">
        <div className="intro1">
            <p>My name is JP! </p>
        </div>
        <div className="links">
          <ul className="main-nav-list">
          <li><Link to="/about">about</Link></li>
            <li><Link to="/blog">blog</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>
        <div className="text-box">
          <h1>Hey, I'm JP!</h1>
          <p>I like creating things, and this website is one of them. Check out my blog from my last internship, look into my projects, or just hang around.</p>
          <p>I plan to put changeable themes on this website, so look out for those!</p>
          <h2>Inspiration</h2>
          <p>I hope to create things that showcase who I am. Enjoy!</p>
      </div>  
        <div className="time"><TimeDisplay/></div>
      </div>
    </header>
  )
}

export default Header;