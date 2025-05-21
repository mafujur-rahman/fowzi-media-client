import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider4 } from "@/utils/parallax-slider";
import useScrollSmooth from "@/hooks/use-scroll-smooth";

const slider_data = [
  {
    id: 1,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Awad for Puntland",
    link: "/awad-showcase"
  },
  {
    id: 2,
    subtitle: "Branding + Website + Photography",
    title: "Hudda for St Cloud",
    link: "/hudda-showcase"
  },
  {
    id: 3,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Jannah Fitwear",
    link: "/jannah-fitwear-showcase"
  },
  {
    id: 4,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Awad for Puntland",
    link: "/awad-showcase"
  },
  {
    id: 5,
    subtitle: "Branding + Website + Photography",
    title: "Hudda for St Cloud",
    link: "/hudda-showcase"
  },
  {
    id: 6,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Jannah Fitwear",
    link: "/jannah-fitwear-showcase"
  },
  {
    id: 7,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Awad for Puntland",
    link: "/awad-showcase"
  },
  {
    id: 8,
    subtitle: "Branding + Website + Photography",
    title: "Hudda for St Cloud",
    link: "/hudda-showcase"
  },
  {
    id: 9,
    subtitle: "Branding + Website + Videography + Photography",
    title: "Jannah Fitwear",
    link: "/jannah-fitwear-showcase"
  },
];

export default function PortfolioSliderHomeTwelve() {
  useScrollSmooth();
    useEffect(() => {
      document.body.classList.add("tp-smooth-scroll");
      return () => {
        document.body.classList.remove("tp-smooth-scroll");
      };
    }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      parallaxSlider4();
    });
  }, []);


  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="parallax-slider-wrapper-p ">
          <div className="parallax-slider">
            <div className="parallax-slider-inner">
              {slider_data.map((item) => (
                <div
                  className="parallax-item not-hide-cursor"
                  data-cursor="View<br>Demo"
                  key={item.id}
                >
                  <Link className="cursor-hide" href={item.link}>
                    <div className="parallax-content">
                      <span style={{ fontFamily: 'Glacial Indifference' }}>{item.subtitle}</span>
                      <h4>{item.title}</h4>
                    </div>
                    <div className="parallax-img"></div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
