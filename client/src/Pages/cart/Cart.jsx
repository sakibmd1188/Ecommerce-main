import React, { useState } from "react";
import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "../../components/Helper/Quantity";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { NavLink } from "react-router-dom";
import { removeFromCart, selectTotalAmount } from "../../redux/cartSlice";
import { IconButton } from "@mui/material";

import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log("cartItems");
  const totalAmount = useSelector(selectTotalAmount);
  const [totalSum, setTotalSum] = useState(
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );
  console.log(totalSum);
  const updateTotalSum = (productId, newCount) => {
    const updatedCartItems = cartItems.map((item) =>
      item.pro_id === productId ? { ...item, quantity: newCount } : item
    );

    const updatedTotalSum = updatedCartItems.reduce(
      (sum, item) => sum + item.quantity,
      1
    );

    setTotalSum(updatedTotalSum);
  };
  const dispatch = useDispatch();
  const removeItemFromCart = (pro_id) => {
    dispatch(removeFromCart(pro_id));
    updateTotalSum(pro_id, 0);
  };
  //payment
  const makePayment = async () => {
    console.log("cartItemstttt");
    const stripe = await loadStripe("public key");

    const body = {
      products: cartItems,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7001/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <div className="container cart_main ">
      <div>
        <div className="price_card1">
          <h2 style={{ padding: "20px" }}>SHOPPING CART</h2>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              return (
                <div className="cartItem_main" key={index}>
                  <img src={item.img[0]} alt="" className="cart_img" />
                  <div style={{ padding: "10px", width: "200px" }}>
                    <p>{item.type}</p>
                    <span>${item.price}</span>
                    <p>Dimension</p>
                  </div>

                  <Quantity
                    quantity={item.quantity}
                    price={item.price}
                    id={item.pro_id}
                    onUpdate={(newCount) =>
                      updateTotalSum(item.pro_id, newCount)
                    }
                  />
                  <IconButton onClick={() => removeItemFromCart(item.pro_id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
          <div className="line"></div>
          {cartItems.length === 0 && (
            <div style={{ padding: "20px" }}>
              There are no more items in your cart
            </div>
          )}
        </div>
        <NavLink to={"/"}>
          <span>
            <ArrowBackIosIcon />
            Continue Shopping
          </span>
        </NavLink>
      </div>

      <div className="price_card2">
        <div style={{ margin: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{totalSum} items-90</span>
            <span>${totalAmount}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Shipping</span>
            <span>$7.00</span>
          </div>
        </div>
        <div className="line"></div>
        <div style={{ margin: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Total (tax excl.)</span>
            <span>${totalAmount + 7}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Taxes</span>
            <span>$0.00</span>
          </div>
        </div>
        <div className="line"></div>
        <div
          style={{
            height: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <NavLink to="/checkout">
            <button>PROCEED TO CHECKOUT</button>
          </NavLink>
          <br />

          <button onClick={makePayment} type="button">
            PAYMENT
          </button>
        </div>
      </div>
      {/* <PriceCard/> */}
    </div>
  );
};

export default Cart;
