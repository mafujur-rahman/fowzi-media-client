import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/fowzi-logo/icon 2.png';

const service_data = [
  {
    id: 1,
    title: "Branding",
    desc: "We help businesses and campaigns in Minneapolis and the Twin Cities region build strong brand identities from the ground up. From logo design and visual systems to brand messaging and tone, we create consistent, professional branding that leaves a lasting impression.",
    category: ["Branding", "Brand Strategy", "Brand Guidelines"],
    link: "/branding-details",
  },
  {
    id: 2,
    title: "Development",
    desc: "Your website is often the first place people learn about you. We design and build responsive, user-friendly websites that reflect your mission and make it easy for your audience to engage. Whether you’re a startup, nonprofit, or political campaign, we build websites that perform.",
    category: ["SEO", "Development", "Custom Proactive Solutions"],
    link: "/development-details",
  },
  {
    id: 3,
    title: "Videography",
    desc: "Our Minneapolis-based video production team creates compelling content for businesses, public service campaigns, and lifestyle brands. From pre-production to final edit, we produce videos that are impactful, professional, and emotionally engaging.",
    category: ["Creative", "Storytelling", "Promotional Videos"],
    link: "/videography-details",
  },
  {
    id: 4,
    title: "Photography",
    desc: "We provide high-quality photography that aligns with your brand and message. Whether you're looking to promote products, document events, or update your professional image, our local photography team captures visuals that help you stand out.",
    category: ["Lifestyle", "Events", "Brands Short"],
    link: "/photography-details",
  },
  {
    id: 5,
    title: "Marketing",
    desc: "We specialize in developing communication strategies that reflect the values of our clients and resonate with diverse audiences. From social media campaigns to community outreach, we help leaders across Minneapolis reach their goals with clarity and integrity.",
    category: ["Digital Campaign", "Promotion", "SEO"],
    link: "/videography-details",
  },
];
export default function ServiceFour() {

  const [marginLeft, setMarginLeft] = useState("20px");

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth >= 992) {
        setMarginLeft("100px"); // Large screens
      } else if (window.innerWidth >= 768) {
        setMarginLeft("50px"); // Medium screens
      } else {
        setMarginLeft("2px"); // Small screens
      }
    };

    updateMargin(); // Set margin initially
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image style={{ width: "auto", height: "60px", marginLeft }} src={icon} alt="icon" />
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
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Creative <br /> Solutions That Drive Real Results
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
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
              <div className="tp-service-3-btn-box text-start text-lg-end mt-3 mt-lg-0">
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
