import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
   <nav className="navbar">
  <div className="nav-links">
    <Link to="/show" className="nav-link">About</Link>
    <Link to="/" className="nav-link">Sign up</Link>
  </div>
</nav>

  );
};

export default Navbar;
