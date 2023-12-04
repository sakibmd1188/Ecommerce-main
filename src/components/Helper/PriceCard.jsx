import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalAmount } from "../../redux/cartSlice";

const PriceCard = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [totalSum, setTotalSum] = useState(
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className="price_card2">
      <div style={{ margin: "10px" }}>
        <div style={{ color: "lightgray" }}>
          <h5>{totalSum} items</h5>
          <h5>Show Details</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span> Subtotal</span>
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
    </div>
  );
};

export default PriceCard;
