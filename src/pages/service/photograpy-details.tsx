"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";;
import ServiceSix from "@/components/service/service-six";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";

// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";
import PhotographyDetailsHero from "@/components/service/photography-details-hero";
import { PhotographyDetailsItems } from "@/components/service/photography-details-item";
import PhotographyService from "@/components/service/photography-service";

const PhotographyDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
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
            {/* service hero */}
            <PhotographyDetailsHero />
            {/* service hero */}

            {/* service area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-wrap">
                      <PhotographyDetailsItems />
                    </div>
                    <div className="tp-service-5-title-box pt-90 mb-40">
                      <span className="ab-inner-subtitle mb-20" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                        <Leaf />
                        Photography Process
                      </span>
                      <h4 className="tp-service-5-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                      From Planning to Delivery, Every Shot Has a Purpose{" "}
                      </h4>
                      <p className="pt-10" style={{ fontFamily: 'Glacial Indifference' }}>At Fowzi Media, photography is a collaborative process. We take the time to understand your goals, your audience, and your story.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* service area */}

            {/* service area */}
            <PhotographyService />
            {/* service area */}

            {/* big text */}
            <div className="custom-pt-lg">
              <BigText />
            </div>
            {/* big text */}

            {/* style for big text padding responsivness */}
            <style>
              {`
          .custom-pt-lg {
            padding-top: 0;
          }

          @media (min-width: 992px) {
            .custom-pt-lg {
              padding-top: 150px;
            }
          @media (min-width: 2400px) {
            .custom-pt-lg {
              padding-top: 220px;
            }
          }
        `}
            </style>

            
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PhotographyDetailsMain;
