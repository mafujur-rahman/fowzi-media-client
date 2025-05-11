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
      title: "Logo Design and Visual Identity",
      desc: "We design logos that are clean, versatile, and memorable. But we don’t stop there. We develop full identity systems—fonts, colors, icons, and visuals—so your brand looks polished and consistent everywhere.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Brand Strategy and Positioning",
      desc: "We help you define what your brand stands for and how it should be perceived. Through guided workshops and research, we build a strategy that reflects your mission, values, and audience.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Stationery and Brand Collateral",
      desc: "Your brand doesn’t stop at a logo. We design clean, professional materials that reinforce your identity in everyday business and outreach.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Brand Guidelines",
      desc: "To keep everything on track, we deliver a detailed brand guide. This ensures that your internal team, designers, and partners all represent your brand the right way.",
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
