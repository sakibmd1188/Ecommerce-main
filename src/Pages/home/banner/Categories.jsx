import React, { useState } from "react";
import "./Categories.css";
import { NavLink } from "react-router-dom";
import FetchAxiosData from "../../../Axios/FetchAxiosData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";

const Categories = () => {
  const [isShow7th, setIsShow7th] = useState(false);
  const [popUp, setPopUp] = useState(true);
  const [hoverWithId, setHoverWithId] = useState();
  const [showCategories, setShowCategories] = useState(true);

  const categoriesData = FetchAxiosData("http://localhost:4000/categories");
  console.log(categoriesData);
  const subCategoryData = FetchAxiosData(
    "http://localhost:4000/sub_categories"
  );
  const subSubCategoryData = FetchAxiosData(
    "http://localhost:4000/sub_sub_categories"
  );
  const displayCategoryData = isShow7th
    ? categoriesData
    : categoriesData.slice(0, 6);
  const show7th = () => {
    setIsShow7th((prev) => !prev);
  };
  const handleClick = () => {
    setShowCategories((prev) => !prev);
  };
  const handleCategoryHover = (id) => {
    setPopUp(true);
    setHoverWithId(id);
  };
  return (
    <div className="banner-slide">
      <div className="flex" style={{ padding: "10px" }}>
        <MenuIcon onClick={handleClick} />
        <h4 style={{ marginLeft: "10px" }}> Browse Categories</h4>
      </div>
      {showCategories && (
        <div onMouseLeave={() => setPopUp(false)}>
          {displayCategoryData.map((category, index) => {
            const filteredSubCategories = subCategoryData.filter(
              (subCategory) => subCategory.cat_id === category.cat_id
            );
            const hasSubCategories = filteredSubCategories.length > 0;

            return (
              <div
                key={index}
                className="category"
                onMouseEnter={() => handleCategoryHover(category.cat_id)}
              >
                <div className="categoriesList">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <NavLink
                      to={`/categories/${category.cat_id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <li>{category.name}</li>
                    </NavLink>
                    {hasSubCategories && <ArrowForwardIosIcon />}
                  </div>
                </div>
                <div className="line"></div>

                {/* onHover part "true" && "id which has >0 subcategories"   */}
                {hasSubCategories &&
                  hoverWithId === category.cat_id &&
                  popUp && (
                    <div
                      className="pop-up-div"
                      onMouseLeave={() => setPopUp(false)}
                    >
                      {/* filtering sub-sub-categories */}
                      {filteredSubCategories.map((subCategory, index) => {
                        const filteredSubSubCategories =
                          subSubCategoryData.filter(
                            (subSubCategory) =>
                              subSubCategory.cat_id === subCategory.cat_id &&
                              subSubCategory.subcat_id === subCategory.subcat_id
                          );

                        return (
                          <div style={{ width: "100%" }} key={index}>
                            <NavLink
                              to={`/sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}`}
                            >
                              <h5>{subCategory.name}</h5>
                            </NavLink>
                            {/* sub-sub-categories display here */}
                            {filteredSubSubCategories.map(
                              (subSubCategory, index) => {
                                return (
                                  <div
                                    key={index}
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <NavLink
                                      to={`/sub_sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}/${subSubCategory.sub_subcat_id}`}
                                      style={{ color: "black" }}
                                    >
                                      <h5> {subSubCategory.name}</h5>
                                    </NavLink>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })}

          <div className="category" onClick={show7th}>
            {isShow7th ? <div>Close Categories</div> : <div>More category</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
