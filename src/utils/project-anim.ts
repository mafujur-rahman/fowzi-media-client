import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from '@/plugins';

function projectThreeAnimation() {
  if (document.querySelectorAll(".tp-project-3-area").length > 0) {
    let mm = gsap.matchMedia();

    // Animation for large devices (min-width: 1200px)
    mm.add("(min-width: 1200px)", () => {
      gsap.set(".tp-project-3-wrap .pro-img-1 img", {
        x: "500",
      });
      gsap.set(".tp-project-3-wrap .pro-img-2 img", {
        x: "-500",
      });

      let projects: any = gsap.utils.toArray(".tp-project-3-wrap");

      projects.forEach((item: any) => {
        let $this: any = $(item);

        gsap.to($this.find(".pro-img-1 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: true,
          },
        });

        gsap.to($this.find(".pro-img-2 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: false,
          },
        });

        // Apply transformOrigin directly to the images
        gsap.set($this.find(".pro-img-1 img"), {
          transformOrigin: "50% 50%",
        });

        gsap.set($this.find(".pro-img-2 img"), {
          transformOrigin: "50% 50%",
        });
      });
    });

    // Animation for medium devices (min-width: 768px)
    mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
      gsap.set(".tp-project-3-wrap .pro-img-1 img", {
        x: "300",
      });
      gsap.set(".tp-project-3-wrap .pro-img-2 img", {
        x: "-300",
      });

      let projects: any = gsap.utils.toArray(".tp-project-3-wrap");

      projects.forEach((item: any) => {
        let $this: any = $(item);

        gsap.to($this.find(".pro-img-1 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: true,
          },
        });

        gsap.to($this.find(".pro-img-2 img"), {
          x: "0",
          scrollTrigger: {
            trigger: $this,
            start: "top 18%",
            end: "bottom 10%",
            scrub: 1,
            pin: false,
          },
        });

        // Apply transformOrigin directly to the images
        gsap.set($this.find(".pro-img-1 img"), {
          transformOrigin: "50% 50%",
        });

        gsap.set($this.find(".pro-img-2 img"), {
          transformOrigin: "50% 50%",
        });
      });
    });
  }
}

function projectDetailsPin() {
  let mm = gsap.matchMedia();

  // Pin animation for large devices (min-width: 1400px)
  mm.add("(min-width: 1400px)", () => {
    if ($('.project-details-1-area').length > 0) {
      ScrollTrigger.create({
        trigger: ".project-details-1-area",
        start: "top top",
        end: "bottom 100%",
        pin: ".project-details-1-right-wrap",
        pinSpacing: false,
      });
    }
  });

  // Pin animation for medium devices (min-width: 768px)
  mm.add("(min-width: 768px) and (max-width: 1399px)", () => {
    if ($('.project-details-1-area').length > 0) {
      ScrollTrigger.create({
        trigger: ".project-details-1-area",
        start: "top top",
        end: "bottom 100%",
        pin: ".project-details-1-right-wrap",
        pinSpacing: false,
      });
    }
  });
}

function projectDetailsVideoPin() {
  let mm = gsap.matchMedia();

  // Video pin animation for large devices (min-width: 1200px)
  mm.add("(min-width: 1200px)", () => {
    const projectDetails2Area = document.querySelector('.project-details-2-area');
    const projectDetailsVideo = document.querySelector('.project-details-video');

    if (projectDetails2Area && projectDetailsVideo) {
      ScrollTrigger.create({
        trigger: projectDetails2Area,
        start: "top top",
        end: "bottom -100%",
        pin: projectDetailsVideo,
        pinSpacing: false,
      });
    }
  });

  // Video pin animation for medium devices (min-width: 768px)
  mm.add("(min-width: 768px) and (max-width: 1199px)", () => {
    const projectDetails2Area = document.querySelector('.project-details-2-area');
    const projectDetailsVideo = document.querySelector('.project-details-video');

    if (projectDetails2Area && projectDetailsVideo) {
      ScrollTrigger.create({
        trigger: projectDetails2Area,
        start: "top top",
        end: "bottom -100%",
        pin: projectDetailsVideo,
        pinSpacing: false,
      });
    }
  });

  // Video progress and play/pause functionality
  const progress = document.getElementById("progress") as HTMLProgressElement | null;
  const timer = document.getElementById("timer") as HTMLElement | null;
  const videoProgressBtn = document.getElementById("play") as HTMLElement | null;
  const video = document.querySelector("video") as HTMLVideoElement | null;

  function progressLoop() {
    if (video && progress && timer) {
      setInterval(function () {
        progress.value = Math.round((video.currentTime / video.duration) * 100);
        timer.innerHTML = `${Math.round(video.currentTime)} seconds`;
      }, 1000);
    }
  }

  function playPause() {
    if (video && videoProgressBtn) {
      if (video.paused) {
        video.play();
        videoProgressBtn.innerHTML = "&#10073;&#10073;"; // Pause symbol
      } else {
        video.pause();
        videoProgressBtn.innerHTML = "►"; // Play symbol
      }
    }
  }

  if (videoProgressBtn) {
    videoProgressBtn.addEventListener("click", playPause);
  }

  if (video) {
    video.addEventListener("play", progressLoop);
  }
}

export { projectThreeAnimation, projectDetailsPin, projectDetailsVideoPin };
