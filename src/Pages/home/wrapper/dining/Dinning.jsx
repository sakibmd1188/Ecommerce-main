import React, { useState } from "react";
import "./Dinning.css";
import { data, dinning_chair } from "../wrapper_Home/Wrapper_mock_Data";
import FormatPrice from "../../../../components/Helper/FormatPrice";

const categoriesData = [
  { id: "1", name: "Living Chair" },
  { id: "2", name: "Sofas" },
  { id: "3", name: "Storage " },
];

const getProductsByCategoryId = (categoryId) => {
  return dinning_chair.filter((product) =>
    product.categories.includes(categoryId)
  );
};

const Dinning = ({ type }) => {
  const [selectedCategory, setSelectedCategory] = useState("1");
  // console.log(selectedCategory);
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  const selectedProducts = selectedCategory
    ? getProductsByCategoryId(selectedCategory)
    : [];
  return (
    <>
      <div className="flex2 dining_media">
        <div className="flex2">
          <div style={{ width: "150px" }}>
            <h4>
              Dining <i style={{ color: "lightgray" }}>Room</i>
            </h4>
          </div>
          <div className="line"></div>
        </div>

        <div className="dinning_filter_home" style={{ cursor: "pointer" }}>
          {categoriesData.map((category) => (
            <div className="dining_btn"
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <h6> {category.name}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="dinning_img_main">
        {/* 2div inside 3:1 */}
        <div className="dinning_row">
          <div className="dinning_1">
            {selectedProducts.map((val) => {
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
            })}
          </div>
          <div className="dinning_2">
            <img
              src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img8_home2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dinning;
