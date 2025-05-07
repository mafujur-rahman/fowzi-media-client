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
      title: "Brand Discovery",
      desc: "We begin by understanding your business goals, target audience, and market position to lay a strategic foundation.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Brand Strategy",
      desc: "We define your brand’s voice, values, and positioning to ensure consistency across all touchpoints.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Visual Identity Design",
      desc: "We create a cohesive visual identity—logo, color palette, typography, and design system—that reflects your brand essence.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Brand Guidelines",
      desc: "We deliver comprehensive brand guidelines to ensure your brand remains consistent across all platforms and media.",
      icon: s_4,
    },
  ];
  


export function BrandingDetailsItems() {
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
