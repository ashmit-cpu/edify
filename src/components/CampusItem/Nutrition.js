import Image from "next/image";
import React from "react";
import { Row } from "react-bootstrap";

function Nutrition() {
  return (
    <div>
      <div className="right-cards yellow-bgs p-4 mb-4">
        <div className="row justify-content-between flex-column-reverse flex-lg-row">
          <div className="col-lg-7">
            <p className="card-head1 mb-1">Nourishing Minds and Bodies</p>
            <p className="card-txt">
              Students will enjoy between{" "}
              vegetarian and Jain food, ensuring that all meals
              are crafted to meet the nutritional needs of growing children. With{" "}
              six meals a day, we ensure that students receive
              the right balance of nutrition tailored by professional
              nutritionists offering a variety of cuisines.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/south.svg"
                    alt="card image"
                    width={33}
                    height={33}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">South Indian</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/chinese.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Chinese</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/north.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">North Indian</p>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center card-high"> */}
                {/* <Image
                    src="/images/Home/nav/icon/tt.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  /> */}
                {/* <div className="ms-3">
                    <p className="card-head px-0 mb-0">Continental</p>
                  </div>
                </div> */}
                <div className="d-flex justify-content-start align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/italian.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <p className="card-head px-0 mb-0">Italian</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-txt">
              Our diverse menu ensures that students enjoy their meals and do not
              miss the food they love.
            </p>

          </div>
          <div className="col-lg-5">
            <div className="card-img position-relative mb-4">
              <Image
                src="/images/Home/nav/nutri1.png"
                alt="card image"
                width={329}
                height={173}
              />
            </div>
            <div className="card-img position-relative">
              <Image
                src="/images/Home/nav/nutri2.png"
                alt="card image"
                width={329}
                height={173}
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
                  src="/images/Home/nav/icon/nutri.svg"
                  alt="icon"
                  width={10}
                  height={10}
                />
                <p className="px-2">Studen Nutrition</p>
              </div>
              <p className="card-head mb-1">Nourishing Minds and Bodies</p>
              <p className="card-txt">
                Students will enjoy between{" "}
                <strong>vegetarian and Jain food,</strong> ensuring that all
                meals are crafted to meet the nutritional needs of growing
                children.{" "}
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 ps-0">
            <div className="img-border">
              <Image
                src="/images/Home/nav/nutri-mobile.png"
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
                With <strong>six meals a day,</strong> we ensure that students
                receive the right balance of nutrition tailored by professional
                nutritionists offering a variety of cuisines.
              </p>
              <div className="row">
                <div className="col-4">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/south.svg"
                      alt="card image"
                      width={33}
                      height={33}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">South Indian</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/chinese.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Chinese</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/north.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">North Indian</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center card-high">
                  <Image
                    src="/images/Home/nav/icon/tt.svg"
                    alt="card image"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                      <p className="card-head px-0 mb-0">Continental</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex justify-content-start align-items-center card-high">
                    <Image
                      src="/images/Home/nav/icon/italian.svg"
                      alt="card image"
                      width={40}
                      height={40}
                    />
                    <div className="ms-3">
                      <p className="card-head px-0 mb-0">Italian</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="card-txt">
                Our diverse menu ensures that students enjoy their meals and do
                not miss the food they love.
              </p>
            </div>
          </div>
        </Row>
      </div> */}
    </div>
  );
}

export default Nutrition;
