import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/services/vid-s-1.jpg";
import ser_img_2 from "@/assets/img/services/vid-s-2.jpg";
import ser_img_3 from "@/assets/img/services/vid-s-3.jpg";
import ser_img_4 from "@/assets/img/services/vid-s-4.jpg";
import ser_img_5 from "@/assets/img/services/vid-s-5.jpg";
import ser_img_6 from "@/assets/img/services/vid-s-6.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";


const service_data = [
  {
    id: 1,
    img: ser_img_1,
    link: "/request-a-quote",
    subtitle: "Discovery & Planning",
    title: "Understanding Your Vision",
    text: "We start by learning about your goals, audience, and message. This step involves a planning meeting where we outline the type of video you need, key messaging points, and visual style. We also talk through timelines, budgets, and location logistics.",
    lists: [
      {
        subtitles: [
          "Initial consultation",
          "Goal alignment",
          "Creative direction and moodboarding",
          "Location planning and scheduling",
        ],
      },
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    link: "/request-a-quote",
    subtitle: "Scriptwriting & Storyboarding",
    title: "Crafting the Narrative",
    text: "If your video needs a script or structure, we help write and refine it. We also prepare a basic storyboard or shot list so you know what to expect before the cameras start rolling.",
    lists: [
      {
        subtitles: [
          "Script development",
          "Visual planning",
          "Approval before production begins",
        ],
      },
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    link: "/request-a-quote",
    subtitle: "Filming",
    title: "Capturing the Right Moments",
    text: "Our team handles all aspects of the shoot, including lighting, sound, and camera work. Whether on location in Minneapolis or in a studio setup, we create a relaxed environment to capture authentic content.",
    lists: [
      {
        subtitles: [
          "Professional videographers on site",
          "Multiple takes when needed",
          "High-quality audio and video capture",
          "B-roll and behind-the-scenes coverage as needed",
        ],
      },
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    link: "/request-a-quote",
    subtitle: "Editing & Post-Production",
    title: "Bringing It All Together",
    text: "This is where the footage is shaped into your final video. We handle color correction, sound mixing, graphics, subtitles, and more—ensuring the final product looks polished and reflects your message.",
    lists: [
      {
        subtitles: [
          "Editing and visual cuts",
          "Motion graphics and titles",
          "Background music and sound design",
          "Optional subtitling or voiceovers",
        ],
      },
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    link: "/request-a-quote",
    subtitle: " Review & Revisions",
    title: "Fine-Tuning Your Story",
    text: "You’ll receive a draft version to review. We welcome your feedback and offer up to two rounds of revisions to make sure everything is just right.",
    lists: [
      {
        subtitles: [
          "Client feedback session",
          "Revisions based on your input",
          "Final approval process",
        ],
      },
    ],
  },
  {
    id: 6,
    img: ser_img_6,
    link: "/request-a-quote",
    subtitle: "Delivery",
    title: "Your Video, Ready to Share",
    text: "We deliver your video in the formats you need—whether for social media, your website, or a large-screen event. We also offer optimization tips if you’re uploading to platforms like YouTube or Instagram.",
    lists: [
      {
        subtitles: [
          "Final HD or 4K files",
          "Platform-specific versions (vertical, horizontal, etc.)",
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
                        <i style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          {item.id < 9 ? "0" + item.id : item.id}
                        </i>
                        &mdash; {item.subtitle}
                      </span>
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
                            Quote <br /> Request
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
