import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import FetchAxiosData from "../../../Axios/FetchAxiosData";
import { NavLink } from "react-router-dom";

const Categories2 = () => {
  const categoriesData = FetchAxiosData("http://localhost:4000/categories");

  return (
    <div className="cat22">
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ListIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CATEGORY2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {categoriesData.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <NavLink to={`/categories/${item.cat_id}`}>
                      <h5 style={{ color: "white" }}>{item.name}</h5>
                    </NavLink>
                  </div>
                  <div className="line" style={{ color: "red" }}>
                    <div></div>
                  </div>
                  <br />
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Categories2;
