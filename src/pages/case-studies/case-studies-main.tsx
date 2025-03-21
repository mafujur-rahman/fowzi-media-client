"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";

// animation
import { charAnimation } from "@/utils/title-animation";
import BigText from "@/components/big-text";
import CaseStudiesArea from "@/components/case-studies/case-studies-area";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const CaseStudiesMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour/>
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog modern area start */}
            <CaseStudiesArea/>
            {/* blog modern area end */}

            {/* big text area */}
            <BigText />
            {/* big text area */}
          </main>

          {/* footer area */}
          <FooterFour/>
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default CaseStudiesMain;
