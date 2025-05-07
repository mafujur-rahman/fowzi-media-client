import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/all-services/videography.jpg";


export default function VideographyDetailsHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Elevate Your Brand with Our Expert Videography Services
              </h4>
              <p className="tp_fade_bottom">
              Your brand deserves more than just videos—it needs to captivate. At Fowzi Media, we don’t just create videos; we craft engaging visual stories that capture your brand’s essence, connect with your audience, and drive impactful results.
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
