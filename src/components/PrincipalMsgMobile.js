import Image from "next/image";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMediaQuery from "./useMediaQuery";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
function PrincipalMsgMobile() {
  // const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <section
        className="global_section lp-principle-mes d-block d-md-none py-3"
        id="principals"
      >
        <div className="cust-container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="img">
                    <Image
                      src="/images/principle-m.png"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="content-inner">
                    <div className="name">Dear Parents,</div>
                    <div className={`${outfit.className} desc`}>
                      I am committed to fostering an environment where your
                      child excel in academics, social, emotional, and life
                      skills, ensuring they thrive in every aspect
                      of their growth.
                    </div>
                    <div className={`${outfit.className} prof`}>
                      Prof. Pallavi, Principal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="achievement content-inner">
                <div className="name mb-4">Achievements</div>
                <div className="img">
                  <Image
                    src="/images/achievements.svg"
                    width={0}
                    height={0}
                    sizes="100%"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrincipalMsgMobile;
