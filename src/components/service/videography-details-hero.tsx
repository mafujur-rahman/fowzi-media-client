import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/all-services/banner.png";


export default function VideographyDetailsHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Telling Stories That Move People
              </h4>
              <p className="tp_fade_bottom">
              At Fowzi Media, video is more than just visuals. Its a powerful tool for storytelling, connection, and action. Our Minneapolis-based video production team creates high-quality, authentic content that helps brands, nonprofits, and public campaigns speak directly to their audience.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{height:"auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
