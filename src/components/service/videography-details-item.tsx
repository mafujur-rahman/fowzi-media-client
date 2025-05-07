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
      desc: "We begin by understanding your vision and goals to develop a creative concept that aligns with your brand and engages your audience.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Storyboarding & Scripting",
      desc: "We craft compelling scripts and storyboards that lay the foundation for a powerful visual narrative, tailored to your brand message.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Filming & Production",
      desc: "We capture high-quality footage using state-of-the-art equipment, ensuring your message is delivered with clarity and impact.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Post-Production & Editing",
      desc: "We refine and edit your footage to create a polished, professional video that enhances your brand and resonates with your audience.",
      icon: s_4,
    },
  ];
  
  


export function VideographyDetailsItems() {
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
