import Image from "next/image";
import CampusOverview from "@/components/CampusOverview";
import HeaderBestBoardingSchoolBangalore from "@/components/HeaderBestBoardingSchoolBangalore";
import useMobileDetect from "../hooks/useMobileDetect";

import CampusNav from "../components/CampusNav";
import CampusNavMobile from "../components/CampusNavMobile";
import CampusWalkthrough from "../components/CampusWalkthrough";
import CampusAcademic from "../components/CampusAcademic";
import CampusCareer from "../components/CampusCareer";
import CampusCareerMobile from "../components/CapusCareerMobile";
import CampusActivity from "../components/CampusActivity";
import CampusExperienceActivity from "../components/CampusExperienceActivity";
import Awards from "../components/Awards";
import PrincipalMsg from "../components/PrincipalMsg";
import HomeFacts from "../components/HomeFacts";
import AboutUs from "../components/AboutUs";
import AwardsMobile from "../components/AwardsMobile";
import PrincipalMsgMobile from "../components/PrincipalMsgMobile";
import CampusWalkthroughMobile from "../components/CampusWalkthroughMobile";
import CampusExperienceActivityMobile from "../components/CampusExperienceActivityMobile";
import AboutUsMobile from "../components/AboutUsMobile";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import EnquirePopupform from "@/components/Form/EnquirePopupform";

export default function Home() {
  const isMobile = useMobileDetect();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>

<div className="md:ac-hidden ac-fixed ac-bottom-0 ac-left-0 ac-z-[99999999] ac-cursor-pointer ac-flex ac-w-full">
        <div
          className="ac-w-[50%] ac-bg-[#E85700] ac-flex ac-justify-center ac-items-center ac-rounded-tl-2xl"
          onClick={handleShowModal} // Handle the click for the entire div
        >
          <button
            className={` ac-text-white ac-block ac-text-sm`}
          >
            Enquire Now
          </button>

          {/* EnquirePopupform component */}
          <EnquirePopupform
            show={showModal} // Controls visibility of the popup
            handleClose={(e: { stopPropagation: () => void; }) => {
              if (e?.stopPropagation) {
                e.stopPropagation(); // Prevent propagation when clicking close
              }
              handleCloseModal(); // Call the close handler
            }}
            ctatitle="Enquire Now" // CTA title for the popup
          />
        </div>

        {/* WhatsApp Link Section */}
        <a
          href="https://wa.me/+919036055081?text=Hi, I am exploring Best Boarding Schools in India for my child and would love to find out if your school meets our expectations. Could you please tell me more about your school?"
          target="_blank"
          rel="noopener noreferrer"
          className="ac-w-[50%] ac-bg-[#00BC2A] ac-flex ac-justify-center ac-items-center ac-rounded-tr-2xl ac-py-4" // Apply styles from the div
        >
          <div className="ac-max-h-[18px] ac-max-w-[18px] ac-flex ac-justify-center ac-items-center ac-gap-3">
            <Image
              src="images/whatsapp.svg"
              height={100}
              width={200}
              alt="WhatsApp"
            />
            <span className={` ac-text-white ac-text-sm`}>
              Whatsapp
            </span>
          </div>
        </a>
      </div>


      <div className="joined-buttons">
        <button
          onClick={handleShowModal} // Show popup when button is clicked
          className={`enquiry-now-button ac-text-white ac-block ac-text-sm`}
        >
          Enquire Now
        </button>
        <a
          href="https://wa.me/+919036055081?text=Hi, I am exploring boarding schools for my child in Bangalore and would love to find out if your school meets our expectations. Could you please tell me more about your school?"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security feature
          className="whatsapp-button" // Same styles as before
        >
          <div
            className="whatsapp-image"
          >
            <img
              src="/images/whatsapp.svg"
              alt="WhatsApp Icon"
              style={{ width: '40px', height: '40px' }} // Make sure the icon fits
            />
          </div>
        </a>
      </div>
      <HeaderBestBoardingSchoolBangalore />
      <EnquirePopupform
        show={showModal} // Controls visibility of the popup
        handleClose={(e: { stopPropagation: () => void; }) => {
          if (e?.stopPropagation) {
            e.stopPropagation(); // Prevent propagation when clicking close
          }
          handleCloseModal(); // Call the close handler
        }}
        ctatitle="Enquire Now" // CTA title for the popup
      />
      <CampusOverview />
      {!isMobile && <Awards />}
      {!isMobile && <PrincipalMsg />}
      {!isMobile && <CampusNav />}
      {isMobile && <CampusNavMobile />}
      {isMobile && <AwardsMobile />}
      {isMobile && <PrincipalMsgMobile />}
      {!isMobile && <CampusWalkthrough />}
      <CampusAcademic />
      {!isMobile && <AboutUs />}
      {!isMobile && <CampusCareer />}
      {isMobile && <CampusCareerMobile />}
      {isMobile && <CampusWalkthroughMobile />}
      {isMobile && <CampusExperienceActivityMobile />}
      {isMobile && <AboutUsMobile />}
      <HomeFacts />
      {!isMobile && <CampusExperienceActivity />}
      <Footer />
    </>
  );
}
