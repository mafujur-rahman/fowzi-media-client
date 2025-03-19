import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/services-details";

export const metadata: Metadata = {
  title: "Liko - Service Details page",
};

const ServiceDetailsPage = () => {
  return (
    <ServiceDetailsMain/>
  );
};

export default ServiceDetailsPage;
