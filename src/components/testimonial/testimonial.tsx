"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NextIcon, PrevIcon } from "../svg";
import { ArrowBg, RightArrowTwo } from "../../../src/components/svg";

// Images
import defaultAvatar from "@/assets/img/about-us/default-img.webp";
import Link from "next/link";


type IProps = {
    cls?: string;
    abStyle?: boolean;
};

type Testimonial = {
    id: number;
    image?: string;
    name: string;
    title?: string;
    text: string;
};

const Testimonial = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Mohamud Isse",
            text: "Fowzi Media's team has been excellent to work with. Their communication was on point, and the design exceeded our expectations.",
            image: "/assets/img/about-us/default-img.webp", // Replace with actual image path
        },
        {
            id: 2,
            name: "Rondo Services",
            text: "The team at Fowzi Media really understands branding. They delivered a high-quality product that perfectly aligns with our vision.",
            image: "/assets/img/about-us/default-img.webp",
        },
        {
            id: 3,
            name: "Ayaan Consulting",
            text: "We trusted Fowzi Media with our digital transformation, and they delivered beyond our expectations! Their expertise is unmatched.",
            image: "/assets/img/about-us/default-img.webp",
        },
        {
            id: 4,
            name: "TechNova",
            text: "From web development to branding, Fowzi Media excels in every aspect. Professional, creative, and truly dedicated.",
            image: "/assets/img/about-us/default-img.webp",
        },
        {
            id: 5,
            name: "Elite Solutions",
            text: "The team at Fowzi Media understood our business needs and delivered outstanding results. We highly recommend them!",
            image: "/assets/img/about-us/default-img.webp",
        },
        {
            id: 6,
            name: "NextGen Marketing",
            text: "Fowzi Media helped us scale our business through digital innovation. Their team is truly talented and professional!",
            image: "/assets/img/about-us/default-img.webp",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <div className={`tp-award-area ${cls}`}>
            <div className="container container-1630">
                {/* Section Title */}
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-xxl-6 col-xl-7">
                        <h2 className="fw-bold text-lg-2xl text-md-xl text-sm-lg">
                            What Our Clients Say
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center position-relative">
                    {/* Left Arrow - More prominent styling */}
                    <button
                        onClick={goToPrevious}
                        className="position-absolute start-0 top-50 translate-middle-y bg-white border-0 shadow-sm rounded-circle p-3 d-flex align-items-center justify-content-center"
                        style={{
                            zIndex: 1,
                            left: "-25px",
                            width: "50px",
                            height: "50px",
                            transform: "translateY(-50%)"
                        }}
                        aria-label="Previous testimonial"
                    >
                        <PrevIcon />
                    </button>

                    {/* Image Section */}
                    <div className="col-xl-4 col-lg-4 col-md-12 d-flex justify-content-center">
                        <div className="tp-award-list-thumb-wrap position-relative text-center">
                            <div className="rounded-circle overflow-hidden mx-auto" style={{ width: "250px", height: "250px" }}>
                                <Image
                                    src={currentTestimonial.image || defaultAvatar}
                                    alt={currentTestimonial.name}
                                    width={250}
                                    height={250}
                                    className="img-fluid h-100 w-100"
                                    style={{ objectFit: "cover" }}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = defaultAvatar.src;
                                    }}
                                />
                            </div>
                            <div className="text-center mt-3">
                                <h3 className="fw-bold mb-1" style={{ fontFamily: "Glacial Indifference" }}>
                                    {currentTestimonial.name}
                                </h3>
                                {currentTestimonial.title && (
                                    <p className="text-muted mb-0" style={{ fontFamily: "Glacial Indifference" }}>
                                        {currentTestimonial.title}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="col-xl-8 col-lg-8 col-md-12 position-relative">
                        <div className="tp-award-list-wrap ps-lg-4">
                            <blockquote className="text-justify fs-5 fst-italic" style={{ lineHeight: 1.6 }}>
                                {currentTestimonial.text}
                            </blockquote>
                        </div>

                        {/* Mobile Arrows - Bottom centered */}
                        <div className="d-flex justify-content-center gap-3 mt-4 d-lg-none">
                            <button
                                onClick={goToPrevious}
                                className="btn btn-outline-primary rounded-circle p-2"
                                aria-label="Previous testimonial"
                            >
                                <PrevIcon />
                            </button>
                            <div className="d-flex align-items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`rounded-circle p-0 ${currentIndex === index ? 'bg-primary' : 'bg-secondary'}`}
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            border: "none",
                                            opacity: currentIndex === index ? 1 : 0.5
                                        }}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={goToNext}
                                className="btn btn-outline-primary rounded-circle p-2"
                                aria-label="Next testimonial"
                            >
                                <NextIcon />
                            </button>
                        </div>
                    </div>

                    {/* Right Arrow - More prominent styling */}
                    <button
                        onClick={goToNext}
                        className="position-absolute end-0 top-50 translate-middle-y bg-white border-0 shadow-sm rounded-circle p-3 d-none d-lg-flex align-items-center justify-content-center"
                        style={{
                            zIndex: 1,
                            right: "-25px",
                            width: "50px",
                            height: "50px",
                            transform: "translateY(-50%)"
                        }}
                        aria-label="Next testimonial"
                    >
                        <NextIcon />
                    </button>
                </div>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <Link className="tp-btn-black-2" target="_blank" href="https://calendly.com/fowzimedia/free-consultation?month=2025-03" style={{ fontFamily: 'Glacial Indifference' }}>
                        Book free consultation today{" "}
                        <span className="p-relative">
                            <RightArrowTwo />
                            <ArrowBg />
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;