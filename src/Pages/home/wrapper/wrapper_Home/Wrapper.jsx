import React, { useEffect, useState } from "react";
import "./Wrapper.css";
import { Link } from "react-router-dom";

import axios from "axios";
import { data } from "./Wrapper_mock_Data";
import NewArrival from "../new-arrivals/NewArrival";
import Dinning from "../dining/Dinning";
import OutDoor from "../OutDoorF/OutDoor";
import Featured from "../featured/Featured";

const Wrapper = () => {
  const [newDataBlog, setNewDataBlog] = useState([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };
  return (
    <div className="warpper">
      <div className="containerr container">
        <div>
          <NewArrival />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <img
            src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img3_home2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <Dinning />
        </div>
        <div style={{ marginTop: "40px", marginBottom: "40px" }}>
          <img
            src="   https://demo.posthemes.com/pos_pataku/layout2/img/cms/img4_home2.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <div>
            <OutDoor />
          </div>
        </div>
        <div className="twoInLine_img">
          <img
            src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img6_home2.jpg"
            alt=""
          />
          <img
            src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img7_home2.jpg"
            alt=""
          />
        </div>

        <div>
          <Featured />
        </div>
        <div
          style={{
            marginTop: "40px",
            marginBottom: "40px",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
            border: "1px solid lightgray",
          }}
        >
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/6.jpg"
            alt=""
          />
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/7.jpg"
            alt=""
          />
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/8.jpg"
            alt=""
            className="image3"
          />
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/9.jpg"
            alt=""
            className="image4"
          />
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/10.jpg"
            alt=""
            className="image5"
          />
          <img
            src="http://demo.posthemes.com/pos_pataku/layout2/img/blocklogo/11.jpg"
            alt=""
            className="image6"
          />
        </div>
        <div>
          <div className="flex2" style={{ width: "100%" }}>
            <div style={{ width: "110px" }}>
              <h5>
                Our <i style={{ color: "#999" }}>Blog</i> Posts
              </h5>
            </div>

            <div className="line"></div>
            <div className="icon_caret">
              <button type="button" onClick={slideLeft}>
                <i className="bi bi-caret-left"></i>
              </button>
              <button type="button" onClick={slideRight}>
                <i className="bi bi-caret-right"></i>
              </button>
            </div>
          </div>
          <div id="slider">
            {data.map((val) => (
              <div className="blog_content" key={val.id}>
                <div className="blog_content_inner">
                  <img src={val.img} alt="" className="blog_img" />
                  <h4>{val.caption}</h4>
                  <div>____</div>
                  <Link>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
