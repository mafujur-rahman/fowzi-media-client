"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const Testimonial = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoReviews = [
    {
      id: 1,
      url: "https://html.hixstudio.net/videos/liko/liko-3.mp4",
      title: "Client Review 1",
    },
    {
      id: 2,
      url: "https://html.hixstudio.net/videos/liko/liko-3.mp4",
      title: "Client Review 2",
    },
    {
      id: 3,
      url: "https://html.hixstudio.net/videos/liko/liko-3.mp4",
      title: "Client Review 3",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videoReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videoReviews.length - 1 ? 0 : prev + 1));
  };

  // Add a white overlay box on the Elfsight footer after widget loads
  useEffect(() => {
    const interval = setInterval(() => {
      const elfsightFooters = document.querySelectorAll('[class*="eapps-widget"] [class*="footer"], [class*="eapps-widget"] a[href*="elfsight"]');
      elfsightFooters.forEach((el) => {
        if (el instanceof HTMLElement) {
          const overlay = document.createElement("div");
          overlay.style.position = "absolute";
          overlay.style.top = "-10px"; // move it up
          overlay.style.left = "-5px"; // expand left
          overlay.style.width = "calc(100% + 20px)";
          overlay.style.height = "calc(100% + 20px)";
          overlay.style.backgroundColor = "#ffffff";
          overlay.style.zIndex = "9999";
          overlay.style.borderRadius = "6px"; // optional

          el.style.position = "relative";
          el.appendChild(overlay);
        }
      });
    }, 2000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <section className={`tp-award-area ${cls}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
            <h2 className="section-title text-xl sm:text-lg md:text-base">
              What Our Clients Say
            </h2>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* Left Column - Elfsight Widget */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="elfsight-container h-100 p-3 rounded shadow-sm bg-white position-relative">
              <div
                className="elfsight-app-60fd693e-86e9-4480-a066-373c31f7d4db"
                data-elfsight-app-lazy
              ></div>

              <div id="reviews-loading" className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading reviews...</p>
              </div>
            </div>
          </div>

          {/* Right Column - Video Reviews */}
          <div className="col-lg-6">
            <div className="video-reviews h-100 p-4 bg-white rounded shadow-sm d-flex flex-column">
              <h3 className="mb-4 text-center">Client Video Reviews</h3>

              <div className="position-relative flex-grow-1 d-flex flex-column align-items-center">
                <div className="ratio ratio-16x9 rounded overflow-hidden w-100 mb-3">
                  <iframe
                    src={videoReviews[activeIndex].url}
                    title={videoReviews[activeIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Active Status Buttons (dots) below video */}
                <div className="d-flex justify-content-center mt-2 mb-2">
                  {videoReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`btn btn-sm mx-1 rounded-circle ${activeIndex === index ? "bg-black" : "bg-secondary"}`}
                      style={{ width: "8px", height: "8px", padding: 0 }}
                      aria-label={`Go to review ${index + 1}`}
                    ></button>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                  style={{ width: "40px", height: "40px", zIndex: 1 }}
                  aria-label="Previous video"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={handleNext}
                  className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                  style={{ width: "40px", height: "40px", zIndex: 1 }}
                  aria-label="Next video"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Script
        id="elfsight-script"
        strategy="afterInteractive"
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        onLoad={() => {
          const loadingElement = document.getElementById("reviews-loading");
          if (loadingElement) {
            loadingElement.style.display = "none";
          }
        }}
      />
    </section>
  );
};

export default Testimonial;
