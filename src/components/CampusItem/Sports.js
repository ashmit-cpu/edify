import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function Sports() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row align-items-center justify-content-between flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">Excel in Sports, Thrive in Life</p>
            <p className="card-txt">
              We focus on indoor and outdoor sports, offering students the choice to excel in their preferred disciplines. Students are encouraged to participate in competitions with support from dedicated coaches for each sport.
            </p>
            {/* <p className="card-head mb-4 mt-3">
            Our co-curricular activities include:
          </p> */}
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/swimming.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Swimming</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/football.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Football</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/badminton.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Badminton</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/tt.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Table Tennis</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center card-high ms-0">
                  <Image
                    src="/images/Home/nav/icon/basketball.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Basketball</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high ms-0">
                  <Image
                    src="/images/Home/nav/icon/running.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Running Track</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high ms-0">
                  <Image
                    src="/images/Home/nav/icon/skating.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Skating Rink</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high ms-0">
                  <Image
                    src="/images/Home/nav/icon/cricket.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Cricket Practice Net</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-12 mt-3 btn-wrap">
                <button className="primary-btn d-flex align-items-center">
                  <span>See All</span>
                  <span className="fa fa-arrow-right ms-2 arrow-down"></span>
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/sports.png"
                alt="card image"
                width={328}
                height={410}
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
                  src="/images/Home/nav/icon/sport.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Sports</p>
              </div>
              <p className="card-head mb-1">Excel in Sports, Thrive in Life</p>
              <p className="card-txt">
                At our school, we emphasize both{" "}
                <strong>indoor and outdoor sports,</strong>
                allowing students to{" "}
                <strong>
                  choose and excel in their preferred disciplines.
                </strong>{" "}
                We prioritise sending students to{" "}
                <strong>inter-school and intra-school competitions,</strong>{" "}
                supported by <strong>dedicated coaches</strong> for each sport.{" "}
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/sports-mobile.png"
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
                <strong>Daily sports</strong> time is set at 90 minutes,
                extending to over 120 minutes on weekends. When we find students
                excelling in a sport, our coaches prepare them to{" "}
                <strong>participate from district to national levels,</strong>{" "}
                helping them secure recognition for their sports skills.
              </p>
              <p className="card-head mb-4 mt-3">
                Our co-curricular activities include:
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/swimming.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Swimming</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/football.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Football</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/badminton.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Badminton</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/tt.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Table Tennis</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/basketball.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Basketball</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/running.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Running Track</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/skating.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Skating Rink</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/cricket.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">
                        Cricket Practice Net
                      </p>
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

export default Sports;
