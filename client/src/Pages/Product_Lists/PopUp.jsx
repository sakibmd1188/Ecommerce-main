import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const PopUp = ({ popUp, parentClose, id }) => {
  const [close, setClose] = useState(popUp);
  const cartItems = useSelector((state) => state.cart.cart);
  const myClick = cartItems.find((items) => items.pro_id === parseInt(id));
  const [totalSum, setTotalSum] = useState(
    cartItems.reduce((sum, item) => sum + item.quantity, 0)
  );
  const recentClickedProduct = useSelector(
    (state) => state.cart.recentClickedProduct
  );

  const handleClose = () => {
    setClose(false);
  };

  parentClose(close);

  return (
    <div className="popUpMain">
      {close && (
        <div className="popup_add1">
          <div className="popup_add_head">
            <span> ✓ Product successfully added to your shopping cart</span>
            <button onClick={handleClose}>X</button>
          </div>
          <div className="cart-summary">
            <img
              src={recentClickedProduct.img[0]}
              alt=""
              style={{ width: "150px", height: "200px" }}
            />
            <div className="product-details">
              <p className="product-name">{recentClickedProduct.type}</p>
              <p className="product-price">${recentClickedProduct.price}</p>
              <p>Dimension: 40x60cm</p>
              <p>Quantity: {myClick.quantity}</p>
            </div>
            <div className="vLine" />
            <div className="cart-details">
              <p>There are {totalSum} items in your cart.</p>
              <p>
                Total products: $
                {recentClickedProduct.quantity * recentClickedProduct.price}
              </p>
              <p>Total shipping: $7.00</p>
              <p>Taxes: $0.00</p>
              <p className="">
                Total: ${recentClickedProduct.price + 7}(tax excl.)
              </p>
              <div>
                <div className="twoButton">
                  <button onClick={handleClose}>CONTINUE SHOPPING</button>

                  <NavLink to="/cart">
                    <button> ✓ PROCEED TO CHECKOUT</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp;
