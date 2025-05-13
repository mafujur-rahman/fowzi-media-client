import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamSection = () => {
    const teamData = [
        { id: 1, name: "Abdurahman Ali", designation: "Photographer/Videographer", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh..." },
        { id: 2, name: "Joy Sutradhor", designation: "Software Engineer", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh..." },
        { id: 3, name: "Nazmul Islam", designation: "Graphics Designer", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh..." },
        { id: 4, name: "Ishak Yasin", designation: "Videographer", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh..." },
        { id: 5, name: "Hussein Noor", designation: "Senior Strategist", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh...",},
        { id: 6, name: "Shugri Farah", designation: "Project Manager", bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh..." },
    ];

    const [currentIndex, setCurrentIndex] = useState(4);
    const nameRef = useRef(null);
    const designationRef = useRef(null);
    const bioRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const animateContent = () => {
        gsap.to([nameRef.current, designationRef.current, bioRef.current], {
            duration: 0.5,
            opacity: 0,
            y: 10,
            onComplete: () => {
                gsap.to([nameRef.current, designationRef.current, bioRef.current], {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                });
            },
        });
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
        animateContent();
    };


    const member = teamData[currentIndex];

    return (
        <section className="py-5 mb-20">
            <div className="container">
                <div className="rounded-4 p-5 shadow text-white" style={{ backgroundColor: '#231f20' }}>
                    <div className="row flex-column flex-md-row align-items-start g-4">
                        {/* Left */}
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <h2 ref={nameRef} className="fw-bold display-6 mb-2">{member.name}</h2>
                            <p ref={designationRef} className="fs-5 text-secondary">{member.designation}</p>
                        </div>

                        {/* Divider - Vertical on desktop, Horizontal on mobile */}
                        <div className="col-12 col-md-1 d-flex justify-content-center align-items-center">
                            {/* Vertical divider for medium screens and up */}
                            <div className="d-none d-md-block vr" 
                                style={{
                                    backgroundColor: 'white',
                                    width: '4px',
                                    minHeight: '150px',
                                    borderRadius: '10px'
                                }}>
                            </div>
                            
                            {/* Horizontal divider for mobile */}
                            <div className="d-md-none w-100 my-3" 
                                style={{
                                    backgroundColor: '#6c757d',
                                    height: '4px',
                                    borderRadius: '10px'
                                }}>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="col-12 col-md-7 text-center text-md-start">
                            <p ref={bioRef} className="text-light" style={{ lineHeight: '1.7' }}>{member.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;