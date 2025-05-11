"use client";
import { useState } from "react";

type Review = {
  id: number;
  author: string;
  content: string;
  rating: number;
};

type VideoReview = {
  id: number;
  url: string;
  title: string;
};

type IProps = {
  cls?: string;
};

const Testimonial = ({ cls = "pt-125 pb-125" }: IProps) => {
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const textReviews: Review[] = [
    {
      id: 1,
      author: "Fouzia Gadid",
      content: "I had a fantastic experience with Hussein.Fowzi Media.They transformed our website with creativity and precision, capturing our brand perfectly. Their responsiveness and attention to detail made the process seamless. Highly recommend their services for anyone looking to enhance their online presence!",
      rating: 5,
    },
    {
      id: 2,
      author: "Nuruldin Nur",
      content: "I had the privilege of working with Fowzi Media recently, and I cannot express enough how impressed I am with their expertise and dedication. From the initial consultation until the final launch, they delivered exceptional work, exceeding all my expectations",
      rating: 5,
    },
    {
      id: 3,
      author: "Liban Yasin",
      content: "They provided me with a high quality work for a friendly price and responded to feedback in a timely way. I will highly recommend to using Fowzi Media's services. A very satisfied client. Thanks",
      rating: 5,
    },
    {
      id: 4,
      author: "Rondo Services",
      content: "The Fowzi Media team has been excellent to work with. From start to finish, the communication was on point. The design was done exceptionally well per our requirements and was delivered to all locations on time. We highly recommend this company for all digital and web design needs!",
      rating: 5,
    },
    {
      id: 5,
      author: "Abdifatah Yusuf",
      content: "I worked with Fowzi Media couple of times since 2020. FM shot commercials for our e-commerce brand. They have been professional, communicative and responsive during our partnership. All products of our products they shot turned Ty out so valuable that it increased our CTR and CVR substantially. I'd definitely recommend working Fowzi Media, you'll be surprised with their creativity and quick turnaround",
      rating: 5,
    },
    {
      id: 6,
      author: "Suud Olat",
      content: "Very professional and reliable. Was very satisfied with the job they've done. They also able to provide quality service on time. Kudos folks.",
      rating: 5,
    },
    {
      id: 7,
      author: "Abdifatah Yasin",
      content: "Excellent service, timely response, excellent customer service. Highly recommended for anyone looking for branding, website develop, social media sites.",
      rating: 5,
    },
    {
      id: 8,
      author: "Feisal Ali",
      content: "Very professional and work done timely. Will recommend for your business needs!",
      rating: 5,
    },
    {
      id: 9,
      author: "Abdishakur Mohamed",
      content: "Best media group in Minnesota",
      rating: 5,
    },
    {
      id: 10,
      author: "Mariam Noor",
      content: "",
      rating: 5,
    },
  ];

  const videoReviews: VideoReview[] = [
    {
      id: 1,
      url: "/assets/img/reviews/review-1.mp4",
      title: "Client Review 1",
    },
    {
      id: 2,
      url: "/assets/img/reviews/review-2.mp4",
      title: "Client Review 2",
    },
    {
      id: 3,
      url: "/assets/img/reviews/review-3.mp4",
      title: "Client Review 3",
    },
  ];

  const handlePrevText = () => {
    setActiveTextIndex((prev) =>
      prev === 0 ? textReviews.length - 1 : prev - 1
    );
  };

  const handleNextText = () => {
    setActiveTextIndex((prev) =>
      prev === textReviews.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) =>
      prev === 0 ? videoReviews.length - 1 : prev - 1
    );
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) =>
      prev === videoReviews.length - 1 ? 0 : prev + 1
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`fa fa-star${i < rating ? " checked" : ""}`}
          style={{ color: i < rating ? "#ffc107" : "#e4e5e9" }}
        ></span>
      );
    }
    return stars;
  };

  return (
    <section className={`tp-award-area ${cls}`}>
      <div className="container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-xxl-6 col-xl-7">
            <h2 className="ab-inner-funfact-title tp_title_anim">
              What Our Clients Say
            </h2>
          </div>
        </div>

        <div className="row align-items-stretch justify-content-center text-center">
          {/* Left Column - Text Reviews */}
          <div className="col-lg-6 mb-4 mb-lg-0 mx-auto">
            <div className="h-100 p-4 d-flex flex-column justify-content-center align-items-center position-relative">
              <p className="fs-5 fw-medium fst-italic mb-3">
                {textReviews[activeTextIndex].content}
              </p>
              <div className="mb-2">
                {renderStars(textReviews[activeTextIndex].rating)}
              </div>
              <h5 className="fw-bold mb-0">
                — {textReviews[activeTextIndex].author}
              </h5>

              <button
                onClick={handlePrevText}
                className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                style={{ width: "40px", height: "40px", zIndex: 1 }}
                aria-label="Previous review"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={handleNextText}
                className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                style={{ width: "40px", height: "40px", zIndex: 1 }}
                aria-label="Next review"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Right Column - Video Reviews */}
          <div className="col-lg-6 mx-auto">
            <div className="video-reviews h-100 p-4 d-flex flex-column">
              <div className="position-relative flex-grow-1 d-flex flex-column align-items-center">
                <div
                  className="rounded overflow-hidden d-flex justify-content-center mb-3 position-relative"
                  style={{ height: "640px" }}
                >
                  <button
                    onClick={handlePrevVideo}
                    className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                    style={{ width: "40px", height: "40px", zIndex: 1 }}
                    aria-label="Previous video"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <iframe
                    src={videoReviews[activeVideoIndex].url}
                    title={videoReviews[activeVideoIndex].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: "none",
                      width: "360px",
                      height: "640px",
                      display: "block",
                      maxWidth: "100%",
                    }}
                    loading="lazy"
                  ></iframe>
                  
                  <button
                    onClick={handleNextVideo}
                    className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle shadow-sm"
                    style={{ width: "40px", height: "40px", zIndex: 1 }}
                    aria-label="Next video"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-2 mb-2">
                  {videoReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveVideoIndex(index)}
                      className={`btn btn-sm mx-1 rounded-circle ${
                        activeVideoIndex === index ? "bg-black" : "bg-secondary"
                      }`}
                      style={{ width: "8px", height: "8px", padding: 0 }}
                      aria-label={`Go to video review ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;