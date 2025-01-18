import Image from "next/image";
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import EnquirePopupform from "../Form/EnquirePopupform";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
function CareerGuideM() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <div className={`right-cards yellow-bgs p-4 ${outfit.className}`}>
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">Career Guidance</p>
            <p className="card-txt">
              Students explore various career options and undergo scientific
              assessments to identify their core strengths. This approach
              ensures they are guided toward the right career path, aligning
              their abilities with future opportunities.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start align-items-center mt-3 ps-3">
              <Image
                src="/images/Home/nav/leap.svg"
                alt="leap logo"
                width={100}
                height={68}
                className="me-md-4 me-1 leap-logo"
              />
              <Image
                src="/images/Home/nav/idc-01.svg"
                alt="idc logo"
                width={100}
                height={99}
                className="ms-4 idc-logo"
              />
            </div>
            <div className="col-12 mt-3 btn-wrap">
              <button
                className="primary-btn d-flex align-items-center m0-auto"
                onClick={() => handleShowModal()}
              >
                <span>Learn More</span>
                <span className="fa fa-arrow-right ms-2 arrow-down"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-img position-relative">
              <Image
                src="/images/2.png"
                alt="card image"
                width={298}
                height={169}
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
                  src="/images/Home/nav/icon/career.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Career Guidance</p>
              </div>
              <p className="card-txt">
                At our school, we believe that 15 years of education should
                empower students with a clear understanding of their
                <strong>strengths, skills, and career paths.</strong>Our{" "}
                <strong>Career Guidance program</strong> is a cornerstone of our
                educational approach, focusing on students from
                <strong>grades 6 to 12.</strong>
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/career-mobile.png"
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
                <strong>
                  Students are exposed to over 600+ career options
                </strong>{" "}
                through interactions with industry experts and{" "}
                <strong>comprehensive career workshops.</strong> We conduct
                psychometric tests to{" "}
                <strong>evaluate aptitude, personality, and interests,</strong>{" "}
                ensuring each{" "}
                <strong>student receives personalized guidance</strong> to
                identify the right career path.
              </p>
              <p className="card-txt">
                Our goal is to help students navigate the daunting task of
                career selection with confidence and clarity, equipping them for
                a successful future.
              </p>
              <div className="d-flex justify-content-start align-items-center mt-3 ps-3">
                <Image
                  src="/images/Home/nav/leap.png"
                  alt="leap logo"
                  width={193}
                  height={68}
                  className="me-5 leap-logo"
                />
                <Image
                  src="/images/Home/nav/idc.png"
                  alt="idc logo"
                  width={146}
                  height={99}
                  className="ms-5 idc-logo"
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

export default CareerGuideM;
