import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider1 } from "@/utils/parallax-slider";



const slider_data = [
    {
        id: 1,
        subtitle: "Web Development",
        title: "Daisane",
        link: "/daisane-showcase"
    },
    {
        id: 2,
        subtitle: "Web Development",
        title: "Infinity Care",
        link: "/infinity-care-showcase"
    },
    {
        id: 3,
        subtitle: "Web Development",
        title: "Somali Youth",
        link: "/somali-youth-showcase"
    },
    {
        id: 4,
        subtitle: "Web Development",
        title: "Washington Toe Foundation",
        link: "/washington-toe-showcase"
    },
];

export default function DevelopmentPortfolioSlider() {
    useEffect(() => {
        const timer = setTimeout(() => {
            parallaxSlider1();
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
                                        <span style={{ fontFamily: 'Glacial Indifference' }}>{item.subtitle}</span>
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
