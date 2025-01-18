import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const CampusBanner = () => {
  return (
    <>
      <div className="position-relative">
        {/* <Image src="/images/hero-banner.jpg" width={1934} height={1089} alt="hero banner" /> */}
        <ReactPlayer
          className="banner_video"
          loop
          muted
          playbackRate={1}
          playing={true}
          url="/images/banner.mp4"
        ></ReactPlayer>
      </div>
    </>
  );
};
export default CampusBanner;
