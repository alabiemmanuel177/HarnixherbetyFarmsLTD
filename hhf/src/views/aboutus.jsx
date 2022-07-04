import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus_head">
        <h1>About Us</h1>
        <p>
          "It all began with a dream to tap into Nigeria rich farming industry,
          starting something new. Together, we established HARNIXHERBTY FARMS
          LIMITED, a company dedicated to providing quality farm products and
          fresh healthy chickens and eggs on the go. Our products and services
          were designed to satisfy all of our customers, anytime, anywhere. We
          are committed to customer satisfaction as our top priority. If you
          want to learn more about how we do business, give us a call today."
        </p>
      </div>
      <div className="aboutus_body">
        <h1>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor"
        </h1>
        <div className="aboutus_content">
          <div className="content_image"></div>
          <div className="content_text">
            "<span className="text-style">Good Products</span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
        </div>
        <div className="aboutus_content">
          <div className="content_text">
            "<span className="text-style">Exceptional Service</span> ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
          <div className="content_image"></div>
        </div>
        <div className="aboutus_content">
          <div className="content_image"></div>
          <div className="content_text">
            "<span className="text-style">Positive Team Spirit</span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
