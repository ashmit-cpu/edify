import React from "react";
import Image from "next/image";

import { Accordion } from "react-bootstrap";

import { Outfit } from "next/font/google";

import NewAccordion from "./Accordion";
// import AllenSlider from "../TrishaSliderNew";
import LeapSliderNew from "./LeepSliderNew";
import TrishaSliderNew from "./TrishaSliderNew";
import AllenSliderNew from "./AllenSliderNew";
import GlobalSliderNew from "./GlobalSliderNew";
import ModeSliderNew from "./ModeSliderNew"


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

const accordionData = [
  {
    header: (
      <h4 className="ac-flex ac-items-center ac-gap-2">
        <Image
          src={"/images/partners/trisha.svg"}
          width={75}
          height={24}
          alt="partner"
        />
        <h4
          className={`${outfit.className} partner-txt ac-ml-1 ac-text-[0.8rem]`}
        >
          for CA & Management Aspirants
        </h4>
      </h4>
    ),
    content: <TrishaSliderNew />,
  },
  {
    header: (
      <h4 className="ac-flex ac-items-center ac-gap-2">
        <Image
          src={"/images/partners/leap.svg"}
          width={75}
          height={24}
          alt="partner"
        />
        <h4
          className={`${outfit.className} partner-txt ac-ml-1 ac-text-[0.8rem]`}
        >
          for Career Guidance
        </h4>
      </h4>
    ),
    content: <LeapSliderNew />,
  },
  {
    header: (
      <h4 className="ac-flex ac-items-center ac-gap-2">
        <Image
          src={"/images/partners/allen.svg"}
          width={75}
          height={24}
          alt="partner"
        />
        <h4
          className={`${outfit.className} partner-txt ac-ml-1 ac-text-[0.8rem]`}
        >
          for Engg. & Medical Aspirants
        </h4>
      </h4>
    ),
    content: <AllenSliderNew />,
  },
  {
    header: (
      <h4 className="ac-flex ac-items-center ac-gap-2">
        <Image
          src={"/images/partners/global.svg"}
          width={75}
          height={24}
          alt="partner"
        />
        <h4
          className={`${outfit.className} partner-txt ac-ml-1 ac-text-[0.8rem]`}
        >
          for Study Abroad Aspirants
        </h4>
      </h4>
    ),
    content: <GlobalSliderNew />,
  },
  {
    header: (
      <h4 className="ac-flex ac-items-center ac-gap-2">
        <Image
          src={"/images/partners/mode.svg"}
          width={75}
          height={24}
          alt="partner"
        />
        <h4
          className={`${outfit.className} partner-txt ac-ml-1 ac-text-[0.8rem]`}
        >
          for Arch. & Design Aspirants
        </h4>
      </h4>
    ),
    content: <ModeSliderNew />,
  },
  
];

function CampusCareerMobile() {
  // const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <section className="global_section career-sec !ac-mb-0" id="career">
        <div className="cust-container">
          <h3 className="section-title mb-3">
            Explore Your Career Paths (For Grade 11 & 12)
          </h3>
          <p className="career-subtitle">
          Experience the dynamic environment at Edify School Chikkabanavara, where every activity fosters creativity, exploration, and growth, creating a foundation for endless opportunities.
          </p>
        </div>
        <div className="container">
          <NewAccordion accordionData={accordionData} />
        </div>
      </section>
    </>
  );
}

export default CampusCareerMobile;
