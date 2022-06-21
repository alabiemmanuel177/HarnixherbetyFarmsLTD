import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./views/navbar";
import Footer from "./views/footer";
import Home from "./views/home";
import Aboutus from "./views/aboutus";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route element={<Aboutus />} path="/aboutus" />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
