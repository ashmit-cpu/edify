import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "../../public/js/variants.js";
import { Col, Container, Row } from "react-bootstrap";
import ApplyForm from "./Form/ApplyForm.js";
import EnquirePopupform from "./Form/EnquirePopupform.js";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});
function CampusOverviewGrade() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <section
        className="global_section principleci lp-b !ac-pt-0 md:ac-py-10 !ac-mt-8"
        id=""
      >
        <Container className="ac-px-0">
          <div className=" d-none d-md-block">
            <Row className="justify-content-betweens">
              <Col sm={6} lg={4}>
                <div className="over-wrap">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <Image
                      src="/images/icons/grade.svg"
                      alt="timer pointer"
                      width={34}
                      height={34}
                    />
                    <p className="small-txt ms-2 d-flex !ac-text-xs ac-flex ac-items-center">
                      <span>Grade</span>
                      <span className="big-txt ms-2 !ac-text-sm">IK 1 to Grade 12</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="over-wrap">
                  <div className="d-flex align-items-center justify-content-start">
                    <Image
                      src="/images/cambridge.svg"
                      alt="cambridge logo"
                      width={86}
                      height={30}
                      style={{ width: "100%", height: "100%" }}
                      className=""
                    />
                  </div>
                </div>
              </Col>
              <Col sm={6} lg={4}>
                <div className="over-wrap">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <Image
                      src="/images/cbse.svg"
                      alt="cbse logo"
                      width={33}
                      height={38}
                    />
                    <p className="small-txt ms-2 !ac-text-[.7rem]">
                      Central Board of <br /> Secondary Education{" "}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <div className="container ac-px-0">
        <div className="ac-w-full over-wrap mobile-pointer d-block d-md-none ac-rounded-[13.416px] ac-shadow-[0px_0px_4.2px_0px_#2d945c] ac-py-[25px] ac-px-[10px] ac-mt-0">
          <div className="ac-grid ac-grid-cols-4 ac-gap-4">
            <div className="ac-col-span-1 ac-flex ac-gap-3 ac-flex-col">
              <Image
                src="/images/grade412.svg"
                alt="timer pointer"
                width={40}
                height={40}
                className="m-auto ac-object-cover"
              />
              <p
                className={`text-center !ac-text-[0.7rem] pointers ${outfit.className}`}
              >
                Grade 4-12
              </p>
            </div>
            <div className="ac-col-span-1 ac-flex ac-gap-3 ac-flex-col">
              <Image
                src="/images/CBSE2.png"
                alt="timer pointer"
                width={36}
                height={39}
                className="m-auto ac-object-cover"
              />
              <p
                className={`text-center !ac-text-[0.7rem] pointers ${outfit.className}`}
              >
                CBSE
              </p>
            </div>
            <div className="ac-col-span-1 ac-flex ac-gap-3 ac-flex-col">
              <Image
                src="/images/cambridge.png"
                alt="timer pointer"
                width={33}
                height={39}
                className="m-auto ac-object-cover"
              />
              <p
                className={`text-center !ac-text-[0.7rem] pointers ${outfit.className}`}
              >
                Cambridge
              </p>
            </div>
            <div className="ac-col-span-1 ac-flex ac-gap-3 ac-flex-col">
              <Image
                src="/images/hand.png"
                alt="timer pointer"
                width={60}
                height={60}
                className="m-auto ac-object-cover"
              />
              <p
                className={`text-center !ac-text-[0.7rem] pointers ${outfit.className}`}
              >
                Admission
              </p>
            </div>
          </div>
        </div>
      </div>

      <EnquirePopupform show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default CampusOverviewGrade;
