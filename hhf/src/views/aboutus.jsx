import React from "react";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="aboutus_head">
        <h1>About Us</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
            "<span className="text-style">Lorem</span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
        </div>
        <div className="aboutus_content">
          <div className="content_text">
            "<span className="text-style">LIpsumorem</span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
          <div className="content_image"></div>
        </div>
        <div className="aboutus_content">
          <div className="content_image"></div>
          <div className="content_text">
            "<span className="text-style">Lorem</span> ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
