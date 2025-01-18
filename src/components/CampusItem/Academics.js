import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

function Academics() {
  return (
    <div>
      <div className="right-cards yellow-bg p-4 mb-4">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">Campus Curriculum</p>
            <p className="card-txt">We offers the CBSE curriculum, providing a robust framework for academic excellence. This nationally recognised curriculum ensures students are well-prepared with a strong foundation for future success in a competitive and evolving global landscape.</p>

            <div className="d-flex justify-content-start align-items-center mt-3 mt-lg-5 logo-wrap">
              <div className="text-center me-2 me-md-5">
                <Image
                  src="/images/Home/nav/cbse.svg"
                  alt="cbse logo"
                  width={98}
                  height={111}
                  className="cbse-logo"
                />
                <p className="fw-bold text-center">CBSE - New Delhi</p>
              </div>
              <div className="text-center ms-2 ms-md-5">
                <Image
                  src="/images/Home/nav/cambridge.svg"
                  alt="cambridge logo"
                  width={254}
                  height={89}
                  className="cambridge-logo"
                />
                <p className="fw-bold text-center">CAIE - UK</p>
              </div>
            </div>
            {/* <button className="primary-btn d-flex align-items-center text-center mt-4">
              <span>See All</span>
              <span className="fa fa-arrow-right ms-2 arrow-down"></span>
            </button> */}
          </div>
          <div className="col-lg-4">
            <div className="card-img position-relative d-none d-lg-block">
              <Image
                src="/images/Home/nav/academics.png"
                alt="card image"
                width={325}
                height={353}
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
                  src="/images/Home/nav/icon/book.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Academics</p>
              </div>
              <p className="card-head mb-1">Campus Curriculum</p>
              <p className="card-txt">
                The Bangalore campus offers a dual curriculum of CBSE and
                Cambridge, providing flexibility and a broad spectrum of
                academic choices.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/academics-mobile.png"
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
                <strong>CBSE Curriculum</strong>: Focuses on holistic
                development with a robust foundation in core subjects.
              </p>
              <p className="card-txt">
                <strong>Cambridge Curriculum</strong>: Provides an international
                perspective, fostering global competencies through a challenging
                syllabus.
              </p>
              <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-5 logo-wrap">
                <Image
                  src="/images/Home/nav/cbse.svg"
                  alt="cbse logo"
                  width={98}
                  height={111}
                  className="me-3 cbse-logo"
                />
                <Image
                  src="/images/Home/nav/cambridge.svg"
                  alt="cambridge logo"
                  width={254}
                  height={89}
                  className="ms-3 cambridge-logo"
                />
              </div>
            </div>
          </div>
        </Row>
      </div> */}
    </div>
  );
}

export default Academics;
