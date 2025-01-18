import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
const BrochureForm = (props) => {
  const [sitemodalShow, setSiteModalShow] = useState(false);
  return (
    <>
      <button
        className="primary-btn body-btn border-0"
        onClick={() => setSiteModalShow(true)}
      >
        Download Brochure
      </button>
      <div className="popupformwrapper">
        <Modal
          show={sitemodalShow}
          onHide={() => setSiteModalShow(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
          <Modal.Body className="p-5">
            <div className="heading position-relative text-center popuphead">
              <h3 className="mb-3">Download Brochure</h3>
              <p className="text-center mb-3">
                Please enter your details to download brochure
              </p>
            </div>
            <div className="popupform">
              <ContactForm formsource={props?.formsource} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BrochureForm;
