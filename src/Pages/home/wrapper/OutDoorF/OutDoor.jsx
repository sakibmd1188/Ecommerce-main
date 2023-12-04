import React, { useState } from "react";
import "../dining/Dinning.css";
import "./OutDoor.css";
import { data, dinning_chair } from "../wrapper_Home/Wrapper_mock_Data";
import FormatPrice from "../../../../components/Helper/FormatPrice";

const categoriesData = [
  { id: "1", name: "Dining Table" },
  { id: "2", name: "Dining Sets" },
  { id: "3", name: "Dining Chairs " },
];

const getProductsByCategoryId = (categoryId) => {
  return dinning_chair.filter((product) =>
    product.categories.includes(categoryId)
  );
};

const OutDoor = ({ type }) => {
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
      <div className="flex2">
        <div style={{ width: "240px" }}>
          <h4>
            Outdoor <i style={{ color: "lightgray" }}>Furniture</i>
          </h4>
        </div>

        <div className="line"></div>
        <div className="outdoor_filter_home" style={{ cursor: "pointer" }}>
          {categoriesData.map((category) => (
            <span
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <h6> {category.name}</h6>
            </span>
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
              src="https://demo.posthemes.com/pos_pataku/layout2/img/cms/img5_home2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OutDoor;
