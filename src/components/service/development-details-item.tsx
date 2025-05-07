import React from "react";
import Image from "next/image";

// images
import s_1 from "@/assets/img/packages/branding.svg";
import s_2 from "@/assets/img/packages/development.svg";
import s_3 from "@/assets/img/packages/videography.svg";
import s_4 from "@/assets/img/packages/photography.svg";

const service_data = [
    {
      id: 1,
      title: "Project Planning",
      desc: "We start by understanding your project goals, target audience, and business objectives to create a tailored development strategy.",
      icon: s_1,
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "We design intuitive and engaging user interfaces with a seamless user experience that aligns with your brand and engages visitors.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Development & Coding",
      desc: "We build responsive, fast, and scalable websites using the latest technologies to bring your vision to life.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      desc: "We rigorously test your website across multiple devices and browsers to ensure flawless performance and usability.",
      icon: s_4,
    },
  ];
  


export function DevelopmentDetailsItems() {
  return (
    <div className="row">
          <div className=""></div>
          {service_data.map((item) => (
            <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
              <div className="tp-service-5-item tp_fade_bottom space-1">
                {/* <div className="tp-service-4-icon">
                  <Image style={{height: "30px", width: "auto"}} src={item.icon} alt="icon" />
                </div> */}
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm tp-text-black" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
                    {item.title}
                  </h4>
                  <p style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  );
}
