import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Col, Collapse, Offcanvas, Row } from 'react-bootstrap';

function CustOffcanvasHeader({ show, handleClose }) {
    const [openCampus, setOpenCampus] = useState(false);
    const [openAcademics, setOpenAcademics] = useState(false);

    const handleCollapse1Toggle = () => {
        setOpenCampus(!openCampus);
        setOpenAcademics(false); // Ensure the other collapse is closed
    };

    const handleCollapse2Toggle = () => {
        setOpenAcademics(!openAcademics);
        setOpenCampus(false); // Ensure the other collapse is closed
    };

    return (
        <>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                className="side_menu"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Image
                            className="side_nav_logo"
                            src="/images/logo.svg"
                            alt="logo"
                            width={187}
                            height={45}
                        />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className="justify-content-center pt-5">
                        <Col md={12}>
                            <ul className="list-unstyled ps-0 menu_nav text-center">
                                <li>
                                    <Link href="/" onClick={handleClose}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" onClick={handleClose}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Button
                                        onClick={handleCollapse1Toggle}
                                        aria-controls="collapse-campus"
                                        aria-expanded={openCampus}
                                        className="btn-toggle"
                                    >
                                        Campus
                                    </Button>
                                    <Collapse in={openCampus}>
                                        <div id="collapse-campus">
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <Link  onClick={handleClose} href="/campus/bangalore">Bangalore</Link>
                                                </li>
                                                <li>
                                                    <Link  onClick={handleClose} href="/campus/indore">Indore</Link>
                                                </li>
                                                <li>
                                                    <Link  onClick={handleClose} href="/campus/ahmedabad">Ahmedabad</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <Button
                                        onClick={handleCollapse2Toggle}
                                        aria-controls="collapse-academics"
                                        aria-expanded={openAcademics}
                                        className="btn-toggle"
                                    >
                                        Academics
                                    </Button>
                                    <Collapse in={openAcademics}>
                                        <div id="collapse-academics">
                                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                                <li>
                                                    <Link  onClick={handleClose} href="/academics/bangalore">Bangalore</Link>
                                                </li>
                                                <li>
                                                    <Link  onClick={handleClose} href="/academics/indore">Indore</Link>
                                                </li>
                                                <li>
                                                    <Link  onClick={handleClose} href="/academics/ahmedabad">Ahmedabad</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </li>
                                <li>
                                    <Link href="/admission" onClick={handleClose}>
                                        Admission
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/boarding" onClick={handleClose}>
                                        Boarding
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/career" onClick={handleClose}>
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" onClick={handleClose}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Offcanvas.Body>
                <div className="offcanvas-bottom">
                    <ul className="animated_social on_center">
                        <li>
                            <Link href="https://www.facebook.com/people/The-Academic-City-School/61551006306504/" target="_blank">
                                <svg className="social-svg-circle">
                                    <circle cx="50%" cy="50%" r="49%"></circle>
                                </svg>
                                <span className="fa-brands fa-facebook-f social-icon"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/the_academic_city?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                                <svg className="social-svg-circle">
                                    <circle cx="50%" cy="50%" r="49%"></circle>
                                </svg>
                                <span className="fa-brands fa-instagram social-icon"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/the-academic-citybangalore/" target="_blank">
                                <svg className="social-svg-circle">
                                    <circle cx="50%" cy="50%" r="49%"></circle>
                                </svg>
                                <span className="fa-brands fa-linkedin-in social-icon"></span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@TheAcademicCitySchool" target="_blank">
                                <svg className="social-svg-circle">
                                    <circle cx="50%" cy="50%" r="49%"></circle>
                                </svg>
                                <span className="fa-brands fa-youtube social-icon"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Offcanvas>
        </>
    );
}

export default CustOffcanvasHeader;
