"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import TeamArea from "@/components/team/team-area";


const TeamMain = () => {


  return (

    <main>
      {/* team hero */}
      <div className="tm-hero-area tm-hero-ptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tm-hero-content">
                <span className="tm-hero-subtitle" style={{ fontFamily: 'Glacial Indifference' }}>Fowzi Media Studio</span>
                <h4 className="tm-hero-title tp-char-animation">
                  Talented team
                </h4>
              </div>
              <div className="tm-hero-text tp_title_anim">
                <p style={{ fontFamily: 'Glacial Indifference' }}>
                  We’re a diverse team that works as fancies attention to
                  details, enjoys beers on Friday nights and aspires to
                  design the dent in the universe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team hero */}

      {/* team area */}
      <TeamArea />
      {/* team area */}

    </main>

  );
};

export default TeamMain;
