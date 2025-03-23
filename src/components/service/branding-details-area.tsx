import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/services/brandingOurService.jpg";
import sv_2 from "@/assets/img/branding/betterhand community/branding mockup/logo mockup/logo.png";
import sv_3 from "@/assets/img/branding/friday fashion/branding/logo mokcup/logo mockup.png";

export default function BrandingDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation"  style={{ fontFamily: 'Glacial Indifference' }}>
                Design Studio
              </span>
              <h4 className="sv-hero-title tp-char-animation"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                Branding
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim"  style={{ fontFamily: 'Glacial Indifference' }}>
                  Branding is essential to establish yourself in the market
                 in a unique and permanent way. At Riveal, we attach{" "}
                 great importance. We seek to understand your business
                  to better convey your values ​​and your talent through
                  your brand image.{" "}
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
                Your brand is the essence of your identity. A strong, tailored branding strategy sets you apart, resonates with your audience, and creates a lasting impact.
                </p>
                <p  style={{ fontFamily: 'Glacial Indifference' }}>
                Effective branding creates an experience that allows users to focus on their goals while evoking emotion, all without causing distractions.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul  style={{ fontFamily: 'Glacial Indifference' }}>
                  <li>Graphic research and creation</li>
                  <li>Showcasing your brand across various media</li>
                  <li>
                  Expert guidance on the graphic direction of your brand or its redesign
                  </li>
                  <li>Delivery of your brand assets in professional formats</li>
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
                Great branding enables users to focus on their goals while evoking emotion, all without distractions. Extra points when it’s not only effective but also visually appealing and emotionally engaging!{" "}
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
                <a className="active" href="/branding-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                  Branding
                </a>
                <a href="/development-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Development</a>
                <a href="/videography-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Videography</a>
              </div>
              <div className="service-details__right-text-box">
                <h4  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                  Branding
                </h4>
                <p className="mb-20"  style={{ fontFamily: 'Glacial Indifference' }}>
                Branding is the core of your identity. A powerful, custom-crafted design that reflects your business will set you apart and create a memorable connection with your audience.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
