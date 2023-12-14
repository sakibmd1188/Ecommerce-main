import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer flexCol">
      {/* class container using bootstarp */}

      <div className="container">
        <div className="container" style={{ height: "300px" }}>
          <div className="row ">
            <div className="col-4 footer_box">
              <div>
                <h4> Need Help?</h4>
                <span>Call: 1-800-345-6789</span>
              </div>
              <div>
                <h4>Products & Sales</h4>
                <span> Call: 1-877-345-6789 </span>
              </div>

              <div>
                <h4>Check Order Status</h4>
                <span> Click here to check Order Status.</span>
              </div>
            </div>
            <div className="col-2 flexCol footer_box">
              <h4>Products</h4>
              <span>Prices drop</span>
              <span>New products</span>
              <span>Best sales</span>
              <span>Contact us</span>
              <span>My account</span>
            </div>
            <div className="col-2 flexCol footer_box">
              <h4>Our Company</h4>
              <span>Delivery</span>
              <span>Legal Notice</span>
              <span>About us</span>
              <span>Contact us</span>

              <span>Sitemap</span>
              <span>Stores</span>
            </div>
            <div className="col-4 footer_box">
              <div className="bottop_part">
                <h4>Newsletter</h4>
                <div className="search">
                  <input
                    type="search"
                    placeholder="Your Email Address"
                    className="search_input_footer"
                  />
                  <span className="iconss1">
                    <i className="bi bi-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerF container">
        <div className="app_stores">
          <div className="apps_1">
            <span>Free App:</span>
            <button type="button" className="btn btn-secondary">
              <i className="bi bi-stack"></i> Apple Store
            </button>
            <button type="button" className="btn btn-success">
              <i className="bi bi-google-play"></i> Google Play
            </button>
          </div>

          <div className="apps_2">
            Follow Us:
            <i className="bi bi-twitter"></i>
            <i className="bi bi-google"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
        <div className="links_bottom">
          <div className="link">
            About Us | Blog | My Account - Oder Status - Shipping & Returns -
            Privacy Policy - Terms & Conditions
          </div>
          <div className="copyright">
            © All rights reserved. Created by Group 6 of Team Asteroid.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
