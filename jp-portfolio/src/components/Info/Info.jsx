import React from 'react';
import './Info.css';

const projects = [
  {
    title: "Highscorify",
    description: "Arcade-themed Spotify track generator",
    link: "https://github.com/arriolajp/highscorify"
  },
  {
    title: "TheRoute",
    description: "Mapbox-powered navigation for city exploration",
    link: "https://github.com/WSU-4110/TheRoute"
  }
];

const Info = () => {
  return (
    <section className="portfolio">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a key={index} className="portfolio-card" href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="portfolio-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Info;
