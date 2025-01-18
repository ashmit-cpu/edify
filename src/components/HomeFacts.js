import React, { useState } from "react";
import Image from "next/image";
import EnquirePopupform from "./Form/EnquirePopupform";

function HomeFacts() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      <section className="facts homefacts discover discover-lp">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-7">
              <h2 className="section-title fact-title text-white">
                Discover Exceptional Opportunities at Edify School
                <p className="facts-title text-white">
                  Unlock your child’s potential for a brighter future.
                </p>
              </h2>
              {/* <h2 className="section-title fact-title text-end text-white d-block d-md-none">
                <span>- The Academic City</span>
              </h2> */}
              <div className="col-12 mt-0 mt-md-4 text-center m-admission-open">
                <div className="row-div">
                  <div className="cols">
                    <div className="admi-open ac-text-white">
                      Admissions Open from
                      <div className="date">1st January, 2025</div>
                    </div>
                  </div>
                  <div className="cols">
                    <button
                      className="secondary-btn d-flex ac-gap-2 align-items-center me-auto m-md-0 btn-purple"
                      onClick={() => handleShowModal()}
                    >
                      <span>Apply Now </span>
                      <Image
                        src="/images/icons/apply-now-icon.svg"
                        alt="overview"
                        width={36}
                        height={34}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center">
              <div className="discover-img homefact-img">
                <Image
                  src="/images/homepage/facts-01.png"
                  alt="overview"
                  width={325}
                  height={676}
                  style={{ width: "100%", height: "100%" }}
                />
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

export default HomeFacts;
