// import React from 'react';
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navWrapper">
      <nav>
        <div className="logo">
          <Link to={"/"} className="logoText">
            <h1>#VANLIFE</h1>
          </Link>
        </div>
        <div className="navLinks">
          <Link to={"/about"} className="navLink">
            <p>About</p>
          </Link>
          <Link to={"/vans"} className="navLink">
            <p>Vans</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
