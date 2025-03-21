"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import error from '@/assets/img/error/error.png';
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const ErrorMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* error hero */}
            <div className="tp-error-area pt-190 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center">
                      <h4 className="tp-error-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Oops!</h4>
                      <Image src={error} alt="error-img" style={{ height: 'auto' }} />
                      <div className="tp-error-content">
                        <h4 className="tp-error-title-sm" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          Something went Wrong...
                        </h4>
                        <p style={{ fontFamily: 'Glacial Indifference' }}>Sorry, we {"couldn't"} find your page.</p>
                        <Link className="tp-btn-black-2" href="/" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* error hero */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;
