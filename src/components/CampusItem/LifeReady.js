import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function LifeReady() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">
              Preparing for Life&apos;s Challenges
            </p>
            <p className="card-txt">
              Our Life Readiness program equips students with essential skills to thrive independently and confidently ensuring every child is self-reliant.
            </p>
            <p className="card-head mb-4 mt-3">
              Our Life Readiness Program Includes
            </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/martial.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Martial Arts</p>

                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/finance.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Financial Literacy </p>

                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/firstaid.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">First Aid Training </p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-start align-items-center card-high mt-0  big-icon">
                  <Image
                    src="/images/Home/nav/icon/swimming.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Swimming</p>

                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/speaking.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Public Speaking </p>

                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/cooking.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Cooking</p>

                  </div>
                </div>
              </div>
              {/* <div className="col-12 mt-4 ps-4">
            <button className="primary-btn d-flex align-items-center">
              <span>Learn More</span>
              <span className="fa fa-arrow-right ms-2 arrow-down"></span>
            </button>
          </div> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/lifeready.png"
                alt="card image"
                width={334}
                height={346}
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
                <p className="px-2">Life Readiness</p>
              </div>
              <p className="card-head mb-1">
                Preparing for Life&apos;s Challenges
              </p>
              <p className="card-txt">
                <strong>Our Life Readiness program</strong> equips students with
                <strong>essential skills</strong>
                to thrive independently and confidently. It&apos;s not just
                about academics and co-curricular activities, but
                <strong>
                  ensuring every child is self-reliant and protected.
                </strong>
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/lifeready-mobile.png"
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
                Through practical life skills, personal safety education, and
                emotional resilience training, we prepare students for{" "}
                <strong>
                  real-world challenges, fostering a sense of responsibility and
                  self-assurance.
                </strong>
              </p>
              <p className="card-head mb-4 mt-3">
                Our Life Readiness Program Includes
              </p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/martial.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Martial Arts</p>
                      <p className="small-txt">
                        Develop physical strength and self-defence skills.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/finance.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Financial Literacy </p>
                      <p className="small-txt">
                        Teach money management and financial independence.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/firstaid.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">First Aid Training </p>
                      <p className="small-txt">
                        Equip with essential life-saving techniques.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/swimming.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Swimming</p>
                      <p className="small-txt">
                        Enhance endurance and promote safety in water.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/speaking.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Public Speaking </p>
                      <p className="small-txt">
                        Build confidence and effective communication skills.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/cooking.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Cooking</p>
                      <p className="small-txt">
                        Learn essential culinary skills for healthy living.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4 ps-4">
                  <button className="primary-btn d-flex align-items-center">
                    <span>Learn More</span>
                    <span className="fa fa-arrow-down ms-2 arrow-down"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div> */}
    </div>
  );
}

export default LifeReady;
