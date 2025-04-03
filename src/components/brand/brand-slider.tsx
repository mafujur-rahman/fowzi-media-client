import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import b_1 from "@/assets/img/service-brand-logo/new/City_of_Minneapolis_logo,_2023.svg";
import b_2 from "@/assets/img/service-brand-logo/new/Town_of_St._Paul_logo.svg";
import b_3 from "@/assets/img/service-brand-logo/new/citizensleague-logo.svg";
import b_4 from "@/assets/img/service-brand-logo/new/logo-mdh-mn-v-blu_cmyk.svg";
import b_5 from "@/assets/img/service-brand-logo/new/tChair.png";
import b_6 from "@/assets/img/service-brand-logo/new/university-of-minnesota.svg";
import b_7 from "@/assets/img/service-brand-logo/new/wellshare.svg";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7];

export default function BrandSlider() {
  return (
    <div>
      <div className="container">
        <div className="row"></div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-20">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div key={i} className="ab-brand-item">
                      <Image
                        src={b}
                        alt="brand"
                        style={{
                          height: "80px",
                          width: "auto",
                          filter: "grayscale(100%) invert(80%)",
                        }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
