import React from 'react'
import "../products.css"

const Product = () => {
  return (
    <div>
      <center><h2 style={{marginBottom: "20px"}}>Our Products</h2></center>
      <div className="holder">
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/plantain.jpg" alt=""/>
          </div>
          <div className="blog-post__info">
            <div className="blog-post_date">
              <span>Sunday</span>9
              <span>October 27 2021</span>
            </div>
            <h1 className="blog-post__title">Plantain</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia sunt itaque vitae
                consectetur, quisquam quidem hic ab nesciunt accusantium explicabo, repudiandae alias 
                culpa totam, consequuntur fugiat cum. Similique, repellat!
            </p>
            <a href="#" className="blog-post__cta">Read More</a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/Brown-eggs.jpg" alt=""/>
          </div>
          <div className="blog-post__info">
            <div className="blog-post_date">
              <span>Sunday</span>
              <span>October 27 2021</span>
            </div>
            <h1 className="blog-post__title">Eggs</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia sunt itaque vitae
                consectetur, quisquam quidem hic ab nesciunt accusantium explicabo, repudiandae alias 
                culpa totam, consequuntur fugiat cum. Similique, repellat!
            </p>
            <a href="#" className="blog-post__cta">Read More</a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/papaya.jpg" alt=""/>
          </div>
          <div className="blog-post__info">
            <div className="blog-post_date">
              <span>Sunday</span>
              <span>October 27 2021</span>
            </div>
            <h1 className="blog-post__title">Papaya</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia sunt itaque vitae
                consectetur, quisquam quidem hic ab nesciunt accusantium explicabo, repudiandae alias 
                culpa totam, consequuntur fugiat cum. Similique, repellat!
            </p>
            <a href="#" className="blog-post__cta">Read More</a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/henrique-s-ruzzon-u1vOLCULaik-unsplash.jpg" alt=""/>
          </div>
          <div className="blog-post__info">
            <div className="blog-post_date">
              <span>Sunday</span>
              <span>October 27 2021</span>
            </div>
            <h1 className="blog-post__title">Chicken</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia sunt itaque vitae
                consectetur, quisquam quidem hic ab nesciunt accusantium explicabo, repudiandae alias 
                culpa totam, consequuntur fugiat cum. Similique, repellat!
            </p>
            <a href="#" className="blog-post__cta">Read More</a>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post__img">
            <img src="/images/potato.jpg" alt=""/>
          </div>
          <div className="blog-post__info">
            <div className="blog-post_date">
              <span>Sunday</span>
              <span>October 27 2021</span>
            </div>
            <h1 className="blog-post__title">Potato</h1>
            <p className="blog-post__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia sunt itaque vitae
                consectetur, quisquam quidem hic ab nesciunt accusantium explicabo, repudiandae alias 
                culpa totam, consequuntur fugiat cum. Similique, repellat!
            </p>
            <a href="#" className="blog-post__cta">Read More</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Product