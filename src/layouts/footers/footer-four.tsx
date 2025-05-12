import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/fowzi-logo/icon 1.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                      <li><a href="/">Home</a></li>
                      <li><a href="/service">Services</a></li>
                      <li><a href="/about-us">About</a></li>
                      <li><a href="portfolio-wrapper">Portfolio</a></li>
                      <li><a href="/blogs">Blogs</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title" >Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center" style={{ fontFamily: 'Glacial Indifference' }}>
                    < input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100" style={{ fontFamily: 'Glacial Indifference' }}>
                  We bring together branding, web, photography, and video into one powerful experience.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright" >
                    {new Date().getFullYear()} Fowzi Media <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title" >Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span style={{ fontFamily: 'Glacial Indifference' }}>
                      <a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                        target="_blank">1729 N 2nd St Ste 204B, Minneapolis, MN 55411</a>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item" >
                    <span>P: <a href="">(612)466-4688</a></span>
                  </div>
                  <div>
                    <span style={{color: "white"}}>E: <a href="" style={{color: "gray"}}>hello@fowzimedia.com</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a target="_blank" href="https://www.linkedin.com/company/fowzimedia/"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a target="_blank" href="https://www.facebook.com/fowzimedia/"><i className="fa-brands fa-facebook-f"></i></a>
                    <a target="_blank" href="https://www.instagram.com/fowzimedia/"><i className="fa-brands fa-instagram"></i></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
