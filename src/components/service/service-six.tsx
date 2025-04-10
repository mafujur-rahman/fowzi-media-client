import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/services/friday.jpg";
import ser_img_2 from "@/assets/img/services/web-left.jpg";
import ser_img_3 from "@/assets/img/services/up.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";


const service_data = [
  {
    id: 1,
    img: ser_img_1,
    link: "/contact",
    subtitle: "Branding Studio",
    title: "Essential Brand Starter",
    text: "💡 For startups & small businesses looking to establish their brand identity",
    lists: [
      {
        title: "Logo & Brand Identity",
        subtitles: [
          "Custom logo design (3 initial concepts, 2 rounds of revisions)",
          "Brand color palette selection",
          "Typography (font pairings for digital & print use)",
          "Basic brand guidelines (how to use your brand consistently)",
        ],
      },
      {
        title: "Website (3 Pages)",
        subtitles: [
          "Home Page – Showcases your brand’s key message & services",
          "About Page – Highlights your story, mission, and values",
          "Contact Page – Includes a contact form, map, and business details",
          "Mobile-responsive design",
          "Basic SEO optimization for visibility",
        ],
      },
      {
        title: "Photography (5 Professional Photos)",
        subtitles: [
          "Product or team photography (on-site or studio)",
          "High-resolution, edited images for website & social media",
        ],
      },
    ],
    timeline: "🕒 Timeline: 3-4 Weeks",
  },
  {
    id: 2,
    img: ser_img_2,
    link: "/contact",
    subtitle: "Growth Media",
    title: "Growth Media Package",
    text: "📈 For businesses ready to expand their digital presence with engaging visuals",
    lists: [
      {
        title: "Full Brand Identity & Guidelines",
        subtitles: [
          "Everything from the Essential Package",
          "Additional branding elements (business card design, social media templates)",
        ],
      },
      {
        title: "Website (5 Pages)",
        subtitles: [
          "Home, About, Contact + 2 Additional Pages (e.g., Services, Portfolio, Blog)",
          "SEO optimization (meta descriptions, keyword setup, speed optimization)",
          "Integration with social media & Google Analytics",
          "Mobile & tablet-friendly design",
        ],
      },
      {
        title: "Photography (15 Professional Photos)",
        subtitles: [
          "High-quality product, lifestyle, and team shots",
          "Includes post-editing for commercial use",
          "Suitable for website, social media, and marketing materials",
        ],
      },
      {
        title: "Video Production (1-Minute Promo Video)",
        subtitles: [
          "Professionally shot & edited promotional video",
          "Can be a company introduction, product showcase, or social media ad",
          "Includes script assistance, voiceover, and background music",
        ],
      },
    ],
    timeline: "🕒 Timeline: 5-6 Weeks",
  },
  {
    id: 3,
    img: ser_img_3,
    link: "/contact",
    subtitle: "Premium Branding",
    title: "Premium Visual Experience",
    text: "🚀 For established brands seeking high-end branding & media solutions",
    lists: [
      {
        title: "Advanced Brand Strategy & Positioning",
        subtitles: [
          "In-depth brand discovery session",
          "Market & competitor analysis",
          "Brand voice & messaging guide",
          "Comprehensive brand guidelines",
        ],
      },
      {
        title: "Website (8 Pages, Fully Custom Design)",
        subtitles: [
          "Includes everything from the Growth Media Package",
          "Additional features like eCommerce integration, booking system, blog, portfolio",
          "Advanced SEO setup (keyword research, Google My Business setup)",
          "Custom animations & interactive elements for a high-end look",
        ],
      },
      {
        title: "Photography (30+ Professional Photos)",
        subtitles: [
          "Full brand photoshoot (products, team, workspace, lifestyle shots)",
          "Edited high-resolution images for digital & print use",
        ],
      },
      {
        title: "Video Production (3 High-Quality Videos)",
        subtitles: [
          "Brand Story Video (2-3 minutes) – Tells your company’s journey & mission",
          "Testimonial or Case Study Video – Client/customer reviews in video format",
          "Social Media Ad (30 sec-1 min) – Designed for Instagram, Facebook, or YouTube",
        ],
      },
    ],
    timeline: "🕒 Timeline: 8-10 Weeks",
  },
];

export default function ServiceSix() {

  // padding bottom according to responsiveness
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 990);
    };

    handleResize(); // set on mount
    setIsMounted(true); // ensure client-side
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div
      className="sv-service-area project-panel-area-2"
      style={{ paddingBottom: isMounted ? (isMobile ? "0px" : "100px") : "100px" }}
    >
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb h-100">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className=" d-flex align-items-center h-100" style={{ backgroundColor: "#1E1E1E" }}>
                  <div className=" p-4 ">
                    <div className="sv-service-title-box mb-3">
                      <span className="sv-service-title" style={{ fontSize: "1rem" }}>
                        <i style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          {item.id < 9 ? "0" + item.id : item.id}
                        </i>
                        &mdash; {item.title}
                      </span>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text mb-4">
                        <p style={{
                          fontFamily: 'Glacial Indifference',
                          fontWeight: 'bold',
                          fontSize: '1rem'
                        }}>
                          {item.text}
                        </p>
                      </div>
                      <div className="sv-service-list">
                        <div className="row">
                          {item.lists.map((list, i) => (
                            <div key={i} className="col-md-6 mb-3">
                              <h3 style={{
                                fontFamily: 'Glacial Indifference',
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: '1.2rem',
                                marginBottom: '0.8rem'
                              }}>
                                {list.title}
                              </h3>
                              <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                {list.subtitles.map((subtitle, j) => (
                                  <li key={j} style={{
                                    fontFamily: 'Glacial Indifference',
                                    marginBottom: '0.4rem',
                                    position: 'relative',
                                    paddingLeft: '1.2rem',
                                    fontSize: '0.9rem'
                                  }}>
                                    <span style={{
                                      position: 'absolute',
                                      left: 0,
                                      color: 'gray'
                                    }}>•</span>
                                    {subtitle}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 " style={{
                          fontFamily: 'Glacial Indifference',
                          fontWeight: 'bold',
                          fontSize: '1rem',
                          color: 'white'
                        }}>
                          {item.timeline}
                        </div>
                      </div>
                      <div className="sv-service-btn mt-4">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/contact"
                        >
                          <span className="zikzak-content" style={{
                            fontFamily: 'Glacial Indifference',
                            fontWeight: 'bold'
                          }}>
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
