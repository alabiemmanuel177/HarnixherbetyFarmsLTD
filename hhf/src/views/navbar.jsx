import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dtddnqkn6/image/upload/v1652779315/Farm/HHF_Logo_um8xyr.png"
          className="logo-size"
          alt=""
        />
      </div>
      <div className="navbar-btn navbar-btn1">
        <Link to="/" className="Nlink link-pos2">
          <a href="#">Home</a>
        </Link>
        <Link to="/aboutus" className="Nlink link-pos2">
          <a href="#">About Us</a>
        </Link>
        <Link to="/product" className="Nlink link-pos2">
          <a href="#">Products</a>
        </Link>
        <Link to="/contact" className="Nlink link-pos2">
          <a href="#">Contact </a>
        </Link>
      </div>
    </div>
  );
};
