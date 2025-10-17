import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/show" className="nav-link">Show Data</Link>
    </nav>
  );
};

export default Navbar;
