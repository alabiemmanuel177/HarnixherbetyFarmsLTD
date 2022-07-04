import React from "react";
import "../products.css";
import Slider2 from "./Slider2";
import Slider from "react-slick";

const Product = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="page_holder">
      <div className="page_content_holder">
        <h1 className="product_head">Our Products</h1>
        <div>
          <div className="slider1">
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <h1 className="slider_head slider_head_center">Eggs</h1>
            <Slider {...settings}>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779441/Farm/20220428_124834_jlmlwh.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1656921646/Farm/24061636-plastic-crates-with-fresh-white-and-brown-eggs-on-an-organic-chicken-farm_ezia2b.webp" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779380/Farm/IMG-20220401-WA0014_jwmkft.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1656921645/Farm/Crate-of-eggs_cyyvre.png" className="slider-img" alt="" />
              </div>              
            </Slider>
          </div>
          <Slider2 className="slider2" />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro
            </p>
          </div>
        </div>
        <div>
          <div className="slider1">
            <h1 className="slider_head_center">Chicken</h1>
            <Slider {...settings}>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779437/Farm/20220428_113404_zetfra.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779380/Farm/IMG-20220401-WA0016_b3jkor.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779437/Farm/20220428_114823_fhgtfv.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779381/Farm/IMG-20220401-WA0019_s4utcc.jpg" className="slider-img" alt="" />
              </div>              
            </Slider>
          </div>
          <Slider2 className="slider2" />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro
            </p>
          </div>
        </div>
        <div>
          <div className="slider1">
            <h1 className="slider_head_center">Fruits & others</h1>
            <Slider {...settings}>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779427/Farm/pineapple_cqv3eo.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779427/Farm/plantain_e5b5mv.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1656918535/Farm/download_oyupaz.jpg" className="slider-img" alt="" />
              </div>
              <div className="img_position">
                <img src="https://res.cloudinary.com/manlikeemma/image/upload/v1652779427/Farm/honey_vozwcm.jpg" className="slider-img" alt="" />
              </div>                         
            </Slider>
          </div>
          <Slider2 />
          <div className="slider-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              facilis minima excepturi iusto dolor neque animi porro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
