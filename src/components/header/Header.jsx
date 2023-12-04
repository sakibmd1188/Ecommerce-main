import "./Header.css";
import logo from "../../Assets/pataku.jpg";
import myntra from "../../Assets/myntra.jpg"
import { Link, NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectTotalAmount } from "../../redux/cartSlice";

const Header = (dataq) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [cartPop, setCartPop] = useState(false);
  const [out, setOut] = useState(true);
  const [myData, setmyData] = useState([]);
  const totalAmount = useSelector(selectTotalAmount);
  console.log(dataq.dataq);
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm.length);
    if (searchTerm.length > 0) {
      setOut(true);
      setmyData(
        dataq.dataq.filter((item) =>
          item.type.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setmyData([]);
    }
  };

  return (
    <div className="header">
      <div className="header_nav">
        <div className="container containerr">
          <div className="header_nav_container">
            <div className="header_nav_text">
              <span>Welcome-3 to Online Shopping Store !</span>
            </div>
            {/* <DropDown/> */}
            <div className="header_nav_options">
              <div>My Account</div>|<div>USD</div>|<div>English</div>
            </div>
          </div>
        </div>
      </div>
      <div className="header_top container">
        <div className="header_top_container">
          <div className="row1">
            <Link to="/">
              <img className="logo" src={myntra} alt="logo" />
            </Link>
          </div>

          <div className="row2">
            {/* search */}
            <div style={{ width: "50%" }}>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search entire store here..."
                  className="search_input"
                  onChange={handleSearch}
                />
                <span className="iconss1">
                  <i className="bi bi-search"></i>
                </span>
              </div>

              {myData.length > 0 && out && (
                <div
                  className="popup_search_main"
                  onMouseLeave={() => setOut(false)}
                >
                  {myData.map((item, index) => {
                    return (
                      <NavLink to={`./productinfo/${item.pro_id}`}>
                        <div key={index}>
                          <div className="popup_item">
                            <div className="popup_img">
                              <img
                                src={item.img[0]}
                                alt=""
                                className="cart_img_hover"
                              />
                            </div>
                            <div className="popup_descp">
                              <p>{item.type}</p>
                            </div>
                          </div>
                          ${item.price}
                          <div className="line"></div>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>

            {/*card,wishlist  */}
            <div className="iconss2">
              <NavLink to="/signin">
                <div className="flex" style={{ color: "black" }}>
                  <i className="bi bi-heart" />
                  <div className="notifyName">
                    <div className="notification">{cartItems.length}</div>
                    <span>My Wishlist</span>
                  </div>
                </div>
              </NavLink>

              <div
                style={{ position: "relative" }}
                onMouseEnter={() => setCartPop(true)}
              >
                <NavLink to="/cart">
                  <div className="flex" style={{ color: "black" }}>
                    <i className="bi bi-cart3" />
                    <div className="notifyName">
                      <div className="notification">{cartItems.length}</div>
                      <span>My Cart</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            {cartItems.length > 0 && cartPop && (
              // cartItems.length > 0 &&
              <div
                className="popup_cart_main"
                onMouseLeave={() => setCartPop(false)}
              >
                <div className="popup_cart">
                  {cartItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="popup_item">
                          <div className="popup_img">
                            <img
                              src={item.img[0]}
                              alt=""
                              className="cart_img_hover"
                            />
                            <div className="popup_count">{item.quantity}x</div>
                          </div>
                          <div className="popup_descp">
                            <p>{item.type}</p>
                            <span>${item.price}</span>
                            <p>Dimension</p>
                          </div>
                          <div>x</div>
                        </div>
                        <div className="line"></div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <div style={{ padding: "20px" }}>
                    <div className="flex_cartPop">
                      <span>Subtotal</span>
                      <span>${totalAmount}</span>
                    </div>

                    <div className="flex_cartPop">
                      <span>Shipping</span>
                      <span>$7.00</span>
                    </div>
                    <div className="flex_cartPop">
                      <span>Taxes</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex_cartPop">
                      <span>Total</span>
                      <span>${totalAmount + 7}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <NavLink to="/cart">
                    <button className="btn_cart">CHECKOUT</button>
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container containerr header_bottom_container">
          <div className="header_bottom_links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/aboutus">
              About us
            </Link>
            <Link className="link" to="/delivery">
              Delivery
            </Link>
            <Link className="link" to="/legalnotice">
              Legal Notice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
