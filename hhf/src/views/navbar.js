import React from "react";
import { Link } from 'react-router-dom';
import "../style1.css"
import "../style2.css"


const Navbar = () => {
  return (
    <div>
      <div className="topnav">
        <div className="logo">
          <a>HarnixHerbetyFarms</a>
          <div className="others">
            <a><Link to="/">Home</Link></a>
            <a><Link to="/Product">Product</Link></a>
            <a><Link to="/Gallery">Gallery</Link></a>
            <a><Link to="/Contact">Contact Us</Link></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
