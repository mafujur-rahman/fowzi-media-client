import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo_1 from "@/assets/img/fowzi-logo/icon 2.png";

export default function HeaderFour() {
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track screen size
  const [fontSize, setFontSize] = useState(16); // Initial font size for menu items
  const headerRef = useRef(null); // Ref for the header element

  useEffect(() => {
    // Function to check the screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set isMobile based on screen width
    };

    // Function to handle scroll and adjust font size
    const handleScroll = () => {
      if (headerRef.current && !isMobile) {
        const scrollY = window.scrollY;
        const newFontSize = Math.max(12, 16 - scrollY * 0.1); // Adjust font size based on scroll
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
                    <Image style={{ width: "60px", height: "60px" }} src={logo_1} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-xl-block">
                <div className="tp-header-3-menu-wrap text-center">
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between w-100">
                    <div className="tp-header-3-menu header-main-menu w-100">
                      <nav className="tp-main-menu-content w-100">
                        <ul className="d-flex justify-content-between list-unstyled mb-0 w-100 text-white" style={{ backgroundColor: "#424242", padding: "6px 8px", borderRadius: "30px", fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          <li><Link href="/" style={{ fontSize: `${fontSize}px` }}>HOME</Link></li>
                          <li><Link href="/service" style={{ fontSize: `${fontSize}px` }}>SERVICES</Link></li>
                          <li><Link href="/about-us" style={{ fontSize: `${fontSize}px` }}>ABOUT</Link></li>
                          <li><Link href="/portfolio-wrapper" style={{ fontSize: `${fontSize}px` }}>PORTFOLIO</Link></li>
                          <li><Link href="/blogs" style={{ fontSize: `${fontSize}px` }}>BLOGS</Link></li>
                          <li><Link href="/contact" style={{ fontSize: `${fontSize}px` }}>CONTACT</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
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
        <div className={`offcanvas offcanvas-end ${openOffCanvas ? 'show' : ''}`} tabIndex={-1} style={{ visibility: openOffCanvas ? 'visible' : 'hidden' }}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button type="button" className="btn-close" onClick={() => setOpenOffCanvas(false)}></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/service">SERVICES</Link></li>
              <li><Link href="/about-us">ABOUT</Link></li>
              <li><Link href="/portfolio-wrapper">PORTFOLIO</Link></li>
              <li><Link href="/blogs">BLOGS</Link></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}