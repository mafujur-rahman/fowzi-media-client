import React from "react";
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
    link: "/branding-details",
    subtitle: "Design Studio",
    title: "branding",
    text: "At Fowzi Media, we specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression. From logo design to website development, our comprehensive branding services are designed to propel your business forward and help you stand out in a crowded marketplace.",
    lists: [
      "Brand Strategy",
      "Logo and Visual Identity",
      "Brand Collateral",
      "Social Media Branding",
      "Brand Guidelines",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    link: "/development-details",
    subtitle: "Development Studio",
    title: "Development",
    text: "Transform your online presence with Fowzi Media expert website development services. We specialize in creating stunning websites that captivate your audience and drive results. With our streamlined process and personalized approach, achieving your online goals has never been easier.",
    lists: [
      "Responsive Website",
      "Real Estate",
      "Health Care",
      "Travel",
      "Restaurant",
      "E - Learning",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    link: "/videography-details",
    subtitle: "Video Studio",
    title: "Videography",
    text: "Elevate your brand with captivating video content that tells your story and engages your audience. Fowzi Media specializes in professional videography services that bring your vision to life and leave a lasting impression. From corporate videos to promotional content, we're here to help you stand out in a crowded digital landscape.",
    lists: [
      "Corporate Videos",
      "Promotional Videos",
      "Event Coverage",
      "Product Demonstrations",
      "Testimonials & Interviews",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2 pb-100">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "fit" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href={item.link}
                        >
                          <span className="zikzak-content" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
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
