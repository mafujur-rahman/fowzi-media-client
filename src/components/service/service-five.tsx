import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/services/branding-icon.png";
import s_2 from "@/assets/img/services/web-icon.png";
import s_3 from "@/assets/img/services/video-icon.webp";

const service_data = [
  {
    id: 1,
    title: "Branding",
    desc: "We specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression.",
    icon: s_2,
    link: "/branding-details",
  },
  {
    id: 2,
    title: "Website development",
    desc: "We specialize in creating stunning websites that captivate your audience and drive results.",
    icon: s_1,
    link: "/development-details",
  },
  {
    id: 3,
    title: "Videography",
    desc: "Elevate your brand with captivating video content that tells your story and engages your audience.",
    icon: s_3,
    link: "/videography-details",
  },
];

// service items
export function ServiceItems() {
  return (
    <div className="row">
      <div className="col-xxl-3"></div>
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image style={{height: "30px", width: "auto"}} src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
                <Link href={item.link}>{item.title}</Link>
              </h4>
              <p style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Nullam posuere rhoncus elementum. Nullam lacinia <br />
                urna blandit iaculis sagittis
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
