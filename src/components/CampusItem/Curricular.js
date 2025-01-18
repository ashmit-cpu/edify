import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function Curricular() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-8">
            <p className="card-head1 mb-1">
              Holistic Development Beyond Academics
            </p>
            <p className="card-txt">
              Active participation in hands-on experiences beyond textbooks and hobbies greatly enhances learning of our students.

            </p>
            <p className="card-head mb-4 mt-3">
              Our co-curricular activities include:
            </p>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-start align-items-center ps-0 card-high big-icon">
                  <Image
                    src="/images/Home/nav/icon/art.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Art and Craft</p>
                    <p className="small-txt">
                      Enhance your child&apos;s creative skills
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center ps-0 card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/dance.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Dance</p>
                    <p className="small-txt">
                      Express your child&apos;s innate passion
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center ps-0 card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/theatre.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Theatre</p>
                    <p className="small-txt">Unleash the actor in your child</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-start align-items-center ps-0 card-high  big-icon mt-0">
                  <Image
                    src="/images/Home/nav/icon/music.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Music</p>
                    <p className="small-txt">
                      Discover the musician in your child
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center ps-0 card-high  big-icon">
                  <Image
                    src="/images/Home/nav/icon/pottery.svg"
                    alt="card image"
                    width={59}
                    height={59}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Pottery</p>
                    <p className="small-txt">
                      Nurture your child&apos;s crafting talents
                    </p>
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
                src="/images/Home/nav/curriculam.png"
                alt="card image"
                width={334}
                height={342}
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
                  src="/images/Home/nav/icon/curricular.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Co-Curricular Activities</p>
              </div>
              <p className="card-head mb-1">
                Holistic Development Beyond Academics
              </p>
              <p className="card-txt">
                At our school, we believe that true success goes beyond academic
                achievements. <strong>Holistic development</strong> encompasses{" "}
                <strong>excelling in various skills.</strong>
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/curriculam-mobile.png"
                alt="icon"
                width={158}
                height={165}
                className="w-100 h-100"
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <div className="bottom-card">
              <p className="card-head mb-2 mt-3">
                Our co-curricular activities include:
              </p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-start align-items-center card-high big-icon">
                    <Image
                      src="/images/Home/nav/icon/art.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Art and Craft</p>
                      <p className="small-txt">
                        Enhance your child&apos;s creative skills 
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/dance.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Dance</p>
                      <p className="small-txt">
                        Express your child&apos;s innate passion
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/theatre.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Theatre</p>
                      <p className="small-txt">
                        Unleash the actor in your child
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/music.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Music</p>
                      <p className="small-txt">
                        Discover the musician in your child
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high  big-icon">
                    <Image
                      src="/images/Home/nav/icon/pottery.svg"
                      alt="card image"
                      width={59}
                      height={59}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Pottery</p>
                      <p className="small-txt">
                        Nurture your child&apos;s crafting talents
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4 ps-3">
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

export default Curricular;
