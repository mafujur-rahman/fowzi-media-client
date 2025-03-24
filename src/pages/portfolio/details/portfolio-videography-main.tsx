"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import Social from "@/components/social/social";
import { Dots, Share } from "@/components/svg";
import { projectDetailsPin } from "@/utils/project-anim";

// animation
import {charAnimation,titleAnimation} from "@/utils/title-animation";


// images
import port_d_1 from '@/assets/img/inner-project/portfolio-details/videography/vid-d-1.png';
import port_d_2 from '@/assets/img/inner-project/portfolio-details/videography/vid-d-2.png';
import port_d_3 from '@/assets/img/inner-project/portfolio-details/videography/vid-d-3.png';
import port_d_4 from '@/assets/img/inner-project/portfolio-details/videography/vid-d-4.png';
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const port_images = [
    { src: port_d_1, link: "https://vimeo.com/946386055" },
    { src: port_d_2, link: "https://vimeo.com/839538345" },
    { src: port_d_3, link: "https://vimeo.com/930976952" },
    { src: port_d_4, link: "https://vimeo.com/943716954" },
  ];
  
  const PortfolioVideographyMain = () => {
    const [showSocial, setShowSocial] = React.useState(false);
    useScrollSmooth();
  
    useGSAP(() => {
      const timer = setTimeout(() => {
        charAnimation();
        titleAnimation();
        projectDetailsPin();
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
              <div className="project-details-1-area project-details-1-pt">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-xl-7">
                      <div className="project-details-1-left">
                        {port_images.map((item, i) => (
                          <div key={i} className="project-details-1-thumb mb-10">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              <Image src={item.src} alt={`Portfolio ${i + 1}`} style={{ height: "auto", cursor: "pointer" }} />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="project-details-1-right-wrap">
                        <div className="project-details-1-right p-relative">
                          <div className="project-details-1-title-box">
                            <span className="project-details-1-subtitle" style={{fontFamily: 'Glacial Indifference'}}><i>03</i>Video Studio</span>
                            <h4 className="project-details-1-title">Videography</h4>
                            <p style={{fontFamily: 'Glacial Indifference'}}>We provide high-quality videography services for startups and small businesses, helping them stand out with compelling visual storytelling and engaging digital content.</p>
                          </div>
                          <div className="project-details-1-info-wrap">
                            <div className="project-details-1-info">
                              <span style={{fontFamily: 'Glacial Indifference'}}>Services</span>
                              <h4 style={{fontFamily: 'Glacial Indifference'}}>Video Production & Editing</h4>
                            </div>
                            <div className="project-details-1-info">
                              <span style={{fontFamily: 'Glacial Indifference'}}>Deliverables</span>
                              <h4 style={{fontFamily: 'Glacial Indifference'}}>Cinematic Editing & Visual Effects</h4>
                            </div>
                          </div>
                          <div className="project-details-1-social">
                            {showSocial && <div className="project-details-1-social-inner">
                              <Social />
                            </div>}
                            <div className="project-details-1-social-main">
                              <a className="share-icon pointer" onClick={() => setShowSocial(!showSocial)}>
                                <span>
                                  <Share />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                          <a className="project-details-1-prev" href="portfolio-development">
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            <span style={{fontFamily: 'Glacial Indifference'}}>Prev</span>
                          </a>
                          <a href="/portfolio">
                            <span>
                              <Dots />
                            </span>
                          </a>
                          <a className="project-details-1-next" href="/portfolio-photography">
                            <span style={{fontFamily: 'Glacial Indifference'}}>Next</span>
                            <i className="fa-sharp fa-regular fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  
  export default PortfolioVideographyMain;