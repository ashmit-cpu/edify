import Image from "next/image";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import EnquirePopupform from "../Form/EnquirePopupform";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
function CareerPrepM() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <div className={`right-cards yellow-bgs p-4 ${outfit.className}`}>
        <div className="row  justify-content-between flex-column-reverse flex-lg-row">
          <div className="col-lg-7">
            <p className="card-head1 mb-1">
              Focused Career Preparation for Grades 11 &amp; 12
            </p>
            <p className="card-txt">
              We guide grades 11 and 12 students toward their chosen careers,
              offering academic support for engineering, medicine, law, design,
              CA, and more, ensuring they are well-prepared for future success.
            </p>
            {/* <p className="card-head mt-4">Institutions We Collaborate With</p> */}
            <div className="d-flex justify-content-start align-items-center mt-4">
              <Image
                src="/images/Home/nav/allen-m.svg"
                alt="allen logo"
                width={64}
                height={19}
                className="me-3"
              />
              <Image
                src="/images/Home/nav/mode-m.svg"
                alt="mode logo"
                width={113}
                height={43}
                className="me-3"
              />
              {/* <Image
              src="/images/Home/nav/nahata.svg"
              alt="mode logo"
              width={146}
              height={54}
              className="me-3"
            /> */}
              <Image
                src="/images/Home/nav/trisha-m.svg"
                alt="trisha logo"
                width={129}
                height={44}
                className=""
              />
            </div>
            <div className="col-12 mt-4">
              <button
                className="primary-btn d-flex align-items-center m0-auto"
                onClick={() => handleShowModal()}
              >
                <span>Learn More</span>
                <span className="fa fa-arrow-right ms-2 arrow-down"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="card-img position-relative">
              <Image
                src="/images/8.png"
                alt="card image"
                width={302}
                height={167}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="right-cards-mobile d-block d-md-none">
        <Row>
          <div className="col-6 col-md-6 pe-1">
            <div className="nav-btn">
              <div className="d-flex align-items-center justify-content-start ">
                <Image
                  src="/images/Home/nav/icon/prep.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Career Preparation</p>
              </div>
              <p className="card-head mb-1">
                Focused Career Preparation for Grades 11 and 12
              </p>
              <p className="card-txt">
                At Academic City School,{" "}
                <strong>
                  We prioritise guiding our students in grades 11 and 12 to
                  prepare for their chosen career paths.
                </strong>
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/prep-mobile.png"
                alt="icon"
                width={158}
                height={165}
                className="w-100 h-100"
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="bottom-card">
              <p className="card-txt">
                Whether a student aspires to enter{" "}
                <strong>
                  Engineering, Medicine, Law, Design, Architecture, CA, Business
                  Management, or Study Abroad,
                </strong>
                We provide the necessary academic assistance programs, through
                which our students receive{" "}
                <strong>guidance and support from top institutions</strong>{" "}
                across the country to ensure they are well-prepared for their
                future careers.
              </p>
              <p className="card-head mt-4">Institutions We Collaborate With</p>
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Image
                  src="/images/Home/nav/allen.svg"
                  alt="allen logo"
                  width={108}
                  height={132}
                  className="me-5"
                />
                <Image
                  src="/images/Home/nav/mode.svg"
                  alt="mode logo"
                  width={113}
                  height={43}
                  className=""
                />
                <Image
                  src="/images/Home/nav/trisha.svg"
                  alt="trisha logo"
                  width={129}
                  height={44}
                  className="ms-5"
                />
              </div>
            </div>
          </div>
        </Row>
      </div> */}
      <EnquirePopupform
        show={showModal}
        handleClose={handleCloseModal}
        ctatitle={"Submit"}
      />
    </div>
  );
}

export default CareerPrepM;
