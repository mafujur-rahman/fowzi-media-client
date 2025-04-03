"use client";
import React, { useEffect } from "react";
import Script from "next/script";

type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const Testimonial = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
    useEffect(() => {
        if (typeof window !== "undefined" && "Elsight" in window) {
            (window as any).Elsight.init();
        }
    }, []);

  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container ">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
          </div>
        </div>

        {/* Elfsight Widget Container */}
        <div className="elfsight-app-60fd693e-86e9-4480-a066-373c31f7d4db" data-elfsight-app-lazy></div>

        {/* Loading fallback */}
        <div id="reviews-loading" className="text-center py-5">
          <p>Loading reviews...</p>
        </div>
      </div>

      {/* Elfsight Platform Script - Using Next.js Script component */}
      <Script
        id="elfsight-script"
        strategy="afterInteractive"
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        onLoad={() => {
          // Hide loading indicator when script loads
          const loadingElement = document.getElementById('reviews-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
        }}
      />
    </div>
  );
};

export default Testimonial;