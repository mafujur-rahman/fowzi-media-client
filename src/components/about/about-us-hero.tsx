import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{
        backgroundImage: "url(/assets/img/about-us/hero/1.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "180vh",
      }}
    >



      <div className="breadcurmb-site d-none">
        <h6 style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>About Us</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle" >
                Visionary <br /> digital studio
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Crafting Iconic Digital Identities
              </h1>
              <p >Digital experiences with maximum emotional impact</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p >
                Fowzi Media seamlessly merges creativity
                with cutting-edge technology, crafting
                digital experiences that engage, inspire,
                and deliver results.
              </p>
              <a className="tp-btn-white-sm border-style" href="#" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Explore Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
