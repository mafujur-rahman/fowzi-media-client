import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider } from "@/utils/parallax-slider";


const slider_data = [
    {
        id: 1,
        subtitle: "branding",
        title: "Friday Fashion",
        link: "/friday-fashion-showcase"
    },
    {
        id: 2,
        subtitle: "branding",
        title: "Better Hand",
        link: "/better-hand-showcase"
    },
    {
        id: 3,
        subtitle: "branding",
        title: "Optimal Home Healthcare",
        link: "/optimal-showcase"
    },
    {
        id: 4,
        subtitle: "branding",
        title: "Radiant Future",
        link: "/radiant-showcase"
    },
];

export default function BrandingPortfolioSlider() {
    useEffect(() => {
        const timer = setTimeout(() => {
            parallaxSlider();
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
                                        <span style={{ fontFamily: 'Glacial Indifference' }}>{item.subtitle}</span>
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
