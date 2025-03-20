import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/services/website-service.jpg";
import sv_2 from "@/assets/img/services/web-development-company-1-2022.jpg";
import sv_3 from "@/assets/img/services/website-development-process.jpg";

export default function DevelopmentDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation"  style={{ fontFamily: 'Glacial Indifference' }}>
                Development Studio
              </span>
              <h4 className="sv-hero-title tp-char-animation"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                Website Development
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim"  style={{ fontFamily: 'Glacial Indifference' }}>
                A strong online presence is essential to establish your brand in a unique  and
                 lasting way. At Riveal, we prioritize creating websites that truly{" "}
                 represent your business, effectively communicating your values and 
                 expertise through intuitive and visually appealing designs.{" "}
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
                A well-designed website not only looks great but also provides a seamless user experience that keeps visitors engaged and focused on their goals. Our team ensures your site is fast, responsive, and optimized for conversions.
                </p>
                <p  style={{ fontFamily: 'Glacial Indifference' }}>
                Great website development ensures users stay focused on what they need to do, creating an experience that feels intuitive and engaging — without unnecessary distractions.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul  style={{ fontFamily: 'Glacial Indifference' }}>
                  <li>Responsive and mobile-friendly development</li>
                  <li>UI/UX optimization for an intuitive user experience</li>
                  <li>
                  SEO-friendly structure for better online visibility
                  </li>
                  <li>Integration of essential features and functionalities</li>
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
                A great website ensures users can navigate effortlessly, engage meaningfully, and take action without distractions. Bonus points if it also delivers a stunning visual experience!{" "}
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
                <a className="active" href="/development-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Development</a>
                <a href="/videography-details"  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Videography</a>
              </div>
              <div className="service-details__right-text-box">
                <h4  style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                  Development
                </h4>
                <p className="mb-20"  style={{ fontFamily: 'Glacial Indifference' }}>
                Your website is at the core of your brand identity. A well-crafted, custom design aligned with your business will help you stand out and leave a lasting impression on your audience.
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
