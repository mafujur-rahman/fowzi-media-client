"use client";
import React, { useEffect } from "react";

// internal imports
import { cursorAnimation } from "@/plugins";
import ThemeSetting from "@/components/theme-setting";
import HeaderFour from "@/layouts/headers/header-four";
import BrandingPortfolioSlider from "@/components/portfolio/slider/branding-portfolio-slider";

const BrandingPortfolioMain = () => {
  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      document.querySelector(".tp-magic-cursor")
    ) {
      cursorAnimation();
    }
  }, []);


  return (
    <div>
      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <main>
        {/* portfolio slider start */}
        <BrandingPortfolioSlider />
        {/* portfolio slider end */}
      </main>

      {/* theme switcher */}
      <ThemeSetting/>
      {/* theme switcher */}
    </div>
  );
};

export default BrandingPortfolioMain;
