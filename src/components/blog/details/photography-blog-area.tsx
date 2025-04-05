import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree } from "@/components/svg";
import details_thumb_1 from "@/assets/img/blogs/photography/2.jpg";
import details_thumb_2 from "@/assets/img/blogs/photography/3.jpg";
import details_thumb_3 from "@/assets/img/blogs/photography/4.jpg";

export default function PhotographyBlogArea() {
    return (
        <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="postbox__wrapper">
                            <div className="blog-details-top-text">
                                <p>
                                Photography composition is an essential skill for any photographer looking to tell compelling stories through images. It’s not just about taking random shots—it’s about capturing meaningful moments that convey emotion and narrative. The key to great photography lies in thoughtful composition, lighting, and perspective, which work together to enhance the subject and mood of each shot.{" "}
                                </p>
                            </div>
                            <div className="blog-details-left-content">
                                <h4 className="blog-details-left-title">
                                Understanding the Power of Photography Composition
                                </h4>
                                <p className="mb-20">
                                In 2024, photography composition has evolved beyond just framing a shot—it’s an essential tool for telling compelling visual stories. Every element of composition, from perspective to balance, helps to shape the emotional tone of a photograph, adding depth and meaning. Whether you’re capturing vast landscapes or intimate portraits, each shot should enhance the story, engage the viewer, and create a visual flow that supports the intended message.
                                </p>
                            </div>
                            <div className="blog-details-thumb-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="blog-details-thumb">
                                            <Image
                                                className="w-100 mb-20"
                                                src={details_thumb_1}
                                                alt="details-thumb"
                                                style={{ height: "auto" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="blog-details-thumb">
                                            <Image
                                                className="w-100 mb-20"
                                                src={details_thumb_2}
                                                alt="details-thumb"
                                                style={{ height: "auto" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-left-content">
                                <h4 className="blog-details-left-title">
                                Collaboration & Creative Vision in Photography Composition
                                </h4>
                                <p>
                                In 2024, successful photography goes beyond just capturing images—it’s about collaboration and creative vision. Photographers, directors, and editors must communicate effectively, understand the subjects essence, and translate that vision into every shot. Unlike random snapshots, modern photography requires a blend of creativity, feedback, and multiple adjustments to capture the perfect composition that enhances the overall story.
                                </p>
                            </div>
                            <div className="blog-details-blockquote">
                                <blockquote>
                                    <span className="quote-icon">
                                        <QuoteThree />
                                    </span>
                                    <p>{"Don't"} watch the clock; do what it does. keep going.</p>
                                    <span className="blockquote-info">Sam Levenson</span>
                                </blockquote>
                            </div>
                            <div className="blog-details-left-content">
                                <p>
                                At Fowzi Media, we know that time is vital in photography production. A successful shoot respects both creativity and deadlines. Our team of experts combines artistry with precision, ensuring each photograph not only captures the perfect moment but also aligns seamlessly with the overall visual narrative.
                                </p>
                            </div>
                            <div className="blog-details-thumb-box">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="blog-details-thumb">
                                            <Image
                                                src={details_thumb_3}
                                                alt="details-thumb"
                                                style={{ height: "auto" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-left-content">
                                <h4 className="blog-details-left-title">
                                Why Photography Composition Can Elevate Your Storytelling?
                                </h4>
                                <p>
                                Photography composition isn’t just about framing a beautiful shot—it’s a powerful tool for visual storytelling. Proper composition can enhance your narrative, evoke emotion, and add depth to your images. In today’s world of visual content, carefully crafted compositions can make your work stand out, connect emotionally with your audience, and leave a lasting impression. Whether you’re capturing a portrait, a landscape, or a moment in time, your composition should reflect the essence of the story youre telling.

                                </p>
                                <p>
                                At Fowzi Media, we believe great photography isn’t just about perfect lighting or subject placement—it’s about capturing the heart of the story, engaging the viewer, and elevating the overall experience. Thoughtfully composed photographs are where your visual storytelling truly thrives.


                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}
