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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto{" "}
            <br />
            dolore eius ex, dignissimos cupiditate in eos quod magni quas natus
            praesentium hic, obcaecati veritatis quos fugit autem doloremque,
            aut aliquid.
          </h3>
          <Link to="/Product">
            <button type="button" className="btn btn-primary btn-lg text-btn">
              Check Products
            </button>
          </Link>
        </div>
        <div className="card-vid">
          <video width="800px" height="400" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="Welcome">
        <div className="homepage_details">
          <img src="/images/farm-product-1.png" alt="" />
        </div>
        <div className="homepage_card">
          <h1>Providing Basic Needs</h1>
          <p>
            At HARNIXHERBTY FARMS LIMITED, we're passionate about good products,
            exceptional service and positive team spirit. We understand how
            valuable your time is, which is why we will leave no stone unturned
            in order to find the right solution for you.
          </p>
          <p>
            Read about our selection of products and services below, and contact
            us today to learn more.
          </p>
        </div>
      </div>
      <div className="homepage_product">
        <h1>Our Products</h1>
        <h3></h3>
        <div className="hmflex">
          <div className="products_card">
            <div className="hmproduct">
              <img src="/images/Brown-eggs.jpg" alt="" />
              <p>Eggs</p>
            </div>
            <div className="hmproduct">
              <img src="/images/chicken1.jpg" alt="" />
              <p>Chicken</p>
            </div>
            <div className="hmproduct">
              <img src="/images/plantain.jpg" alt="" />
              <p>Plantain</p>
            </div>
            <div className="hmproduct">
              <img src="/images/pineapple.jpg" alt="" />
              <p>Pineapple</p>
            </div>
            <div className="hmproduct">
              <img src="/images/potato.jpg" alt="" />
              <p>Potatoes</p>
            </div>
            <div className="hmproduct">
              <img src="/images/papaya.jpg" alt="" />
              <p>Papaya</p>
            </div>
          </div>
        </div>
        <button>SEE ALL</button>
      </div>
    </div>
  );
};

export default Home;
