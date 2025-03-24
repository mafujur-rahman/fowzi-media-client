import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/img/service-brand-logo/gray/1.png";
import b_2 from "@/assets/img/service-brand-logo/gray/2.png";
import b_3 from "@/assets/img/service-brand-logo/gray/3.png";
import b_4 from "@/assets/img/service-brand-logo/gray/4.png";
import b_5 from "@/assets/img/service-brand-logo/gray/5.png";
import b_6 from "@/assets/img/service-brand-logo/gray/6.png";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <Image src={b} alt="brand" style={{height: "80px", width: "auto"}}/>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content tp_title_anim">
              <p style={{ fontFamily: 'Glacial Indifference' }}>
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
              <span style={{ fontFamily: 'Glacial Indifference' }}>More about us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
