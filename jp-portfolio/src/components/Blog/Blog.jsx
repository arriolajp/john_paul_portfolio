import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";
import TimeDisplay from '../TimeDisplay/TimeDisplay';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Rocket X GDYT X WSU", description: "Finding inspiration within mentoring high school students.", link: "/blog/post01" }
  ];

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
        <div className="blog-container">
          <div className="blog-box">
              <h1>Blog</h1>
              <p>I've got a few ideas that I want others to see.</p>
              <p>Check out my blog posts below:</p>
            </div>
          <div className="blog-list">
            {blogPosts.map((post) => (
              <Link to={post.link}>
                <div key={post.id} className="blog-box">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  Read More
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="time"><TimeDisplay /></div>
      </div>
    </header>
  );
};

export default Blog;