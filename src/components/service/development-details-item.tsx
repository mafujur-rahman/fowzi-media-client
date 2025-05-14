import React from "react";


// images
import s_1 from "@/assets/img/packages/branding.svg";
import s_2 from "@/assets/img/packages/development.svg";
import s_3 from "@/assets/img/packages/videography.svg";
import s_4 from "@/assets/img/packages/photography.svg";

const service_data = [
    {
      id: 1,
      title: "Custom Website Design",
      desc: "We design websites that fit your brand and feel consistent from top to bottom. Every page is crafted with layout, visuals, and usability in mind.",
      icon: s_1,
    },
    {
      id: 2,
      title: "Development and CMS Integration",
      desc: "We build websites using flexible, reliable platforms like WordPress and other content management systems. You get a site that’s easy to update and built to grow with you.",
      icon: s_2,
    },
    {
      id: 3,
      title: "Website Redesign and Updates",
      desc: "Already have a site but it feels outdated or hard to use? We redesign existing websites to match today’s standards and your brand’s evolution.",
      icon: s_3,
    },
    {
      id: 4,
      title: "Training and Ongoing Support",
      desc: "We don't just hand off the site and disappear. We offer training so your team knows how to manage it, plus ongoing maintenance options if you need long-term support.",
      icon: s_4,
    },
  ];
  


export function DevelopmentDetailsItems() {
  return (
    <div className="row">
          <div className=""></div>
          {service_data.map((item) => (
            <div key={item.id} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 g-4">
              <div className="tp-service-5-item tp_fade_bottom  border p-5 " style={{height: "100%"}}>
                {/* <div className="tp-service-4-icon">
                  <Image style={{height: "30px", width: "auto"}} src={item.icon} alt="icon" />
                </div> */}
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm tp-text-black" style={{fontFamily: 'Glacial Indifference', fontWeight: 'bold'}}>
                    {item.title}
                  </h4>
                  <p style={{fontFamily: 'Glacial Indifference'}}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  );
}
