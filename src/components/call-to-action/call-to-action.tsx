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
            <h2 className="display-5 fw-bold text-white mb-3">Need Help?</h2>
            <p className="lead text-white">
              Join the Digital Growth Revolution – No Limits! <br />
              Launch Your Brand with Impact – No Ordinary Strategies! <br />
              Stand Out. Elevate Your Business – No Boring Marketing Allowed!
            </p>
          </div>

          {/* Calendly Widget */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/fowzimedia/free-consultation"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "600px",
                backgroundColor: "#fff",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCall2Action;
