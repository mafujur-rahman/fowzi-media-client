import React from "react";
import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

export default function BlogItem({ item }: { item: IBlogDT }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        <Image src={item.img!} alt="blog-img" style={{ height: "380px" }} />
        <div className="tp-blog-meta">
          <span style={{ fontFamily: 'Glacial Indifference' }}>{item.date}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span style={{ fontFamily: 'Glacial Indifference' }}>{item.category}</span>
        <h4 className="tp-blog-title-sm" style={{ fontFamily: 'Glacial Indifference', fontWeight: 'bold' }}>
        <Link href={item.author}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
