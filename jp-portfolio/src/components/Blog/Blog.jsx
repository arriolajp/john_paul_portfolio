import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Blog.css";


const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-box">
      <p>Current time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

const Blog = ()  =>{

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
        <div className="blog-text">
          <h1>Blog</h1>
          <p>My blog is a collection of my thoughts and experiences. I hope to share my journey with you!</p>
          <p>Check out my blog posts below:</p>
          <ul className="blog-list">
            <li><Link to="/blog/post01">Post 1</Link></li>
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

export default Blog;