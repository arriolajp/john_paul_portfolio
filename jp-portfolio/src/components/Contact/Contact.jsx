import React from 'react';
import "./Contact.css";
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
      <div className="contact">
          <h3>Contact</h3>
          <div className="linkedin">
          <LinkedIn/>
        </div>
      </div>
  )
}

export default Contact;