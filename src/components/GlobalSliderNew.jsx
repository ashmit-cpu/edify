import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Outfit } from "next/font/google";
import {
  AboutCard,
  CommonCard,
  Lead,
  Modules,
  ProgDynamics,
  Taught,
} from "./CommonCards";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});
const aboutData = {
  title: "About the Programme",
  image: "/images/career-path/program01.png",
  arrow: "/images/Arrow.svg",
  description: (
    <span className="ac-text-[0.65rem] ac-pl-6 ac-block ac-text-[#494549]">
      TAC Global Studies is a leading platform that prepares students for higher
      education at prestigious international universities. The program offers
      guidance in profile building, global test preparation, application
      processes, visa assistance, and scholarships.
    </span>
  ),
};
const moduleData = {
  title: "Modules",
  description: "TAC Global Studies consists of four focused modules:",
  image: "/images/Modules.svg",
  items: [
    <p
      className={`${outfit.className} ac-text-[0.6rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Profile Enhancement:</bold> Complete
      certification programs and participate in community service to strengthen
      your application.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.6rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Exam Preparation:</bold> Intensive
      preparation for SAT, IELTS, TOEFL, and AILET with tailored coaching.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.6rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Application Guidance: </bold> Support
      for filling out university applications, preparing personal essays, and
      completing visa requirements.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.6rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Scholarship Search: </bold> Detailed
      exploration of scholarship opportunities and help with applications.
    </p>,
  ],
};

const taughtData = {
  title: "What is Taught?",
  description: "These are the modules covered in the program.",
  image: "/images/icons/book.svg",
  items: [
    {
      image: "/images/icons/m2.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.63rem]">
          <bold className="ac-font-bold">Test Preparation Techniques:</bold>{" "}
          <br />
          Learn strategies to excel in international exams.
        </p>
      ),
    },
    {
      image: "/images/icons/m3.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.63rem]">
          <bold className="ac-font-bold">Application Writing Skills: </bold>{" "}
          <br />
          Develop the skills to craft standout personal statements & essays.
        </p>
      ),
    },
    {
      image: "/images/icons/m4.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.63rem]">
          <bold className="ac-font-bold">Profile Development Workshops:</bold>{" "}
          <br />
          Engage in activities that highlight your unique strengths,
          certifications.
        </p>
      ),
    },
    {
      image: "/images/icons/m5.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.63rem]">
          <bold className="ac-font-bold">
            Scholarship & Financial Guidance:{" "}
          </bold>{" "}
          <br />
          Identify and apply for scholarships that align with your
          qualifications.
        </p>
      ),
    },
    {
      image: "/images/icons/m6.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.63rem]">
          <bold className="ac-font-bold">Tailored University Selection:</bold>{" "}
          <br />
          Expert advice on selecting universities that fit you.
        </p>
      ),
    },
  ],
};

const progDynamicsData = {
  title: "Programme Dynamics",
  description: "",
  image: "/images/icons/programme.svg",
  items: [
    {
      icon: "/images/icons/study.svg",
      title: "Study Schedule",
      description: (
        <p className="ac-leading-4">
          1-2 sessions per week, of 2 to 3 hours, for comprehensive exam prep.
        </p>
      ),
    },
    {
      icon: "/images/icons/assessment.svg",
      title: "Assessments",
      description: (
        <p className="ac-leading-4">
          Regular feedback sessions ensure students are on track for achieving
          their academic goals.
        </p>
      ),
    },
    {
      icon: "/images/icons/mentorship.svg",
      title: "Mentorship",
      description: (
        <p className="ac-leading-4">
          Continuous support through every step of the application process, from
          personal essays to visa documentation.
        </p>
      ),
    },
  ],
};
const LeadData = {
  imageSrc: "/images/career-path/head04.png",
  description: (
    <p className="ac-leading-5">
      <bold className="ac-font-bold">TAC Global Studies,</bold> we provide your
      child with personalized support, including{" "}
      <bold className="ac-font-bold">profile building,</bold> certification
      guidance, application assistance, and scholarship exploration, preparing
      them for success at{" "}
      <bold className="ac-font-bold">top international universities.</bold>
    </p>
  ),
};

// Example data
const commonData = {
  title: "Career Focus",
  image: "/images/icons/career-focus.svg",
  description: [
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
      TAC Global Studies equips students for success in gaining admission to top
      international universities.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
      By offering tailored exam preparation, profile enhancement, and
      application support, students are well-positioned to excel academically
      and secure their future global career opportunities.
    </p>,
    <Image
      src={"/images/career-path/global.png"}
      width={0}
      height={0}
      sizes="100%"
      alt="program"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />,
  ],
};

// Example data

const GlobalSliderNew = () => {
  const swiperRef = useRef(null);
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.3}
        // centeredSlides={userResumesData.length > 4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          375: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1338: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="ac-pl-4 ">
            <Lead {...LeadData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ac-pl-4 ac-py-4">
            <AboutCard {...aboutData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ac-pl-4 ac-py-4">
            <Modules {...moduleData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ac-pl-4 ac-py-4">
            <Taught {...taughtData} {...{ gap: false }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ac-pl-4 ac-py-4">
            <ProgDynamics {...progDynamicsData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ac-pl-4 ac-py-4">
            <CommonCard {...commonData} />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default GlobalSliderNew;
