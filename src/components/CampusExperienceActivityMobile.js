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

function CampusExperienceActivityMobile() {
  // const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <section className="global_section experience-activity-sec d-block d-md-none" id="gallery">
        <div className="cust-container">
          <h3 className="section-title">
            Experience the diverse activities at TAC Bangalore
          </h3>
        </div>
        <CampusExperienceActivityGallery />
      </section>
    </>
  );
}

export default CampusExperienceActivityMobile;
