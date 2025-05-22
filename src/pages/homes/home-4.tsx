"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import PortfolioSliderHomeTwelve from "@/components/portfolio/slider/portfolio-slider-home-twelve";
import { cursorAnimation } from "@/plugins";

const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
      ScrollTrigger.refresh(true); // force refresh
    }, 300);
    return () => clearTimeout(timer);
  });


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
    <Wrapper>

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>

            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* brand area start */}
            <BrandThree />
            {/* brand area end */}

            <div>
              {/* project area start */}
              {/* magic cursor start */}
              <div id="magic-cursor">
                <div id="ball"></div>
              </div>
              {/* magic cursor end */}

              {/* portfolio slider start */}
              <PortfolioSliderHomeTwelve />
              {/* portfolio slider end */}
            </div>

            {/* project area end */}

            {/* video area start */}
            <VideoThree />
            {/* video area end */}

            {/* service area start */}
            <ServiceFour />
            {/* service area end */}

            {/* contact area start */}

            {/* contact area end */}

          </main>
          <div style={{ backgroundColor: "black", overflow: "hidden" }}>
            <ContactOne />
            <div style={{marginTop: "-2px",}}>
              <FooterFour />
            </div>
          </div>
          {/* footer area */}

          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeFourMain;
