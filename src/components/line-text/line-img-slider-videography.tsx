import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const works = [
  { name: "View Project", link: "https://vimeo.com/931004763", img: "/assets/img/services/video-works/videoL1.png" },
  { name: "View Project", link: "https://vimeo.com/930976952", img: "/assets/img/services/video-works/videoL2.png" },
  { name: "View Project", link: "https://vimeo.com/946386055", img: "/assets/img/services/video-works/portVidThree.png" },
  { name: "View Project", link: "https://vimeo.com/839538345", img: "/assets/img/services/video-works/videoR1.png" },
];

export default function LineVideographyImgSlider() {
  return (
    <div className="container py-5">
      <h3 style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Our Works:</h3>
      <div className="swiper tp-img-slide">
        <Marquee speed={30} className="overflow-hidden">
          {[...works, ...works].map((work, index) => (
            <div key={index} className="position-relative mx-3">
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="d-block">
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
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
