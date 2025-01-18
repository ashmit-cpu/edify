import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquirePopupform from "./Form/EnquirePopupform";

function CampusWalkthroughMobile() {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <>
      <EnquirePopupform
        show={showModal}
        handleClose={handleCloseModal}
        ctatitle={"Submit"}
      />
    </>
  );
}

export default CampusWalkthroughMobile;
