import React from 'react';
import "./Contact.css";
import Navbar from '../Navbar/Navbar';
import { linkedin } from '../../assets';
import Footer from '../Footer/Footer';


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
      <Navbar/>
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
    <Footer/>
  </header>
  )
}

export default Contact;