import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function StudentProgression() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">Personalized Growth and Development</p>
            <p className="card-txt">
            The Student Progression Plan ensures focused attention for students to excel in academics, sports, co-curricular activities, and essential life skills.

            </p>
            <p className="card-txt">
            By understanding each student’s unique needs, we create tailored growth strategies that empower them to achieve their full potential.

            </p>
            {/* <div className="col-12 mt-3 btn-wrap">
              <button className="primary-btn d-flex align-items-center">
                <span>Learn More</span>
                <span className="fa fa-arrow-right ms-2 arrow-down"></span>
              </button>
            </div> */}
          </div>
          <div className="col-lg-4">
            <div className="card-img mb-4 mb-lg-0 position-relative">
              <Image
                src="/images/Home/nav/spp.svg"
                alt="card image"
                width={325}
                height={342}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="right-cards-mobile d-block d-md-none">
        <Row className="align-items-center">
          <div className="col-6 col-md-6 pe-1">
            <div className="nav-btn">
              <div className="d-flex align-items-center justify-content-start ">
                <Image
                  src="/images/Home/nav/icon/student.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Student Progression Plan (SPP)</p>
              </div>
              <p className="card-head mb-1">
                Personalized Growth and Development
              </p>
              <p className="card-txt">
                Our Plan ensures your child receives individualized attention to
                thrive in every aspect of their development.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/growth.png"
                alt="icon"
                width={158}
                height={165}
                className="w-100"
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="bottom-card">
              <p className="card-txt">
                We focus on <strong>academic excellence</strong>, sports,
                co-curricular activities, and independent living skills. 
              </p>
              <p className="card-txt">
                By understanding each student&apos;s unique needs, we create{" "}
                <strong>tailored growth plans</strong> that help them excel from
                their current level to new heights.
              </p>
              <div className="col-12 mt-2 ps-lg-4 btn-wrap">
                <button className="primary-btn d-flex align-items-center">
                  <span>Learn More</span>
                  <span className="fa fa-arrow-down ms-2 arrow-down"></span>
                </button>
              </div>
            </div>
          </div>
        </Row>
      </div> */}
    </div>
  );
}

export default StudentProgression;
