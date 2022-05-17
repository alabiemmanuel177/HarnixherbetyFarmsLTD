import React from "react";
import { Link } from "react-router-dom";
import "../home.css";

const Home = () => {
  return (
    <div>
      <div className="main-card">
        <div className="card-txt">
          <h1 className="text-head">Get Your Quality Farm Product Here</h1>
          <h3 className="text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto <br/>
            dolore eius ex, dignissimos cupiditate in eos quod magni quas natus
            praesentium hic, obcaecati veritatis quos fugit autem doloremque,
            aut aliquid.
          </h3>
            <Link to='/Product'><button type="button" className="btn btn-primary btn-lg text-btn">Check Products
            </button></Link>
              
                  </div>
        <div className="card-vid">
          <video width="600px" height="400" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="Welcome p-5">
        <div className="welcome_image">
        <img src="/icons/HHF Logo.png" alt="" width="150px" height="" />
        </div>
        <p>At HARNIXHERBTY FARMS LIMITED, we’re passionate about good products,<br/> 
        exceptional service and positive team spirit. We understand how valuable your time is,<br/> 
        which is why we will leave no stone unturned in order to find the right solution for you.<br/> 
        Read about our selection of products and services below, and contact us today to learn more.</p>
      </div>
      <div className="info">
        <img src="/images/farm-product-1.png" alt="" width="100%" height="" />
        <div className="cards_on_image">
          <div className="card_on_image">
            <div className="card_on_image_images">
            <img src="/icons/eggs.png" alt="" height="80px" width="80px"/>
            </div>
            <div className="card_on_image_txt">
              <h1>25,000+</h1>
              <h4>Crates</h4>
              <h2>Potatoe harvest and sales</h2>
            </div>
          </div>
          <div className="card_on_image">
            <div className="card_on_image_images">
            <img src="/icons/turkey.png" alt="" height="80px" width="80px"/>            </div>
            <div className="card_on_image_txt">
              <h1>14,530+</h1>
              <h4>chicken</h4>
              <h2>Potatoe harvest and sales</h2>
            </div>
          </div>
          <div className="card_on_image">
            <div className="card_on_image_images">
            <img src="/icons/banana.png" alt="" height="80px" width="80px"/>
            </div>
            <div className="card_on_image_txt">
              <h1>2,000+</h1>
              <h4>tubers</h4>
              <h2>Potatoe harvest and sales</h2>
            </div>
          </div>
          <div className="card_on_image">
            <div className="card_on_image_images">
            <img src="/icons/pineapple.png" alt="" height="80px" width="80px"/>
            </div>
            <div className="card_on_image_txt">
              <h1>4,500+</h1>
              <h4>tubers</h4>
              <h2>Potatoe harvest and sales</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
