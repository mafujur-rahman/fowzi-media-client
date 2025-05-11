import React, { useEffect } from 'react';

const AboutCall2Action = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#141414" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/fowzimedia/free-consultation"
              style={{
                minWidth: "100%",
                height: "700px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCall2Action;
