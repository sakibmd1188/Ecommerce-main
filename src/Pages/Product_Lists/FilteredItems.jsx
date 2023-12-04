import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useParams } from "react-router";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FetchAxiosData from "../../Axios/FetchAxiosData";

const FilteredItems = ({ aa, filterProducts, active }) => {
  const { cat_id, subcat_id, sub_subcat_id } = useParams();
  console.log(subcat_id);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([null, null]);
  const [subSubCatData, setSubSubCatData] = useState([]);

  const products = filterProducts;
  const uniqueCategories = Array.from(
    new Set(products.map((item) => item.subcat_name))
  );
  console.log(new Set(products.map((item) => item.subcat_name)));
  const uniqueBrands = Array.from(new Set(products.map((item) => item.brand)));
  const priceRangeOptions = [
    { label: "$100.00 - $200.00", range: [100, 200] },
    { label: "$200.00 - $310.00", range: [200, 300] },
    { label: "$300.00 - $400.00", range: [300, 400] },
    { label: "$400.00 - $4000.00", range: [400, 4000] },
  ];
  const data = FetchAxiosData("http://localhost:4000/sub_sub_categories");
  const data1 = data.filter((item) => item.subcat_id === parseInt(subcat_id));
  console.log(data1);

  // filtering of products on cate,brand,price--
  const filteredItems = products.filter((item) => {
    const categoryFilter =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.subcat_name) ||
      selectedCategories.includes(item.sub_subcat_id);

    const brandFilter =
      selectedBrand.length === 0 || selectedBrand.includes(item.brand);
    const priceFilter =
      (selectedPriceRange[0] === null || item.price >= selectedPriceRange[0]) &&
      (selectedPriceRange[1] === null || item.price <= selectedPriceRange[1]);

    return categoryFilter && brandFilter && priceFilter;
  });

  useEffect(() => {
    aa(filteredItems);
    active([...selectedCategories, ...selectedBrand]);
  }, [aa, filteredItems, selectedCategories, selectedBrand, active]);

  const handlePriceRangeChange = (event) => {
    // event.preventDefault();
    const selectedValue = event.target.value;
    // setSelectedPriceRange2(selectedValue);
    const [min, max] = selectedValue.split("-").map(Number);
    setSelectedPriceRange([min, max]);
  };
  const handleAllCat = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };
  return (
    <div>
      {!sub_subcat_id && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>Categories</h3>
          {!subcat_id // Only render if subcat_id doesn't exist
            ? uniqueCategories.map((category, index) => (
                <label key={index}>
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleAllCat(category)}
                  />
                  {category}
                </label>
              ))
            : data.map((category, index) => (
                <label key={index}>
                  <Checkbox
                    checked={selectedCategories.includes(
                      category.sub_subcat_id
                    )}
                    onChange={() => handleAllCat(category.sub_subcat_id)}
                  />
                  {category.name}
                </label>
              ))}
        </div>
      )}

      {/* Brand Filter */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Brands</h3>
        {uniqueBrands.map((brand, index) => (
          <label key={index}>
            <Checkbox
              checked={selectedBrand.includes(brand)}
              onChange={() =>
                setSelectedBrand((prevBrands) => {
                  if (prevBrands.includes(brand)) {
                    return prevBrands.filter((b) => b !== brand);
                  } else {
                    return [...prevBrands, brand];
                  }
                })
              }
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <Box display="flex" flexDirection="column">
        <h3>Price Range</h3>
        <RadioGroup
          // value={`${selectedPriceRange[0]}-${selectedPriceRange[1]}`}
          onChange={handlePriceRangeChange}
        >
          {priceRangeOptions.map((option, index) => (
            <FormControlLabel
              key={index}
              value={`${option.range[0]}-${option.range[1]}`}
              control={<Radio sx={{ color: "#333" }} />}
              label={option.label}
              sx={{
                color: "#333",
                fontWeight: "bold",
                "& .MuiFormControlLabel-label": {
                  fontWeight: "bold",
                  fontSize: "15px",
                },
              }}
            />
          ))}
        </RadioGroup>
      </Box>
    </div>
  );
};

export default FilteredItems;
