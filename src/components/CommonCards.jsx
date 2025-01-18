import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

import Image from "next/image";

export const AboutCard = ({ title, image, arrow, description }) => {
  return (
    <div className="about-us-card ac-max-w-[250px] ac-min-w-[250px] ac-max-h-[350px] ac-min-h-[350px] ac-px-4 ac-relative border border-[#908f8e] ac-rounded-[20px] ac-pt-4 ac-pb-4">
      <h4
        className={`${outfit.className} ac-mb-6 ac-text-[#494549] ac-text-[1.1rem]`}
      >
        {title}
      </h4>
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100%"
        alt="program"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          background: "Image"
        }}
      />
      <div className={`${outfit.className} ac-mt-4 ac-relative`}>
        <span className="ac-absolute ac-top-0 -ac-left-2">
          <Image
            src={arrow}
            width={12}
            height={12}
            sizes="100%"
            alt="program"
          />
        </span>
        {description}
      </div>
    </div>
  );
};

export const Modules = ({ title, description, image, items }) => {
  return (
    <div
      className={`modulesbg ac-max-w-[250px] ac-min-w-[250px] ac-max-h-[350px] ac-min-h-[350px] ac-px-4 ac-relative border border-[#908f8e] ac-rounded-[20px] ac-pt-4 ac-pb-4`}
    >
      <span className="ac-flex ac-items-center ac-gap-2">
        <span className="ac-bg-[var(--primary-color)] ac-w-[30px] ac-h-[30px] ac-rounded-[150px] ac-p-[0.55rem] ac-flex ac-justify-center ac-items-center ac-flex-[0_0_auto]">
          <Image src={image} width={20} height={20} alt="icons" />
        </span>

        <h4
          className={`${outfit.className} ac-text-[1.1rem] ac-text-[#494549]`}
        >
          {title}
        </h4>
      </span>
      <p
        className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-my-4 ac-text-[#494549]`}
      >
        {description}
      </p>
      <div>
        <ul className="ac-list-disc ac-ml-4 ">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Taught = ({ title, description, image, items, gap = true }) => {
  return (
    <div className="about-us-card ac-max-w-[250px] ac-min-w-[250px] ac-max-h-[350px] ac-min-h-[350px] ac-px-4 ac-relative border border-[#908f8e] ac-rounded-[20px] ac-pt-4 ac-pb-4">
      <span className="ac-flex ac-items-center ac-gap-2">
        <span className="ac-bg-[var(--primary-color)] ac-w-[30px] ac-h-[30px] ac-rounded-[150px] ac-p-[0.55rem] ac-flex ac-justify-center ac-items-center ac-flex-[0_0_auto]">
          <Image src={image} width={20} height={20} alt="icons" />
        </span>

        <h4
          className={`${outfit.className} ac-text-[1.1rem] ac-text-[#494549]`}
        >
          {title}
        </h4>
      </span>
      <div
        className={`ac-mt-6 ac-flex ac-flex-col ${
          !gap ? "ac-gap-1" : "ac-gap-6"
        }`}
      >
        {items.map((item, index) => (
          <span key={index} className="ac-flex ac-gap-4  ac-items-center">
            <span className="ac-bg-[var(--primary-color)] ac-w-[30px] ac-h-[30px] ac-rounded-[150px] ac-p-[0.55rem] ac-flex ac-justify-center ac-items-center ac-flex-[0_0_auto]">
              <Image src={item.image} width={20} height={20} alt="icons" />
            </span>
            <div
              className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-my-0 ac-text-[#494549]`}
            >
              {item.text}
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export const ProgDynamics = ({ title, description, image, items }) => {
  return (
    <div
      className={`modulesbg ac-max-w-[250px] ac-min-w-[250px] ac-max-h-[350px] ac-min-h-[350px] ac-px-4 ac-relative border border-[#908f8e] ac-rounded-[20px] ac-pt-4 ac-pb-4`}
    >
      <span className="ac-flex ac-items-center ac-gap-2">
        <span className="ac-bg-[var(--primary-color)] ac-w-[30px] ac-h-[30px] ac-rounded-[150px] ac-p-[0.55rem] ac-flex ac-justify-center ac-items-center ac-flex-[0_0_auto]">
          <Image src={image} width={20} height={20} alt="icons" />
        </span>
        <h4
          className={`${outfit.className} ac-whitespace-nowrap ac-text-[1.1rem] ac-text-[#494549]`}
        >
          {title}
        </h4>
      </span>
      <div className="ac-mt-2 ac-flex ac-flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className={`ac-flex ac-flex-col ac-gap-1 ac-mt-2 ${
              index !== items.length - 1 ? "ac-border-b ac-border-gray-400" : ""
            }`}
          >
            <span className="ac-flex ac-items-center ac-gap-2">
              <Image
                src={item.icon}
                width={20}
                height={20}
                className="me-2"
                alt="icons"
              />

              <p
                className={`${outfit.className} ac-text-[0.9rem] ac-leading-4 ac-my-0 ac-text-[#494549] ac-font-bold`}
              >
                {item.title}
              </p>
            </span>
            <div
              className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-pb-4 ac-my-0 ac-text-[#000]`}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CommonCard = ({ title, image, description, gap = true }) => {
  return (
    <div className="about-us-card common-card ac-max-w-[250px] ac-max-h-[350px] ac-min-h-[350px] ac-min-w-[250px] ac-px-4 ac-relative border border-[#908f8e] ac-rounded-[20px] ac-pt-4 ac-pb-4">
      <span className="ac-flex ac-items-center ac-gap-2">
        <span className="ac-bg-[var(--primary-color)] ac-w-[30px] ac-h-[30px] ac-rounded-[150px] ac-p-[0.55rem] ac-flex ac-justify-center ac-items-center ac-flex-[0_0_auto]">
          <Image
            src={image}
            width={0}
            height={0}
            alt="icons"
            style={{
              width: "100%",
              height: "100%",
              sizes: "100%",
              objectFit: "cover",
            }}
          />
        </span>
        <h4
          className={`${outfit.className} ac-whitespace-nowrap ac-text-[1.1rem] ac-text-[#494549]`}
        >
          {title}
        </h4>
      </span>
      <div
        className={`${
          outfit.className
        } ac-mt-4 ac-relative ac-flex ac-flex-col ${
          !gap ? "ac-gap-4" : "ac-gap-1"
        }`}
      >
        {description.map((desc, index) => (
          <div key={index}>{desc}</div>
        ))}
      </div>
    </div>
  );
};

export const Lead = ({ imageSrc, description }) => {
  return (
    <div className="common-card ac-max-w-[250px] ac-my-4 ac-max-h-[350px] ac-min-h-[350px] ac-min-w-[250px] ac-overflow-hidden ac-relative border border-[#908f8e] ac-rounded-[20px]">
      <div>
        <Image
          src={imageSrc}
          width={0}
          height={0}
          sizes="100%"
          alt="head"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div>
          <div
            className={`${outfit.className} ac-text-[0.7rem] ac-leading-4 ac-text-[#494549] ac-py-6 ac-px-4`}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
