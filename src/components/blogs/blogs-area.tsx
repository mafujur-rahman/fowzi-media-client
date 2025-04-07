import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blog_modern } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import { IBlogDT } from "@/types/blog-d-t";
import BlogItem from "../blog/blog-item/blog-item";

export default function BlogsArea() {
  const blog_items = [...blog_modern];
  const [featuredBlog, ...otherBlogs] = blog_items;
  
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(otherBlogs, 6);

  return (
    <>
      <div className="tp-blog-standard-area pt-170">
        <div className="container container-1500">
          <div className="row">
            <div className="col-xl-12">
              <Link href={featuredBlog.author} passHref legacyBehavior>
                <div className="container tp-blog-standard-thumb-box p-relative" style={{ cursor: 'pointer' }}>
                  <Image 
                    data-speed=".8" 
                    src={featuredBlog.img!} 
                    alt="blog-img"  
                    style={{width: '1200px', height: 'auto'}}
                  />
                  <div className="tp-blog-standard-title-box d-none d-sm-block">
                    <h4
                      className="tp-blog-standard-title tp-char-animation"
                      dangerouslySetInnerHTML={{ __html: featuredBlog.title }}
                    ></h4>
                  </div>
                  <div className="tp-blog-standard-meta d-none d-sm-block">
                    <span>
                      {featuredBlog.date.split(".")[1]} <br />{" "}
                      {featuredBlog.date.split(".")[0]}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-details-realated-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            {currentItems.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <Link href={item.author} passHref legacyBehavior>
                  <div style={{ cursor: 'pointer' }}>
                    <BlogItem item={item} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}