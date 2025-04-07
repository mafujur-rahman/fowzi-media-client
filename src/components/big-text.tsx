import Link from "next/link";
import React from "react";

// type 
type IProps = {
  cls?: string;
};

export default function BigText({ cls = "" }: IProps) {
  return (
    <div className={`sv-big-text-area pb-80 mt-20 ${cls}`}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between" >
          <span>DIGITAL DESIGN EXPERIENCE</span>
          <span>FOWZI MEDIA</span>
        </div>
        <div className="sv-big-text-box">
          <h4
            className="sv-big-text tp-char-animation m-0 p-0 text-center"
          >
            <Link href="/contact" className="d-inline-block w-100 text-center">
              <span className="d-inline-block w-100">
                Get in Touch
              </span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
