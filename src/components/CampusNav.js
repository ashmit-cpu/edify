import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ScrollSpy from "react-scrollspy-navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";
import Academics from "./CampusItem/Academics";
import StudentProgression from "./CampusItem/StudentProgression";
import Curricular from "./CampusItem/Curricular";
import LifeReady from "./CampusItem/LifeReady";
import CareerGuide from "./CampusItem/CareerGuide";
import Sports from "./CampusItem/Sports";
import BoardingLife from "./CampusItem/BoardingLife";
import Nutrition from "./CampusItem/Nutrition";
import CareerPrep from "./CampusItem/CareerPrep";
import Agriculture from "./CampusItem/Agriculture";
import useMediaQuery from "./useMediaQuery";

function CampusNav() {
  const handleButtonScroll = (id, offset = 150) => {
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect().top;
      const absoluteElementTop = elementRect + window.pageYOffset;
      const offsetPosition = absoluteElementTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const stickyNavRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("target-4");
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (stickyNavRef.current) {
      stickyNavRef.current.style.transform = isSticky
        ? "translateY(-280px)"
        : "translateY(0)";
      stickyNavRef.current.style.transition = "transform 0.3s ease-in-out";
    }
  }, [isSticky]);

  return (
    <>
      <section
        className="global_section nav-sec patch pb-5 homenav-sec homenav-sec-ia"
        id="campus"
        style={{ paddingTop: "0" }}
      >
        <div className="cust-container stick-sec">
          <h2 className="section-title mb-2">
          Experience the Full Spectrum of Edify Chikkabanavara
          </h2>
        </div>
        <div className="cust-container">
          <div className="mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="sticky-nav sticky-top" ref={stickyNavRef}>
                  <ScrollSpy activeClass="link-active">
                    <nav>
                      <ul className="vertical-links">
                        <li>
                          <a
                            href="#target-1"
                            onClick={() => handleButtonScroll("target-1")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/book.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Academics</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-2"
                            onClick={() => handleButtonScroll("target-2")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/student.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">
                                  Student Progression Plan (SPP)
                                </p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-3"
                            onClick={() => handleButtonScroll("target-3")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/curricular.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Co-Curricular Activities</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-4"
                            onClick={() => handleButtonScroll("target-4")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/life.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Life Readiness</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        
                        <li>
                          <a
                            href="#target-5"
                            onClick={() => handleButtonScroll("target-5")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/sport.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Sports</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-6"
                            onClick={() => handleButtonScroll("target-6")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/boarding.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Boarding Life</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-7"
                            onClick={() => handleButtonScroll("target-7")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/nutri.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Student Nutrition</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#target-8"
                            onClick={() => handleButtonScroll("target-8")}
                          >
                            <div className="nav-btn d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center justify-content-start ">
                                <Image
                                  src="/images/Home/nav/icon/prep.svg"
                                  alt="icon"
                                  width={35}
                                  height={35}
                                />
                                <p className="mx-3">Career Preperation</p>
                              </div>
                              <Image
                                src="/images/Home/nav/icon/arrow.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                className="arrow-icon"
                              />
                            </div>
                          </a>
                        </li>
                        
                      </ul>
                    </nav>
                  </ScrollSpy>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-sec ps-5">
                  <div className="new-md">
                    <div id="target-1">
                      <Academics />
                    </div>
                    <div id="target-2">
                      <StudentProgression />
                    </div>
                    <div id="target-3">
                      <Curricular />
                    </div>
                    <div id="target-4">
                      <LifeReady />
                    </div>
                    
                    <div id="target-5">
                      <Sports />
                    </div>
                    <div id="target-6">
                      <BoardingLife />
                    </div>
                    <div id="target-7">
                      <Nutrition />
                    </div>
                    <div id="target-8">
                      <CareerPrep />
                    </div>
                    <div id="target-9">
                      <Agriculture />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CampusNav;
