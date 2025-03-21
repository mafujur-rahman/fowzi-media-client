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
              <h4 className="tp-hero-3-title tp_reveal_anim" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                <span className="tp-reveal-line">{"Elevating"} brands </span>
                <span className="tp-reveal-line">with digital solutions</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim" style={{ fontFamily: 'Glacial Indifference' }}>
                ux/ui design / motion design / branding / development
              </span>
              <Link className="tp-btn-black-2" href="/contact" style={{ fontFamily: 'Glacial Indifference' }}>
              Let&apos;s Work Together{" "}
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
