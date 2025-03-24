"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const RadiantArea = () => {
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
        <h2 ref={textRef} className="fw-bold display-1">Radiant Future</h2>
      </div>

      {/* Banner */}
      <div className="position-relative overflow-hidden" style={{ height: "500px" }}>
        <Image
          src="/assets/img/branding/radiant future/branding mockup/logo mockup/logo.png"
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
        Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.
        </p>

        <p> our website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.Your website is often the first impression that potential customers have of your business. We can help you create a modern, user-friendly website that showcases your brand and effectively communicates your message.</p>
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

        <div className="row justify-content-center gap-3">
          <div className="col-6 col-md-auto p-5 text-white rounded " style={{ backgroundColor: "#ebb898" }}>#ebb898</div>
          <div className="col-6 col-md-auto p-5 text-white rounded " style={{ backgroundColor: "#3b271e" }}>#3b271e</div>
          <div className="col-6 col-md-auto p-5 text-dark rounded " style={{ backgroundColor: "#0C0C0C" }}>#0C0C0C</div>
          <div className="col-6 col-md-auto p-5 text-dark rounded border " style={{ backgroundColor: "#FFFFFF" }}>#FFFFFF</div>
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
            src="/assets/img/branding/radiant future/branding mockup/business card mockup/business-card.png"
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
              src="/assets/img/branding/radiant future/branding mockup/flyer mockup/flyer (2).png"
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
              src="/assets/img/branding/radiant future/branding mockup/stationary mockup/radiant future.png"
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
            src="/assets/img/branding/radiant future/branding mockup/evelope mockup/envelope.png"
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

export default RadiantArea;
