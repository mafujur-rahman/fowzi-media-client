import React from 'react';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import details_thumb_1 from '@/assets/img/home-12/portfolio/friday fashion/branding-2.png';
import details_thumb_2 from '@/assets/img/home-12/portfolio/friday fashion/branding-3.png';
import details_thumb_3 from '@/assets/img/home-12/portfolio/friday fashion/branding-4.png';

export default function FridayFashionPortfolioShowcaseArea() {
  const scrollTo = () => {
    scroller.scrollTo('xyz', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <>
      {/* details area */}
      <div className="tp-showcase-details-area">
        <div
          className="tp-showcase-details-bg d-flex align-items-center justify-content-center include-bg p-relative"
          style={{
            backgroundImage: "url(/assets/img/home-12/portfolio/friday%20fashion/branding-1.png)",
            position: "relative",
          }}
        >
          {/* Black overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              zIndex: 1,
            }}
          ></div>

          {/* Content */}
          <div className="tp-showcase-details-scroll smooth" style={{ zIndex: 2 }}>
            <a onClick={scrollTo} className="pointer" style={{ fontFamily: "Glacial Indifference" }}>
              <i className="fa-sharp fa-light fa-angle-down"></i>
              Scroll or drag to navigate
            </a>
          </div>

          <div className="port-showcase-slider-social tp-hover-btn-wrapper" style={{ fontFamily: "Glacial Indifference", zIndex: 2 }}>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">Fb</a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">In</a>
            <a className="tp-hover-btn-item tp-hover-btn" href="#">Be</a>
          </div>

          <div className="container" style={{ zIndex: 2 }}>
            <div className="row">
              <div className="col-12">
                <div className="tp-showcase-details-content text-center">
                  <span className="port-showcase-slider-subtitle tp_title_anim text-white" style={{ fontFamily: "Glacial Indifference" }}>
                    [ Branding ]
                  </span>
                  <h4 className="port-showcase-slider-title tp-char-animation text-white">
                    Friday Fashion
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details area */}

      {/* details overview */}
      <div id="xyz" className="showcase-details-overview pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle" style={{ fontFamily: 'Glacial Indifference' }}>Overview</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right">
                <p className="tp_title_anim" style={{ fontFamily: 'Glacial Indifference' }}>Eagle Films is an active player on the entertainment scene as a major Hollywood movies distributor and co-producer. They reach out to me to not only redesign their website but also to change the look and feel of their brand.</p>
                <div className="showcase-details-overview-info">
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Client</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Fowzi Media</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Services</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Brandings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Location</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="showcase-details-overview-info-item tp_fade_bottom">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="showcase-details-overview-info-left">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>Release Date</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="showcase-details-overview-info-right">
                          <span style={{ fontFamily: 'Glacial Indifference' }}>October {"'2024"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}

      {/* details thumb */}
      <div className="showcase-details-thumb-wrap pb-40">
        <div className="container container-1430">
          <div className="row gx-80">
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-thumb mb-80">
                <Image data-speed=".8" src={details_thumb_1} alt="details-thumb" style={{ height: "auto" }} />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="showcase-details-thumb mb-80">
                <Image data-speed=".8" src={details_thumb_2} alt="details-thumb" style={{ height: "auto" }} />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="showcase-details-thumb mb-80">
                <Image data-speed=".8" src={details_thumb_3} alt="details-thumb" style={{ height: "auto" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details thumb */}

      {/* details overview */}
      <div className="showcase-details-overview pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="showcase-details-overview-left">
                <span className="showcase-details-subtitle fs-40 tp-char-animation" style={{ fontFamily: 'Glacial Indifference' }}>The challenge</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="showcase-details-overview-right tp_title_anim" style={{ fontFamily: 'Glacial Indifference' }}>
                <p style={{ fontFamily: 'Glacial Indifference' }}>Blue Marine Foundation challenged us to create a digital experience that successfully educates people on the importance of our oceans and the solutions we can implement to mitigate climate change. The health of the ocean affects us all and for that reason, the site needed to connect with as many people as possible, from students to policymakers. The journey begins with an introduction to ocean preservation, in the form of a meditative breathing exercise. This aims to reduce tension and in-turn improve concentration and memory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* details overview */}
    </>
  )
}
