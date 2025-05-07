import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/all-services/development.jpg";


export default function DevelopmentDetailsHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
              Transform Your Online Presence with Our Expert Web Development
              </h4>
              <p className="tp_fade_bottom">
              Your website deserves more than just functionality—it needs to engage. At Fowzi Media, we dont just build websites; we create immersive digital experiences that capture your brand’s essence, engage your audience, and deliver measurable results.
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
