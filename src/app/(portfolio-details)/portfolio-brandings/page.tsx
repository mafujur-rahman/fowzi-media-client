import React from "react";
import { Metadata } from "next";
import PortfolioBrandingsMain from "@/pages/portfolio/details/portfolio-brandings-main";


export const metadata: Metadata = {
  title: "Fowzi Media - Portfolio Brandings page",
};

const PortfolioBrandingsPage = () => {
  return (
    <PortfolioBrandingsMain/>
  );
};

export default PortfolioBrandingsPage;
