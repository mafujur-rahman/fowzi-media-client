import React from "react";
import Image from "next/image";
import { ProjectShape, RightArrow } from "../svg";
import cta from '@/assets/img/fowzi-logo/icon 1.png';
import Link from "next/link";

export default function ContactOne() {
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s talk
              <span>about it</span>
            </h4>
            <p className="tp_fade_bottom" style={{ fontFamily: 'Glacial Indifference' }}>
              We will collaborate to find the right answer and bring progress to
              your business and to the world.
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} style={{width: "80px", height: "auto"}} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative" target="_blank" href="https://calendly.com/fowzimedia/free-consultation">
                <span className="zikzak-content" style={{ fontFamily: 'Glacial Indifference' }}>
                  Book a <br /> consultation
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
