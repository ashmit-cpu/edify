import React, { useState } from "react";
import Image from "next/image";
import CampusOverviewGrade from "./CampusOverviewGrade";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
function CampusOverview() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  const scrollToDiv = (className, offset = 50) => {
    const elements = document.getElementsByClassName(className);

    if (elements.length > 0) {
      const element = elements[0]; // Select the first element with the given class name
      const elementRect = element.getBoundingClientRect().top;
      const absoluteElementTop = elementRect + window.pageYOffset;
      const offsetPosition = absoluteElementTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section className="global_section overview yellow-bg" id="overview">
        {/* <div className="position-relative">
          {!isVideoPlaying ? (
            <>
              <Image
                src="/images/overview-mob.png"
                alt="overview"
                width={360}
                height={238}
                className="d-block d-md-none w-100"
              />
              <div
                className="play-btn w-100 d-flex justify-content-center d-md-none"
                onClick={handlePlayVideo}
                style={{ cursor: "pointer" }}
              >
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="vuesax/bold/play-circle">
                    <g id="play-circle">
                      <path
                        id="Vector"
                        d="M34.9125 5.8335C18.8125 5.8335 5.74585 18.9002 5.74585 35.0002C5.74585 51.1002 18.8125 64.1668 34.9125 64.1668C51.0125 64.1668 64.0792 51.1002 64.0792 35.0002C64.0792 18.9002 51.0417 5.8335 34.9125 5.8335ZM43.6625 41.5043L35.2042 46.3752C34.1542 46.9877 32.9875 47.2793 31.85 47.2793C30.6833 47.2793 29.5459 46.9877 28.4959 46.3752C26.3959 45.1502 25.1417 42.9918 25.1417 40.5418V30.771C25.1417 28.3502 26.3959 26.1627 28.4959 24.9377C30.5959 23.7127 33.1042 23.7127 35.2333 24.9377L43.6917 29.8085C45.7917 31.0335 47.0458 33.1918 47.0458 35.6418C47.0458 38.0918 45.7917 40.2793 43.6625 41.5043Z"
                        fill="white"
                        fillOpacity="0.68"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </>
          ) : (
            <iframe
              width="100%"
              height="238"
              src="https://www.youtube.com/embed/D0UnqGm_miA?si=zWvCpZLqbeviRrOMautoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div> */}
        <div className="cust-container m-cust-container">
          <div className="row overview-wrap">
            <div className="col-12 col-lg-6 mt-4 order-2 order-md-1 m-title-wrap">
              <div className="title-wrap">
                <p className="subtitle font-gilroy-bold">
                  Discover the Vibrant{" "}
                </p>
              </div>
              <h2 className="section-title home-title">
                <div className="d-flex align-items-center justify-content-start">
                  Learning Environment at Bangalore, nurturing your child to
                  excel in 
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  every aspect of life
                  <Image
                    src="/images/small2.png"
                    alt="building vector"
                    width={59}
                    height={55}
                    className="ms-2"
                  />
                </div>
              </h2>
              <div className="row mt-3 mt-lg-5">
                <div className="col-12 col-md-6">
                  <div className="highlight-wrap d-flex justify-content-start align-items-center mb-2">
                    <Image
                      src="/images/books.svg"
                      alt="building vector"
                      width={34}
                      height={34}
                    />
                    <p className={outfit.className}>
                      Progressive Academic <span>Plans</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="highlight-wrap d-flex justify-content-start align-items-center mb-2">
                    <Image
                      src="/images/sports.svg"
                      alt="building vector"
                      width={34}
                      height={34}
                    />
                    <p className={outfit.className}>
                      <span>Everyday </span> Sports
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="highlight-wrap d-flex justify-content-start align-items-center mb-2">
                    <Image
                      src="/images/cluster.svg"
                      alt="building vector"
                      width={34}
                      height={34}
                    />
                    <p className={outfit.className}>
                      <span>A cluster of</span> Co-curriculars
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="highlight-wrap d-flex justify-content-start align-items-center mb-2">
                    <Image
                      src="/images/living.svg"
                      alt="building vector"
                      width={34}
                      height={34}
                    />
                    <p className={outfit.className}>
                      <span>Practice</span> Independent Thinking
                    </p>
                  </div>
                </div>
                {/* <div className="col-12 mt-3 mt-md-5">
                  <button className="primary-btn d-flex align-items-center text-center m-auto m-md-0" onClick={() => scrollToDiv("principleci")}>
                    <span>Let&apos;s Dive</span>
                    <span className="fa fa-arrow-down ms-2 arrow-down"></span>
                  </button>
                </div> */}
              </div>
              <CampusOverviewGrade />
            </div>
            <div className="col-12 col-lg-6 mt-md-4 mt-0  text-center order-1 order-md-2">
              <div className="position-relative frame-img">
                {/* {!isVideoPlaying ? ( */}
                <>
                  {" "}
                  <Image
                    src="/images/overview.png"
                    alt="overview"
                    width={750}
                    height={495}
                    className="d-nones d-md-block"
                  />
                  {/* <div
                      className="play-btn d-nones d-md-block"
                      onClick={handlePlayVideo}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="vuesax/bold/play-circle">
                          <g id="play-circle">
                            <path
                              id="Vector"
                              d="M34.9125 5.8335C18.8125 5.8335 5.74585 18.9002 5.74585 35.0002C5.74585 51.1002 18.8125 64.1668 34.9125 64.1668C51.0125 64.1668 64.0792 51.1002 64.0792 35.0002C64.0792 18.9002 51.0417 5.8335 34.9125 5.8335ZM43.6625 41.5043L35.2042 46.3752C34.1542 46.9877 32.9875 47.2793 31.85 47.2793C30.6833 47.2793 29.5459 46.9877 28.4959 46.3752C26.3959 45.1502 25.1417 42.9918 25.1417 40.5418V30.771C25.1417 28.3502 26.3959 26.1627 28.4959 24.9377C30.5959 23.7127 33.1042 23.7127 35.2333 24.9377L43.6917 29.8085C45.7917 31.0335 47.0458 33.1918 47.0458 35.6418C47.0458 38.0918 45.7917 40.2793 43.6625 41.5043Z"
                              fill="white"
                              fillOpacity="0.68"
                            />
                          </g>
                        </g>
                      </svg>
                    </div> */}
                </>
                {/* ) : (
                  <iframe
                    width="750"
                    height="495"
                    src="https://www.youtube.com/embed/D0UnqGm_miA?si=zWvCpZLqbeviRrOMautoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CampusOverview;
