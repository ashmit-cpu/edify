import React, { useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import Image from "next/image";

import AcademicsM from "./CampusItem/AcademicsM";
import StudentProgressionM from "./CampusItem/StudentProgressionM";
import CurricularM from "./CampusItem/CurricularM";
import LifeReadyM from "./CampusItem/LifeReadyM";
import CareerGuideM from "./CampusItem/CareerGuideM";
import SportsM from "./CampusItem/SportsM";
import BoardingLifeM from "./CampusItem/BoardingLifeM";
import NutritionM from "./CampusItem/NutritionM";
import CareerPrepM from "./CampusItem/CareerPrepM";
import AgricultureM from "./CampusItem/AgricultureM";

const CampusNavMobile = () => {
  const accordionData = [
    { title: "Academics", component: <AcademicsM />, icon: "/images/Home/nav/icon/book.svg", iconActive: "/images/Home/nav/icon/book-m.svg" },
    { title: "Student Progression Plan", component: <StudentProgressionM />, icon: "/images/Home/nav/icon/student.svg", iconActive: "/images/Home/nav/icon/student-m.svg" },
    { title: "Co-Curricular Activities", component: <CurricularM />, icon: "/images/Home/nav/icon/curricular.svg", iconActive: "/images/Home/nav/icon/curricular-m.svg" },
    { title: "Life Readiness", component: <LifeReadyM />, icon: "/images/Home/nav/icon/life.svg", iconActive: "/images/Home/nav/icon/life-m.svg" },
    { title: "Career Guidance", component: <CareerGuideM />, icon: "/images/Home/nav/icon/career.svg", iconActive: "/images/Home/nav/icon/career-m.svg" },
    { title: "Sports", component: <SportsM />, icon: "/images/Home/nav/icon/sport.svg", iconActive: "/images/Home/nav/icon/sport-m.svg" },
    { title: "Boarding Life", component: <BoardingLifeM />, icon: "/images/Home/nav/icon/boarding.svg", iconActive: "/images/Home/nav/icon/boarding-m.svg" },
    { title: "Student Nutrition", component: <NutritionM />, icon: "/images/Home/nav/icon/nutri.svg", iconActive: "/images/Home/nav/icon/nutri-m.svg" },
    { title: "Career Preparation", component: <CareerPrepM />, icon: "/images/Home/nav/icon/prep.svg", iconActive: "/images/Home/nav/icon/prep-m.svg" },
    { title: "Agriculture", component: <AgricultureM />, icon: "/images/Home/nav/icon/agri.svg", iconActive: "/images/Home/nav/icon/agri-m.svg" }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);

  const scrollToHeader = (header) => {
    header.style.scrollMarginTop = "100px";
    setTimeout(() => {
      header.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 350);
  };

  const handleToggle = (index) => {
    const isOpening = index !== activeIndex;

    setActiveIndex(isOpening ? index : null);

    if (isOpening) {
      const header = accordionRefs.current[index];
      if (header) {
        scrollToHeader(header);
      }
    }
  };
  

  return (
    <>
    <section className="global_section nav-sec patch pb-0" id="campus">
      <div className="cust-container">
        <h2 className="section-title mb-3">Experience the Full Spectrum of TAC School</h2>
        <Accordion className="custom-acc-container">
          {accordionData.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} className="custom-acc" key={index}>
              <Accordion.Header className="custom-acc-btn" onClick={() => handleToggle(index)} ref={(el) => (accordionRefs.current[index] = el)}>
                <Image
                  src={activeIndex === index ? item.iconActive : item.icon}
                  width={31}
                  height={31}
                  alt=""
                  className="me-3"
                />
                {item.title}
              </Accordion.Header>
              <Accordion.Body>
                {activeIndex === index && item.component}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
    </>
  );
};

export default CampusNavMobile;
