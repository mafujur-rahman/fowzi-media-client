import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// images
import port_1 from "@/assets/img/latest-projects/hudda/branding/door hanger mockup/door-hanger.jpg";
import port_2 from "@/assets/img/latest-projects/hodda-web.jpg";
import port_3 from "@/assets/img/latest-projects/jannah-branding.jpg";
import port_4 from "@/assets/img/latest-projects/JannahFitwear52-(2).jpg";
import port_5 from "@/assets/img/latest-projects/awad/p-1.jpg";
import port_6 from "@/assets/img/latest-projects/awad/p-2.jpg";
import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    title: "Hudda For St. Cloud",
    subtitle: "Branding + Website + Photography",
    link: "/hudda-details"
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    title: "Jannah Fitwear",
    subtitle: "Branding + Website + Videography + Photography",
    link: "jannah-fitwear-details"
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    title: "Awad for Puntland",
    subtitle: "Branding + Website + Videography + Photography",
    link: "awad-details"
  }
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-wrapper"
                  >
                    <span className="zikzak-content" style={{ fontFamily: 'Glacial Indifference' }}>
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link} >
                          {item.title.includes("For") ? (
                            item.title.split("For").map((part, index) => (
                              <React.Fragment key={index}>
                                {index > 0 && "For"} <br /> {part}
                              </React.Fragment>
                            ))
                          ) : (
                            item.title
                          )}
                        </Link>
                      </h4>
                      <p className="tp-project-3-meta " >{item.subtitle}</p>
                      <br />
                      <Link
                        className="tp-btn-project-sm"
                        href={item.link}
                        style={{ fontFamily: 'Glacial Indifference' }}
                      >
                        See Project
                      </Link>
                    </div>

                    {/* gradiant line */}
                    <div className="text-center" style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '320px',
                        height: '15px',
                        background: 'linear-gradient(to right, #111111, #FF0101)',
                        borderRadius: '30px',
                      }}></div>
                    </div>


                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt="port-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
