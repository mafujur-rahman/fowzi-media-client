import React from "react";
import { Metadata } from "next";
import BrandingDetailsMain from "@/pages/service/branding-details";

export const metadata: Metadata = {
  title: "Liko - Service Details page",
};

const BrandingDetailsPage = () => {
  return (
    <BrandingDetailsMain />
  );
};

export default BrandingDetailsPage;
