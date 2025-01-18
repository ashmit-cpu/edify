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
      The program offers a comprehensive range of courses for students pursuing
      the Grade 11 & 12 commerce stream, with specialized coaching for{" "}
      <bold className="ac-font-bold">CA, CS, IPMAT, and CLAT</bold>, empowering
      students to pursue prestigious professional qualifications.
    </span>
  ),
};
const moduleData = {
  title: "Modules",
  description: "Trisha’s learning stages cover four essential modules.",
  image: "/images/Modules.svg",
  items: [
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Chartered Accountant:</bold> Three exams
      and two-year Articleship, leading to a professional accounting career.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>Company Secretary (CS):</bold> Focus on
      legal aspects, three exams, with corporate governance expertise.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>IPMAT:</bold> Entrance exam for IIMs'
      management program, offering a five-year integrated degree.
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#000]`}
    >
      <bold className={` ac-font-bold`}>CLAT:</bold> Entrance for law
      universities in India, covering both undergraduate and postgraduate law
      programs.
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
      text: "Expert Faculty from PAN India",
    },
    {
      image: "/images/icons/m3.svg",
      text: "Strategies for Exam Preparation",
    },
    {
      image: "/images/icons/m4.svg",
      text: "Module 3: Practical Applications",
    },
    {
      image: "/images/icons/m5.svg",
      text: " Skill Development Programs",
    },
    {
      image: "/images/icons/m6.svg",
      text: "Continuous Evaluation through Exams",
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
      title: "Regular Classes",
      description: (
        <p className="ac-leading-4">
          Conducted{" "}
          <bold className="ac-font-bold">Monday to Friday, 2.5 to 3 hours</bold>{" "}
          daily.
        </p>
      ),
    },
    {
      icon: "/images/icons/assessment.svg",
      title: "Revision & Mock Tests",
      description: (
        <p className="ac-leading-4">
          <bold className="ac-font-bold">Weekly</bold> tests,{" "}
          <bold className="ac-font-bold">monthly</bold> exams, & mock exams to
          ensure our students' success.
        </p>
      ),
    },
    {
      icon: "/images/icons/mentorship.svg",
      title: "PTM’s",
      description: (
        <p className="ac-leading-4">
          <bold className="ac-font-bold">
            {" "}
            One Parent-Teacher Meeting every two months
          </bold>{" "}
          to discuss student performance.
        </p>
      ),
    },
  ],
};
const LeadData = {
  imageSrc: "/images/career-path/head03.png",
  description: (
    <p className="ac-leading-5">
      We are{" "}
      <bold className="ac-font-bold">committed to guiding your child</bold>{" "}
      through the{" "}
      <bold className="ac-font-bold">
        Academic Assistance Programme for CA and Management
      </bold>{" "}
      careers. Our approach ensures they remain dedicated and balanced,
      fostering both academic excellence and overall well-being
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
      The Trisha program prepares students for competitive careers in CA, CS,
      and Law, with an emphasis on leadership, critical thinking, and
      professional ethics.{" "}
    </p>,
    <p
      className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
      Graduates are well-equipped to excel in corporate governance, financial
      management, and legal professions.
    </p>,
    <Image
      src={"/images/career-path/trisha-01.png"}
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

const TrishaSliderNew = () => {
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
          <div className="ac-pl-4 ac-py-4">
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
            <Taught {...taughtData} />
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

export default TrishaSliderNew;
