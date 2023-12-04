import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AHome from "./Pages/home/AHome";
import AboutUs from "./Pages/about-us/AboutUs";
import Delivery from "./Pages/delivery/Delivery";
import LegalNotice from "./Pages/legal-notice/LegalNotice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Error from "./Pages/Error";
import ProductItems from "./Pages/Product_Lists/ProductItems";
import ProductInfo from "./Pages/Product_Lists/ProductInfo";
import Cart from "./Pages/cart/Cart";
import CheckOut from "./Pages/checkout/DemoCheckOut";
import UserLogin from "./components/Helper/login/UserLogin";
import FetchAxiosData from "./Axios/FetchAxiosData";
import FormStepper from "./Pages/checkout/DemoCheckOut";

const App = () => {
  const productsData = FetchAxiosData("http://localhost:4000/products");
  // console.log("Fetched data:", productsData);

  return (
    <div className="app_main">
      <BrowserRouter>
        <Header dataq={productsData} />

        <Routes>
          <Route path="/" element={<AHome />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="legalnotice" element={<LegalNotice />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<UserLogin />} />
          <Route path="/checkout" element={<FormStepper />} />
          <Route path="/categories/:cat_id" element={<ProductItems />} />
          <Route
            path="/sub_categories/:cat_id/:subcat_id"
            element={<ProductItems />}
          />
          <Route
            path="/sub_sub_categories/:cat_id/:subcat_id/:sub_subcat_id"
            element={<ProductItems />}
          />
          <Route path="/productInfo/:pro_id" element={<ProductInfo />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
