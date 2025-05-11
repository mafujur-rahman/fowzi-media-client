import React, { useEffect, useState } from "react";
import Image from "next/image";

// images
import port_d_1 from '@/assets/img/inner-project/portfolio-details/brandings/port-d-1.png';
import port_d_2 from '@/assets/img/inner-project/portfolio-details/brandings/port-d-2.png';
import port_d_3 from '@/assets/img/inner-project/portfolio-details/brandings/port-d-3.png';
import port_d_4 from '@/assets/img/inner-project/portfolio-details/brandings/port-d-5.png';
import Link from "next/link";
import { RightArrow, ShapeTwo } from "@/components/svg";

const service_data = [
    {
        id: 1,
        img: port_d_1,
        title: "Friday Fashion",
        text: "💡 For startups & small businesses looking to establish their brand identity",
        link: "/friday-fashion"
    },
    {
        id: 2,
        img: port_d_2,
        title: "Better Hand",
        text: "💡 For startups & small businesses looking to establish their brand identity",
        link: "/better-hand"
    },
    {
        id: 3,
        img: port_d_3,
        title: "Optimal Home Healthcare",
        text: "💡 For startups & small businesses looking to establish their brand identity",
        link: "/optimal"
    },
    {
        id: 4,
        img: port_d_4,
        title: "Radiant Future",
        text: "💡 For startups & small businesses looking to establish their brand identity",
        link: "/radiant"
    },

]

export default function PortfolioBrandingsArea() {

    // padding bottom according to responsiveness
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 990);
        };

        handleResize(); // set on mount
        setIsMounted(true); // ensure client-side
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        handleResize(); // check initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div
            className="sv-service-area project-panel-area-2"
        >
            <div className="container-fluid pt-100">
                {service_data.map((item) => (
                    <div key={item.id} className="sv-service-item project-panel-2">
                        <div className="row g-0">
                            <div className="col-xl-6 col-lg-6">
                                <div className="sv-service-thumb h-100" style={{ cursor: "pointer" }}>
                                    <Link href={item.link}>
                                        <Image
                                            src={item.img}
                                            alt="service-img"
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Link>
                                </div>

                            </div>
                            <div
                                className="col-xl-6 col-lg-6 bg-[#1E1E1E] d-flex justify-content-center align-items-center"
                                style={{ paddingTop: isLargeScreen ? "100px" : "0px", backgroundColor: "#1E1E1E" }}
                            >

                                <div className="project-details-1-right-wrap">
                                    <div className="project-details-1-right p-relative">
                                        <div className="project-details-1-title-box">
                                            <h4 className="sv-service-title">{item.title}</h4>
                                            <p style={{ fontFamily: 'Glacial Indifference' }}>
                                                We offer digital experience solutions tailored for startups and small businesses, helping them thrive through innovative brand identities and seamless digital experiences.
                                            </p>
                                        </div>
                                        <div className="project-details-1-info-wrap">
                                            <div className="project-details-1-info">
                                                <span style={{ fontFamily: 'Glacial Indifference', color:"gray" }}>Services</span>
                                                <h4 className="" style={{ fontFamily: 'Glacial Indifference', color:"white" }}>Branding</h4>
                                            </div>
                                            <div className="project-details-1-info">
                                                <span style={{ fontFamily: 'Glacial Indifference' }}>Deliverables</span>
                                                <h4 style={{ fontFamily: 'Glacial Indifference', color:"white"  }}>Branding</h4>
                                            </div>
                                        </div>
                                        <div className="sv-service-btn mt-4">
                                            <Link
                                                className="tp-btn-zikzak zikzak-inner p-relative"
                                                href={item.link}
                                            >
                                                <span className="zikzak-content" style={{
                                                    fontFamily: 'Glacial Indifference',
                                                    fontWeight: 'bold'
                                                }}>
                                                    See <br /> Details
                                                    <RightArrow clr="currentColor" />
                                                </span>
                                                <ShapeTwo />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
