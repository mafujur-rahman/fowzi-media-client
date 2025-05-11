import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RightArrow, ShapeTwo } from "@/components/svg";

const service_data = [
    {
        id: 1,
        videoId: "1059190345",
        title: "Child Safety",
        link: "/child-safety-main",
        image: "/assets/img/portfolio/fowzi image/child-safety-1.jpg" 
    },
    {
        id: 2,
        videoId: "1058793031",
        title: "PSA Film",
        link: "/psa-main",
        image: "/assets/img/portfolio/fowzi image/dont-wait-until-1.jpg" 
    },
    {
        id: 3,
        videoId: "1056626277",
        title: "SBD Commercial",
        link: "/sbd-main",
        image: "/assets/img/portfolio/fowzi image/the-final-SBD-1.jpg" 
    },
];

export default function PortfolioVideographyArea() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="sv-service-area project-panel-area-2">
            <div className="container-fluid pt-100">
                {service_data.map((item) => (
                    <div key={item.id} className="sv-service-item project-panel-2">
                        <div className="row g-0">
                            <div className="col-xl-6 col-lg-6">
                                <div className="sv-service-thumb h-100" style={{ cursor: "pointer" }}>
                                    <Link href={item.link}>
                                        <Image
                                            src={item.image} // Use the custom image path here
                                            alt={`${item.title} thumbnail`}
                                            width={800}
                                            height={450}
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
                                className="col-xl-6 col-lg-6  d-flex justify-content-center align-items-center"
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
                                                <span style={{ fontFamily: 'Glacial Indifference' }}>Services</span>
                                                <h4 style={{ fontFamily: 'Glacial Indifference', color:"white" }}>Videography</h4>
                                            </div>
                                            <div className="project-details-1-info">
                                                <span style={{ fontFamily: 'Glacial Indifference' }}>Deliverables</span>
                                                <h4 style={{ fontFamily: 'Glacial Indifference', color:"white" }}>Video</h4>
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