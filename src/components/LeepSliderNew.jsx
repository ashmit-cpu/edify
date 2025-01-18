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
    <span className="ac-text-[0.7rem] ac-pl-6 ac-block ac-text-[#494549]">
      <bold className="ac-font-bold">
        The LEAP (Learn, Explore, Assess, Prepare) program
      </bold>
      helps students discover their career paths by focusing on{" "}
      <bold className="ac-font-bold">
        academic growth and personal development.
      </bold>{" "}
      It equips them with the skills and knowledge required for future success.
    </span>
  ),
};
const moduleData = {
  title: "Modules",
  description: "LEAP's journey is structured around four key step",
  image: "/images/Modules.svg",
  items: [
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Learn:</bold> TBuild a strong academic
      foundation for future success.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Explore: </bold> Discover diverse career
      paths and industries.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Assess:</bold> Evaluate personal
      strengths and areas for growth.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Prepare: </bold> Develop essential
      skills for career readiness and life challenges.
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
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Career Awareness:</bold> <br />
          Learn about the numerous career options available.
        </p>
      ),
    },
    {
      image: "/images/icons/m3.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Career Exploration:</bold> <br />
          Understand the demands and opportunities of each career.
        </p>
      ),
    },
    {
      image: "/images/icons/m4.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Career Clarity:</bold> <br />
          Gain clarity on which path suits you best.
        </p>
      ),
    },
    {
      image: "/images/icons/m5.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Informed Choice:</bold> <br />
          Make thoughtful, confident decisions about your future.
        </p>
      ),
    },
    {
      image: "/images/icons/m6.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Career Mapping: </bold> <br />
          Create a personalized roadmap for future career success.
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
      title: "Eligibility",
      description: (
        <p className="ac-leading-4">
          LEAP is available for{" "}
          <bold className="ac-font-bold">Grades 6 to 12</bold> with{" "}
          <bold className="ac-font-bold">weekly 2hr</bold> sessions.
        </p>
      ),
    },
    {
      icon: "/images/icons/assessment.svg",
      title: "Psychometric Tests",
      description: (
        <p className="ac-leading-4">
          For <bold className="ac-font-bold">Grade 9 and above ,</bold>
          these tests assess career suitability.
        </p>
      ),
    },
    {
      icon: "/images/icons/mentorship.svg",
      title: "Career Counselling",
      description: (
        <p className="ac-leading-4">
          Includes career reports and guidance whenever needed.
        </p>
      ),
    },
  ],
};
const LeadData = {
  imageSrc: "/images/career-path/head05.png",
  description: (
    <p className="ac-leading-5 ac-text-[0.72rem]">
      Our <bold className="ac-font-bold">career counselling cell</bold> is
      dedicated to supporting your child in making informed and confident career
      decisions. Through{" "}
      <bold className="ac-font-bold">personalized guidance</bold>, we help
      students explore diverse career paths, ensuring they achieve both academic
      success and holistic personal development.
    </p>
  ),
};

// Example data
const commonData = {
  title: "LEAP Events",
  image: "/images/icons/career-focus.svg",
  description: [
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
      Uncover the world of career opportunities through a panel discussion
      featuring industry experts
    </p>,
    <Image
      src={"/images/career-path/leap-event.png"}
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
    ,
    
  ],
};

// Example data

const LeapSliderNew = () => {
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
        <SwiperSlide className="ac-pl-4 ">
          <Lead {...LeadData} />
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
            <CommonCard {...commonData} {...{ gap: false }} />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default LeapSliderNew;
