import React from "react";
import legal from "../../Assets/legal1.jfif"
import "../about-us/AboutUs.css"



const LegalNotice = () => {
  return (
    <div>
      <div className="aboutUs">
        <div className="aboutUs_header">
          <div className="containerr">
            <div className="aboutUs_header_row">
              <div>Home/Legal Notice</div>
              <img src={legal} alt="legalNotice"></img>{" "}
            </div>
          </div>
        </div>
        <div className="aboutUs_body">
          <div className="containerr">
            <h2>Legal Notice</h2>
            <div className="about_us">
              <div className="padding">
                <b> Legal </b>
                <br />
                <b> Credits</b>
                <br />
                <span style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun.
                </span>

                <span>
                  Legal Notice Legal Credits Concept and production: This Online
                  store was created using Prestashop Shopping Cart
                  Software,check out PrestaShop's ecommerce blog for news and
                  advices about selling online and running your ecommerce
                  website.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
