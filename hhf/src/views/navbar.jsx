import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <Link to="/product" className="Nlink link-pos2">
          <a>Products</a>
        </Link>
        <Link to="/contact" className="Nlink link-pos2">
          <a>Contact </a>
        </Link>
        <div className="dropdown">
          <Link to="#" className=" dropbtn hamburger">
            <a>
              <GiHamburgerMenu />
            </a>
          </Link>
          <div className="dropdown-content drop">
            <Link to="/" className="Nlink">
              <a>Home</a>
            </Link>
            <Link to="/aboutus" className="Nlink">
              <a>About Us</a>
            </Link>
            <Link to="/product" className="Nlink">
              <a>Products</a>
            </Link>
            <Link to="/contact" className="Nlink">
              <a>Contact</a>
            </Link>
          

          </div>
        </div>
      </div>
    </div>
  );
};
