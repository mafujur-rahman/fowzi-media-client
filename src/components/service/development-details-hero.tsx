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
              Websites Built to Perform
              </h4>
              <p className="tp_fade_bottom" style={{ fontFamily: 'Glacial Indifference' }}>
              At Fowzi Media, we build custom websites that are easy to use, visually clean, and made to support your goals. Whether youre a business owner, nonprofit leader, or campaign manager, your website should reflect who you are and speak clearly to the people you want to reach.
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
