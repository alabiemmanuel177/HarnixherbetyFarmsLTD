import React, { Component } from "react";
import Slider from "react-slick";
import "../products.css"

export default class PauseOnHover extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,        pauseOnHover: true
      };
      return (
        <div className="slider1">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />  
          
          <Slider {...settings}>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"  alt="" />
            </div>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"   alt="" />
            </div>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"  alt="" />
            </div>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"   alt="" />
            </div>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"   alt="" />
            </div>
            <div className="img_position">
            <img src="/images/chicken2.jpg" className="slider-img"   alt="" />
            </div>
          </Slider>
        </div>
      );
    }
  }


  