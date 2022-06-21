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
          <a>Home</a>
        </Link>
        <Link to="/aboutus" className="Nlink link-pos2">
          <a>About Us</a>
        </Link>
        <Link to="/" className="Nlink link-pos2">
          <a>Products</a>
        </Link>
        <Link to="/" className="Nlink link-pos2">
          <a>Contact </a>
        </Link>
      </div>
    </div>
  );
};
