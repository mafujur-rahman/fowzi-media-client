import React from "react";
import { Metadata } from "next";
import PortfolioDevelopmentMain from "@/pages/portfolio/details/portfolio-development-main";


export const metadata: Metadata = {
  title: "Fowzi Media - Portfolio Development page",
};

const PortfolioDevelopmentPage = () => {
  return (
    <PortfolioDevelopmentMain />
  );
};

export default PortfolioDevelopmentPage;
