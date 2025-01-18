import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const EnquirePopupform = ({ show, handleClose, ctatitle }) => {
  const [modalSize, setModalSize] = useState("lg");

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      setModalSize(screenWidth < 768 ? "sm" : "lg");
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // Also call updateSize immediately to set the initial state based on current window size

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="popupformwrapper">
      <Modal
        show={show}
        onHide={handleClose}
        size={modalSize}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`p-0 m-0 popupform pop-up-visibility ${modalSize === "sm" ? "modal-small" : ""}`}
      >
        <button
          type="button"
          className="btn-close popup-closebtn"
          aria-label="Close"
          onClick={handleClose}
        ></button>
        <Modal.Body className="p-0">
          <Row className="align-items-center">
            <Col md={12} lg={6}>
              <div className="popupform-left p-3 py-lg-4">
                <h3 className="poptitle">
                  Come, let’s Craft a <br />
                  Happy Future for Your Child!
                </h3>
                <div className="formbox">
                  <ContactForm formsource={''} ctatitle={ctatitle} />
                </div>
              </div>
            </Col>
            <Col md={6} className="d-none d-lg-block">
              <div className="imgwrap h-100">
                <Image
                  src="/images/popup.jpg"
                  fill
                  sizes="100%"
                  className="position-relative w-100 h-100 img-fluid object-fit-cover"
                  alt="popup"
                />
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EnquirePopupform;
