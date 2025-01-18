import Image from "next/image";
import React, { useState } from "react";
import { Outfit } from "next/font/google";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import EnquirePopupform from "../Form/EnquirePopupform";


function cambridgeOfferings() {

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
            <Tabs
                defaultActiveKey="Lower Secondary (Equivalent to Grades 6,7,8)"
                transition={true}
                id="noanim-tab-example"
                className="mb-3 custom-navs"
            >
                <Tab
                    eventKey="Lower Secondary (Equivalent to Grades 6,7,8)"
                    title="Lower Secondary (Equivalent to Grades 6,7,8)"
                >
                    <div className="nav-tab-container">
                        <Row className="g-4">
                            <Col lg={7} md={12}>
                                <div className="grade-container">
                                    <h4 className="grade-title">Subject Selections</h4>
                                    <p className="grade-subtitle">
                                        Aligning subjects with future aspirations, our
                                        curriculum from grades 4-12 is designed to pave
                                        the way for academic and career excellence.
                                    </p>
                                    <div className="grade-content">
                                        <p className="grade-subtitle">
                                            Focused on delivering a robust foundation in
                                            core subjects such as Science, Mathematics,
                                            Language, and Arts to foster a well-rounded
                                            education.
                                        </p>

                                        {/* <h5 className="txt-grade">Grade 4</h5>

                              <p className="txt-grade-subtitle">
                                Focused on delivering a robust foundation in
                                core subjects such as Science, Mathematics,
                                Language, and Arts to foster a well-rounded
                                education.
                              </p> */}

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
                                                                    label="Mathematics"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-2`}
                                                                />

                                                                <Form.Check
                                                                    inline
                                                                    label="Global Perspective"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-3`}
                                                                />

                                                                <Form.Check
                                                                    inline
                                                                    label="ICT"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-4`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Science"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-5`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Art and Design"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-6`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                            </div>

                                            <div className="grade-select">
                                                <h4 className="grade-select-title">
                                                    Optional Subject
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
                                                                    label="Digital Literacy"
                                                                    type={lang}
                                                                    id={`lang-${lang}-1`}
                                                                />

                                                                <Form.Check
                                                                    inline
                                                                    label="Computing"
                                                                    type={lang}
                                                                    id={`lang-${lang}-2`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Well-being"
                                                                    type={lang}
                                                                    id={`lang-${lang}-3`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="Physical Education"
                                                                    type={lang}
                                                                    id={`lang-${lang}-4`}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="French"
                                                                    type={lang}
                                                                    id={`lang-${lang}-5`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                            </div>

                                            {/* <div className="grade-select">
                                  <h4 className="grade-select-title">
                                    3rd language options
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
                                    <h4 className="fee-title">
                                        Fees Structure @ TAC Schools
                                    </h4>

                                    <div className="fee-content">
                                        <div className="fees">
                                            <div className="fee-txt">Tution Fees</div>
                                            <div className="fee-amt">₹ 3,04,500.00</div>
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
                                                ₹ 6,22,500.00
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
                            <Col>
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
                    eventKey="IGCSE (Equivalent to Grades 9 & 10)"
                    title="IGCSE (Equivalent to Grades 9 & 10)"
                >
                    <div className="nav-tab-container">
                        <Row className="g-4">
                            <Col lg={7} md={12}>
                                <div className="grade-container">
                                    <h4 className="grade-title">Subject Selections</h4>

                                    <div className="grade-content">
                                        <p className="grade-subtitle">
                                            With over 70 subjects available, from the
                                            offerings of Cambridge, we have carefully
                                            selected mandatory and optional subjects tha
                                            twill prepare you for your IGCSE and also align
                                            with your future career goals
                                        </p>

                                        {/* <h5 className="txt-grade">Grade 4</h5>

                              <p className="txt-grade-subtitle">
                                Focused on delivering a robust foundation in
                                core subjects such as Science, Mathematics,
                                Language, and Arts to foster a well-rounded
                                education.
                              </p> */}

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
                                                                    label="English II "
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
                                                                    label="ICT"
                                                                    checked
                                                                    type={sub}
                                                                    id={`sub-${sub}-4`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                            </div>

                                            <div className="grade-select w-100">
                                                <h4 className="grade-select-title">
                                                    Career Oriented Subject Selection
                                                </h4>

                                                <div className="row">
                                                    <div className="col-6 col-md-4">
                                                        <div className="category-input">
                                                            <Form className="custom-form-input-container">
                                                                {["checkbox"].map((lang) => (
                                                                    <div
                                                                        key={`inline-${lang}`}
                                                                        className="custom-form-input"
                                                                    >
                                                                        <Form.Check
                                                                            inline
                                                                            label="Architecture"
                                                                            type={lang}
                                                                            id={`lang-${lang}-1`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Art & Design</span>
                                                                            <span>Physics</span>
                                                                            <span>Chemistry</span>
                                                                        </div>

                                                                        <Form.Check
                                                                            inline
                                                                            label="Designing"
                                                                            type={lang}
                                                                            id={`lang-${lang}-2`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Art & Design</span>
                                                                            <span>Global Perspectives</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4">
                                                        <div className="category-input">
                                                            <Form className="custom-form-input-container">
                                                                {["checkbox"].map((lang) => (
                                                                    <div
                                                                        key={`inline-${lang}`}
                                                                        className="custom-form-input"
                                                                    >
                                                                        <Form.Check
                                                                            inline
                                                                            label="Commers & Management"
                                                                            type={lang}
                                                                            id={`lang-${lang}-1`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Accounting</span>
                                                                            <span>Business Studies</span>
                                                                            <span>Economics</span>
                                                                        </div>

                                                                        <Form.Check
                                                                            inline
                                                                            label="Barrister"
                                                                            type={lang}
                                                                            id={`lang-${lang}-2`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Global Perspectives</span>
                                                                            <span>Business Studies</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4">
                                                        <div className="category-input">
                                                            <Form className="custom-form-input-container">
                                                                {["checkbox"].map((lang) => (
                                                                    <div
                                                                        key={`inline-${lang}`}
                                                                        className="custom-form-input"
                                                                    >
                                                                        <Form.Check
                                                                            inline
                                                                            label="Doctor/ Medical Science"
                                                                            type={lang}
                                                                            id={`lang-${lang}-1`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Physics</span>
                                                                            <span>Chemistry</span>
                                                                            <span>Biology</span>
                                                                        </div>

                                                                        <Form.Check
                                                                            inline
                                                                            label="Engineering"
                                                                            type={lang}
                                                                            id={`lang-${lang}-2`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Physics</span>
                                                                            <span>Chemistry</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Form>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-4">
                                                        <div className="category-input">
                                                            <Form className="custom-form-input-container">
                                                                {["checkbox"].map((lang) => (
                                                                    <div
                                                                        key={`inline-${lang}`}
                                                                        className="custom-form-input"
                                                                    >
                                                                        <Form.Check
                                                                            inline
                                                                            label="Humanities"
                                                                            type={lang}
                                                                            id={`lang-${lang}-2`}
                                                                        />
                                                                        <div className="custom-form-input-text">
                                                                            <span>Physics</span>
                                                                            <span>Chemistry</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="grade-select">
                                  <h4 className="grade-select-title">
                                    3rd language options
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
                                        <div className="">
                                            <h4 className="grade-select-title ">
                                                One optional subject to choose{" "}
                                            </h4>
                                            <div className="category-input">
                                                <Form className="">
                                                    {["checkbox"].map((lang) => (
                                                        <div
                                                            key={`inline-${lang}`}
                                                            className="custom-form-input"
                                                        >
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Hindi"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="French"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Physics"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Chemistry"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Biology"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Accounting"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Business Studies"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Economics"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="History"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Geography"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Global Perspective"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Art & Design"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                                <div className="col">
                                                                    <Form.Check
                                                                        inline
                                                                        label="Travel & Tourism"
                                                                        type={lang}
                                                                        id={`lang-${lang}-2`}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Form>
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
                                    <h4 className="fee-title">
                                        Fees Structure @ TAC Schools
                                    </h4>

                                    <div className="fee-content">
                                        <div className="fees">
                                            <div className="fee-txt">Tution Fees</div>
                                            <div className="fee-amt">₹ 3,26,550.00</div>
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
                                                ₹ 6,62,550.00
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
                            <Col>
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
            </Tabs>
        </>

    )
}

export default cambridgeOfferings;