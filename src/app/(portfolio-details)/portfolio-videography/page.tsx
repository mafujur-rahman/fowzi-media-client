import React from "react";
import { Metadata } from "next";
import PortfolioVideographyMain from "@/pages/portfolio/details/portfolio-videography-main";


export const metadata: Metadata = {
  title: "Fowzi Media - Portfolio Videography page",
};

const PortfolioVideographyPage = () => {
  return (
    <PortfolioVideographyMain />
  );
};

export default PortfolioVideographyPage;
