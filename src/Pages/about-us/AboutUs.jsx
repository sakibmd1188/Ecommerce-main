import React from "react";
import legal from "../../Assets/legal1.jfif";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs">
        <div className="aboutUs_header">
          <div className="containerr">
            <div className="aboutUs_header_row">
              <div>Home/About Us</div>
              <img src={legal} alt="legalNotice"></img>
            </div>
          </div>
        </div>
        <div className="aboutUs_body">
          <div className="containerr">
            <h2>About Us</h2>
            <div className="about_us">
              <div className="padding">
                <b>About us</b>
                <br />
                <b> Our company </b>
                <br />
                <span style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun.
                </span>

                <span>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse
                  ctetur adipisicing elit.
                </span>

                <span>
                  Top quality products Best customer service 30-days money back
                  guarantee
                </span>
              </div>
              <div className="padding">
                <b>Our Team</b> <br />
                cms-img Lorem set sint occaecat cupidatat non Eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo.
              </div>
              <div className="padding">
                <b>Testimonials</b> <br />
                ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.” Lorem ipsum dolor sit “Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet conse
                ctetur adipisicing elit. Lorem ipsum dolor sit amet conse ctetur
                adipisicing elit, sed do eiusmod.” Ipsum dolor sit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
