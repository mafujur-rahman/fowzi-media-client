"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const BetterHandArea = () => {
  const textRef = useRef(null);

  // text animation
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "-100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  // process step
  const steps = [
    { number: "01", title: "Consultation" },
    { number: "02", title: "Planning & Concept Development" },
    { number: "03", title: "Photography Session" },
    { number: "04", title: "Editing & Retouching" },
    { number: "05", title: "Review & Revisions" },
    { number: "06", title: "Delivery" },
  ];

  return (
    <div className="container pt-150">
      <div className="">
        <h2 ref={textRef} className="fw-bold display-1" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Better Hand</h2>
      </div>

      {/* Banner */}
      <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
        <Image
          src="/assets/img/branding/betterhand community/branding mockup/logo mockup/logo.png"
          alt="about-img-1"
          className="w-100 h-100 object-fit-cover"
          layout="fill"
          priority
        />
      </div>

      {/* Project Description */}
      <div className="my-5">
        <h2 className="display-4 fw-bold my-4" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
          Project <span className="">Description</span>
        </h2>
        <p className="lead" style={{ fontFamily: 'Glacial Indifference' }}>
        At the Better Hand Community, our approach is centered around providing exceptional care for each client. We believe that every individual deserves to receive compassionate care that promotes independence, dignity, and a high quality of life.
        </p>

        <p> To achieve this, we take a client-centered approach, where we collaborate with our clients, their families, and healthcare professionals to create a personalized care plan that meets their specific needs and preferences.</p>
      </div>

      {/* Color Typography */}
      <div className="my-5">
        <h2 className="display-4 fw-bold  my-4" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Color/Typography</h2>
        <h5 className="fw-bold" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Primary font:</h5>
        <p><a href="https://fonts.adobe.com/fonts/retiro" style={{ fontFamily: 'Glacial Indifference' }}>https://fonts.adobe.com/fonts/brandon-grotesque</a></p>
        <h1 className="display-1 fw-bold  text-center">Grotesque</h1>
        <div className="d-flex justify-content-around my-3">
          <p style={{ fontFamily: 'Glacial Indifference' }}>Regular</p>
          <p className="fw-bold" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Bold</p>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <div className="p-5 text-white rounded " style={{ backgroundColor: "#48B7AF" }}>#48B7AF</div>
          <div className="p-5 text-white rounded " style={{ backgroundColor: "#0C0C0C" }}>#0C0C0C</div>
          <div className="p-5 text-dark rounded " style={{ backgroundColor: "#F02870" }}>#F02870</div>
          <div className="p-5 text-dark rounded border " style={{ backgroundColor: "#374151" }}>#374151</div>
        </div>
      </div>

      {/* Project Mockup */}
      <div className="my-5">
        <h2 className="display-4 fw-bold my-4" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
          Project <span className="">Mockup</span>
        </h2>
        <div className="container">
      <div className="row g-3">
        {/* Shopping Bag - Normal Size */}
        <div className="col-md-6 d-flex align-items-stretch">
          <Image
            src="/assets/img/branding/betterhand community/branding mockup/envelope mockup/envelope@2x.png"
            width={600}
            height={450}
            className="img-fluid rounded-4 w-100 object-fit-cover"
            alt="Shopping Bag Mockup"
          />
        </div>

        {/* Black T-Shirt - Spans 2 Rows */}
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-grow-1">
            <Image
              src="/assets/img/branding/betterhand community/branding mockup/flyer mockup/flyer1.png"
              width={600}
              height={450}
              className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
              alt="T-Shirt Mockup Black"
            />
          </div>
        </div>

        {/* White T-Shirt - Spans 2 Rows */}
        <div className="col-md-6 d-flex flex-column">
          <div className="flex-grow-1">
            <Image
              src="/assets/img/branding/betterhand community/branding mockup/t shirt mockup/Front.jpg"
              width={600}
              height={450}
              className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
              alt="T-Shirt Mockup White"
            />
          </div>
        </div>

        {/* T-Shirt Tag - Normal Size */}
        <div className="col-md-6 d-flex align-items-stretch">
          <Image
            src="/assets/img/branding/betterhand community/branding mockup/borchure mockup/borchure.png"
            width={600}
            height={450}
            className="img-fluid rounded-4 w-100 object-fit-cover"
            alt="T-Shirt Tag Mockup"
          />
        </div>
      </div>
    </div>
      </div>

      {/* Process Step */}
      <div className="bg-dark text-white p-4 rounded my-5">
        <h2 className="display-5 fw-semibold mb-4 text-white" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
          Our <span className="">Process</span>
        </h2>
        <div className="row g-3">
          {steps.map((step) => (
            <div key={step.number} className="col-md-6 d-flex align-items-center">
              <div className="d-flex justify-content-center align-items-center rounded-circle bg-secondary text-dark" style={{ width: "50px", height: "50px", fontFamily: 'Glacial Indifference' }} >
                {step.number}
              </div>
              <div className="ms-3 text-lg fw-medium" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>{step.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetterHandArea;
