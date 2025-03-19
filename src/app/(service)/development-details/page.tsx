import React from "react";
import { Metadata } from "next";
import DevelopmentDetailsMain from "@/pages/service/development-details";


export const metadata: Metadata = {
  title: "Liko - Service Details page",
};

const DevelopmentDetailsPage = () => {
  return (
    <DevelopmentDetailsMain/>
  );
};

export default DevelopmentDetailsPage;