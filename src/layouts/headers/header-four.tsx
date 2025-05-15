import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo_1 from "@/assets/img/fowzi-logo/icon 2.png";

export default function HeaderFour() {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const headerRef = useRef(null);

  useEffect(() => {
    // Function to check the screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Function to handle scroll and adjust font size
    const handleScroll = () => {
      if (headerRef.current && !isMobile) {
        const scrollY = window.scrollY;
        const newFontSize = Math.max(12, 16 - scrollY * 0.1);
        setFontSize(newFontSize);
      }
    };

    // Call the function on initial render
    checkScreenSize();

    // Add resize and scroll event listeners
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <header ref={headerRef}>
        <div id="header-sticky" className="tp-header-3-area mt-20 z-index-5">
          <div className="container container-1740">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo tp-header-3-logo">
                  <Link className="logo-1" href="/">
                    <Image style={{ width: "auto", height: "60px" }} src={logo_1} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-flex justify-content-center">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between w-100">
                    <div className="tp-header-3-menu header-main-menu w-100">
                      <nav className="tp-main-menu-content w-auto">
                        <ul
                          className="d-flex list-unstyled mb-0 text-white"
                          style={{
                            backgroundColor: "#424242",
                            padding: "6px 12px",
                            borderRadius: "30px",
                            fontFamily: 'Glacial Indifference',
                            fontWeight: 'bold',
                            display: "inline-flex",
                            gap: "10px",
                            width: "fit-content",
                            margin: "0 auto",
                            justifyContent: "center",
                          }}
                        >
                          <li><Link href="/" className="nav-link" style={{ fontSize: `${fontSize}px` }}>Home</Link></li>

                          <li className="nav-item dropdown" style={{ position: "relative" }}>
                            <a
                              className="nav-link"
                              href="#"
                              style={{ fontSize: `${fontSize}px` }}
                            >
                              Services
                            </a>
                            <ul
                              className="dropdown-menu show-on-hover"
                              style={{
                                top: "100%",
                                left: 0,
                                display: "none",
                                position: "absolute",
                                zIndex: 1000,
                              }}
                            >
                              <li><Link className="dropdown-item" href="/videography-details">Video Production</Link></li>
                              <li><Link className="dropdown-item" href="/branding-details">Branding</Link></li>
                              <li><Link className="dropdown-item" href="/development-details">Website Development</Link></li>

                              <li><Link className="dropdown-item" href="/photography-details">Photography</Link></li>
                              <li><Link className="dropdown-item" href="/photography-details">Marketing</Link></li>
                            </ul>
                          </li>


                          <li><Link href="/about-us" className="nav-link" style={{ fontSize: `${fontSize}px` }}>About</Link></li>

                          <li className="nav-item dropdown" style={{ position: "relative" }}>
                            <a
                              className="nav-link"
                              href="#"
                              style={{ fontSize: `${fontSize}px` }}
                            >
                              Portfolio
                            </a>
                            <ul
                              className="dropdown-menu show-on-hover"
                              style={{
                                top: "100%",
                                left: 0,
                                display: "none",
                                position: "absolute",
                                zIndex: 1000,
                              }}
                            >
                              <li><Link className="dropdown-item" href="/videography-portfolio">Video Production</Link></li>
                              <li><Link className="dropdown-item" href="/branding-portfolio-page">Branding</Link></li>
                              <li><Link className="dropdown-item" href="/development-portfolio">Website Development</Link></li>
                              <li><Link className="dropdown-item" href="/photography-portfolio">Photography</Link></li>
                              <li><Link className="dropdown-item" href="/photography-portfolio">Marketing</Link></li>
                            </ul>
                          </li>


                          <li className="nav-item dropdown" style={{ position: "relative" }}>
                            <a
                              className="nav-link"
                              href="#"
                              style={{ fontSize: `${fontSize}px` }}
                            >
                              Pricing
                            </a>
                            <ul
                              className="dropdown-menu show-on-hover"
                              style={{
                                top: "100%",
                                left: 0,
                                display: "none",
                                position: "absolute",
                                zIndex: 1000,
                              }}
                            >
                              <li><Link className="dropdown-item" href="/request-a-quote">Request a quote</Link></li>
                              <li><Link className="dropdown-item" href="/pricing">Web care Plans</Link></li>
                              
                            </ul>
                          </li>


                          <li><Link href="/contact" className="nav-link" style={{ fontSize: `${fontSize}px` }}>Contact</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <a target="_blank" href="https://www.linkedin.com/company/fowzimedia/" ><i className="fa-brands fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://www.facebook.com/fowzimedia/"><i className="fa-brands fa-facebook"></i></a>
                    <a target="_blank" href="https://www.instagram.com/fowzimedia/"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <button onClick={() => setOpenOffCanvas(!openOffCanvas)} className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Off-Canvas Menu using Bootstrap */}
        <div className={`offcanvas offcanvas-end ${openOffCanvas ? 'show' : ''}`} tabIndex={-1} style={{ visibility: openOffCanvas ? 'visible' : 'hidden' }} >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" onClick={() => setOpenOffCanvas(false)}></button>
          </div>
          <div className="offcanvas-body" style={{ fontFamily: 'Glacial Indifference' }}>
            <ul className="list-unstyled">
              <li className="py-2">
                <Link className="nav-link text-dark fw-semibold ps-2" href="/">Home</Link>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown py-2">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold ps-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/videography-details">Video Production</Link></li>
                  <li><Link className="dropdown-item" href="/branding-details">Branding</Link></li>
                  <li><Link className="dropdown-item" href="/development-details">Website Development</Link></li>
                  <li><Link className="dropdown-item" href="/photography-details">Photography</Link></li>
                  <li><Link className="dropdown-item" href="/photography-details">Marketing</Link></li>
                </ul>
              </li>

              <li className="py-2">
                <Link className="nav-link text-dark fw-semibold ps-2" href="/about-us">About</Link>
              </li>

              {/* Portfolio Dropdown */}
              <li className="nav-item dropdown py-2">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold ps-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/videography-portfolio">Video Production</Link></li>
                  <li><Link className="dropdown-item" href="/branding-portfolio-page">Branding</Link></li>
                  <li><Link className="dropdown-item" href="/development-portfolio">Website Development</Link></li>                 
                  <li><Link className="dropdown-item" href="/photography-portfolio">Photography</Link></li>
                  <li><Link className="dropdown-item" href="/photography-portfolio">Marketing</Link></li>
                </ul>
              </li>

              {/* Pricing Dropdown */}
              <li className="nav-item dropdown py-2">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold ps-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricing
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/request-a-quote">Request a Quote</Link></li>
                  <li><Link className="dropdown-item" href="/pricing">Web Care Plans</Link></li>
                  
                </ul>
              </li>



              <li className="py-2">
                <Link className="nav-link text-dark fw-semibold ps-2" href="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </header>
      <style jsx>{`
  .nav-item.dropdown:hover .dropdown-menu {
    display: block !important;
  }
`}</style>

    </>
  );
}