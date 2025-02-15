import React from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import StockMarketTraining from "./blocks/StockMarketTraining";
import AboutUs from "./blocks/AboutUs";

const Layout = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <img className="h-24 w-24" src="/Group.png" alt="Group" />
        <span className="text-white tracking-[18px] text-[20px] mt-3">
          TRADE BOX
        </span>
        <span className="text-white tracking-[12px] text-[16px] mt-3">
          CAPITAL
        </span>
      </div>
      <Menu></Menu>
      <Carousel />
      <StockMarketTraining />
      <AboutUs />
    </div>
  );
};

export default Layout;
