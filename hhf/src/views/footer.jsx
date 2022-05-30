import React from "react";
import "../style1.css";
import "../style2.css";

const Footer = () => {
  return (
    <div className="footer">
      
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="foot">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>HarnixHerbetyFarms
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/HTML/product.html" className="text-reset">
                    Product
                  </a>
                </p>
                <p>
                  <a href="/HTML/gallery.html" className="text-reset">
                    Gallery
                  </a>
                </p>
                <p>
                  <a href="/HTML/" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="/HTML/Contact.html" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Ibada, Oyo State, Nigeria
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@HarnixHerbety@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="">
            HarnixHerbetyFarms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
