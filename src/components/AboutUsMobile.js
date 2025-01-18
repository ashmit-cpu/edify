import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // You can specify the weights you need
});
const updates = [
  {
    image: "/images/aboutus/syed.png",
    date: "2024-09-12",
    name: "Syed Mukhtar",
    description: (
      <>
       Very good curriculum and well experienced teachers.
      </>
    ),
  },
  {
    image: "/images/aboutus/masuma-nihal.png",
    date: "2024-08-12",
    name: "Masuma Nihal Syed",
    description: (
      <>
       Impressive curriculum and teaching methodology used by the teachers.
      </>
    ),
  },
  {
    image: "/images/aboutus/bhadane-bhushan.png",
    date: "2024-08-12",
    name: "bhadane bhushan",
    description: (
      <>
       Edify School chikkabanvara campus is having big play ground and the syllabus 3C pattern for the primary will really enhanced the overall growth of students. Teachers also take special efforts for the students in overall activities related to their syllabus,sports,Music etc.
      </>
    ),
  },
  {
    image: "/images/aboutus/asha.png",
    date: "2023-09-13",
    name: "Asha Mohanraj",
    description: (
      <>
      Very knowledgeable teachers
      </>
    ),
  },
];
const AboutUsMobile = () => {
  return (
    <section className="global_sections aboutus-testimonials academic-sec aboutus-sec podcast-nobg pt-5 d-block d-md-none">
      <div className="row">
        <div className="col">
          <h3 class="section-title c_green mb-3 text-center">
            What Our Students and Parents Say About Us
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="position-relative officer-slider ">
            <Swiper
              effect={"coverflow"}
              modules={[Autoplay, Navigation]}
              // autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{
                nextEl: ".cust-swiper-button-next",
                prevEl: ".cust-swiper-button-prev",
              }}
              speed={1200}
              loop={true}
              className="testimonial_slider"
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                  centeredSlides: true,
                },
                767: { slidesPerView: 2.2, spaceBetween: 10 },
                992: { slidesPerView: 3, spaceBetween: 10 },
                1200: { slidesPerView: 3, spaceBetween: 10 },
                1530: { slidesPerView: 4, spaceBetween: 10 },
              }}
            >
              {updates &&
                updates?.map((item, index) => {
                  return (
                    <SwiperSlide key={`officer${index}`}>
                      <div className="aboutus-item stud-card">
                        <div className="img">
                          <Image
                            src={item?.image}
                            alt="image"
                            width={362}
                            height={211}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              // filter: "grayscale(1)",
                            }}
                            className="object-fit-cover w-100"
                          />
                        </div>

                        <div className="details">
                          {/* <div className='date'>{item?.date}</div> */}
                          <div
                            className={`${outfit.className} ac-text-xs ac-font-medium`}
                          >
                            {item?.description}
                          </div>
                          <div
                            className={`${outfit.className} ac-text-sm ac-font-bold ac-mt-4 ac-text-[#185850]`}
                          >
                            {item?.name}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div className="swiper-nav text-end mt-0 mb-md-0">
              <button className="cust-swiper-button-prev border-0 bg-transparent m-2 me-md-4">
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500002 25.6592C0.500004 12.0568 11.9011 1.00198 26 1.00198C40.0989 1.00198 51.5 12.0568 51.5 25.6592C51.5 39.2616 40.0989 50.3164 26 50.3164C11.9011 50.3164 0.500001 39.2616 0.500002 25.6592Z"
                    fill="white"
                    stroke="#494549"
                  />
                  <path
                    d="M23.5701 31.5317L17.5001 25.6585L23.5701 19.7853"
                    stroke="#494549"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35 25.6587L18.17 25.6587"
                    stroke="#494549"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="cust-swiper-button-next border-0 bg-transparent m-2">
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.5 25.6592C51.5 39.2616 40.0989 50.3164 26 50.3164C11.9011 50.3164 0.5 39.2616 0.5 25.6592C0.5 12.0568 11.9011 1.00195 26 1.00195C40.0989 1.00195 51.5 12.0568 51.5 25.6592Z"
                    fill="white"
                    stroke="#494549"
                  />
                  <path
                    d="M28.4299 19.7866L34.4999 25.6599L28.4299 31.5331"
                    stroke="#494549"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 25.6597H33.83"
                    stroke="#494549"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMobile;
