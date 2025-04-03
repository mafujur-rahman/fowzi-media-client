import React, { useEffect } from 'react';

const AboutCall2Action = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="py-5 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#141414" }}>
            <div className="container text-center text-md-start">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-white mb-3">
                            Need Help?
                        </h2>
                        <p className="lead text-white">
                            Join the Digital Growth Revolution – No Limits! <br />
                            Launch Your Brand with Impact – No Ordinary Strategies! <br />
                            Stand Out. Elevate Your Business – No Boring Marketing Allowed!
                        </p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <div className="calendly-inline-widget" 
                            data-url="https://calendly.com/fowzimedia/free-consultation" 
                            style={{ minWidth: "320px", maxWidth: "400px", height: "550px", borderRadius: "10px", overflow: "hidden", backgroundColor: "#fff" }}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCall2Action;
