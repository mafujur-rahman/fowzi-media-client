import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/services/Asset1.webp";
import ser_img_2 from "@/assets/img/services/vid-s-3.jpg";
import ser_img_3 from "@/assets/img/services/vid-s-4.jpg";
import ser_img_4 from "@/assets/img/services/vid-s-5.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";


const service_data = [
  {
    id: 1,
    img: ser_img_1,
    link: "/request-a-quote",
    subtitle: "Pre-Production",
    title: "Plan with Intention",
    text: "Before we hit record, we plan everything. Pre-production is where your goals, audience, and story come into focus. We develop concepts, write scripts, and organize logistics to make sure the shoot runs smoothly and serves its purpose.",
    lists: [
      {
        subtitles: [
          "Creative direction and visual planning",
          "Scriptwriting and messaging",
          "Scheduling and location scouting",
          "Shot lists and storyboarding",
          "Talent or interview coordination",
        ],
      },
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    link: "/request-a-quote",
    subtitle: "Production",
    title: "Capture with Care",
    text: "This is where the camera rolls. Our team brings the plan to life with professional lighting, sound, and direction. We create a relaxed and focused environment so we can capture both scripted moments and natural interactions.",
    lists: [
      {
        subtitles: [
          "On-location or studio filming",
          "Direction and camera operation",
          "Audio and lighting setup",
          "Multiple takes and camera angles",
          "B-roll and supporting visuals",
        ],
      },
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    link: "/request-a-quote",
    subtitle: "Post-Production",
    title: "Shape the Final Story",
    text: "In the editing suite, we bring all the pieces together. This is where the story takes shape through careful selection, pacing, and polish. We add graphics, music, color correction, and subtitles to deliver a clean, compelling final video.",
    lists: [
      {
        subtitles: [
          "Video editing and transitions",
          "Color correction and audio mixing",
          "Branding and motion graphics",
          "Captioning or multilingual subtitles",
          "File formats for different platforms",
        ],
      },
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    link: "/request-a-quote",
    subtitle: "Marketing and Delivery",
    title: "Get It Seen in the Right Places",
    text: "A great video deserves to be seen. We help you prepare your content for web, social media, and campaigns so it reaches the right audience. From aspect ratios to thumbnail previews, we tailor everything for smooth delivery and strong performance.",
    lists: [
      {
        subtitles: [
          "Exported versions for social, web, and mobile",
          "Custom thumbnails and teaser clips",
          "Basic rollout strategy guidance",
          "Support for campaign timing and messaging",
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
                      <span className="sv-service-title" style={{ fontSize: "1rem" }}>
                        <i style={{ fontFamily: 'Glacial Indifference' }}>
                          {item.id < 9 ? "0" + item.id : item.id}
                        </i>
                        &mdash; {item.subtitle}
                      </span>
                      <h2 className="sv-service-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>{item.title}</h2>
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
