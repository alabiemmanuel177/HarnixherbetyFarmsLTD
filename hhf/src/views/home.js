import React from 'react'

// import farmproduct from '../images/farm-product-1.png'

const Home = () => {
  return (
    <div>
    <div className="main-card">
      <div className="card-txt">
        <h1 className="text-head">Get Your Quality Farm Product Here</h1>
        <h3 className="text-body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore
          eius ex, dignissimos cupiditate in eos quod magni quas natus
          praesentium hic, obcaecati veritatis quos fugit autem doloremque, aut
          aliquid.
        </h3>
        <a href="/HTML/product.html"><button type="button" className="btn btn-primary btn-lg text-btn">
          Check Products
        </button></a>
      </div>
      <div className="card-vid">
        <video width="600px" height="400" controls>
          <source src="" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="info1"></div>
    <div className="info">
      <img src="/images/farm-product-1.png" alt="" width="100%" height="100%"/>
    </div>
    </div>
  )
}

export default Home