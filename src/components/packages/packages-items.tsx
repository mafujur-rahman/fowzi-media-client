import React from "react";
import Image from "next/image";

// images
import p_1 from "@/assets/img/packages/branding.svg";
import p_2 from "@/assets/img/packages/development.svg";
import p_3 from "@/assets/img/packages/videography.svg";
import p_4 from "@/assets/img/packages/photography.svg";

const packages_data = [
  {
    id: 1,
    title: "Branding",
    desc: "We specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression.",
    icon: p_1,
  },
  {
    id: 2,
    title: "Website development",
    desc: "We specialize in creating stunning websites that captivate your audience and drive results.",
    icon: p_2,
  },
  {
    id: 3,
    title: "Videography",
    desc: "Elevate your brand with captivating video content that tells your story and engages your audience.",
    icon: p_3,
  },
  {
    id: 4,
    title: "Photography",
    desc: "Elevate your brand with stunning photography that captures your story and connects with your audience.",
    icon: p_4,
  },
];

// service items
export function PackagesItems() {
  return (
    <div className="row">
      <div className=""></div>
      {packages_data.map((item) => (
        <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image style={{height: "30px", width: "auto"}} src={item.icon} alt="icon" />
            </div>
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

