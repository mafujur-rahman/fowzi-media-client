import React, { useEffect } from 'react';

const AboutCall2Action = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="tp-footer-3-title tp_title_anim mb-3" style={{ fontSize: "45px" }}>Need Help?</h2>
            <p className="tp-footer-3-title pt-30" style={{ fontSize: "20px" }}>
              Join the Digital Growth Revolution – No Limits!
            </p>
            <p className="tp-footer-3-title" style={{ fontSize: "20px" }}>
              Launch Your Brand with Impact – No Ordinary Strategies!
            </p>
            <p className="tp-footer-3-title" style={{ fontSize: "20px" }}>
              Stand Out. Elevate Your Business – No Boring Marketing Allowed!
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/fowzimedia/free-consultation"
              style={{
                minWidth: "auto",
                maxWidth: "auto",
                height: "400px",
                backgroundColor: "",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCall2Action;
