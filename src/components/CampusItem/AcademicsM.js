import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import EnquirePopupform from "../Form/EnquirePopupform";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

function AcademicsM() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <div
        className={`right-cards !ac-px-0 !ac-mt-2 campus-nav-mobile ${outfit.className}`}
      >
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1 font-gilroy-bold">
              Campus Curriculum
            </p>
            <p className="card-txt">
            We offers the CBSE curriculum, providing a robust framework for academic excellence. This nationally recognised curriculum ensures students are well-prepared with a strong foundation for future success in a competitive and evolving global landscape.
            </p>

            <div className="d-flex ac-justify-around align-items-center mt-3 mt-lg-5 logo-wrap !ac-px-6">
              <div className="text-center me-2 me-md-5 ac-flex ac-flex-col ac-gap-4">
                <Image
                  src="/images/Home/nav/cbse.svg"
                  alt="cbse logo"
                  width={98}
                  height={89}
                  className="cbse-logo m-auto ac-w-full ac-flex-1 ac-h-[63px] ac-min-h-[51px] ac-max-h-[37px]"
                />
                <p className="fw-bold text-center ac-text-xs ac-flex-1">
                  CBSE - New Delhi
                </p>
              </div>
              <div className="text-center ms-2 ms-md-5 ac-flex ac-flex-col ac-gap-4 ">
                <Image
                  src="/images/Home/nav/cambridge.svg"
                  alt="cambridge logo"
                  width={254}
                  height={89}
                  className="ac-min-w-[100px] ac-w-full ac-flex-1 ac-h-[63px] ac-min-h-[51px] ac-max-h-[37px]"
                />
                <p className="fw-bold text-center ac-text-xs ac-flex-1">
                  CAIE - UK
                </p>
              </div>
            </div>
            <button
              className="primary-btn d-flex align-items-center text-center mt-4 m0-auto !ac-px-8"
              onClick={() => handleShowModal()}
              style={{
                paddingLeft: "3rem !important",
              }}
            >
              <span>Enquire Now</span>
              <span className="fa fa-arrow-right ms-2 arrow-down"></span>
            </button>
          </div>
          <div className="col-lg-4 !ac-px-0">
            <div className="card-img position-relative d-block d-lg-none">
              <img
                src="/images/Home/nav/academics-mobile.png"
                alt="card image"
                width={325}
                height={465}
              />
            </div>
          </div>
        </div>
      </div>
      <EnquirePopupform
        show={showModal}
        handleClose={handleCloseModal}
        ctatitle={"Submit"}
      />
    </div>
  );
}

export default AcademicsM;
