import Image from "next/image";
import React from "react";
import CampusExperienceActivityGallery from "./CampusExperienceActivityGallery";
import EnquireForm from "./Form/EnquireForm";

const Awards = () => {
  return (
    <section className="global_section award-rating-sec d-none d-md-block">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="award-reco">
              <div className="head !ac-flex ac-items-center ac-justify-center">
                <Image
                  width={17}
                  height={17}
                  alt=""
                  src="/images/icons/awards-ico.svg"
                  className="me-2"
                />
                <span className="text-white"> Award & Recognitions</span>
              </div>
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/01.svg"
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
                <div className="col-6 col-md-3">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/02.svg"
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
                <div className="col-6 col-md-3">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/03.svg"
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
                <div className="col-6 col-md-3">
                  <div className="award-item">
                    <Image
                      src="/images/award-recognitions/04.svg"
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
          <div className="col-md-4 mt-5 mt-md-0">
            <div className="award-reco">
              <div className="head !ac-flex ac-items-center ac-justify-center">
                <Image
                  width={17}
                  height={17}
                  alt=""
                  src="/images/icons/rating-ico.svg"
                  className="me-2"
                />
                <span className="text-white">Ratings</span>
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
      </div>
      <div className="gallery-form-sec ">
        <div className="row">
          <div className="col-md-7 pe-0">
            <CampusExperienceActivityGallery />
          </div>
          <div className="col-md-4 ps-0">
            <EnquireForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
