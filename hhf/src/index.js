import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './views/navbar'
import Footer from './views/footer'
import Home from './views/home'
import Contact from './views/contact'
import Product from './views/product'
import Gallery from './views/gallery'



const App = () => {
  return (
      <div>          
           
        <BrowserRouter>
        <Navbar />
        <Routes>       
        <Route index element={<Home />} path="/" />
        <Route element={<Contact/>} path="/contact" />
        <Route element={<Product/>} path="/product" />
        <Route element={<Gallery/>} path="/gallery" />
        </Routes>
        <Footer/>        
        </BrowserRouter>
         

      </div>
  )
}
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
