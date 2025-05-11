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
              Build a Brand That People Remember
              </h4>
              <p className="tp_fade_bottom">
              At Fowzi Media, branding is more than just logos and colors. It’s about creating a clear, consistent identity that reflects who you are, what you stand for, and why people should trust you. We help businesses, nonprofits, and campaigns across Minneapolis define their brand from the ground up—or refine what they already have.
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
