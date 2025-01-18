import React, { useState , useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../public/js/variants.js";
import { zoomIn } from "../../public/js/variants.js";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "./counter.js";
import BrochureForm from "./Form/BrochureForm.js";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import EnquirePopupform from "./Form/EnquirePopupform.js";
import cbseOfferings from "./AcademicOffering/cbseOfferings"
import cambridgeOfferings from "./AcademicOffering/cambridgeOfferings"

function CampusAcademic() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [activeIndex, setActiveIndex] = useState(null);
  const accordionRefs = useRef([]);


  // Function to calculate scroll margin based on viewport width
  const getScrollMargin = () => window.innerWidth <= 767 ? "100px" : "200px";

  // Function to scroll to the accordion header
  const scrollToHeader = (header) => {
    const scrollMargin = getScrollMargin();
    header.style.scrollMarginTop = scrollMargin;
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

  // Array of components and their display names
  const academicComponents = [
    { Component: cbseOfferings, displayName: "CBSE" },
    // { Component: cambridgeOfferings, displayName: "Cambridge" },
  ];


  const handleMouseDown = (e) => {
    const container = document.querySelector(".custom-navs-02"); // Using querySelector instead of ref coz of bootstrap
    if (container) {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = document.querySelector(".custom-navs-02"); // Using querySelector instead of ref coz of bootstrap
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  return (
    <>
      <section className="global_section academic-sec" id="academic">
        <div className="cust-container">
          <h3 className="section-title">Academic Offering and Scholarships</h3>
          <p className="academic-subtitle mb-5">
            Explore the curriculum, subject options and scholarship details
          </p>

          <Accordion className="custom-acc-container">
            {academicComponents.map((data, index) => (
              <Accordion.Item eventKey={index.toString()} className="custom-acc" key={index}>
                <Accordion.Header className="custom-acc-btn font-gilroy" onClick={() => handleToggle(index)} ref={(el) => accordionRefs.current[index] = el}>
                  {data.displayName}
                </Accordion.Header>
                <Accordion.Body>
                  <data.Component />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
      <EnquirePopupform
        show={showModal}
        handleClose={handleCloseModal}
        ctatitle={"Apply for scholarship"}
      />
    </>
  );
}

export default CampusAcademic;
