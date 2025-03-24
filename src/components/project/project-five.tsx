import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
import p_img_1 from "@/assets/img/portfolio/branding.png";
import p_img_2 from "@/assets/img/portfolio/web-design.jpg";
import p_img_3 from "@/assets/img/portfolio/videography.png";
import p_img_4 from "@/assets/img/portfolio/photography.png";

const project_data = [
  {
    id: 1,
    title: "Branding",
    img: p_img_1,
    link: "/portfolio-brandings"
  },
  {
    id: 2,
    title: "Web Design",
    img: p_img_2,
    link: "/portfolio-development"
  },
  {
    id: 3,
    title: "Videography",
    img: p_img_3,
    link: "/portfolio-videography"
  },
  {
    id: 4,
    title: "Photography",
    img: p_img_4,
    link: "/portfolio-photography"
  },
  
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-5-2-area pb-130 ${
        style_2 ? "" : "tp-project-5-2-pt black-bg"
      }`}
    >
      {!style_2 && (
        <div className="row">
          <div className="col-xl-12">
            <LineTextFour />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row gx-140">
          {project_data.map((item) => (
            <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                data-cursor="View<br>All"
              >
                <Link className="cursor-hide" href={item.link}>
                  <span className="tp_img_reveal">
                    <div className="tp_img_reveal">
                      <Image
                        src={item.img}
                        alt="project-img"
                        style={{ height: "600px", width: "4800px" }}
                      />
                    </div>
                  </span>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <h4 className="tp-project-5-2-title-sm" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className={`tp-btn-circle ${
                    style_2 ? "style-2" : ""
                  } tp-hover-btn-item tp-hover-btn`}
                  href="/portfolio"
                >
                  <span className="tp-btn-circle-text" style={{ fontFamily: 'Glacial Indifference' }}>
                    More <br /> Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
