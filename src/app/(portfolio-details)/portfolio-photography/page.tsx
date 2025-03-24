import React from "react";
import { Metadata } from "next";
import PortfolioPhotographyMain from "@/pages/portfolio/details/portfolio-photography-main";


export const metadata: Metadata = {
  title: "Fowzi Media - Portfolio Photography page",
};

const PortfolioPhotographyPage = () => {
  return (
    <PortfolioPhotographyMain />
  );
};

export default PortfolioPhotographyPage;
