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
                  <h4 className="tp-footer-3-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Case Studies</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center" style={{ fontFamily: 'Glacial Indifference' }}>
                    < input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
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
                    Drop us a line sed id semper <br />
                    risus in hend rerit.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                    {new Date().getFullYear()} Fowzi Media <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span style={{ fontFamily: 'Glacial Indifference' }}>
                      <a href="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                      target="_blank">1729 N 2nd St Studio 204A,Minneapolis, MN 55411</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
                    <span>P: <a href="tel:+725214456">(612)466-4688</a></span>
                    <span>E: <a href="mailto:contact@liko.com">hello@fowzimedia.com</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
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
