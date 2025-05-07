import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import TimeDisplay from '../TimeDisplay/TimeDisplay';
import "./Projects.css";



const sites = [
  {
    title: "Highscorify",
    description: "Arcade-themed Spotify track generator",
    link: "https://github.com/arriolajp/highscorify"
  },
  {
    title: "TheRoute",
    description: "Mapbox-powered navigation for city exploration",
    link: "https://github.com/WSU-4110/TheRoute"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills",
    link: "https://github.com/arriolajp/john_paul_portfolio"
  }
];


const Projects = ()  =>{

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
      <div className="time"><TimeDisplay/></div>
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

      
      <div className="portfolio-container">
      <div className="portfolio-box">
              <h1>Projects</h1>
              <p>Check out my projects below:</p>
            </div>
        {sites.map((project, index) => (
          <a key={index} className="portfolio-card" href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="portfolio-box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      </div>
    </header>
  )
}

export default Projects;