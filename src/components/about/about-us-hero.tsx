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
        backgroundSize: "cover", // Maintain aspect ratio
        width: "100%",
        minHeight: "80vh", // Make it responsive
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5% 2%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 col-md-12">
          <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
              style={{ paddingTop: "75px" }}
            >
              <span className="ab-inner-hero-subtitle" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                Visionary <br /> digital studio
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Design. Brands. Stories.
              </h1>
              <p style={{ fontFamily: 'Glacial Indifference' }}>Digital experiences with maximum emotional impact</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8 col-md-10">
            <div className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08">
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: "1.5" }}>
                We are Fowzi Media, a Minneapolis-based creative agency using design, video, branding, and digital strategy to help businesses and organizations connect with real people. Our work is driven by culture, shaped by purpose, and built on trust.
              </p>
              <a className="tp-btn-white-sm border-style " href="#" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }} onClick={scrollTo}>Explore Our Story</a>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="ab-inner-hero-scroll smooth">
          <a className="pointer" onClick={scrollTo}>
            <span style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
              Scroll to explore
              <ScrollDown />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
