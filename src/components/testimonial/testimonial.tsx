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
    let observer: MutationObserver;
    let intervalId: NodeJS.Timeout;

    const applyOverlay = () => {
      const elfsightFooters = document.querySelectorAll(
        '[class*="eapps-widget"] [class*="footer"], [class*="eapps-widget"] a[href*="elfsight"]'
      );

      elfsightFooters.forEach((el) => {
        if (el instanceof HTMLElement && !el.querySelector(".custom-overlay")) {
          const overlay = document.createElement("div");
          overlay.className = "custom-overlay";
          overlay.style.position = "absolute";
          overlay.style.top = "-10px";
          overlay.style.left = "-5px";
          overlay.style.width = "calc(100% + 20px)";
          overlay.style.height = "calc(100% + 20px)";
          overlay.style.backgroundColor = "#ffffff";
          overlay.style.zIndex = "9999";
          overlay.style.borderRadius = "6px";
          overlay.style.pointerEvents = "none"; // Optional: ensures click-through

          el.style.position = "relative";
          el.appendChild(overlay);
        }
      });
    };

    // Initial call
    applyOverlay();

    // Observer: Watch for DOM changes in the body
    observer = new MutationObserver(() => {
      applyOverlay();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Interval fallback: Every 2 seconds, re-check just in case
    intervalId = setInterval(() => {
      applyOverlay();
    }, 2000);

    // Cleanup
    return () => {
      if (observer) observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);





  return (
    <section className={`tp-award-area ${cls}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
            <h2 className="ab-inner-funfact-title tp_title_anim">
              What Our Clients Say
            </h2>
          </div>
        </div>

        <div className="row align-items-stretch justify-content-center text-center">
          {/* Left Column - Elfsight Widget */}
          <div className="col-lg-6 mb-4 mb-lg-0 mx-auto">
            <div className="elfsight-container h-100 p-3  position-relative d-flex justify-content-center align-items-center">

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
          <div className="col-lg-6 mx-auto">
            <div className="video-reviews h-100 p-4  d-flex flex-column">
              <div className="position-relative flex-grow-1 d-flex flex-column align-items-center">
                <div className="rounded overflow-hidden d-flex justify-content-center mb-3" style={{ height: "640px" }}>
                  <iframe
                    src={videoReviews[activeIndex].url}
                    title={videoReviews[activeIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: "none",
                      width: "360px",
                      height: "640px",
                      display: "block",
                      maxWidth: "100%",
                    }}
                    loading="lazy"
                  ></iframe>
                </div>

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
