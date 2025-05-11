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
import port_d_1 from '@/assets/img/portfolio/fowzi image/the-final-SBD-1.jpg';
import port_d_2 from '@/assets/img/portfolio/fowzi image/the-final-SBD-2.jpg';
import port_d_3 from '@/assets/img/portfolio/fowzi image/the-final-SBD-3.jpg';
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const port_images = [
    { type: 'video', src: 'https://vimeo.com/1056626277?share=copy' },
    { type: 'image', src: port_d_1 },
    { type: 'image', src: port_d_2 },
    { type: 'image', src: port_d_3 },
  ];
  
  const SBDMainArea = () => {
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
                            {item.type === 'video' ? (
                              <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <iframe 
                                  src="https://player.vimeo.com/video/1056626277?autoplay=1&loop=1&title=0&byline=0&portrait=0" 
                                  style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%'
                                  }}
                                  frameBorder="0"
                                  allow="autoplay; fullscreen"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            ) : (
                              <a href="child-safety">
                                <Image src={item.src} alt={`Portfolio ${i}`} style={{ height: "auto", cursor: "pointer" }} />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="project-details-1-right-wrap">
                        <div className="project-details-1-right p-relative">
                          <div className="project-details-1-title-box">
                            <span className="project-details-1-subtitle" style={{fontFamily: 'Glacial Indifference'}}><i>03</i></span>
                            <h4 className="project-details-1-title">SBD Commercial</h4>
                            <p style={{fontFamily: 'Glacial Indifference'}}>We offer digital experience solutions tailored for startups and small businesses, helping them thrive through innovative brand identities and seamless digital experiences.</p>
                          </div>
                          <div className="project-details-1-info-wrap">
                            <div className="project-details-1-info">
                              <span style={{fontFamily: 'Glacial Indifference'}}>Services</span>
                              <h4 style={{fontFamily: 'Glacial Indifference'}}>Videography</h4>
                            </div>
                            <div className="project-details-1-info">
                              <span style={{fontFamily: 'Glacial Indifference'}}>Deliverables</span>
                              <h4 style={{fontFamily: 'Glacial Indifference'}}>Video</h4>
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
                          <a className="project-details-1-prev" href="/psa-main">
                            <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            <span style={{fontFamily: 'Glacial Indifference'}}>Prev</span>
                          </a>
                          <a href="#">
                            <span>
                              <Dots />
                            </span>
                          </a>
                          <a className="project-details-1-next" href="/child-safety-main">
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
  
  export default SBDMainArea;