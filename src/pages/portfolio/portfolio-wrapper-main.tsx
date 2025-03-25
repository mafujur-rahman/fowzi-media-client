"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ProjectFour from "@/components/project/project-four";
import BigText from "@/components/big-text";

// animation
import { charAnimation,titleAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const PortfolioWrapperMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectThreeAnimation();
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
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">Fowzi Media Studio</span>
                      <h4 className="tm-hero-title tp-char-animation">
                        Our latest & great projects
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                      We’re a dynamic team passionate about crafting impactful brand identities, stunning websites, and compelling visual stories. With a keen eye for detail, a love for creativity, and a drive to make a lasting impression, we bring brands to life—one design, strategy, and story at a time. Oh, and we never say no to a good Friday night unwind!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectFour style_2={true}/>
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioWrapperMain;
