import React from "react";
// import "../products.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <center>
        <h2 style={{ marginBottom: "20px" }}>Our Products</h2>
      </center>
      <div className="holder">
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/plantain.jpg" alt="" />
          </div>
          <div className="blog-post__info">
            <h1 className="blog-post__title">Plantain</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quia sunt itaque vitae consectetur, quisquam quidem hic ab
              nesciunt accusantium explicabo, repudiandae alias culpa totam,
              consequuntur fugiat cum. Similique, repellat!
            </p>
            <Link to="/Contact">
              <button className="blog-post__cta">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/Brown-eggs.jpg" alt="" />
          </div>
          <div className="blog-post__info">
            <h1 className="blog-post__title">Eggs</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quia sunt itaque vitae consectetur, quisquam quidem hic ab
              nesciunt accusantium explicabo, repudiandae alias culpa totam,
              consequuntur fugiat cum. Similique, repellat!
            </p>
            <Link to="/Contact">
              <button className="blog-post__cta">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/papaya.jpg" alt="" />
          </div>
          <div className="blog-post__info">
            <h1 className="blog-post__title">Papaya</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quia sunt itaque vitae consectetur, quisquam quidem hic ab
              nesciunt accusantium explicabo, repudiandae alias culpa totam,
              consequuntur fugiat cum. Similique, repellat!
            </p>
            <Link to="/Contact">
              <button className="blog-post__cta">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/chicken.jpg" alt="" />
          </div>
          <div className="blog-post__info">
            <h1 className="blog-post__title">Chicken</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quia sunt itaque vitae consectetur, quisquam quidem hic ab
              nesciunt accusantium explicabo, repudiandae alias culpa totam,
              consequuntur fugiat cum. Similique, repellat!
            </p>
            <Link to="/Contact">
              <button className="blog-post__cta">Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/potato.jpg" alt="" />
          </div>
          <div className="blog-post__info">
            <h1 className="blog-post__title">Potato</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quia sunt itaque vitae consectetur, quisquam quidem hic ab
              nesciunt accusantium explicabo, repudiandae alias culpa totam,
              consequuntur fugiat cum. Similique, repellat!
            </p>
            <Link to="/Contact">
              <button className="blog-post__cta">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
