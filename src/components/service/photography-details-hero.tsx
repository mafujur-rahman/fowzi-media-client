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
             Telling Stories Through Photos
              </h4>
              <p className="tp_fade_bottom">
              At Fowzi Media, photography is more than capturing a moment. It's about creating images that reflect your story, brand, and message with clarity and purpose. Whether you're a business owner, campaign organizer, nonprofit leader, or creative professional, our Minneapolis-based photography team delivers images that feel natural, polished, and on-brand.
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
