import React, { useEffect, useState } from "react";
import legal from "../../Assets/legal1.jfif";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./Products.css";
import { useParams } from "react-router";
import FetchAxiosData from "../../Axios/FetchAxiosData";
import ProductAccordian from "./ProductAccordian";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";
import FilteredItems from "./FilteredItems";
import PopUp from "./PopUp";

const ProductItems = () => {
  const { cat_id, subcat_id, sub_subcat_id } = useParams();
  const [isShow, setIsShow] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [hoverIndex, setHoverIndex] = useState();
  const [activeFilter, setActiveFilter] = useState([]);
  // console.log(activeFilter);
  const [productDisplayed, setproductDisplayed] = useState([]);
  const [sortingOption, setSortingOption] = React.useState("");
  // ---all subcategory images
  const [receivedSubData, setReceivedSubData] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const [prodId, setProdId] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  const products = FetchAxiosData("http://localhost:4000/products");

  // filterProducts gets me all data that a page requires filtiring using id's
  const filterProducts = products.filter((pro) => {
    if (pro.cat_id !== parseInt(cat_id)) {
      return false;
    }
    if (subcat_id && pro.subcat_id !== parseInt(subcat_id)) {
      return false;
    }
    if (
      subcat_id &&
      sub_subcat_id &&
      pro.sub_subcat_id !== parseInt(sub_subcat_id)
    ) {
      return false;
    }

    return true;
  });
  // -------------------------------------------
  // "receivedSubData" data from filterItems and stored in dataMain and used here
  const dataMain = receivedSubData;
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };
  //Relevence part the final array of data is dataMain and relevence works here
  const sortProducts = () => {
    let sortedProducts = [...dataMain];
    if (sortingOption === "az") {
      sortedProducts.sort((a, b) => a.type.localeCompare(b.type));
    } else if (sortingOption === "za") {
      sortedProducts.sort((a, b) => b.type.localeCompare(a.type));
    } else if (sortingOption === "priceLow") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortingOption === "priceHigh") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };

  useEffect(() => {
    const sortedProducts = sortProducts();
    setproductDisplayed(sortedProducts);
  }, [sortingOption, dataMain.length]);

  // ---86-118----these lines are uset to get specific heading--
  const subCategoryData = FetchAxiosData(
    "http://localhost:4000/sub_categories"
  );
  const subSubCategoryData = FetchAxiosData(
    "http://localhost:4000/sub_sub_categories"
  );
  const categoryData = FetchAxiosData("http://localhost:4000/categories");

  const categoryName =
    categoryData.length > 0 ? categoryData[cat_id - 1].name : "";

  const filteredSubCategories = subCategoryData.filter(
    (subCategory) => subCategory.cat_id === parseInt(cat_id)
  );

  const filteredSubSubCategories = subSubCategoryData.filter(
    (subSubCategory) =>
      subSubCategory.cat_id === parseInt(cat_id) &&
      subSubCategory.subcat_id === parseInt(subcat_id)
  );
  const subCategoryName = filteredSubCategories.find(
    (val) => val.subcat_id === parseInt(subcat_id)
  )?.name;
  const subSubCategoryName = filteredSubSubCategories.find(
    (val) => val.sub_subcat_id === parseInt(sub_subcat_id)
  )?.name;
  const productTitle = subcat_id
    ? sub_subcat_id
      ? subSubCategoryName
      : subCategoryName
    : categoryName;
  // ----------------Name/name/----

  const handleAdd = (val) => {
    dispatch(addtoCart({ ...val, quantity, totalAmount }));
    setQuantity(1);
    setProdId(val.pro_id);
    setPopUp(true);
  };
  const bool = (valBool) => {
    setPopUp(valBool);
  };
  const aa = (ss) => {
    setReceivedSubData(ss);
  };

  return (
    <div>
      <div className="aboutUs">
        <div className="aboutUs_header">
          <div className="containerr container">
            <div className="aboutUs_header_row">
              {/* 45-65 only for name/name / / */}
              <div>
                <NavLink to={"/"}>Home</NavLink>

                {categoryName && (
                  <>
                   
                    <NavLink to={`/categories/${cat_id}`}>
                      {categoryName}
                    </NavLink>
                  </>
                )}
                {subCategoryName && (
                  <>
                    {" / "}
                    <NavLink to={`/sub_categories/${cat_id}/${subcat_id}`}>
                      {subCategoryName}
                    </NavLink>
                  </>
                )}
                {subSubCategoryName && ` / ${subSubCategoryName}`}
              </div>
              <img src={legal} alt="sofas&chairs"></img>
            </div>
          </div>
        </div>
        <div className="sofa_chair">
          <div className="containerr container">
            <div className="sofa_chair_body">
              <div className="sofa_chair_options">
                <div className="container filter_header">
                  {!subcat_id ? (
                    <ProductAccordian
                      subData={filteredSubCategories}
                      id={cat_id}
                      categoryName={categoryName}
                    />
                  ) : sub_subcat_id ? (
                    <h3>{productTitle}</h3>
                  ) : (
                    <div>
                      <h3> {productTitle}</h3>

                      {filteredSubSubCategories.map((val) => (
                        <div key={val.id}>
                          <NavLink
                            to={`/sub_sub_categories/${cat_id}/${subcat_id}/${val.sub_subcat_id}`}
                            style={{ color: "gray" }}
                          >
                            <h5> {val.name}</h5>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="container filter_body">
                  <h2>Filter By</h2>
                  <button onClick={() => window.location.reload()}>
                    X Clear All
                  </button>
                  <FilteredItems
                    aa={aa}
                    filterProducts={filterProducts}
                    active={setActiveFilter}
                  />
                 
                </div>
                <div className=" filter_part_img imageFilter ">
                  <img
                    src="https://demo.posthemes.com/pos_pataku/layout2/modules/ps_advertising/img/fixtures/advertising.jpg"
                    alt=""
                    className="imageFilter"
                  />
                </div>
              </div>

              {/* -----Col2 products---- */}
              <div className="products_page container">
                <h3>{productTitle}</h3>
                <div className="products_page_header">
                  <div className="list_grid">
                    <button
                      onClick={() => setIsShow(true)}
                      className="mui_icon"
                    >
                      <ReorderIcon
                        sx={{ fontSize: "32px", color: "#369599" }}
                      />
                    </button>
                    <button
                      onClick={() => setIsShow(false)}
                      className="mui_icon"
                    >
                      <GridViewRoundedIcon
                        sx={{ fontSize: "32px", color: "#369599" }}
                      />
                    </button>
                    <span>There Are {dataMain.length} Products</span>
                  </div>
                  {/* SortBy Relevence  */}
                  <div className="relevence_main">
                    <span>Sort By:</span>
                    <div className="relevence_drop">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Relevence
                        </InputLabel>
                        <Select
                          value={sortingOption}
                          label="Sort By"
                          onChange={handleSortingChange}
                        >
                          <MenuItem value="">All</MenuItem>
                          <MenuItem value="az">A-Z</MenuItem>
                          <MenuItem value="za">Z-A</MenuItem>
                          <MenuItem value="priceLow">
                            Price Low to High
                          </MenuItem>
                          <MenuItem value="priceHigh">
                            Price High to Low
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                {/* ---------Active Filter------Using Mui-------------- */}
                <div>
                  {activeFilter.length === 0 ? (
                    ""
                  ) : (
                    <div className="active_Main  col-lg-4 col-md-6 col-sm-8 ">
                      <b>Active Filters :</b>

                      {activeFilter.map((val, index) => {
                        return (
                          <div key={index} className="action">
                            Categories : {val} X
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* -------------Products-------------- */}
                <div style={{ width: "100%", height: "100%" }}>
                  {productDisplayed.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          isShow
                            ? " cards1 col-lg-12 col-md-12 col-sm-12 "
                            : " cards col-lg-4 col-md-6 col-sm-8 "
                        }
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                      >
                        <div
                          className={
                            isShow ? "listProducts container" : "container"
                          }
                        >
                          <div className="main">
                            <NavLink to={`/productInfo/${val.pro_id}`}>
                              <img
                                src={val.img[0]}
                                alt=""
                                className="one_Image"
                              />
                            </NavLink>

                            <div
                              className={`icons ${
                                hoverIndex === index ? "hovered" : ""
                              }`}
                            >
                              <div className="icons2">
                                <div className="new_discount">
                                  <button className="new">New</button>
                                  <button className="discount">-9%</button>
                                </div>
                                <div>
                                  <i className="bi bi-eye"></i>
                                  <i className="bi bi-heart"></i>
                                </div>
                              </div>
                              <div
                                className="icon1"
                                onClick={() => handleAdd(val)}
                              >
                                <i className="bi bi-cart3"></i>
                              </div>
                            </div>
                          </div>

                          <div style={{ padding: isShow ? "10px" : "" }}>
                            <h4>{val.type}</h4>
                            <div style={{ display: isShow ? "block" : "none" }}>
                              <Rating
                                name="simple-controlled"
                                onChange={(event, newValue) => {}}
                              />
                            </div>

                            <h4>${val.price}</h4>
                            <span
                              className="descp"
                              style={{ display: isShow ? "block" : "none" }}
                            >
                              lorem24 wkjddweukjfhwioehwelkc xxxxxxxxxvsdfvsdfv
                              dcsfsdmnfskjdbfsdnbjds,
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {popUp && <PopUp popUp={popUp} id={prodId} parentClose={bool} />}
        </div>
      </div>
    </div>
  );
};

export default ProductItems;
