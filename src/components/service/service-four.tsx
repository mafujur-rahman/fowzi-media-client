import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/fowzi-logo/icon 2.png';

const service_data = [
  {
    id: 1,
    title: "Branding",
    desc: "We specialize in crafting captivating brand identities that resonate with your audience and leave a lasting impression.",
    category: ["Branding", "Brand Strategy", "Brand Guidelines"],
    link: "/branding-details",
  },
  {
    id: 2,
    title: "Development",
    desc: "We specialize in creating stunning websites that captivate your audience and drive results.",
    category: ["SEO", "Development", "Custom Proactive Solutions"],
    link: "/development-details",
  },
  {
    id: 3,
    title: "Videography",
    desc: "We specializes in professional videography services that bring your vision to life and leavea lasting impression.",
    category: ["Creative", "Storytelling", "Promotional Videos"],
    link: "/videography-details",
  },
];
export default function ServiceFour() {

  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image style={{ width: "40px", height: "40px", marginLeft: "100px" }} src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert" style={{ fontFamily: 'Glacial Indifference' }}>
                  Our Services
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                Thoughtful <br /> Process We think a lot
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                    <Link href={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }} style={{ fontFamily: 'Glacial Indifference' }}></p>
                  <div className="tp-service-3-category d-flex flex-wrap gap-2">
                    {item.category.map((c, i) => (
                      <span key={i} style={{ fontFamily: 'Glacial Indifference' }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href={item.link}
                  >
                    <span className="zikzak-content" style={{ fontFamily: 'Glacial Indifference' }}>
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
