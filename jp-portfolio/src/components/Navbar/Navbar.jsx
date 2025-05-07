import React from "react";
import { Link } from "react-router-dom";
import TimeDisplay from "../TimeDisplay/TimeDisplay";

const Navbar = () => {
    return(
        <div>
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
       
        <div className="time"><TimeDisplay/></div>
      </div>
      </div>
    );
}

export default Navbar;