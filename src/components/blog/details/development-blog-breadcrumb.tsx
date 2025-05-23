import React from "react";
import Image from "next/image";
import overlay from "@/assets/img/blogs/development/hero.jpg";

export default function DevelopmentBlogDetailsBreadcrumb() {
  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(/assets/img/inner-blog/blog-details/blog-details-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ✅ Overlay image with proper responsiveness */}
        <div
          className="blog-details-overlay-shape"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Image
            src={overlay}
            alt="overlay"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  Development <i>. 14 Feb, 2024</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  10 Web Development Trends in 2024
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <span>
                    Fowzi Media / <i>4 min</i>
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
