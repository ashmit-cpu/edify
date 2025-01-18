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
      Allen is a comprehensive career mentorship program designed to prepare
      students for NEET, IIT/JEE, and CBSE board examinations. Focused on
      dynamic learning, it provides access to expert faculty, resources, and
      test preparation tools.
    </span>
  ),
};
const moduleData = {
  title: "Modules",
  description: "Allen’s learning journey is divided into key modules:",
  image: "/images/Modules.svg",
  items: [
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Academic Foundation:</bold> Learn CBSE
      syllabus in Physics, Chemistry, Biology, and Mathematics.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Entrance Prep:</bold> Focus on NEET &
      IIT/JEE exam preparation with dedicated modules.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Test Strategies: </bold> Understand exam
      strategies, time management, and test-taking techniques.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Practical's: </bold> Engage in hands-on
      learning with fully equipped labs.
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
          <bold className="ac-font-bold">Subject Knowledge:</bold> <br />
          PCBM for both subjective and objective exams.
        </p>
      ),
    },
    {
      image: "/images/icons/m3.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">CBSE and Entrance Prep:</bold> <br />
          Mastery of both board exam and entrance exam syllabi.
        </p>
      ),
    },
    {
      image: "/images/icons/m4.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Test Skills:</bold> <br />
          Learn strategies to ace competitive exams like NEET and JEE.
        </p>
      ),
    },
    {
      image: "/images/icons/m5.svg",
      text: (
        <p className="ac-leading-4 ac-text-[0.7rem]">
          <bold className="ac-font-bold">Practical Application:</bold> <br />
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
      title: "Study Schedule",
      description: (
        <p className="ac-leading-4">
          9 hours daily—6 hours for academics and 3 hours for self-study.
        </p>
      ),
    },
    {
      icon: "/images/icons/assessment.svg",
      title: "Assessments",
      description: (
        <p className="ac-leading-4">
          Internal assessments every 21 days to track progress.
        </p>
      ),
    },
    {
      icon: "/images/icons/mentorship.svg",
      title: "Mentorship",
      description: (
        <p className="ac-leading-4">
          One-on-one sessions with parents and teachers to assess overall
          performance.
        </p>
      ),
    },
  ],
};
const LeadData = {
  imageSrc: "/images/career-path/head01.png",
  description: (
    <p className="ac-leading-5">
      We are{" "}
      <bold className="ac-font-bold">committed to guiding your child</bold>{" "}
      through the{" "}
      <bold className="ac-font-bold">
        Academic Assistance Programme for engineering and medical careers.
      </bold>{" "}
      Our approach ensures they remain dedicated and balanced, fostering both
      academic excellence and overall well-being
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
      Allen prepares students for success in Medicine and Engineering through
      continuous mentoring, expert instruction, and strategic test preparation.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
      The program offers a clear path to achieving top results and fulfilling
      career aspirations.
    </p>,
    <Image
      src={"/images/career-path/career-focus.png"}
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

const AllenSliderNew = () => {
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
          <div className="ac-pl-4">
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

export default AllenSliderNew;
