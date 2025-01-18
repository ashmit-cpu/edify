import Image from "next/image";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import useMediaQuery from "./useMediaQuery";

function PrincipalMsg() {
  // Media query for screens larger than 768px
  // const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <section className="global_section lp-principle-mes d-none d-md-block" id="principals">
        <div className="cust-container d-none d-md-block" >
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-8">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div className="img">
                        <Image src="/images/principle-m.png" width={0} height={0} sizes="100%" alt='' style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="content-inner">
                        <div className="name text-white">Principal’s Message</div>
                        <div className="desig">Nurturing Holistic Growth and Academic Excellence</div>
                        <div className="desc">Edify School Chikkabanavara fosters learning and creativity in a serene environment. Since 2017, it has provided quality education through its unique 3C curriculum, innovative programs, and collaborations with parents. Prioritising happiness, the school empowers students to succeed academically, socially, and emotionally, preparing them for life and their dreams.</div>
                        <div className="prof"><span>Prof. Pallavi,</span> MBA, M.Phil, MA, B.Ed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="achievement content-inner">
                    <div className="name mb-4 text-white">Achievements</div>
                    <div className="img">
                      <Image src="/images/achievements.svg" width={0} height={0} sizes="100%" alt='' style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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

export default PrincipalMsg;
