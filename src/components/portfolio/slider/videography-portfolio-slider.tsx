import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider3 } from "@/utils/parallax-slider";


const slider_data = [
    {
        id: 1,
        subtitle: "Videography",
        title: "Shamil Mirza",
        link: "/shamil-mirza-showcase"
    },
    {
        id: 2,
        subtitle: "Videography",
        title: "Jannah Fitwear",
        link: "/jannah-fitwear-showcase"
    },
    {
        id: 3,
        subtitle: "Videography",
        title: "SBD Commercial",
        link: "/optimal-showcase"
    },
    {
        id: 4,
        subtitle: "Videography",
        title: "Islam Collective Introduction",
        link: "/islam-showcase"
    },
];

export default function VideographyPortfolioSlider() {
    useEffect(() => {
        const timer = setTimeout(() => {
            parallaxSlider3();
        }, 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="parallax-slider-wrapper">
            <div className="parallax-slider">
                <div className="parallax-slider-inner">
                    {slider_data.map((item) => (
                        <div
                            className="parallax-item not-hide-cursor"
                            data-cursor="View<br>Demo"
                            key={item.id}
                        >
                            {item.link ? (
                                <Link className="cursor-hide" href={item.link}>
                                    <div className="parallax-content">
                                        <span>{item.subtitle}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="parallax-img"></div>
                                </Link>
                            ) : (
                                <div className="cursor-hide">
                                    <div className="parallax-content">
                                        <span>{item.subtitle}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="parallax-img"></div>
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
