"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/branding-spon-img/tChair.png";
import b_2 from "@/assets/img/branding-spon-img/tONe.png";
import b_3 from "@/assets/img/branding-spon-img/tRisingImpact.png";
import b_4 from "@/assets/img/branding-spon-img/trustedLogoFour.png";
import b_5 from "@/assets/img/branding-spon-img/trustedLogoSeven.png";
import b_6 from "@/assets/img/branding-spon-img/trustedLogoThree.png";



const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_1, b_2, b_3, b_4, b_5, b_6, ];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee speed={100} loop={0} className="brand-wrapper">
  {brand_images.map((b, i) => (
    <div 
      key={i} 
      className="tp-brand-item"
      style={{ 
        height: "60px", 
        width: "auto", 
        margin: "0 20px", // Add spacing between images
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image 
        src={b} 
        alt="" 
        width={100} 
        height={60} 
        style={{ 
          filter: "invert(1) brightness(0) grayscale(1)", // Convert white to black-gray
        }} 
      />
    </div>
  ))}
</Marquee>



      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
