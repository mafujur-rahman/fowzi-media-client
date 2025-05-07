import React from "react";
import { Metadata } from "next";
import PhotographyDetailsMain from "@/pages/service/photograpy-details";


export const metadata: Metadata = {
  title: "Fowzi Media - Photography Service Details page",
};

const DevelopmentDetailsPage = () => {
  return (
    <PhotographyDetailsMain />
  );
};

export default DevelopmentDetailsPage;