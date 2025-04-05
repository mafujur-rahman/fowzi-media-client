import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/blogs/videography/hero.jpg";

export default function VideographyBlogDetailsBreadcrumb() {
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(/assets/img/inner-blog/blog-details/blog-details-1.jpg)`,
        }}
      >
        <div className="blog-details-overlay-shape">
          <Image src={overlay} alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  Videography <i>. 1 March, 2024</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                Mastering Cinematic B-Roll for Storytelling
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <span>
                    Fowzi Media / <i>5 min</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
