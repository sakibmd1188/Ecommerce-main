import React, { useEffect, useState } from "react";
import BannerSlide from "./banner/BannerSlide";
import Wrapper from "../home/wrapper/wrapper_Home/Wrapper";

const AHome = () => {


  return (
    <div className="main">
     
      <div>
        <BannerSlide />
      </div>
      <div>
        <Wrapper />
      </div>
    </div>
  );
};

export default AHome;
