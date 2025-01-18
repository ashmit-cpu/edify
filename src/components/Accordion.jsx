import React, { useState, useRef } from "react";
import AllenSlider from "./TrishaSliderNew";
import Image from "next/image";

import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

const aaccordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const aaccordionRefs = useRef([]);
  const observer = useRef(null);

  const scrollToHeader = (header) => {
    header.style.scrollMarginTop = "100px";
    setTimeout(() => {
      header.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 350);
  };

  const handleToggle = (index) => {
    const isOpening = index !== activeIndex;

    setActiveIndex(isOpening ? index : null);

    if (isOpening) {
      const header = aaccordionRefs.current[index];
      if (header) {
        scrollToHeader(header);
      }
    }
  };

  return (
    <div className={`aaccordion ${activeIndex !== null ? "open" : ""}`}>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="aaccordion-item"
          style={
            activeIndex === index
              ? { boxShadow: "4.57px 4.57px 0px 0px rgba(45, 148, 92, 1)" }
              : {}
          }
        >
          <div
            className="aaccordion-header ac-flex ac-justify-between ac-items-center"
            ref={(el) => (aaccordionRefs.current[index] = el)}
            onClick={() => handleToggle(index)}
            style={{
              borderBottom: activeIndex === index ? "1px solid #ccc" : "none",
            }}
          >
            {item.header}
            <span className="transition-all duration-300">
              <Image
                src={"/images/arrowdown.svg"}
                width={20}
                height={20}
                alt="arrow-down"
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
          </div>
          <div
            className={`aaccordion-content ${activeIndex === index ? "open" : ""
              }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// Sample data for aaccordion items

export default aaccordion;
