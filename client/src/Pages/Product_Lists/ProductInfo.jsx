import { useParams } from "react-router";
import FetchAxiosData from "../../Axios/FetchAxiosData";
import legal from "../../Assets/legal1.jfif";
import React, { useEffect, useState } from "react";
import "./Products.css";
import {
  FormControl,
  FormHelperText,
  ImageList,
  ImageListItem,
  MenuItem,
  Rating,
  Select,
  Tab,
  Tabs,
} from "@mui/material";
import Quantity from "../../components/Helper/Quantity";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";
import PopUp from "./PopUp";

const ProductInfo = ({ product }) => {
  const { pro_id } = useParams();
  const [popUp, setPopUp] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cart);
  const [totalSum, setTotalSum] = useState(
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );
  const dispatch = useDispatch();
  // console.log(quantity)
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const products = FetchAxiosData("http://localhost:4000/products");
  const productFind = products.find((val) => val.pro_id === parseInt(pro_id));
  // console.log(productFind);
  if (!productFind) {
    return <div>Product not found.</div>;
  }

  const itemData = productFind?.img;
  const handleAdd = () => {
    setPopUp(true);
    dispatch(addtoCart({ ...productFind, quantity, totalAmount }));
    setQuantity(1);
  };

  const updateTotalSum = (productId, newCount) => {
    const updatedCartItems = cartItems.map((item) =>
      item.pro_id === productId ? { ...item, quantity: newCount } : item
    );

    const updatedTotalSum = updatedCartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setTotalSum(updatedTotalSum);
  };
  // const handleChildDataChange = (newData) => {
  //   // console.log(newData);
  //   setquantity(newData);
  // };
  const bool = (valBool) => {
    setPopUp(valBool);
  };
  return (
    <div className="product">
      <div className="aboutUs_header">
        <div className="containerr container">
          <div className="aboutUs_header_row">
            <div>
              Home
              {productFind && ` / ${productFind.type}`}
            </div>
            <img src={legal} alt="sofas&chairs"></img>
          </div>
        </div>
      </div>
      <div className="mainProduct container">
        <div className="scroll_img" style={{ marginTop: "20px" }}>
          <ImageList sx={{ width: 100, height: 300 }} cols={1} rowHeight={100}>
            {itemData.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item} alt={` ${index + 1}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="product_Info">
          <div>
            <img src={productFind.img[0]} alt="why" className="one_Image2 " />
          </div>
          <div style={{ width: "100%" }}>
            <h3>{productFind.type}</h3>
            <Rating
              name="simple-controlled"
              onChange={(event, newValue) => {}}
            />
            <p style={{ fontSize: "30px", color: "lightgray" }}>
              ${productFind.price}
            </p>
            <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              {productFind.caption}
            </p>
            <div className="line"></div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <h4>Size</h4>
              <Select displayEmpty>
                <MenuItem>S</MenuItem>
                <MenuItem value={20}>M</MenuItem>
                <MenuItem value={30}>L</MenuItem>
                <MenuItem value={40}>XL</MenuItem>
              </Select>
            </FormControl>
            <div>
              <span>Quantity</span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Quantity
                  quantity={productFind.quantity}
                  price={productFind.price}
                  id={productFind.pro_id}
                  onUpdate={(newCount) =>
                    updateTotalSum(productFind.pro_id, newCount)
                  }
                />

                <div onClick={handleAdd}>
                  <button className="btn_adtoCart">+Add To Cart</button>
                </div>
              </div>

              <i className="bi bi-heart-fill" style={{ color: "black" }}></i>
              <b>Add to wishlist</b>
              <div
                style={{
                  width: "230px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Share</span>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-google"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {productFind.newArrival === "true" && <p>New Arrival</p>}
      <div>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="DESCRIPTION" />
          <Tab label="PRODUCT DETAILS" />
          <Tab label="REVIEWS" />
        </Tabs>

        <div className="content">
          {activeTab === 0 && <div>Description Content Here</div>}
          {activeTab === 1 && <div>Product Details Content Here</div>}
          {activeTab === 2 && <div>Reviews Content Here</div>}
        </div>
      </div>

      {popUp && <PopUp popUp={popUp} id={pro_id} parentClose={bool} />}
    </div>
  );
};

export default ProductInfo;
