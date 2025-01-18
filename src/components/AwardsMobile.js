import Image from "next/image";
import React from "react";
import CampusExperienceActivityGallery from "./CampusExperienceActivityGallery";
import EnquireForm from "./Form/EnquireForm";
import Marquee from "react-fast-marquee";

const AwardsMobile = () => {
  return (
    <section className="global_section award-rating-sec d-block d-md-none pt-0">
      <div className="gallery-form-sec mt-0">
        <div className="row">
          <div className="col-md-7">
            <CampusExperienceActivityGallery />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 mb-5 ">
            <div className="award-reco">
              <div className="head !ac-flex ac-items-center ac-justify-center">
                <Image
                  width={17}
                  height={17}
                  alt=""
                  src="/images/icons/rating-ico.svg"
                  className="me-2"
                />
                <span>Ratings</span>
              </div>
              <div className="row">
                <div className="col-6 col-md-6">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/google-r.svg"
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
                <div className="col-6 col-md-6">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/edu-stock-r.svg"
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
        </div>

        <div className="row">
          <div className="col-md-4">
            <EnquireForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsMobile;
