"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";
import FridayFashionPortfolioShowcaseArea from "@/components/portfolio/details/friday-fashion-portfolio-showcase-area";
import BetterHandShowcaseArea from "@/components/portfolio/details/better-hand-showcase-area";
import RadiantShowcaseArea from "@/components/portfolio/details/radiant-showcase-details-area";
import DaisaneShowcaseArea from "@/components/portfolio/details/daisane-showcase-area";
import SBDShowcaseArea from "@/components/portfolio/details/sbd-showcase-details-area";
import JannahShowcaseArea from "@/components/portfolio/details/jannah-showcase-details-area";


const JannahShowcaseMain = () => {

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <JannahShowcaseArea/>
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default JannahShowcaseMain;
