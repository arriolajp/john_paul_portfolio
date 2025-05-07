import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import "./About.css";



const About = ()  =>{

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
            <p>@John Paul Arriola</p>
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
          <h1>About me</h1>
          <p>I wanted to pursue a combination of art and engineering, so I became a computer science student. I'm finding out what artistic aspects I can apply to technology, while also keeping my hobbies as an artist and life as a student in balance.</p>
           <p>I hope to turn this little project into a career, but in the meantime you can find me running. I also enjoy photography, cats, origami, and video games.</p>
          <h2>About this site</h2>
          <p>I am inspired by the brutal, exploratory designs of the 2000's. I grew up with games like Minesweeper and Poptropica, and I want to keep that stylistic and artistic style alive.</p>
         
      </div>  
        <div className="time"><TimeDisplay/></div>
      </div>
    </header>
  )
}

export default About;