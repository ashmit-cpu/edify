import Image from "next/image";
import CampusOverview from "@/components/CampusOverview";
import HeaderBestBoardingSchoolBangalore from '@/components/HeaderBestBoardingSchoolBangalore'
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
import Footer from '../components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const isMobile = useMobileDetect();

  return (
    <>
    <HeaderBestBoardingSchoolBangalore/>
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
      <Footer/>
    </>
  );
}
