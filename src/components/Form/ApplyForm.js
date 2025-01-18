import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Modal from "react-bootstrap/Modal";
const ApplyForm = (props) => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (modalShow) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup function to remove the class when the component is unmounted or modalShow changes
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalShow]);
  return (
    <>
      <div className="mt-2">
        <button
          className="fixed-btn primary-btn border-0"
          onClick={() => setModalShow(true)}
        >
          Apply Now
        </button>
      </div>
      <div className="popupformwrapper">
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="p-0 m-0"
        >
          <Modal.Header className="border-0 pb-0" closeButton></Modal.Header>
          <Modal.Body className="p-5 pt-4">
            <div className="position-relative text-center popuphead">
              <h3 className="mb-3 text-white text-uppercase">Admission</h3>
              <p className="text-white text-center mb-3">
                Please enter your details
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

export default ApplyForm;
