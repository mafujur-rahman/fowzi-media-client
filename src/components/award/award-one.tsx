"use client";
import React from "react";
import Image from "next/image";

// Award images
import a_1 from "@/assets/img/about-us/team/noor.jpg";

// Prop types
type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        {/* Section Title */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
            <h2 className="fw-bold text-lg-2xl text-md-xl text-sm-lg">Message From Founder</h2>
          </div>
        </div>
        
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center">
            <div className="tp-award-list-thumb-wrap position-relative text-center">
              <Image
                src={a_1}
                alt="Hussein Noor"
                className="img-fluid rounded"
                width={350}
                height={500}
                style={{ objectFit: "cover" }}
              />
              <div className="text-center mt-3">
                <h3 className="fw-bold" style={{ fontFamily: "Glacial Indifference" }}>Hussein Noor</h3>
                <p className="mb-0" style={{ fontFamily: "Glacial Indifference" }}>Senior Strategist</p>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, iusto. Sed cum asperiores dolore, doloremque maxime aliquam labore excepturi officia saepe facilis ad quibusdam dolorem sunt placeat accusantium officiis amet! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat earum odit odio suscipit, ea cumque veritatis consectetur rem sunt delectus quaerat voluptate voluptates, in amet repellendus facere quibusdam natus! 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam in impedit sequi magnam voluptatibus quam ipsam temporibus neque officiis, amet voluptate nisi nulla iusto incidunt veniam odit? Exercitationem, sapiente! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis consectetur veritatis itaque fugit recusandae libero unde ipsam tenetur facere aliquam sed iste illum impedit officia error exercitationem, voluptatibus cumque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;