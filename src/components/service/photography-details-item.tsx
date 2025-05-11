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
      title: "Brand and Lifestyle Photography",
      desc: "Show your brand in action. From team culture to product use, we capture visuals that feel real and relatable.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Event Photography",
      desc: "Preserve the energy and emotion of your event. We cover everything from community gatherings to press conferences and corporate events.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Portrait and Headshot Photography",
      desc: "Whether you're a professional, a public figure, or part of a team, we offer professional headshots that feel approachable and confident.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Documentary and Community Projects",
      desc: "Our roots in community storytelling allow us to document real experiences with honesty and respect. Perfect for nonprofits, public campaigns, and cultural programs.",
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
