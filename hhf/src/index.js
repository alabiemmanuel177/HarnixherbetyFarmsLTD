import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './views/navbar'
import Footer from './views/footer'
import Home from './views/home'
import Contact from './views/contact'
import Product from './views/product'
// import Gallery from './views/gallery'
import Contactus from './views/Contactus'
import Aboutus from './views/aboutus'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
      <div>                     
        <BrowserRouter>
        <Navbar />
        <Routes>       
        <Route index element={<Home />} path="/" />
        <Route index element={<Aboutus />} path="/aboutus" />
        <Route element={<Contact/>} path="/contact" />
        <Route element={<Product/>} path="/product" />
        <Route element={<Contactus/>} path="/contacts" />
        </Routes>
        <Footer/>        
        </BrowserRouter>
      </div>
  )
}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
