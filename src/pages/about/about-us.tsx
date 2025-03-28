"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import TeamOne from "@/components/team/team-one";
import FunFactOne from "@/components/fun-fact/fun-fact-one";

// animation
import { charAnimation, fadeAnimation, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import FooterFour from "@/layouts/footers/footer-four";
import HeaderFour from "@/layouts/headers/header-four";
import BrandFive from "@/components/brand/brand-five";
import Testimonial from "@/components/testimonial/testimonial";
import AboutCall2Action from "@/components/call-to-action/call-to-action";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      fadeAnimation();
      hoverBtn();
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
          <main >
            {/* about hero */}
            <AboutUsHero />
            {/* about hero */}

            {/* about area */}
            <AboutUsArea />
            {/* about area */}

            {/* team area */}
            <TeamOne spacing="" />
            {/* team area */}

            {/* fun fact area */}
            <FunFactOne />
            {/* fun fact area */}

            {/* brand area */}
            <BrandFive />
            {/* brand area */}

            {/* award area */}
            <Testimonial />
            {/* award area */}

            {/* call to action */}
            <AboutCall2Action />
            {/* call to action */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
