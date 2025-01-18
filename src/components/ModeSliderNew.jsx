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
            The Mode program is tailored for students with a creative
            aptitude, preparing them for entrance exams like{" "}
            <strong> NATA, NID, NIFT, and UCEED.</strong> Mode&apos;s
            comprehensive module equips students to excel in any design
            entrance exam.
        </span>
    ),
};
const moduleData = {
    title: "Modules",
    description: "Mode's learning stages cover five essential modules.",
    image: "/images/Modules.svg",
    items: [
        {
            image: "/images/icons/m2.svg",
            text: (
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">ADP:</bold>{" "}
                    <br />
                    Aptitude Development Programme
                </p>
            ),
        },
        {
            image: "/images/icons/m3.svg",
            text: (
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">BDP:</bold>{" "}
                    <br />
                    Basic Design Programme
                </p>
            ),
        },
        {
            image: "/images/icons/m3.svg",
            text: (
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">CDP:</bold>{" "}
                    <br />
                    Core Design Programme
                </p>
            ),
        },
        {
            image: "/images/icons/m3.svg",
            text: (
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">DDP:</bold>{" "}
                    <br />
                    Develop & Design a Portfolio
                </p>
            ),
        },
        {
            image: "/images/icons/m3.svg",
            text: (
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">EDP:</bold>{" "}
                    <br />
                    Exam Delivery Programme
                </p>
            ),
        },
    ],
};

const taughtData = {
    title: "What is Taught?",
    description: "These are the modules covered in the program.",
    image: "/images/icons/book.svg",
    items: [
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">Visualization Techniques:</bold>{" "}
                    <br />
                    Master the art of visualizing ideas.
                </p>
        ,

                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">Drawing Skills: </bold>{" "}
                    <br />
                    Develop precise drawing abilities.
                </p>
        ,
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">Design Thinking:</bold>{" "}
                    <br />
                    Enhance your creative problem-solving skills.
                </p>
        ,
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">
                        Creative Thinking:{" "}
                    </bold>{" "}
                    <br />
                    Boost your overall creativity and innovation.
                </p>,
                <p className="ac-leading-4 ac-text-[0.63rem]">
                    <bold className="ac-font-bold">Exam Strategies:</bold>{" "}
                    <br />
                    Learn comprehensive strategies for
                    design entrance exams.
                </p>   
        
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
                    <strong>Monday to Friday, 2.5 to 3 hours</strong> daily.
                </p>
            ),
        },
        {
            icon: "/images/icons/assessment.svg",
            title: " Mock Tests",
            description: (
                <p className="ac-leading-4">
                    <strong>One mock test per week,</strong> totaling four
                    per month.
                </p>
            ),
        },
        {
            icon: "/images/icons/mentorship.svg",
            title: " PTM’s",
            description: (
                <p className="ac-leading-4">
                    <strong>
                        One Parent-Teacher Meeting every two months
                    </strong>{" "}
                    to discuss student performance.
                </p>
            ),
        },
    ],
};
const LeadData = {
    imageSrc: "/images/career-path/head.png",
    description: (
        <div className="head-txt text-dark">
            We are <strong> committed to guiding your child </strong>
            through the{" "}
            <strong>
                {" "}
                Academic Assistance Programme for Architecture and Design
                careers.
            </strong>{" "}
            Our approach ensures they remain dedicated and balanced,
            fostering both academic excellence and overall well-being.
        </div>
    ),
};

// Example data
const commonData = {
    title: "Career Tours",
    image: "/images/icons/career-focus.svg",
    description: [
        <p
            className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
        >
            {" "}
            <strong>Students visit NID campus</strong> and other design
            institutions to experience the design world firsthand.
        </p>,
        // <p
        //     className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
        // >
        //     By offering tailored exam preparation, profile enhancement, and
        //     application support, students are well-positioned to excel academically
        //     and secure their future global career opportunities.
        // </p>,
        <Image
            src={"/images/career-path/career-tour.png"}
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

const achevements = {
    title: "Career Tours",
    image: "/images/icons/achievements.svg",
    description: [
        
        
        <Image
            src={"/images/career-path/achievements-pic.png"}
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

        <p
            className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
        >
            {" "}
            <strong>Aami Rajeev</strong> 
        </p>,
        <p
        className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549]`}
    >
        {" "}
        A recent graduate, successfully cleared NID. Her journey
                    exemplifies the excellence Mode nurtures in its students. 
    </p>,
    ],
}
;
// Example data

const ModeSliderNew = () => {
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
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 25,
                    },
                }}
            >
                <SwiperSlide  className="ac-pl-4 ac-py-0">
                    <Lead {...LeadData} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ac-pl-4 ac-py-4">
                        <AboutCard {...aboutData} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ac-pl-4 ac-py-4">
                        <Taught {...moduleData} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ac-pl-4 ac-py-4">
                        <Modules {...taughtData} {...{ gap: false }} />
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
                <SwiperSlide className="ac-pl-4 ac-py-4">
                    <CommonCard {...achevements} />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default ModeSliderNew;
