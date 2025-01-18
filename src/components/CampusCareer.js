import React from "react";
import Image from "next/image";

import { Tab, Tabs } from "react-bootstrap";
import AllenSlider from "./CareerItem/AllenSlider";
import CareerSlider from "./CareerItem/CareerSlider";
import TrishaSlider from "./CareerItem/TrishaSlider";
import GlobalSlider from "./CareerItem/GlobalSlider";
import LeapSlider from "./CareerItem/LeapSlider";
import useMediaQuery from "./useMediaQuery";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

function CampusCareer() {
  return (
    <>
      <section className="global_section career-sec" id="career">
        <div className="cust-container">
          <h3 className="section-title mb-3">
            Explore Your Career Paths (For Grade 11 & 12)
          </h3>
          {/* <p className="career-subtitle">
            Experience the lively environment at TAC Bangalore, where every activity contributes to a journey of creativity, exploration, and growth, making our campus a place of endless possibilities
          </p> */}

          <p className="career-subtitle career-subtitle-2">
          Experience the dynamic environment at Edify School Chikkabanavara, where every activity fosters creativity, exploration, and growth, creating a foundation for endless opportunities.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Tabs
              // defaultActiveKey="allen"
              transition={true}
              id="noanim-tab-example1"
              className="mb-3"
            >
              <Tab
                eventKey="allen"
                title={
                  <>
                    <div className="learning-partner">
                      <div className="partner">
                        <div className="partner-img">
                          <Image
                            src={"/images/partners/allen.svg"}
                            width={87}
                            height={26}
                            alt="partner"
                          />
                        </div>
                        <h4 className={`${outfit.className} partner-txt`}>
                          for Engg. & Medical Aspirants
                        </h4>
                      </div>
                    </div>
                  </>
                }
              >
                <div className="nav-tab-container">
                  <AllenSlider />
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default CampusCareer;
