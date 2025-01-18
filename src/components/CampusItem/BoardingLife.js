import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function BoardingLife() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row justify-content-between flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">
              Safe, Secure, and Comfortable Boarding Life
            </p>
            <p className="card-txt">
              Our boarding facility is the second home for students, with a steadfast commitment to their safety and well-being. We strive to make their formative years memorable and enriching, fostering personal growth, independence, and a strong sense of belonging.
            </p>
            <p className="card-head mb-4 mt-3">
              Explore More About Our Boarding Life
            </p>
            <div className="row mt-3">
              <div className="col-sm-6">
                <div className="d-flex justify-content-start align-items-center card-high mt-0">
                  <Image
                    src="/images/Home/nav/icon/facility.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Separate Boys’ & Girls’ Hostels</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/ac.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Air-conditioned Hostel Rooms</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/food.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Food and Nutrition</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex justify-content-start align-items-center card-high mt-0">
                  <Image
                    src="/images/Home/nav/icon/care.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Pastoral Care</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/celebrate.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Celebrations</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/doconcall.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">24 hours Doctor on-call</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/boarding.png"
                alt="card image"
                width={328}
                height={495}
                className="min-height"
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
                  src="/images/Home/nav/icon/life.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Boarding Life</p>
              </div>
              <p className="card-head mb-1">
                Safe, Secure, and Comfortable Boarding Life
              </p>
              <p className="card-txt">
                At Academic City School, the{" "}
                <strong>safety, security, and well-being</strong> of your child
                are our top priorities. Our hostel offers a{" "}
                <strong>warm and supportive environment</strong> where students
                can grow and thrive.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/boarding-mobile.png"
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
                With a<strong>dedicated pastoral care,</strong> We ensure making
                every student feel at home, ensuring their needs are met with
                care and attention.
              </p>
              <div className="row mt-3">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/facility.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Facilities</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/celebrate.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Celebration</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/care.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Pastoral Care</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/food.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Food Nutrition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div> */}
    </div>
  );
}

export default BoardingLife;
