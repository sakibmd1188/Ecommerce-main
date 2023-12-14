// import React from "react";
// import SofasChair from "../../Product_Lists/ProductItems";
// import FetchAxiosData from "../../../Axios/FetchAxiosData";

// export const Products = () => {
//   const productsData = FetchAxiosData("http://localhost:4000/products");
//   return (
//     <div>
//       <SofasChair data={productsData} />
//     </div>
//   );
// };
// export const CategoriesData = () => {
//   const catData = FetchAxiosData("http://localhost:4000/categories");
//   return <div>{catData}</div>;
// };

// export const SubData = (cat_id) => {
//   const subCategoryData = FetchAxiosData("http://localhost:4000/sub_category");
//   const filteredSubCategories = subCategoryData.filter(
//     (subCategory) => subCategory.cat_id === cat_id
//   );
//   return <div>{filteredSubCategories}</div>;
// };
// export const SubSubData = (cat_id, subcat_id) => {
//   const subSubCategoryData = FetchAxiosData(
//     "http://localhost:4000/sub_category"
//   );
//   const filteredSubSubCategories = subSubCategoryData.filter(
//     (subSubCategory) =>
//       subSubCategory.cat_id === parseInt(cat_id) &&
//       subSubCategory.subcat_id === parseInt(subcat_id)
//   );
//   return <div>{filteredSubSubCategories}</div>;
// };
