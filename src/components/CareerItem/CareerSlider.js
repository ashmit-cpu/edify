import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

function CareerSlider() {
  return (
    <div className={`${outfit.className} career-container position-relative`}>
      <div className="career-slider">
        <Swiper
          className="swiper"
          effect={"coverflow"}
          modules={[Autoplay, Navigation]}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".career-next",
            prevEl: ".career-prev",
          }}
          speed={1200}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 20 },
            767: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont programme-container patch-inner">
              <div className="programme">
                <h3 className="programme-title">About the Programme</h3>
                <div className="programme-img">
                  <Image
                    src={"/images/program.png"}
                    width={0}
                    height={0}
                    sizes="100%"
                    alt="program"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="programme-txt">
                  The Mode program is tailored for students with a creative
                  aptitude, preparing them for entrance exams like{" "}
                  <strong> NATA, NID, NIFT, and UCEED.</strong> Mode&apos;s
                  comprehensive module equips students to excel in any design
                  entrance exam.
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont module-container patch-inner bg-campus-career-lt">
              <div className="module">
                <div className="module-title">
                  <div className="module-icon-main">
                    <Image
                      src={"/images/icons/m1.svg"}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        sizes: "100%",
                        objectFit: "cover",
                      }}
                      alt="icons"
                    />
                  </div>
                  <h3 className="module-txt">Modules</h3>
                </div>

                <p className="module-desc">
                  Mode&apos;s learning stages cover five essential modules.
                </p>

                <div className="module-details">
                  <div className="module-detail">
                    <div className="module-icon">
                      <Image
                        src={"/images/icons/m2.svg"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          sizes: "100%",
                          objectFit: "cover",
                        }}
                        alt="icons"
                      />
                    </div>

                    <div className="module-detail-txt">
                      <h4 className="module-detail-txt-1">ADP</h4>
                      <h5 className="module-detail-txt-2">
                        Aptitude Development Programme
                      </h5>
                    </div>
                  </div>

                  <div className="module-detail">
                    <div className="module-icon">
                      <Image
                        src={"/images/icons/m3.svg"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          sizes: "100%",
                          objectFit: "cover",
                        }}
                        alt="icons"
                      />
                    </div>

                    <div className="module-detail-txt">
                      <h4 className="module-detail-txt-1">BDP</h4>
                      <h5 className="module-detail-txt-2">
                        Basic Design Programme
                      </h5>
                    </div>
                  </div>

                  <div className="module-detail">
                    <div className="module-icon">
                      <Image
                        src={"/images/icons/m4.svg"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          sizes: "100%",
                          objectFit: "cover",
                        }}
                        alt="icons"
                      />
                    </div>

                    <div className="module-detail-txt">
                      <h4 className="module-detail-txt-1">CDP</h4>
                      <h5 className="module-detail-txt-2">
                        Core Design Programme
                      </h5>
                    </div>
                  </div>

                  <div className="module-detail">
                    <div className="module-icon">
                      <Image
                        src={"/images/icons/m5.svg"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          sizes: "100%",
                          objectFit: "cover",
                        }}
                        alt="icons"
                      />
                    </div>

                    <div className="module-detail-txt">
                      <h4 className="module-detail-txt-1">DDP</h4>
                      <h5 className="module-detail-txt-2">
                        Develop & Design a Portfolio
                      </h5>
                    </div>
                  </div>

                  <div className="module-detail">
                    <div className="module-icon">
                      <Image
                        src={"/images/icons/m6.svg"}
                        width={0}
                        height={0}
                        style={{
                          width: "100%",
                          height: "100%",
                          sizes: "100%",
                          objectFit: "cover",
                        }}
                        alt="icons"
                      />
                    </div>

                    <div className="module-detail-txt">
                      <h4 className="module-detail-txt-1">EDP</h4>
                      <h5 className="module-detail-txt-2">
                        Exam Delivery Programme
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont taught-container patch-inner bg-campus-career-rt">
              <div className="taught">
                <div className="taught-title">
                  <div className="taught-icon">
                    <Image
                      src={"/images/icons/book.svg"}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        sizes: "100%",
                        objectFit: "cover",
                      }}
                      alt="icons"
                    />
                  </div>
                  <h3 className="taught-txt">What is Taught?</h3>
                </div>

                <div className="taught-list-content">
                  <ul className="taught-lists">
                    <li className="taught-list">
                      <span className="list-head">
                        Visualization Techniques:&nbsp;
                      </span>

                      <span className="list-content">
                        Master the art of visualizing ideas.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">Drawing Skills:&nbsp;</span>

                      <span className="list-content">
                        Develop precise drawing abilities.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">Design Thinking:&nbsp;</span>

                      <span className="list-content">
                        Enhance your creative problem-solving skills.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">
                        Creative Thinking:&nbsp;
                      </span>

                      <span className="list-content">
                        Boost your overall creativity and innovation.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">Exam Strategies:&nbsp;</span>

                      <span className="list-content">
                        Learn comprehensive strategies for
                        design entrance exams.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont taught-container patch-inner bg-campus-career-lt">
              <div className="taught">
                <div className="taught-title">
                  <div className="taught-icon">
                    <Image
                      src={"/images/icons/programme.svg"}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        sizes: "100%",
                        objectFit: "cover",
                      }}
                      alt="icons"
                    />
                  </div>
                  <h3 className="taught-txt">Programme Dynamics</h3>
                </div>

                <div className="programme-content">
                  <ul className="programme-lists">
                    <li className="programme-list">
                      <div className="title">
                        <Image
                          src={"/images/icons/study.svg"}
                          width={32}
                          height={27}
                          className="me-2"
                          alt="icons"
                        />
                        Regular Classes
                      </div>
                      <div>
                        Conducted{" "}
                        <strong>Monday to Friday, 2.5 to 3 hours</strong> daily.
                      </div>
                    </li>
                    <li className="programme-list">
                      <div className="title">
                        <Image
                          src={"/images/icons/assessment.svg"}
                          width={32}
                          height={27}
                          className="me-2"
                          alt="icons"
                        />
                        Mock Tests
                      </div>
                      <div>
                        <strong>One mock test per week,</strong> totaling four
                        per month.
                      </div>
                    </li>
                    <li className="programme-list">
                      <div className="title">
                        <Image
                          src={"/images/icons/mentorship.svg"}
                          width={32}
                          height={27}
                          className="me-2"
                          alt="icons"
                        />
                        PTM’s
                      </div>
                      <div>
                        <strong>
                          One Parent-Teacher Meeting every two months
                        </strong>{" "}
                        to discuss student performance.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont taught-container patch-inner bg-campus-career-rt">
              <div className="taught">
                <div className="taught-title">
                  <div className="taught-icon">
                    <Image
                      src={"/images/icons/career-focus.svg"}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        sizes: "100%",
                        objectFit: "cover",
                      }}
                      alt="icons"
                    />
                  </div>
                  <h3 className="taught-txt">Career Tours</h3>
                </div>

                <div className="career-focus-content">
                  <p className="mb-2">
                    {" "}
                    <strong>Students visit NID campus</strong> and other design
                    institutions to experience the design world firsthand.
                  </p>
                  <div className="programme-img">
                    <Image
                      src={"/images/career-path/career-tour.png"}
                      width={0}
                      height={0}
                      sizes="100%"
                      alt="program"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont taught-container patch-inner bg-campus-career-rt">
              <div className="taught">
                <div className="taught-title">
                  <div className="taught-icon">
                    <Image
                      src={"/images/icons/achievements.svg"}
                      width={0}
                      height={0}
                      style={{
                        width: "100%",
                        height: "100%",
                        sizes: "100%",
                        objectFit: "contain",
                      }}
                      alt="icons"
                    />
                  </div>
                  <h3 className="taught-txt">Achievements</h3>
                </div>

                <div className="career-focus-content">
                  <div className="programme-img my-3">
                    <Image
                      src={"/images/career-path/achievements-pic.png"}
                      width={0}
                      height={0}
                      sizes="100%"
                      alt="program"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="mb-2">
                    {" "}
                    <strong>Aami Rajeev</strong>{" "}
                  </p>
                  <p>
                    A recent graduate, successfully cleared NID. Her journey
                    exemplifies the excellence Mode nurtures in its students.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="custom-width-slider swiper-slide_size_m">
            <div className="card-cont career-head">
              <div className="head-img">
                <Image
                  src={"/images/career-path/head.png"}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt="head"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="head-txt text-dark">
                We are <strong> committed to guiding your child </strong>
                through the{" "}
                <strong>
                  {" "}
                  Academic Assistance Programme for Architecture and Design
                  careers.
                </strong>{" "}
                Our approach ensures they remain dedicated and balanced,
                fostering both academic excellence and overall well-being
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="swiper-nav custom-swiper-nav">
        <button className="cust-swiper-button-prev2 career-prev border-0 bg-transparent m-2">
          <svg
            width="52"
            height="51"
            viewBox="0 0 52 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.500002 25.6592C0.500004 12.0568 11.9011 1.00198 26 1.00198C40.0989 1.00198 51.5 12.0568 51.5 25.6592C51.5 39.2616 40.0989 50.3164 26 50.3164C11.9011 50.3164 0.500001 39.2616 0.500002 25.6592Z"
              fill="white"
              stroke="#494549"
            />
            <path
              d="M23.5701 31.5317L17.5001 25.6585L23.5701 19.7853"
              stroke="#494549"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M35 25.6587L18.17 25.6587"
              stroke="#494549"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button className="cust-swiper-button-next2 career-next border-0 bg-transparent m-2">
          <svg
            width="52"
            height="51"
            viewBox="0 0 52 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.5 25.6592C51.5 39.2616 40.0989 50.3164 26 50.3164C11.9011 50.3164 0.5 39.2616 0.5 25.6592C0.5 12.0568 11.9011 1.00195 26 1.00195C40.0989 1.00195 51.5 12.0568 51.5 25.6592Z"
              fill="white"
              stroke="#494549"
            />
            <path
              d="M28.4299 19.7866L34.4999 25.6599L28.4299 31.5331"
              stroke="#494549"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 25.6597H33.83"
              stroke="#494549"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CareerSlider;
