import React from "react";
// import { Link } from "react-router-dom";
import { Gallery } from "./gallery";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import "../home.css";
const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage_banner">
        <div className="banner-text text">
          <h1>Get Your Quality Farm Product Here</h1>
          <h3>
            At HARNIXHERBTY FARMS LIMITED,
            <br /><span className="small">We’re passionate about good products, exceptional service and
            positive team spirit. We understand how valuable your time is, which
            is why we will leave no stone unturned in order to find the right
            solution for you.
            </span>
          </h3>
          <motion.button
            id="homecard-btn"
            type="button"
            className="btn btn-primary btn-lg "
            style={{color:"#914e18 !important",
            backgroundColor:"white !important"}}   
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Check Products &#8594;
          </motion.button>
        </div>
        <div className="banner-video video-responsive">
          <video height="400" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>      
      <Gallery/>      
    </div>
  );
};

export default Home;
