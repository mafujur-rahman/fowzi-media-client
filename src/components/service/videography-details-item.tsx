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
      title: "Brand & Promotional Videos",
      desc: "Showcase what makes your brand unique with high-quality promotional content. Perfect for websites, fundraising, product launches, and digital ads.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Interview & Podcast Videos",
      desc: "Capture the voices that matter. We film interviews and podcast in clean, professional settings that bring out genuine emotion and trust.",
      icon: s_2,
    },
    {
      id: 3,
      title: " Event Videography",
      desc: "Let the moments speak for themselves. We offer full event coverage for conferences, workshops, cultural events, and community gatherings in and around Minneapolis.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Social Media Video Content",
      desc: "Short-form, scroll-stopping videos optimized for platforms like Instagram, TikTok, YouTube, and Facebook. Perfect for engagement, visibility, and reach.",
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
