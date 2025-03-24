import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/services/video-service.jpeg";
import sv_2 from "@/assets/img/services/video-1 (1).jpg";
import sv_3 from "@/assets/img/services/video-1 (2).jpg";

export default function VideographyDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation"  >
                Video Studio
              </span>
              <h4 className="sv-hero-title tp-char-animation" >
                Videography
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim"  style={{ fontFamily: 'Glacial Indifference' }}>
                Branding is essential to establishing a strong and lasting presence in the market. At Riveal, we understand the power of visual storytelling. Our goal is to capture your brands essence and bring it to life through compelling videography.{" "}
                </p>
                <p className="tp_title_anim"  style={{ fontFamily: 'Glacial Indifference'}}>
                Explore our portfolio and see how we bring brands to life online!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto", width: "1200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim"  style={{ fontFamily: 'Glacial Indifference' }}>
                A well-crafted video engages your audience, evokes emotion, and leaves a lasting impression. From concept to execution, we create high-quality visuals that resonate with your target audience.
                </p>
                <p  style={{ fontFamily: 'Glacial Indifference' }}>
                Great videography keeps viewers engaged, guiding them through the story while sparking emotion — all without unnecessary distractions.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul  style={{ fontFamily: 'Glacial Indifference' }}>
                  <li>Creative direction and concept development</li>
                  <li>Professional filming and editing</li>
                  <li>
                  Integration of brand elements for consistency
                  </li>
                  <li>Delivery in multiple formats for various platforms</li>
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "400px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p  style={{ fontFamily: 'Glacial Indifference' }}>
                Great videography draws viewers in, keeps them focused on the story, and stirs emotion — all without unnecessary distractions. And when its beautifully shot and visually appealing? Even better!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span  style={{ fontFamily: 'Glacial Indifference' }}>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <a  href="/branding-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                  Branding
                </a>
                <a  href="/development-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Development</a>
                <a className="active" href="/videography-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Videography</a>
              </div>
              <div className="service-details__right-text-box">
                <h4 >
                  Videography
                </h4>
                <p className="mb-20"  style={{ fontFamily: 'Glacial Indifference' }}>
                Great videography doesnt just capture moments—it tells a story, connects with your audience, and enhances your brands impact. Lets create something remarkable together!
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}
                >
                  Lets Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
