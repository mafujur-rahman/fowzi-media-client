import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/services/Asset5.webp";
import ser_img_2 from "@/assets/img/services/Asset6.webp";
import ser_img_3 from "@/assets/img/services/Asset7.webp";
import ser_img_4 from "@/assets/img/services/Asset9.webp";

import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";


const service_data = [
  {
    id: 1,
    img: ser_img_1,
    link: "/request-a-quote",
    subtitle: "Discovery & Planning",
    title: "Consultation and Planning",
    text: "We begin with a conversation to understand what you're looking for. We discuss your brand, goals, locations, timing, and the type of shots you need. Whether you're preparing for a product shoot, event, or portraits, we’ll create a custom plan that fits your needs.",
    lists: [
      {
        subtitles: [
          "Goal and concept discussion",
          "Shot list planning",
          "Timeline and location setup",
          "Visual reference review (optional)",
        ],
      },
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    link: "/request-a-quote",
    subtitle: "Scriptwriting & Storyboarding",
    title: " Pre-Shoot Coordination",
    text: "We handle all the details ahead of time so you feel prepared. This includes confirming locations, selecting backgrounds or props, and walking you through what to expect during the shoot.",
    lists: [
      {
        subtitles: [
          "Location scouting or coordination",
          "Creative direction",
          "Moodboard or sample style guidance",
          "Wardrobe or brand styling tips (if needed)",
        ],
      },
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    link: "/request-a-quote",
    subtitle: "Filming",
    title: "The Photo Shoot",
    text: "On the day of the shoot, we create a comfortable and professional environment to capture your best moments. We adjust for lighting, angles, and context to make sure every shot serves your purpose.",
    lists: [
      {
        subtitles: [
          "Professional equipment setup",
          "Direction and posing support",
          "Multiple framing and setting options",
          "Option for candid, styled, or documentary-style shots",
        ],
      },
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    link: "/request-a-quote",
    subtitle: "Editing & Post-Production",
    title: "Editing and Post-Production",
    text: "Once the shoot is complete, we carefully select and professionally edit your photos. Our editing process brings out the best in your images without losing authenticity.",
    lists: [
      {
        subtitles: [
          "Color correction and light retouching",
          "Cropping and composition polishing",
          "Branding consistency and styling",
          "Format adjustments based on usage (web, print, social)",
        ],
      },
    ],
  },
  

];

export default function VideographyService() {

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
                      
                      <h2 className="sv-service-title">{item.title}</h2>
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
                            <div key={i} className="">
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
                      </div>
                      <div className="sv-service-btn mt-4">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={item.link}
                        >
                          <span className="zikzak-content" style={{
                            fontFamily: 'Glacial Indifference',
                            fontWeight: 'bold'
                          }}>
                            Request <br /> a Quote
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
