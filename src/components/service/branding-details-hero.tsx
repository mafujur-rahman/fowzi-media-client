import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/all-services/branding.jpg";


export default function BrandingDetailsHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Elevate Your Brand with Our Creative Solutions
              </h4>
              <p className="tp_fade_bottom">
              Your brand deserves more than just visuals—it needs impact. At Fowzi Media, we don’t just create; we craft experiences that tell your story, captivate your audience, and drive results.
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
