import React from "react";
import "../products.css";
// import { Link } from 'react-router-dom';
import MultipleItems from "./Slider";
import Slider2 from "./Slider2";

const Product = () => {
  return (
    <div className="page_holder">
      <div className="page_content_holder">
        <h1 className="product_head">Our Products</h1>
        <div>
          <MultipleItems className="slider1" />
          <Slider2 className="slider2" />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro,
              necessitatibus qui, delectus enim ea magnam quibusdam recusandae
              possimus soluta ex molestias! Possimus?
            </p>
          </div>
        </div>
        <div>
          <MultipleItems className="slider1" />
          <Slider2 className="slider2" />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro,
              necessitatibus qui, delectus enim ea magnam quibusdam recusandae
              possimus soluta ex molestias! Possimus?
            </p>
          </div>
        </div>
        <div>
          <MultipleItems className="slider1" />
          <Slider2 />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro,
              necessitatibus qui, delectus enim ea magnam quibusdam recusandae
              possimus soluta ex molestias! Possimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
