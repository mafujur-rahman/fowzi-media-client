"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";;
import ServiceSix from "@/components/service/service-six";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";

// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";
import PackagesHero from "@/components/packages/packages-hero";
import { PackagesItems } from "@/components/packages/packages-items";
import PackagesOffer from "@/components/packages/packages-offer";

const PackagesMain = () => {
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            charAnimation();
            fadeAnimation();
            servicePanel();
        }, 100);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper>
            {/* header area start */}
            <HeaderFour />
            {/* header area end */}

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/* packages hero */}
                        <PackagesHero />
                        {/* packages hero */}

                        {/* packages area */}
                        <div className="tp-service-5-area sv-service-style pb-70">
                            <div className="container container-1530">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="tp-service-5-title-box mb-90">
                                            <span className="ab-inner-subtitle mb-20" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                                                <Leaf />
                                                Packages
                                            </span>
                                            <h4 className="tp-service-5-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                                                Reverse-Engineered Packages for a Complete Solution{" "}
                                            </h4>
                                            <p className="pt-10">We know brands need more than just scattered services—they need cohesive, high-impact solutions. That’s why we’ve carefully designed packages that bring together branding, web, photography, and video into one powerful experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <PackagesItems />
                                </div>
                            </div>
                        </div>
                        {/* packages area */}

                        {/* packages area */}
                        <PackagesOffer />
                        {/* packages area */}

                        {/* big text */}
                        <div className="pt-150">
                            <BigText />
                        </div>
                        {/* big text */}
                    </main>

                    {/* footer area */}
                    <FooterFour />
                    {/* footer area */}
                </div>
            </div>
        </Wrapper>
    );
};

export default PackagesMain;
