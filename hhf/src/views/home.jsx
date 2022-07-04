import React from "react";
import { Link } from "react-router-dom";
import "../home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage_banner">
        <div className="banner-text text">
          <h1>Get Your Quality Farm Product Here</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Iusto dolore eius ex, dignissimos cupiditate in eos quod
            magni quas natus praesentium hic, obcaecati veritatis quos fugit
            autem doloremque, aut aliquid.
          </h3>
          <button
            id="homecard-btn"
            type="button"
            className="btn btn-primary btn-lg"
            color="#914e18 !important"
            backgroundColor="white !important"
          >
            Check Products
          </button>
        </div>
        <div className="banner-video video-responsive">
          <video height="400" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="homepage_body">
        <h1>
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          cupiditate explicabo, tempore velit cum quis corporis tempora sunt"          
        </h1>
      </div>
    </div>
  );
};

export default Home;
