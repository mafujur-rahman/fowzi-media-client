'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../../../src/components/svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{"Creativity"} </span>
                <span className="tp-reveal-line">With Purpose</span>
              </h4>
              <p className="tp_reveal_anim" style={{ color: "#1E1E1E", fontFamily: 'Glacial Indifference' }}>
                BRANDING / WEB DEVELOPMENT / VIDEOGRAPHY / PHOTOGRAPHY
              </p>
              <Link className="tp-btn-black-2" target="_blank" href="https://calendly.com/fowzimedia/free-consultation?month=2025-03" style={{fontFamily: 'Glacial Indifference'}}>
              Book free consultation today{" "}
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
