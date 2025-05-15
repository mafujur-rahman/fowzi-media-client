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
import InfinityCareShowcaseArea from "@/components/portfolio/details/infinity-care-showcase-area";
import HuddaShowcaseArea from "@/components/portfolio/details/hudda-showcase-area";
import ChildSafetyShowcaseArea from "@/components/portfolio/details/child-safety-showcase-area";
import PSAShowcaseArea from "@/components/portfolio/details/psa-showcase-area";


const PSAShowcaseMain = () => {

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
            <PSAShowcaseArea/>
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

export default PSAShowcaseMain;
