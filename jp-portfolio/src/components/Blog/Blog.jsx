import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css";
import Navbar from '../Navbar/Navbar.jsx';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: "Rocket X GDYT X WSU", description: "Finding inspiration within mentoring high school students.", link: "/blog/post01" }
  ];

  return (
    <header>
      <Navbar/>
      <div className="blog-container">
          <div className="post-box">
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
    </header>
  );
};

export default Blog;