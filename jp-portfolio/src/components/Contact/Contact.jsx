import React from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import { linkedin } from '../../assets';


const LinkedIn = () => (
  <a
    href="https://www.linkedin.com/in/john-paul-arriola"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedin} alt="LinkedIn" width="32" height="32" />
  </a>
);


const Contact = ()  =>{
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
          <p>@John Paul Arriola </p>
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
        <h1>Contact</h1>
        <LinkedIn />
        <a
            href="mailto:arriolajohnpaul04@gmail.com?subject=Inquiry&body=Hi JP, I would like to inquire about..."
            target="_blank"
            rel="noopener noreferrer"
          >
            arriolajohnpaul04@gmail.com
          </a>
    </div>  
      <div className="time"><TimeDisplay/></div>
    </div>
  </header>
  )
}

export default Contact;