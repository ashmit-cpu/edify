import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import CampusExperienceActivityGallery from "./CampusExperienceActivityGallery";
import useMediaQuery from "./useMediaQuery";

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

function CampusExperienceActivity() {
  // const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <section className="global_section experience-activity-sec d-none d-md-block" id="gallery">
        <div className="cust-container">
          <h3 className="section-title">
            Experience the diverse activities at TAC Bangalore
          </h3>
          <p className="activity-subtitle">
            Experience the lively environment at TAG Bangalore, where every activity contributes to a journey of creativity, exploration, and growth, making our campus a place of endless possibilities
          </p>


        </div>
        <CampusExperienceActivityGallery />
      </section>
    </>
  );
}

export default CampusExperienceActivity;
