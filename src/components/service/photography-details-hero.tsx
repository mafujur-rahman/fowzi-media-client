import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/all-services/photography.jpg";


export default function PhotographyDetailsHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Capture Your Brand’s Essence with Our Expert Photography Services
              </h4>
              <p className="tp_fade_bottom">
              Your brand deserves more than just photos—it needs to inspire. At Fowzi Media, we don’t just take pictures; we craft stunning visual stories that capture your brand’s essence, connect with your audience, and deliver lasting impressions.
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
