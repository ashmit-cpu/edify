import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../public/js/variants.js";
import { zoomIn } from "../../public/js/variants.js";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "./counter.js";
import BrochureForm from "../Form/BrochureForm.js";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Activities = [
  {
    image: "/images/Activities/academics.png",
    actTitle: "Academics",
  },
  {
    image: "/images/Activities/scholastics.png",
    actTitle: "Co-Scholastics",
  },
  {
    image: "/images/Activities/sports.png",
    actTitle: "Sports",
  },
  {
    image: "/images/Activities/farming.png",
    actTitle: "Farming",
  },
  {
    image: "/images/Activities/weekend-activities.png",
    actTitle: "Weekend Activities",
  },
  {
    image: "/images/Activities/campus-life.png",
    actTitle: "Campus Life",
  },
];

function CampusActivity() {
  return (
    <>
      <section className="global_section activity-sec" id="gallerys">
        <div className="cust-container">
          <h3 className="section-title">
            Explore Your Career Path. Find Your Learning Partner.
          </h3>
          <p className="activity-subtitle">
            Situated in CyberPark, Gurugram, flanked by over 600 MNCs
          </p>

          <div className="acitivity-container">
            <Row className="gx-5 gy-5">
              {Activities &&
                Activities.map((item, index) => {
                  return (
                    <>
                      <Col lg={4} md={6}>
                        <div
                          className="acitivity-content"
                          key={`Activities-${index}`}
                        >
                          <div className="acitivity-img">
                            <Image
                              src={item.image}
                              width={0}
                              height={0}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              sizes="100%"
                              alt="acitivity-img"
                            />
                          </div>
                          <div className="acitivity-txt">{item.actTitle}</div>
                        </div>
                      </Col>
                    </>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default CampusActivity;
