import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FetchAxiosData from "../../Axios/FetchAxiosData";
import { NavLink } from "react-router-dom";

export default function ProductAccordian({ subData, categoryName }) {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [subsubDataState, setSubsubDataState] = useState([]);
  // console.log(subsubDataState);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };
  const subSubCategory = FetchAxiosData(
    "http://localhost:4000/sub_sub_categories"
  );
  // -------------------
  const getSubSubData = (id1, id2) => {
    const filteredSubSubCategories = subSubCategory.filter(
      (subSubCategory) =>
        subSubCategory.cat_id === parseInt(id1) &&
        subSubCategory.subcat_id === parseInt(id2)
    );
    setSubsubDataState(filteredSubSubCategories);
  };
  // -------------------
  return (
    <div>
      <h3>{categoryName}</h3>

      {subData.map((subCategory, index) => {
        const panelId = `panel-${subCategory.cat_id}-${subCategory.subcat_id}`;
        const isExpanded = expandedPanel === panelId;
        return (
          <div key={index}>
            <Accordion
              expanded={isExpanded}
              onChange={handleAccordionChange(panelId)}
              onClick={() =>
                getSubSubData(subCategory.cat_id, subCategory.subcat_id)
              }
            >
              <AccordionSummary
                expandIcon={isExpanded ? <RemoveIcon /> : <AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <a
                    href={`/sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}`}
                  >
                    <h4 style={{ color: "black" }}>{subCategory.name}</h4>
                  </a>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {subsubDataState.map((subsubVal, index) => {
                    return (
                      <div key={index}>
                        <NavLink
                          to={`/sub_sub_categories/${subCategory.cat_id}/${subCategory.subcat_id}/${subsubVal.sub_subcat_id}`}
                          // activeClassName="active"
                          style={{ color: "black" }}
                        >
                          {/* sub-sub-category here */}
                          <h5> {subsubVal.name}</h5>
                        </NavLink>
                      </div>
                    );
                  })}
                </Typography>
                {/* <div className="line"></div> */}
              </AccordionDetails>
            </Accordion>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
}
