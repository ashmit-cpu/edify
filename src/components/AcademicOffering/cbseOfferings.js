import Image from "next/image";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import EnquirePopupform from "../Form/EnquirePopupform";

function cbseOfferings() {

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        const container = document.querySelector(".custom-navs-02"); // Using querySelector instead of ref coz of bootstrap
        if (container) {
            setIsDragging(true);
            setStartX(e.pageX - container.offsetLeft);
            setScrollLeft(container.scrollLeft);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const container = document.querySelector(".custom-navs-02"); // Using querySelector instead of ref coz of bootstrap
        if (container) {
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            container.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <>
            <EnquirePopupform
                show={showModal}
                handleClose={handleCloseModal}
                ctatitle={"Apply for scholarship"}
            />
            <div className="w-100">
                <Tabs
                    defaultActiveKey="Grade-4"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-3 custom-navs custom-navs-02"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    style={{
                        // overflowX: "auto",
                        // whiteSpace: "nowrap",
                        // display: "flex",
                        // flexWrap: "wrap",
                        WebkitOverflowScrolling: "touch",
                        cursor: isDragging ? "grabbing" : "grab",
                    }}
                >
                    <Tab eventKey="Grade-4" title="Grade 4">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English as first language"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    {/* <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            /> */}
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 1,74,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 9,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 4,44,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-5" title="Grade 5">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English as first language"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    {/* <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            /> */}
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 1,74,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 9,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 4,44,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-6" title="Grade 6">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English as first language"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    {/* <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            /> */}
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        3rd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Sanskrit"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 210,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 12,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 60,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 528,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-7" title="Grade 7">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English as first language"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    {/* <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            /> */}
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        3rd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Sanskrit"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 210,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 12,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 60,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 528,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-8" title="Grade 8">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English as first language"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    {/* <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            /> */}
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        3rd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Sanskrit"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 210,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 12,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 60,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 528,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-9" title="Grade 9">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English language & Literature"
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                        checked
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        Optional Subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Information & Communication
Technology (ICT)
"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Physical Education"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-3`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 216,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 75,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 552,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-10" title="Grade 10">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English language & Literature"
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                        checked
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Science"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Social studies"
                                                                        checked
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        Optional Subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Information & Communication
Technology (ICT)
"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Physical Education"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        2nd language options
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang2) => (
                                                                <div
                                                                    key={`inline-${lang2}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Kannada"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang2}
                                                                        id={`lang2-${lang2}-3`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 216,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 75,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 552,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>

                    <Tab eventKey="Grade-11" title="Grade 11 Science">
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="English"
                                                                        type={sub}
                                                                        id={`sub-${sub}-1`}
                                                                        checked
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Physics"
                                                                        type={sub}
                                                                        id={`sub-${sub}-2`}
                                                                        checked
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Chemistry"
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                        checked
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics / Biology"
                                                                        type={sub}
                                                                        id={`sub-${sub}-4`}
                                                                        checked
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        Optional Subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics/Biology"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Physical Education"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="Psychology"
                                                                        type={lang}
                                                                        id={`lang-${lang}-3`}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="Computer Science"
                                                                        type={lang}
                                                                        id={`lang-${lang}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                {/* <div className="grade-select">
                                    <h4 className="grade-select-title">
                                      2nd language options
                                    </h4>

                                    <div className="category-input">
                                      <Form>
                                        {["checkbox"].map((lang2) => (
                                          <div
                                            key={`inline-${lang2}`}
                                            className="custom-form-input"
                                          >
                                            <Form.Check
                                              inline
                                              label="Kannada"
                                              type={lang2}
                                              id={`lang2-${lang2}-1`}
                                            />

                                            <Form.Check
                                              inline
                                              label="Hindi"
                                              type={lang2}
                                              id={`lang2-${lang2}-2`}
                                            />

                                            <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            />
                                          </div>
                                        ))}
                                      </Form>
                                    </div>
                                  </div> */}
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 237,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 51,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 549,000.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    
                    
                    <Tab
                        eventKey="Grade 11 & 12 + allen"
                        title={
                            <>
                                <div className="custom-flex">
                                    Grade 11 & 12 +&nbsp;
                                    <Image
                                        src="/images/icons/allen-logo.svg"
                                        alt="allen"
                                        width={100}
                                        height={20}
                                    />
                                </div>
                            </>
                        }
                    >
                        <div className="nav-tab-container">
                            <Row className="g-4">
                                <Col lg={7} md={12}>
                                    <div className="grade-container">
                                        <h4 className="grade-title">
                                            Subject Selections and Options
                                        </h4>
                                        <p className="grade-subtitle">
                                            Aligning subjects with future aspirations, our
                                            curriculum from grades 4-12 is designed to pave
                                            the way for academic and career excellence.
                                        </p>
                                        <div className="grade-content">
                                            {/* <h5 className="txt-grade">Grade 4</h5> */}

                                            <p className="txt-grade-subtitle">
                                                Focused on delivering a robust foundation in
                                                core subjects such as Science, Mathematics,
                                                Language, and Arts to foster a well-rounded
                                                education.
                                            </p>

                                            <div className="grade-select-cat">
                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        {" "}
                                                        Mandatory subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((sub) => (
                                                                <div
                                                                    key={`sub-${sub}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Physics"
                                                                        type={sub}
                                                                        checked
                                                                        id={`sub-${sub}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Chemistry"
                                                                        type={sub}
                                                                        checked
                                                                        id={`sub-${sub}-2`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics (IIT, JEE, NATA)/
Biology (NEET)
"
                                                                        type={sub}
                                                                        id={`sub-${sub}-3`}
                                                                        checked
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="English language"
                                                                        type={sub}
                                                                        checked
                                                                        id={`sub-${sub}-2`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                <div className="grade-select">
                                                    <h4 className="grade-select-title">
                                                        Optional Subjects
                                                    </h4>

                                                    <div className="category-input">
                                                        <Form>
                                                            {["checkbox"].map((lang) => (
                                                                <div
                                                                    key={`inline-${lang}`}
                                                                    className="custom-form-input"
                                                                >
                                                                    <Form.Check
                                                                        inline
                                                                        label="Mathematics"
                                                                        type={lang}
                                                                        id={`lang-${lang}-1`}
                                                                    />

                                                                    <Form.Check
                                                                        inline
                                                                        label="Physical Education"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label=" Psychology"
                                                                        type={lang}
                                                                        id={`lang-${lang}-3`}
                                                                    />
                                                                    <Form.Check
                                                                        inline
                                                                        label="Computer science"
                                                                        type={lang}
                                                                        id={`lang-${lang}-4`}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </div>

                                                {/* <div className="grade-select">
                                    <h4 className="grade-select-title">
                                      2nd language options
                                    </h4>

                                    <div className="category-input">
                                      <Form>
                                        {["checkbox"].map((lang2) => (
                                          <div
                                            key={`inline-${lang2}`}
                                            className="custom-form-input"
                                          >
                                            <Form.Check
                                              inline
                                              label="Kannada"
                                              type={lang2}
                                              id={`lang2-${lang2}-1`}
                                            />

                                            <Form.Check
                                              inline
                                              label="Hindi"
                                              type={lang2}
                                              id={`lang2-${lang2}-2`}
                                            />

                                            <Form.Check
                                              inline
                                              label="French"
                                              type={lang2}
                                              id={`lang2-${lang2}-3`}
                                            />
                                          </div>
                                        ))}
                                      </Form>
                                    </div>
                                  </div> */}
                                            </div>

                                            {/* <div className="btn-div">
                                  <button className="btn-apply">
                                    <span className="btn-txt">Apply</span>
                                    <div className="arrow-img">
                                      <Image
                                        src={"/images/icons/arrow-right.svg"}
                                        alt="right"
                                        width={25}
                                        height={25}
                                      />
                                    </div>
                                  </button>
                                </div> */}
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={5} md={12}>
                                    <div className="fee-container">
                                        <h4 className="grade-title">
                                            Fees Structure @ TAC Schools
                                        </h4>

                                        <div className="fee-content">
                                            <div className="fees">
                                                <div className="fee-txt">Tution Fees</div>
                                                <div className="fee-amt">₹ 235,500.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Lab & Technology Fees
                                                </div>
                                                <div className="fee-amt">₹ 15,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">Boarding Fees</div>
                                                <div className="fee-amt">₹ 2,46,000.00</div>
                                            </div>

                                            <div className="fees">
                                                <div className="fee-txt">
                                                    Special Program Prep Fees
                                                </div>
                                                <div className="fee-amt">₹ 144,000.00</div>
                                            </div>

                                            <div className="fees-total">
                                                <div className="fee-txt-total">Total</div>
                                                <div className="fee-amt-total">
                                                    ₹ 640,500.00
                                                </div>
                                            </div>
                                        </div>

                                        <p className="fees-desc">
                                            Unlock your potential with scholarships up to Rs
                                            100,000* – invest in your child&apos;s future
                                            today!
                                        </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="btn-schol-div">
                                        <button
                                            className="btn-schol secondary-btn btn-purple"
                                            onClick={() => handleShowModal()}
                                        >
                                            Apply for Scholarship
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                 
                    
                    {/* <Tab
                      eventKey="Grade 11 + ode"
                      title={
                        <>
                          <div className="custom-flex">
                            Grade 11 +
                            <Image
                              src="/images/icons/Mode-logo.svg"
                              alt="allen"
                              width={70}
                              height={20}
                            />
                          </div>
                        </>
                      }
                    >
                      Grade 11 +
                    </Tab> */}
                </Tabs>
            </div>
        </>
    )
}

export default cbseOfferings;