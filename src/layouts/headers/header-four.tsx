'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useSticky from "@/hooks/use-sticky";
import logo_1 from "@/assets/img/fowzi-logo/icon 2.png";

export default function HeaderFour() {
  const { sticky, headerRef, headerFullWidth, adjustMenuBackground } = useSticky();
  const [openOffCanvas, setOpenOffCanvas] = React.useState(false);

  useEffect(() => {
    headerFullWidth();
    adjustMenuBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Inline styles for the off-canvas menu
  const offCanvasMenuStyle = {
    position: 'fixed',
    top: 0,
    right: openOffCanvas ? '0' : '-250px', // Slide in when open
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    transition: 'right 0.3s ease-in-out',
    zIndex: 1000,
  };

  const offCanvasContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    color: 'white',
  };

  const offCanvasListStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const offCanvasListItemStyle = {
    margin: '15px 0',
  };

  const closeButtonStyle = {
    marginTop: '20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <>
      <header>
        <div id="header-sticky" className={`tp-header-3-area mt-20 z-index-5 ${sticky ? 'header-sticky' : ''}`}>
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
                  <div className="tp-header-3-menu-box d-inline-flex align-items-center justify-content-between">
                    <div className="tp-header-3-menu header-main-menu">
                      <nav className="tp-main-menu-content">
                        <ul className="col text-white" style={{ backgroundColor: "#424242", paddingTop: "6px", paddingBottom: "6px", paddingInline: "8px", borderRadius: "30px", fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                          <li><Link href="/">HOME</Link></li>
                          <li><Link href="/services">SERVICES</Link></li>
                          <li><Link href="/about">ABOUT</Link></li>
                          <li><Link href="/portfolio">PORTFOLIO</Link></li>
                          <li><Link href="/case-studies">CASE STUDIES</Link></li>
                          <li><Link href="/contact">CONTACT</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-3-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-social d-none d-sm-block">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <button 
                    onClick={() => setOpenOffCanvas(!openOffCanvas)} 
                    className="tp-header-3-bar tp-offcanvas-open-btn d-xl-none">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Off-Canvas Menu */}
        <div style={offCanvasMenuStyle}>
          <div style={offCanvasContentStyle}>
            <ul style={offCanvasListStyle}>
              <li style={offCanvasListItemStyle}><Link href="/">HOME</Link></li>
              <li style={offCanvasListItemStyle}><Link href="/services">SERVICES</Link></li>
              <li style={offCanvasListItemStyle}><Link href="/about">ABOUT</Link></li>
              <li style={offCanvasListItemStyle}><Link href="/portfolio">PORTFOLIO</Link></li>
              <li style={offCanvasListItemStyle}><Link href="/case-studies">CASE STUDIES</Link></li>
              <li style={offCanvasListItemStyle}><Link href="/contact">CONTACT</Link></li>
            </ul>
            <button 
              onClick={() => setOpenOffCanvas(false)} 
              style={closeButtonStyle}>
              <i className="fa-solid fa-times"></i> Close
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
