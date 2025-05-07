import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/photography/photo-1.jpg";
import sv_2 from "@/assets/img/photography/1.jpg";
import sv_3 from "@/assets/img/photography/2.jpg";

export default function PhotographyDetailsArea() {
    return (
        <div className="service-details__area service-details__space pt-200 pb-20">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-details__title-box mb-40">
                            <span className="service-details__subtitle tp-char-animation"  >
                                Photo Studio
                            </span>
                            <h4 className="sv-hero-title tp-char-animation"  >
                                Photography
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-xl-4 col-xl-5">
                            <div className="service-details__banner-text mb-80">
                                <p className="mb-30 tp_title_anim" style={{ fontFamily: 'Glacial Indifference' }}>
                                    A captivating online presence is vital for showcasing your photography in a distinctive and memorable way. At Riveal, we focus on crafting websites that reflect your creative vision—highlighting your portfolio, style, and storytelling through elegant, image-driven design that speaks to your audience.{" "}
                                </p>
                                <p className="tp_title_anim" style={{ fontFamily: 'Glacial Indifference' }}>
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
                                <p className="text-1 tp_title_anim" style={{ fontFamily: 'Glacial Indifference' }}>
                                    Great photography goes beyond capturing images—it tells stories, evokes emotion, and leaves a lasting impression. At Riveal, we’re passionate about showcasing moments with clarity, creativity, and purpose, ensuring every shot speaks to your vision and connects with your audience.
                                </p>
                                <p style={{ fontFamily: 'Glacial Indifference' }}>
                                    Great photography captures attention and guides the viewer’s eye, creating a visual experience that feels natural, compelling, and free of distractions—allowing the story behind each image to shine through.
                                </p>
                            </div>
                            <div className="service-details__fea-list">
                                <ul style={{ fontFamily: 'Glacial Indifference' }}>
                                    <li>High-resolution image optimization for all devices</li>
                                    <li>Visually driven layouts that enhance storytelling</li>
                                    <li>Gallery and portfolio features to showcase your best work</li>
                                    <li>Easy integration of booking forms and contact options</li>

                                </ul>
                            </div>
                            <div className="service-details__sm-thumb-wrap mb-60">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                        <div className="service-details__sm-thumb">
                                            <Image
                                                src={sv_2}
                                                alt="service-img"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                        <div className="service-details__sm-thumb">
                                            <Image
                                                src={sv_3}
                                                alt="service-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-details__left-text">
                                <p style={{ fontFamily: 'Glacial Indifference' }}>
                                Great photography draws viewers in, tells a clear story, and inspires emotion without distractions. Bonus points if it also leaves a lasting visual impact!{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="service-details__right-wrap fix p-relative">
                            <div className="service-details__rotate-text">
                                <span style={{ fontFamily: 'Glacial Indifference' }}>Full list of services</span>
                            </div>
                            <div className="service-details__right-category">
                                <a href="/branding-details" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                                    Branding
                                </a>
                                <a href="/videography-details" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Development</a>
                                <a href="/development-details" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Videography</a>
                                <a className="active" href="/photography-details" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Photography</a>
                            </div>
                            <div className="service-details__right-text-box">
                                <h4>
                                    Photography
                                </h4>
                                <p className="mb-20" style={{ fontFamily: 'Glacial Indifference' }}>
                                Your photography is at the heart of your brand identity. A thoughtfully composed and unique visual style helps you stand out, tell your story, and leave a lasting impression on your audience.
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
