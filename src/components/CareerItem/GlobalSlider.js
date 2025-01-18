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

function GlobalSlider() {
  return (
    <div className={`${outfit.className} career-container position-relative`}>
      <div className="career-slider">
        <Swiper
          className="swiper"
          effect={"coverflow"}
          modules={[Autoplay, Navigation]}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: ".global-next",
            prevEl: ".global-prev",
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
                    src={"/images/career-path/program04.png"}
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
                  TAC Global Studies is a leading platform that prepares
                  students for higher education at prestigious international
                  universities. The program offers guidance in profile building,
                  global test preparation, application processes, visa
                  assistance, and scholarships.
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
                  <h3 className="taught-txt">Modules</h3>
                </div>
                <p className="module-desc">
                  TAC Global Studies consists of four focused modules:
                </p>

                <div className="taught-list-content">
                  <ul className="taught-lists">
                    <li className="taught-list">
                      <span className="list-head">
                        Profile Enhancement:&nbsp;
                      </span>

                      <span className="list-content">
                        Complete certification programs and participate in
                        community service to strengthen your application.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">Exam Preparation:&nbsp;</span>

                      <span className="list-content">
                        Intensive preparation for SAT, IELTS, TOEFL, and AILET
                        with tailored coaching.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">
                        Application Guidance:&nbsp;
                      </span>

                      <span className="list-content">
                        Support for filling out university applications,
                        preparing personal essays, and completing visa
                        requirements.
                      </span>
                    </li>

                    <li className="taught-list">
                      <span className="list-head">
                        Scholarship Search:&nbsp;
                      </span>

                      <span className="list-content">
                        Detailed exploration of scholarship opportunities and
                        help with applications.
                      </span>
                    </li>

                    {/* <li className="taught-list">
                      <span className="list-head">Exam Strategies:&nbsp;</span>

                      <span className="list-content">
                        Learn comprehensive strategies for
                        design entrance exams.
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="custom-width-slider swiper-slide_size_s">
            <div className="card-cont module-container patch-inner bg-campus-career-rt">
              <div className="module">
                <div className="module-title">
                  <div className="module-icon-main">
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
                  <h3 className="module-txt">What is Taught?</h3>
                </div>

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
                      <h4 className="module-detail-txt-1">
                        Test Preparation Techniques:
                      </h4>
                      <h5 className="module-detail-txt-2">
                        Learn strategies to excel in international exams.
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
                      <h4 className="module-detail-txt-1">
                        Application Writing Skills:
                      </h4>
                      <h5 className="module-detail-txt-2">
                        Develop the skills to craft standout personal statements
                        & essays.
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
                      <h4 className="module-detail-txt-1">
                        Profile Development Workshops:
                      </h4>
                      <h5 className="module-detail-txt-2">
                        Engage in activities that highlight your unique
                        strengths, certifications.
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
                      <h4 className="module-detail-txt-1">
                        Scholarship & Financial Guidance:
                      </h4>
                      <h5 className="module-detail-txt-2">
                        Identify and apply for scholarships that align with your
                        qualifications.
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
                      <h4 className="module-detail-txt-1">
                        Tailored University Selection:
                      </h4>
                      <h5 className="module-detail-txt-2">
                        Expert advice on selecting universities that fit you.
                      </h5>
                    </div>
                  </div>
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
                        Study Schedule
                      </div>
                      <div>
                        1-2 sessions per week, of 2 to 3 hours, for
                        comprehensive exam prep.
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
                        Assessments
                      </div>
                      <div>
                        Regular feedback sessions ensure students are on track
                        for achieving their academic goals.
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
                        Application Support
                      </div>
                      <div>
                        Continuous support through every step of the application
                        process, from personal essays to visa documentation.
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
                  <h3 className="taught-txt">Career Focus</h3>
                </div>

                <div className="career-focus-content">
                  <p className="mb-2">
                    {" "}
                    TAC Global Studies equips students for success in gaining
                    admission to top international universities.
                  </p>
                  <p className="mb-2">
                    By offering tailored exam preparation, profile enhancement,
                    and application support, students are well-positioned to
                    excel academically and secure their future global
                    career opportunities.
                  </p>
                  <div className="programme-img">
                    <Image
                      src={"/images/career-path/global.png"}
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
          <SwiperSlide className="custom-width-slider swiper-slide_size_m">
            <div className="card-cont career-head">
              <div className="head-img">
                <Image
                  src={"/images/career-path/head04.png"}
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
                <strong>TAC Global Studies,</strong> we provide your child with
                personalized support, including{" "}
                <strong>profile building,</strong> certification guidance,
                application assistance, and scholarship exploration, preparing
                them for success at{" "}
                <strong>top international universities.</strong>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="swiper-nav custom-swiper-nav">
        <button className="cust-swiper-button-prev2 global-prev border-0 bg-transparent m-2">
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

        <button className="cust-swiper-button-next2 global-next border-0 bg-transparent m-2">
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

export default GlobalSlider;
