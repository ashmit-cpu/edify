import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getwebsiteLeads } from "../redux/actions/websiteLeadsAction";
import EnquirePopupform from "./Form/EnquirePopupform";
import { Accordion, useAccordionButton } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";

const PriceSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your name"),
  mobile: Yup.string().required("Mobile Number is required"),
  email: Yup.string().email("Invalid email").required("Enter Email"),
});

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div className="ac-flex ac-items-center ac-justify-center mb:[-18px] position-relative z-2">
      {" "}
      <button type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    </div>
  );
}
function Footer() {
  const router = useRouter();
  const { query } = router;
  // const dispatch = useDispatch();
  // const res = useSelector((state) => state.leadSubmit);

  // console.log("success", res.success);
  // if (res.success) {
  //   if (typeof window !== "undefined") {
  //     window.location.href = "/thank-you";
  //   }
  // }
  const [isClicked, setIsClicked] = useState(true);
 
  return (
    <>
      <footer className="main-footer position-relative !ac-pb-0 footer">
        <div className="cust-container">
          <div className="d-flex ac-justify-center align-items-center mt-4 mt-lg-2 social-footer">
            <Link
              href="https://www.facebook.com/people/The-Academic-City-School/61551006306504/"
              target="_blank"
              className="fw-bold me-4 text-white social-link"
            >
              <i className="fa-brands fa-facebook-f fs-3"></i>
            </Link>
            <Link
              href="https://instagram.com/the_academic_city?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              className="fw-bold me-4 text-white social-link"
            >
              <i className="fa-brands fa-instagram fs-3"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/company/the-academic-citybangalore/"
              target="_blank"
              className="fw-bold me-4 text-white social-link"
            >
              <i className="fa-brands fa-linkedin-in fs-3"></i>
            </Link>
            {/* <Link
                    href="#"
                    className="fw-bold me-4 text-white social-link"
                  >
                    <i className="fa-brands fa-x-twitter fs-3"></i>
                  </Link> */}
            <Link
              href="https://www.youtube.com/@TheAcademicCitySchool"
              target="_blank"
              className="fw-bold me-4 text-white social-link"
            >
              <i className="fa-brands fa-youtube fs-3"></i>
            </Link>
          </div>

          {/* <div className="collapse" id="footerreadmore">
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <h4 className="widgettitle">Boarding school in Bangalore</h4>
                <ul className="footerlinks">
                  <li>Top Boarding Schools In India</li>
                  <li>Residential schools in india</li>
                  <li>Top Boarding schools in bangalore</li>
                  <li>CBSE boarding schools in bangalore</li>
                  <li>International boarding schools in bangalore</li>
                  <li>Residential schools in bangalore</li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3">
                <h4 className="widgettitle">Boarding school in Indore</h4>
                <ul className="footerlinks">
                  <li>Top Boarding schools in Indore</li>
                  <li>CBSE boarding schools in Indore</li>
                  <li>International boarding schools in indore</li>
                  <li>Residential schools in indore</li>
                </ul>
              </div>
              <div className="col-md-6 col-xl-3">
                <h4 className="widgettitle">Student Resources</h4>
                <ul className="footerlinks">
                  <li>CBSE question paper</li>
                  <li>CBSE sample paper class 10</li>
                  <li>CBSE sample paper class 12</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        {/* <button
          className={`buttonarrow d-inline-block ${!isClicked ? "active" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#footerreadmore"
          aria-expanded="false"
          aria-controls="footerreadmore"
          onClick={() => {
            setIsClicked((isClicked) => !isClicked);
          }}
        >
          <Image
            src="/images/icons/arrowbtn.svg"
            className="img-fluid"
            width={33}
            height={32}
            alt="icon"
          />
        </button> */}
        {/* <div className="ac-hidden md:ac-block container ac-mt-6">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-3 footer-item">
              <div className="footer-head">
                <Image
                  src="/images/footer-logo1.svg"
                  alt="footer logo"
                  width={241}
                  height={62}
                  className="mb-4 mb-md-4 footer-logo"
                />
                <div className="d-flex justify-content-start mb-4">
                  <Image
                    src="/images/location.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    200, 4th Main Rd, Chamrajpet, Bengaluru, Karnataka 560018
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/call.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    <Link href="tel:+919606912917"></Link>+91 960 691 2917
                    (General Queries)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-item">
              <div className="footer-head">
                <Image
                  src="/images/footer-logo2.svg"
                  alt="footer logo"
                  width={198}
                  height={64}
                  className="mb-4 mb-md-4 footer-logo"
                />
                <div className="d-flex justify-content-start mb-4">
                  <Image
                    src="/images/location.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    Bairegowdanahalli Bus Stop, Venkatapura, Sondekoppa Main Rd,
                    Nelamangala Town, Karnataka 562123
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/call.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-4 h-100"
                  />
                  <p className="ms-3">
                    <Link href="tel:08047092273">080-47092273</Link> (Admissions
                    Only)
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/mail.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    <Link href="mailto:admissions@theacademiccity.com"></Link>
                    admissions@theacademiccity.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-item">
              <div className="footer-head">
                <Image
                  src="/images/footer-logo3.svg"
                  alt="footer logo"
                  width={198}
                  height={62}
                  className="mb-4 mb-md-4 footer-logo"
                />
                <div className="d-flex justify-content-start mb-4">
                  <Image
                    src="/images/location.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    Mohankheda Jain Tirth, Rajgarh (Dhar) Madhya Pradesh –
                    454116
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/call.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-4 h-100"
                  />
                  <p className="ms-3">
                    <Link href="tel:08047092273">080-47092273</Link> (Admissions
                    Only)
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/mail.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    <Link href="mailto:Admission.mk@theacademiccity.com"></Link>
                    Admission.mk@theacademiccity.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer-item border-0">
              <div className="footer-head">
                <Image
                  src="/images/footer-logo4.svg"
                  alt="footer logo"
                  width={198}
                  height={62}
                  className="mb-4 mb-md-4 footer-logo"
                />
                <div className="d-flex justify-content-start mb-4">
                  <Image
                    src="/images/location.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    Gandhinagar-Mansa Road, PO. Vasan, Gandhinagar District,
                    Gujarat - 382 650
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/call.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-4 h-100"
                  />
                  <p className="ms-3">
                    <Link href="tel:08047092273">080-47092273</Link> (Admissions
                    Only)
                  </p>
                </div>
                <div className="d-flex justify-content-start">
                  <Image
                    src="/images/mail.png"
                    alt="footer icon"
                    width={25}
                    height={25}
                    className="mb-3"
                  />
                  <p className="ms-3">
                    <Link href="mailto:admissions@theacademiccity.com"></Link>
                    admissions@theacademiccity.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="cust-container ">
          <div className="relative ac-mt-6 ac-px-4">
            <Accordion defaultActiveKey={false}>
              <ContextAwareToggle>
                <Image src="/images/more.svg" width={24} height={25} />
              </ContextAwareToggle>
              <Accordion.Collapse>
                <div className="row justify-content-between">
                  <div className="col-md-6 col-lg-3 footer-item">
                    <div className="footer-head">
                      <Image
                        src="/images/footer-logo1.svg"
                        alt="footer logo"
                        width={241}
                        height={62}
                        className="mb-4 mb-md-4 footer-logo"
                      />
                      <div className="d-flex justify-content-start mb-4">
                        <Image
                          src="/images/location.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          200, 4th Main Rd, Chamrajpet, Bengaluru, Karnataka
                          560018
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/call.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          <Link href="tel:+919606912917"></Link>+91 960 691 2917
                          (General Queries)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 footer-item">
                    <div className="footer-head">
                      <Image
                        src="/images/footer-logo2.svg"
                        alt="footer logo"
                        width={198}
                        height={64}
                        className="mb-4 mb-md-4 footer-logo"
                      />
                      <div className="d-flex justify-content-start mb-4">
                        <Image
                          src="/images/location.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          Bairegowdanahalli Bus Stop, Venkatapura, Sondekoppa Main
                          Rd, Nelamangala Town, Karnataka 562123
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/call.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-4 h-100"
                        />
                        <p className="ms-3">
                          <Link href="tel:08047092273">080-47092273</Link>{" "}
                          (Admissions Only)
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/mail.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          <Link href="mailto:admissions@theacademiccity.com"></Link>
                          admissions@theacademiccity.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 footer-item">
                    <div className="footer-head">
                      <Image
                        src="/images/footer-logo3.svg"
                        alt="footer logo"
                        width={198}
                        height={62}
                        className="mb-4 mb-md-4 footer-logo"
                      />
                      <div className="d-flex justify-content-start mb-4">
                        <Image
                          src="/images/location.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          Mohankheda Jain Tirth, Rajgarh (Dhar) Madhya Pradesh –
                          454116
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/call.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-4 h-100"
                        />
                        <p className="ms-3">
                          <Link href="tel:08047092273">080-47092273</Link>{" "}
                          (Admissions Only)
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/mail.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          <Link href="mailto:Admission.mk@theacademiccity.com"></Link>
                          Admission.mk@theacademiccity.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 footer-item border-0">
                    <div className="footer-head">
                      <Image
                        src="/images/footer-logo4.svg"
                        alt="footer logo"
                        width={198}
                        height={62}
                        className="mb-4 mb-md-4 footer-logo"
                      />
                      <div className="d-flex justify-content-start mb-4">
                        <Image
                          src="/images/location.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          Gandhinagar-Mansa Road, PO. Vasan, Gandhinagar District,
                          Gujarat - 382 650
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/call.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-4 h-100"
                        />
                        <p className="ms-3">
                          <Link href="tel:08047092273">080-47092273</Link>{" "}
                          (Admissions Only)
                        </p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <Image
                          src="/images/mail.png"
                          alt="footer icon"
                          width={25}
                          height={25}
                          className="mb-3"
                        />
                        <p className="ms-3">
                          <Link href="mailto:admissions@theacademiccity.com"></Link>
                          admissions@theacademiccity.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </footer>

      <div className="footer_bottom">
        <div className="container">
          <div className="d-flex justify-content-center justify-content-md-between flex-wrap flex-md-nowrap">
            <div className="mobile-ad footer-head">
              <p className="text-center text-md-left text-white footer-txt mb-3 mb-md-0">
                &copy; 2024 The Academic City School. All rights reserved.
              </p>
            </div>
            <div className="mobile-ad">
              <div className="d-flex justify-content-center flex-wrap footer-head">
                <Link href="#" className="footer-txt text-white">
                  Terms and Conditions
                </Link>
                <Link href="#" className="footer-txt border-none text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-white border-0 mt-3 mt-lg-0">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
