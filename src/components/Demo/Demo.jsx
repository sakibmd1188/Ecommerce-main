import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FetchAxiosData from "../../Axios/FetchAxiosData";

const Demo = () => {
  const [age, setAge] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  React.useEffect(() => {
    let url = "http://localhost:4000/products";
    if (age !== "") {
      url += `?cat_id=${age}`;
    }
    const urrll = FetchAxiosData(url);
    setProducts(urrll);
  }, [age]);

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((val,index) => {
          return (
            <div key={index}>
              <img
                src={val.img[0]}
                alt=""
                className="one_Image "
                style={{ margin: "10px" }}
              />
              <p>{val.type}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Demo;
