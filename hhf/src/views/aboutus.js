import React from 'react'
import "../aboutus.css"
import {Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div>
      <div className="page-head">
        <div className="aboutQ">
          <h2>Who Are We?</h2>
          </div>
          <div className="aboutA">
            <p><span className="name-bold">HARNIXHERBTY FARMS LIMITED</span> opened its doors in 2019, and has been providing great products and
               services ever since. What sets us apart from the rest is our ability to
               customize our offering to customers needs, as well as our fantastic team of specialists.</p>
          </div>
      </div>
      <div className="founder-holder">
        <div className="founder-pic">
            <img src="/images/owner.jpg" alt=" " width="100%" />
        </div>
        <div className="About-founder">
          <h3>Our Founder</h3>
             <p>
               It all began with a dream to tap into Nigeria rich farming industry, starting something new. Together, we established HARNIXHERBTY FARMS LIMITED, a company dedicated to providing quality farm products and fresh
               healthy chickens and eggs on the go.Our products and services were designed to satisfy all of our customers, anytime, anywhere. We are committed to customer satisfaction as our top priority. If you want to learn
               more about how we do business, give us a call today.
               </p>
          </div>
      </div>
      <div className="our-background">
         <div className="our-backgroung__info">
         <h3>Our Background</h3>

<p>It all began with a dream to tap into Nigeria rich farming industry, starting something new. Together,
 we established HARNIXHERBTY FARMS LIMITED, A company dedicated to providing quality farm products and fresh healthy chickens and eggs on the go.
Our products and services were designed to satisfy all of our customers, anytime, anywhere. We are committed to customer satisfaction as our top priority. 
If you want to learn more about how we do business, give us a call today.</p>
     <Link to="/Contact"><button className="contact-link">Contact Us</button></Link>
           </div>
           
           <div className="our-background__image">
             <div className="image2-opacity">
           <img src="/images/chicken2.jpg" alt=" " width="300px" height="300px" className="img-postion ag2" />
           </div>
           <div className="image-opacity">
           <img src="/images/chicken3.jpg" alt=" " width="600px" height="500px" className="ag" />
           </div>
         </div>
      </div>
    </div>
  )
}

export default Aboutus