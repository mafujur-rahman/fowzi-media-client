"use client";
import React, { useEffect } from "react";
// internal imports
import ThemeSetting from "@/components/theme-setting";
import PortfolioBrandingsSlider from "@/components/portfolio/slider/portfolio-brandings-slider";

const AllBrandingsMain = () => {
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  return (
    <div>

      <main>
        {/* portfolio slider start */}
        <PortfolioBrandingsSlider />
        {/* portfolio slider end */}
      </main>

      {/* theme switcher */}
      <ThemeSetting />
      {/* theme switcher */}
    </div>
  );
};

export default AllBrandingsMain;
