import React, { useState } from "react";
import "../dining/Dinning.css";
import { data, dinning_chair } from "../wrapper_Home/Wrapper_mock_Data";
import FormatPrice from "../../../../components/Helper/FormatPrice";

const getProductsByCategoryId = (categoryId) => {
  return dinning_chair.filter((product) =>
    product.categories.includes(categoryId)
  );
};

const Featured = ({ type }) => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  // console.log(selectedCategory);
  const handleSlide = (direction) => {
    const slider = document.getElementById("slider_new");
    const slideAmount = direction === "left" ? -400 : 200;
    slider.scrollLeft += slideAmount;
  };

  return (
    <>
      <div className="flex2">
        <div style={{ width: "260px" }}>
          <h4>
            Featured <i style={{ color: "lightgray" }}>Categories</i>
          </h4>
        </div>

        <div className="line"></div>
        <div className="dinning_filter_home" style={{ cursor: "pointer" }}>
          <div className="icon_caret">
            <button type="button" onClick={() => handleSlide("left")}>
              <i className="bi bi-caret-left"></i>
            </button>
            <button type="button" onClick={() => handleSlide("right")}>
              <i className="bi bi-caret-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="dinning_img_main">
        {/* 2div inside 3:1 */}
        <div className="dinning_row">
          <div className="dinning_1">
            {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((val) => {
              return (
                <div className="box" key={val.id}>
                  <div className="box_img">
                    <img src={val.img} alt="" />
                  </div>
                  <div className="box_dinning_data">
                    {val.type}
                    <br />
                    {<FormatPrice price={val.price} />}
                    <br />
                    {val.id}
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
