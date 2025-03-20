import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const works = [
  { name: "Somali Youth", link: "https://somaliyouthmind.com/", img: "/assets/img/development/somali youth mind/uiux/website mokcup 01.png" },
  { name: "Washington Toe Foundation", link: "https://washingtontoefoundation.com/", img: "/assets/img/development/the-washington-toe-foundation-/ui ux mockup/website mokcup.png" },
  { name: "Infinity Care Solutions", link: "https://infinitycaresolutionsllc.com/", img: "/assets/img/development/infinity care/uiux mockup/2-1.webp" },
  { name: "Abdi Daisane", link: "https://daisaneformn.com/", img: "/assets/img/development/DAISANE/uiux mockup/COVER-2.jpg" },
];

export default function LineWebImgSlider() {
  return (
    <div className="container py-5">
      <h3  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Our Works:</h3>
      <div className="swiper tp-img-slide">
        <Marquee speed={30} className="overflow-hidden">
          {/* Duplicate images to remove gap */}
          {[...works, ...works].map((work, index) => (
            <div key={index} className="position-relative mx-3">
              <Link href={work.link} className="d-block">
                <div className="position-relative" style={{ width: "250px", height: "420px", cursor: "pointer" }}>
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
