import React from "react";

import "../about-us/AboutUs.css";
import legal from "../../Assets/legal1.jfif";
import BannerSlide from "../home/banner/BannerSlide";
import BannerSlide2 from "../home/Demo";
const Delivery = () => {
  return (
    <div>
      <div className="aboutUs">
        <div className="aboutUs_header">
          <div className="containerr">
            <div className="aboutUs_header_row">
              <div>Home/Delivery</div>
              <img src={legal} alt="legalNotice"></img>
            </div>
          </div>
        </div>
        <div className="aboutUs_body">
          <div className="containerr">
            <h2>Delivery</h2>
            <div className="about_us">
              <div className="padding">
                <b> Shipments and returns </b>
                <br />
                <b> Your pack shipment</b>
                <br />
                <span style={{ color: "grey" }}>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididun.
                </span>

                <span>
                  Packages are generally dispatched within 2 days after receipt
                  of payment and are shipped via UPS with tracking and drop-off
                  without signature. If you prefer delivery by UPS Extra with
                  required signature, an additional cost will be applied, so
                  please contact us before choosing this method. Whichever
                  shipment choice you make, we will provide you with a link to
                  track your package online. Shipping fees include handling and
                  packing fees as well as postage costs. Handling fees are
                  fixed, whereas transport fees vary according to total weight
                  of the shipment. We advise you to group your items in one
                  order. We cannot group two distinct orders placed separately,
                  and shipping fees will apply to each of them. Your package
                  will be dispatched at your own risk, but special care is taken
                  to protect fragile objects. Boxes are amply sized and your
                  items are well-protected.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerSlide2/>
    </div>
  );
};

export default Delivery;
