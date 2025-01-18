import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
const CheckForm = (props) => {
  const [sitemodalShow, setSiteModalShow] = useState(false);
  return (
    <>
      <button
        className="primary-btn body-btn border-0"
        onClick={() => setSiteModalShow(true)}
      >
        Check Price
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
              <h3 className="mb-3">Check Price</h3>
              <p className="text-center mb-3">
                Please enter your details to get price details
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

export default CheckForm;
