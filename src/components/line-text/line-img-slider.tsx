import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const works = [
  { name: "Better Hand", link: "/branding/better-hand", img: "/assets/img/branding/betterhand community/branding mockup/logo mockup/logo.png" },
  { name: "Radiant Future", link: "/branding/radiant-future", img: "/assets/img/branding/radiant future/branding mockup/logo mockup/logo.png" },
  { name: "Friday Fashion", link: "/branding/friday-fashion", img: "/assets/img/branding/friday fashion/branding/logo mokcup/logo mockup.png" },
  { name: "Optimal Home HealthCare", link: "/branding/optimal", img: "/assets/img/branding/optimal/branding mockup/business card mockup/business card@2x.png" },
];

export default function LineImgSlider() {
  return (
    <div className="container py-5">
      <h3  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Our Works:</h3>
      <div className="swiper tp-img-slide">
        <Marquee speed={30} className="overflow-hidden">
          {/* Duplicate images to remove gap */}
          {[...works, ...works].map((work, index) => (
            <div key={index} className="position-relative mx-3">
              <Link href={work.link} className="d-block">
                <div className="position-relative" style={{ width: "200px", height: "320px", cursor: "pointer" }}>
                  {/* Image */}
                  <Image
                    src={work.img}
                    alt={work.name}
                    layout="fill"
                    objectFit="contain"

                  />
                  {/* Hover Effect: Show name when hovering */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 text-white d-flex align-items-center justify-content-center opacity-0 hover-opacity-100 transition-all">
                    <p className="mb-0 text-center fw-bold">{work.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
