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
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import BlogDetailsBreadcrumb from "@/components/blog/details/blog-details-breadcrumb";
// animation
import { charAnimation } from "@/utils/title-animation";


// prop type
type IProps = {
  blog: IBlogDT;
};

const BlogDetailsMain = ({ blog }: IProps) => {
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
            <BlogDetailsBreadcrumb />
            {/* blog details hero */}

            {/* blog details area */}
            <BlogDetailsArea/>
            {/* blog details area */}

          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsMain;
