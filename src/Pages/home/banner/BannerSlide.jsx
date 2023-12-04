import React from "react";
import slide1 from "../../../Assets/slide1.jpg";
import slide2 from "../../../Assets/slide2.jpg";
import box3_1 from "../../../Assets/box3_1.jpg";
import box3_2 from "../../../Assets/box3_2.jpg";

import "./BannerSlide.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Categories from "./Categories";
import Categories2 from "./Categories2";

const BannerSlide = () => {
  return (
    <div className="banner_slide">
      <div className="container containerr ">
        <div className=" white">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={3}>
                <div className="box1" style={{ width: "100%" }}>
                  <div className="ul_Lists">
                    <Categories />

                    <Categories2 />
                  </div>
                </div>
              </Grid>
              <Grid item sm={12} md={6}>
                <div className="box2">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="box2_over">
                          <span>
                            Create the Perfect Atmosphere
                            <br /> that impresses year round
                          </span>
                          <h2>
                            CAFE
                            <br /> LIGHTS
                          </h2>
                          <button>Shop now</button>
                        </div>
                        <img className="imgg" src={slide1} alt="First slide" />
                      </div>
                    {/* <div className="item">
                        <div className="box2_over">
                          <span>
                            A light For perfect colour
                            <br /> matching
                          </span>
                          <h2>
                            DESK
                            <br /> LAMP
                          </h2>
                          <button>Shop now</button>
                        </div>
                        <img
                          // className="d-block w-100"
                          className="imgg"
                          src={slide2}
                          alt="Second slide"
                        />
                      </div>  */}
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item sm={12} md={3} sx={{ width: "100%" }}>
                <div className="box3 container">
                  <img src={box3_1} alt="" />
                  <img src={box3_2} alt="" />
                </div>
              </Grid>
            </Grid>
          </Box>
          {/*
        
          */}
        </div>
        <Box sx={{ marginTop: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <div className="flex">
                <div style={{ fontSize: "25px", color: "lightgray" }}>
                  <i className="bi bi-rocket-takeoff"></i>
                </div>
                <div>
                  <b>Free Shipping </b>
                  <p>Free shipping on all US order</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="flex">
                <div style={{ fontSize: "25px", color: "lightgray" }}>
                  <i className="bi bi-telephone"></i>
                </div>
                <div>
                  <b>Support 24/7 </b>
                  <p>Contact us 24 hours a day</p>
                </div>

                <div></div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="flex">
                <div style={{ fontSize: "25px", color: "lightgray" }}>
                  <i className="bi bi-gift"></i>
                </div>
                <div>
                  <b>100% Money Back </b>
                  <p> You have 30 days to return</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="flex">
                <div style={{ fontSize: "25px", color: "lightgray" }}>
                  <i className="bi bi-arrow-counterclockwise"></i>
                </div>
                <div>
                  <b>Secure Payment </b>
                  <p>we ensure secure payment</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default BannerSlide;
