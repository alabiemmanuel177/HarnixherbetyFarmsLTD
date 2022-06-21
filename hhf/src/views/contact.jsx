import React from 'react'
import "./Contactus.css"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {GoLocation} from "react-icons/go"

const Contact = () => {
  return (
       <div className='contactus'>
      <div className='contactus-img'> acr</div>
      <div className='contactus-card'>
        <div className='card-header'>
      <h3>Contact Information</h3>
      <p>Fill up the form and we will get back to
      you within 24 hours.you within 24 hours.</p>
      </div>
      <div className='contact_info_holder'>
      <div className='contact_info'>
      <div className='contact_info_icon'><BsFillTelephoneFill/></div>
      <div className='contact_info_text'> +234 ***** ***** ****</div>
      </div>
      <div className='contact_info'>
      <div className='contact_info_icon'><AiOutlineMail/></div>
      <div className='contact_info_text'>HelloWorld@gmail.com</div>
      </div>
      <div className='contact_info'>
      <div className='contact_info_icon'><GoLocation/></div>
      <div className='contact_info_text'>HelloWorld@gmail.com</div>
      </div>
      </div>
      <div className="card-links">
          <img src="icons/facebook.png" alt="" />
          <img src="icons/linkedin.png" alt="" />
          <img src="icons/twitter.png" alt="" />
          <img src="icons/instagram.png" alt="" />
        </div>
      </div>
    </div>
            
        )
        }

export default Contact