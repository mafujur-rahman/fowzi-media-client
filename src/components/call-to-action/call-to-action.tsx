import Link from 'next/link';
import React from 'react';

const AboutCall2Action = () => {
    return (
        <section className="py-5" style={{ backgroundColor: "#141414" }}>
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                            <div>
                                <h2 className="display-5 fw-bold text-white mb-3">
                                    Need Help?
                                </h2>

                                <p className="lead text-white">
                                    Join the Digital Growth Revolution – No Limits! <br />
                                    Launch Your Brand with Impact – No Ordinary Strategies! <br />
                                    Stand Out. Elevate Your Business – No Boring Marketing Allowed!
                                </p>
                            </div>

                            <Link
                                target="_blank" 
                                href="https://calendly.com/fowzimedia/free-consultation?month=2025-03"
                                className="btn btn-light btn-lg px-5 py-3 fw-bold"
                                style={{
                                    borderRadius: "50px",
                                    whiteSpace: "nowrap",
                                    backgroundColor: "#FFD700",
                                    color: "#000",
                                    border: "none"
                                }}
                            >
                                Book Free Consultation Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCall2Action;
