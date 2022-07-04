import React from 'react'
import "../products.css"
import { Link } from 'react-router-dom';
import MultipleItems from './Slider';
import Slider2 from './Slider2';
import  { Component } from "react";
import Slider from "react-slick";



const Product = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
   
    <div className='page_holder'>
      <div className='page_content_holder'>
        <h1 className=''>
          Our Products
        </h1>
        <div>
   {/* <MultipleItems className="slider1"/> */}
   <div className="slider1">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />  
          <h1 className='slider_head slider_head_center'>Stock item 1</h1>
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
   <Slider2 className="slider2"/>
   <div className='slider-info'>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Et facilis minima excepturi iusto dolor neque animi porro,
      necessitatibus qui, delectus enim ea magnam quibusdam recusandae 
      possimus soluta ex molestias! Possimus?</p>
      </div>
      </div>
      <div>
      {/* <MultipleItems className="slider1"/> */}
      <div className="slider1">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />  
          <h1 className='slider_head_center'>Stock item 2</h1>
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
   <Slider2 className="slider2"/>
   <div className='slider-info'>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Et facilis minima excepturi iusto dolor neque animi porro,
      necessitatibus qui, delectus enim ea magnam quibusdam recusandae 
      possimus soluta ex molestias! Possimus?</p>
      </div>
      </div>
      <div>
      {/* <MultipleItems className="slider1"/> */}
      <div className="slider1">
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />  
          <h1 className='slider_head_center'>Stock item 3</h1>
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
   <Slider2 />
   <div className='slider-info'>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Et facilis minima excepturi iusto dolor neque animi porro,
      necessitatibus qui, delectus enim ea magnam quibusdam recusandae 
      possimus soluta ex molestias! Possimus?</p>
      </div>
      </div>

      </div>
    </div>
  );
};

export default Product;
