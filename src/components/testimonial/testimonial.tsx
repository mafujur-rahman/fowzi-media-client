"use client";
import Script from "next/script";
import { useState, useEffect } from "react";

type IProps = {
  cls?: string;
  abStyle?: boolean;
};

const Testimonial = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Sample video data
  const videoReviews = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Client Review 1"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/anothervideoid",
      title: "Client Review 2"
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/yetanothervideoid",
      title: "Client Review 3"
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videoReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === videoReviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (widgetLoaded) {
      // Hide the widget footer after it loads
      const hideWidgetFooter = () => {
        const widgetContainer = document.querySelector('.elfsight-app-60fd693e-86e9-4480-a066-373c31f7d4db');
        if (widgetContainer) {
          const footer = widgetContainer.querySelector('[data-testid="footer"], .eapps-widget-footer');
          if (footer) {
            (footer as HTMLElement).style.display = 'none';
          }
        }
      };

      // Try immediately and set interval in case widget loads progressively
      hideWidgetFooter();
      const interval = setInterval(hideWidgetFooter, 500);
      
      return () => clearInterval(interval);
    }
  }, [widgetLoaded]);

  return (
    <section className={`tp-award-area ${cls}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* Left Column - Elfsight Widget */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="elfsight-container h-100 p-3 rounded shadow-sm bg-white">
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

          {/* Right Column - Client Video Reviews Carousel */}
          <div className="col-lg-6">
            <div className="video-reviews h-100 p-4 bg-white rounded shadow-sm d-flex flex-column">
              <h3 className="mb-4 text-center">Client Video Reviews</h3>
              
              <div className="position-relative flex-grow-1">
                <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden">
                  <iframe 
                    src={videoReviews[activeIndex].url}
                    title={videoReviews[activeIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                    loading="lazy"
                  ></iframe>
                </div>
                
                <button 
                  onClick={handlePrev}
                  className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                  style={{ width: '40px', height: '40px', zIndex: 1 }}
                  aria-label="Previous video"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  onClick={handleNext}
                  className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                  style={{ width: '40px', height: '40px', zIndex: 1 }}
                  aria-label="Next video"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              
              <div className="d-flex justify-content-center mt-3">
                {videoReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`btn btn-sm mx-1 rounded-circle ${activeIndex === index ? 'bg-black' : 'bg-secondary'}`}
                    style={{ width: '10px', height: '10px', padding: 0 }}
                    aria-label={`Go to review ${index + 1}`}
                  ></button>
                ))}
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
          const loadingElement = document.getElementById('reviews-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
          setWidgetLoaded(true);
        }}
      />
    </section>
  );
};

export default Testimonial;