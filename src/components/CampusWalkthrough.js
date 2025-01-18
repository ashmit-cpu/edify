import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquirePopupform from "./Form/EnquirePopupform";

function CampusWalkthrough() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <>
      <section className="facts pt-3 py-lg-5 walkthrough-sec d-none d-md-block">
        <div className="container">
          <div className="row align-items-center justify-content-between flex-column flex-md-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              <h2 className="section-title fact-title text-white mt-5 mt-lg-0 mb-1">
                Step Inside Your Future School
              </h2>
              <p className="facts-title text-white">
              Explore the vibrant learning environment and state-of-the-art facilities of Edify School through our engaging virtual tour.
              </p>
              <div className="col-12 mt-4 text-center">
                <button
                  className="secondary-btn btn-purple d-flex align-items-center m-auto m-md-0"
                  onClick={() => handleShowModal()}
                >
                  <span>Schedule a Campus Visit </span>
                  <Image
                    width={20}
                    height={27}
                    alt=""
                    src="/images/icons/visit-icon.svg"
                  />
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <div className="position-relative fact-img overflow-hidden frame-img">
                {/* {!isVideoPlaying ? ( */}
                <>
                  <Image
                    src="/images/walkthrough.png"
                    alt="overview"
                    width={695}
                    height={339}
                  />
                  {/* <div
                    className="play-btn"
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
                    width="695"
                    height="180"
                    src="https://www.youtube.com/embed/nh75X9a2e2g?si=phdknl6z1Y9XdwA-autoplay=1"
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
      <EnquirePopupform
        show={showModal}
        handleClose={handleCloseModal}
        ctatitle={"Submit"}
      />
    </>
  );
}

export default CampusWalkthrough;
