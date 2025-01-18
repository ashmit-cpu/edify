import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function Agriculture() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row justify-content-between flex-column-reverse flex-lg-row">
          <div className="col-lg-7">
            <p className="card-head1 mb-1">
              Cultivating Sustainability and Responsibility
            </p>
            <p className="card-txt">
              Students learn farming from sowing seeds to harvesting crops, gaining hands-on experience in hard work and sustainability. Harvested produce nourishes the community, giving them a sense of accomplishment. The Goshala teaches animal care, connecting them to traditional practices.
            </p>

            <div className="row mt-3">
              <div className="col-md-6 col-lg-5">
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/farming.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Farming</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/poly.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">poly-house</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7">
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/gaushala.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Gaushala</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/learning.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">
                      Learning from the Neighborhood and Community
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-5">
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/agri1.png"
                alt="card image"
                width={328}
                height={147}
              />
            </div>
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/agri2.png"
                alt="card image"
                width={328}
                height={147}
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
                  src="/images/Home/nav/icon/agri.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Agriculture</p>
              </div>
              <p className="card-head mb-1">
                Cultivating Sustainability and Responsibility
              </p>
              <p className="card-txt">
                At Academic City School,{" "}
                <strong>We teach students farming</strong> where they engage in
                every step of agriculture,{" "}
                <strong>from sowing seeds to harvesting crops.</strong> This
                hands-on approach not only teaches them the value of hard work
                but also the importance of sustainability.
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/agri-mobile.png"
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
                A portion of the{" "}
                <strong>harvested produce is used in our kitchen,</strong>{" "}
                giving students a sense of accomplishment as they see their
                efforts nourish the community.
              </p>
              <p className="card-txt">
                Our poly house nurtures exotic plants, sparking curiosity and
                wonder. Additionally,{" "}
                <strong>our Goshala, home to several Indian breed cows,</strong>{" "}
                provides students with the opportunity to learn about animal
                care. This blend of modern education and traditional practices
                teaches students how to stay grounded and connected to the
                source of their food
              </p>
              <div className="row mt-3">
                <div className="col-5 col-lg-5">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/farming.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Farming</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/poly.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">poly-house</p>
                    </div>
                  </div>
                </div>
                <div className="col-7 col-lg-7">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/gaushala.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Gaushala</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/learning.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">
                        Learning from the Neighborhood and Community
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

export default Agriculture;
