import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import { DownArrow } from "../../svg";

// images
import port_sm_1 from "@/assets/img/portfolio/brandings/port-sm-1.jpg";
import port_sm_2 from "@/assets/img/portfolio/brandings/port-sm-2.png";
import port_sm_3 from "@/assets/img/portfolio/brandings/port-sm-3.png";
import port_sm_4 from "@/assets/img/portfolio/brandings/port-sm-4.png";
import port_sm_5 from "@/assets/img/portfolio/brandings/port-sm-5.png";
import { SlickNextArrow, SlickPrevArrow } from "../../slick-arrow";

// slider data
const slider_data = [
  {
    id: 1,
    bg: "/assets/img/portfolio/brandings/port-1.png",
    subtitle: "Digital Design",
    year: "2024",
    title: "Better <br> Hand",
    link: "/branding/better-hand"
  },
  {
    id: 2,
    bg: "/assets/img/portfolio/brandings/port-2.jpg",
    subtitle: "Digital Design",
    year: "2022",
    title: "Dheelliga <br> Hoggamineed",
    link: "/branding/dheelliga"
  },
  {
    id: 3,
    bg: "/assets/img/portfolio/brandings/port-3.png",
    subtitle: "Digital Design",
    year: "2021",
    title: "Friday <br> Fashion",
    link: "/branding/friday-fashion"
  },
  {
    id: 4,
    bg: "/assets/img/portfolio/brandings/port-4.png",
    subtitle: "Digital Design",
    year: "2021",
    title: "Optimal <br> Healthcare",
    link: "/branding/optimal"
  },
  {
    id: 5,
    bg: "/assets/img/portfolio/brandings/port-5.png",
    subtitle: "Digital Design",
    year: "2021",
    title: "Radiant <br> Future",
    link: "/branding/radiant-future"
  },
];
// slider thumbs
const slider_thumbs = [
  {
    id: 1,
    img: port_sm_1,
    subtitle: "Digital Design",
    year: "2022",
    title: "Dheelliga Hoggamineed",
    link: "/branding/dheelliga"
  },
  {
    id: 2,
    img: port_sm_2,
    subtitle: "Digital Design",
    year: "2021",
    title: "Friday Fashion",
    link: "/branding/friday-fashion"
  },
  {
    id: 3,
    img: port_sm_3,
    subtitle: "Digital Design",
    year: "2021",
    title: "Optimal Healthcare",
    link: "/branding/optimal"
  },
  {
    id: 4,
    img: port_sm_4,
    subtitle: "Digital Design",
    year: "2021",
    title: "Radiant Future",
    link: "/branding/radiant-future"
  },
  {
    id: 5,
    img: port_sm_5,
    subtitle: "Digital Design",
    year: "2024",
    title: "Better Hand",
    link: "/branding/better-hand"
  },
];

// slider setting one
const slider_setting_one = {
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 1000,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
};
// slider setting two
const slider_setting_two = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrow:false,
  focusOnSelect: true,
  centerPadding: "0",
  speed: 600,
  nextArrow: <SlickNextArrow />,
  prevArrow: <SlickPrevArrow />,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
  ],
};


export default function PortfolioBrandingsSlider() {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const [sliderIndex, setSliderIndex] = useState<number>(1);
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="tp-portfolio-11-area fix">
      <div className="tp-portfolio-11-slider-wrap p-relative">
        <Slider
          {...slider_setting_one}
          asNavFor={slider2 as Slider}
          ref={(slider) => {
            setSlider1(slider);
            sliderRef.current = slider;
          }}
          className="tp-portfolio-11-slider-active"
        >
          {slider_data.map((item) => (
            <div key={item.id}>
              <div
                className="tp-portfolio-11-slider-bg pt-170 pb-150 d-flex align-items-end"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <div className="tp-portfolio-11-slider-content">
                  <div className="tp-portfolio-11-slider-link" style={{color: "#111111"}}>
                    <Link href={item.link} >
                      <DownArrow />
                    </Link>
                  </div>
                  <span className="tp-portfolio-11-slider-subtitle" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold', color: "#111111" }}>
                    {item.year} <br /> {item.subtitle}
                  </span>
                  <h3 className="tp-portfolio-11-slider-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold', color: "#111111" }}>
                    <Link
                      href={item.link}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="dddd"></div>

        <div className="tp-portfolio-11-slider-nav-wrap z-index-5">
          <div
            className="slides-numbers d-none d-lg-flex d-flex align-items-center"
            style={{ display: "inline-block" }}
          >
            <div className="slider-line"></div>
            <span className="active">{sliderIndex < 9 ? `0${sliderIndex}` : sliderIndex}</span>
          </div>
          <Slider
            {...slider_setting_two}
            asNavFor={slider1 as Slider}
            ref={(slider) => setSlider2(slider)}
            afterChange={(index) => setSliderIndex(index + 1)}
            className="tp-portfolio-11-slider-nav-active d-none d-lg-block"
          >
            {slider_thumbs.map((item) => (
              <div
                key={item.id}
                className="tp-portfolio-11-slider-nav-item p-relative"
              >
                <div className="tp-portfolio-11-slider-nav-thumb">
                  <Image
                    src={item.img}
                    alt="thumb-img"
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-portfolio-11-slider-nav-content-wrap">
                  <div className="tp-portfolio-11-slider-nav-content d-flex flex-column justify-content-between">
                    <div className="tp-portfolio-11-slider-nav-year">
                      <span style={{color: "#111111"}}>{item.year}</span>
                    </div>
                    <div className="tp-portfolio-11-slider-nav-tittle-box" >
                      <span className="tp-portfolio-11-slider-nav-subtittle" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold', color: "#111111" }}>
                        {item.subtitle}
                      </span>
                      <h4 className="tp-portfolio-11-slider-nav-tittle" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold', color: "#111111" }}>
                        <Link href={item.link}>{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
