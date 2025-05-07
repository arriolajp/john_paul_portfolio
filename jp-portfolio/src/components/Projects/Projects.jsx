import React, {useState, useEffect} from 'react';
import "./Projects.css";
import Navbar from '../Navbar/Navbar';



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
    description: "This website!",
    link: "https://github.com/arriolajp/john_paul_portfolio"
  }
];


const Projects = ()  =>{

  return (
    <header>
      <Navbar />
      <div className="portfolio-container">
      <div className="post-box">
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
      
    </header>
  )
}

export default Projects;