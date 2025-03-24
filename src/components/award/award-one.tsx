"use client";
import React from "react";
import Image from "next/image";

// award images
import a_1 from "@/assets/img/about-us/team/noor.jpg";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,

    title: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
  {
    id: 2,

    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
  {
    id: 3,

    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
  {
    id: 4,

    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
  {
    id: 5,

    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
  {
    id: 6,

    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, veritatis.",

  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Awards <br /> <span>& Recognitions</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Message From Founder
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
              >
                <Image
                  src={a_1}
                  alt="list-thumb"
                  style={{ height: "500px", width: "auto" }}
                />
                <div className="d-flex flex-column justify-content-center align-items-center center-container mt-10">
                  <h3 className="mb-3" style={{height: "10px", width: "auto", fontFamily: 'Glacial Indifference', font: "bold"}}>Hussein Noor</h3>
                  <p className="mb-0 pt-5" style={{fontFamily: 'Glacial Indifference'}}>Senior Strategist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 pt-100">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;
