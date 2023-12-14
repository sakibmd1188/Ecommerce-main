import React, { useState } from "react";
import "./NewArrival.css";
import FetchAxiosData from "../../../../Axios/FetchAxiosData";
import { NavLink } from "react-router-dom";
import { Rating } from "@mui/material";
import { addtoCart } from "../../../../redux/cartSlice";
import { useDispatch } from "react-redux";
import PopUp from "../../../Product_Lists/PopUp";

const NewArrival = () => {
  const [hoverIndex, setHoverIndex] = useState();
  const products = FetchAxiosData("http://localhost:4000/products");
  const newArrival = products.filter((item) => item.newArrival);
  const [quantity, setQuantity] = useState(1);
  const [popUp, setPopUp] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  // const slideLeft = () => {
  //   var slider = document.getElementById("slider_new");
  //   slider.scrollLeft = slider.scrollLeft - 400;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById("slider_new");
  //   slider.scrollLeft = slider.scrollLeft + 200;
  // };
  const handleSlide = (direction) => {
    const slider = document.getElementById("slider_new");
    const slideAmount = direction === "left" ? -400 : 200;
    slider.scrollLeft += slideAmount;
  };

  const handleAdd = (val) => {
    dispatch(addtoCart({ ...val, quantity, totalAmount }));
    setQuantity(1);
    setId(val.pro_id);
    setPopUp(true);
  };
  const bool = (valBool) => {
    setPopUp(valBool);
  };

  return (
    <>
      <div className="flex2" style={{ width: "auto" }}>
        <h4>
          New <i style={{ color: "lightgray" }}>Collections</i> of Arrival
        </h4>

        <div className="line" style={{ width: "80%" }}></div>
      </div>
      
      <div className="flex2">
        <p style={{ fontSize: "15px", color: "lightgray" }}>
          Browse the collection of our {newArrival.length} new products, You
          will definitely find what you are looking for.
        </p>
        <div className="icon_caret">
          <button type="button" onClick={() => handleSlide("left")}>
            <i className="bi bi-caret-left"></i>
          </button>
          <button type="button" onClick={() => handleSlide("right")}>
            <i className="bi bi-caret-right"></i>
          </button>
        </div>
      </div>

      <div id="slider_new" className="slider-container">
        {newArrival.map((val, index) => {
          return (
            <div
              key={index}
              className="newCard col-lg-4 col-md-6 col-sm-8 "
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="newArrival_main container ">
                <div className="newArrival_img">
                  <NavLink to={`/productInfo/${val.pro_id}`}>
                    <img src={val.img} alt="" className="newA_img " />
                  </NavLink>

                  <div
                    className={`icons ${hoverIndex === index ? "hovered" : ""}`}
                  >
                  
                    <div className="icons2" >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "40px",
                        }}
                      >
                        <button className="new">New</button>
                        <button className="discount">-9%</button>
                      </div>
                      <div>
                        <i className="bi bi-eye" aria-label="View"></i>
                        <i className="bi bi-heart" aria-label="Heart"></i>
                      </div>
                    </div>
                    <div className="icon1" onClick={() => handleAdd(val)}>
                      <i className="bi bi-cart3" aria-label="Cart"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <h5>{val.type}</h5>
                  <div className="price_new">
                    <h5 >${val.price}</h5>
                    <Rating
                      name="simple-controlled"
                      onChange={(event, newValue) => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {popUp && <PopUp popUp={popUp} id={id} parentClose={bool} />}
    </>
  );
};

export default NewArrival;
