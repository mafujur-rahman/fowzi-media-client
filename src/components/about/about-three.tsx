import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/fowzi-logo/icon 2.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert" style={{ fontFamily: 'Glacial Indifference' }}>
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom pb-15">
                About Fowzi Media{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "200px", width: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mb-45 tp_fade_bottom" style={{ fontFamily: 'Glacial Indifference' }}>
              Fowzi Media is a full-service creative agency based in Minneapolis, Minnesota. We specialize in branding, web design, video production, photography, and strategic marketing that connects with real people. As a proud minority and immigrant-owned business, our work is shaped by culture, experience, and a deep understanding of the communities we serve. 
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us" style={{ fontFamily: 'Glacial Indifference' }}>
                About Us
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
