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
      title: "Concept Development",
      desc: "We begin by understanding your vision and goals to craft a creative concept that captures your brand's essence and engages your audience.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Photography Planning",
      desc: "We plan the perfect shoot by aligning the right angles, lighting, and composition to tell your brand story through compelling visuals.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Shooting & Production",
      desc: "We capture stunning, high-quality images using the latest photography equipment, ensuring every detail is meticulously shot.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Editing & Retouching",
      desc: "We polish and edit the images to perfection, enhancing colors, contrast, and details to create photos that resonate with your brand and audience.",
      icon: s_4,
    },
  ];
  
  
  


export function PhotographyDetailsItems() {
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
