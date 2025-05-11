"use client";

import Head from "next/head";

export default function ChildSafetyMain() {
  return (
    <>
      <Head>
        <title>Child Safety Video | Portfolio</title>
        <meta name="description" content="Watch our professional Child Safety video in full screen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="video-fullscreen-wrapper">
        <iframe
          src="https://player.vimeo.com/video/1059190345?autoplay=1"
          title="Child Safety Video"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="video-iframe"
        ></iframe>
      </div>

      <style jsx>{`
        .video-fullscreen-wrapper {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-iframe {
          border: none;
        }
      `}</style>
    </>
  );
}
