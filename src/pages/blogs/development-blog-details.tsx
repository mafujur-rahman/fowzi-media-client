"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";
import { IBlogDT } from "@/types/blog-d-t";
import DevelopmentBlogDetailsBreadcrumb from "@/components/blog/details/development-blog-breadcrumb";
import DevelopmentBlogArea from "@/components/blog/details/development-blog-area";

// animation
import { charAnimation } from "@/utils/title-animation";
import BlogDetailsRelatedPosts from "@/components/blog/details/blog-details-related-posts";




// prop type
type IProps = {
  blog: IBlogDT;
};

const DevelopmentBlogDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <DevelopmentBlogDetailsBreadcrumb />
            {/* blog details hero */}

            {/* blog details area */}
            <DevelopmentBlogArea/>
            {/* blog details area */}

            {/* related posts */}
            <BlogDetailsRelatedPosts/>
            {/* related posts */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default DevelopmentBlogDetailsMain;
