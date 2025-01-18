import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Collapse from "react-bootstrap/Collapse";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
// import { DropdownSubmenu } from "react-bootstrap-submenu";
import EnquirePopupform from "./Form/EnquirePopupform";
import CustOffcanvasHeader from "./CustOffcanvasHeader";
import { useRouter } from "next/router";
function HeaderBestBoardingSchoolBangalore() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const linkRefs = useRef({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();
  const isActive = (path) => (router.pathname === path ? "active" : "");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrolled(false);
      } else if (currentScrollY < lastScrollY) {
        setScrolled(true);
      }

      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (currentScrollY >= sectionTop - 250) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);

      // Scroll the active link into view
      if (linkRefs.current[currentSection]) {
        linkRefs.current[currentSection].scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isThankYouPage = router.pathname === '/thank-you'

  return (
    <>
      <header
        className={`header_wrap header_wrap_lp ${
          scrolled == true ? "stick" : "stick"
        }`}
      >
        <Navbar bg="" expand="lg">
          <div className="cust-container d-flex align-items-center justify-content-between">
            <Navbar.Brand
              
              className="ac-mx-auto ac-ml-[31%] md:ac-mx-0 md:ac-ml-0"
            >
              <div className="d-flex align-items-center">
                <Image
                  className="main_logo"
                  src="/images/Chikkabanavara.svg"
                  alt="LOGO"
                  width={101}
                  height={153}
                />
                {/* <p className="city d-block d-md-none ms-4">Bangalore</p> */}
              </div>
            </Navbar.Brand>
            {/* <div className="d-flex d-lg-none justify-content-start align-items-center ac-header-title ">
              <Image
                src="/images/academics/ac.svg"
                alt="book vector"
                width={23}
                height={27}
              />
              <span className="ms-2">Bangalore</span>
            </div> */}
            {/* <Button
              className="nav_menu_btn ms-4 d-block d-lg-none"
              variant="primary"
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M9 10.5H16.5C16.8978 10.5 17.2794 10.658 17.5607 10.9393C17.842 11.2206 18 11.6022 18 12C18 12.3978 17.842 12.7794 17.5607 13.0607C17.2794 13.342 16.8978 13.5 16.5 13.5H9C8.60218 13.5 8.22064 13.342 7.93934 13.0607C7.65804 12.7794 7.5 12.3978 7.5 12C7.5 11.6022 7.65804 11.2206 7.93934 10.9393C8.22064 10.658 8.60218 10.5 9 10.5ZM19.5 22.5H27C27.3978 22.5 27.7794 22.658 28.0607 22.9393C28.342 23.2206 28.5 23.6022 28.5 24C28.5 24.3978 28.342 24.7794 28.0607 25.0607C27.7794 25.342 27.3978 25.5 27 25.5H19.5C19.1022 25.5 18.7206 25.342 18.4393 25.0607C18.158 24.7794 18 24.3978 18 24C18 23.6022 18.158 23.2206 18.4393 22.9393C18.7206 22.658 19.1022 22.5 19.5 22.5ZM9 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18C28.5 18.3978 28.342 18.7794 28.0607 19.0607C27.7794 19.342 27.3978 19.5 27 19.5H9C8.60218 19.5 8.22064 19.342 7.93934 19.0607C7.65804 18.7794 7.5 18.3978 7.5 18C7.5 17.6022 7.65804 17.2206 7.93934 16.9393C8.22064 16.658 8.60218 16.5 9 16.5Z"
                  fill="#333333"
                />
              </svg>
            </Button> */}

            <div className="d-none d-lg-flex justify-content-between align-items-center right-nav-wrap">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="sub-nav me-5">
                  <ul>
                    <li>
                      {/* <div className="d-flex justify-content-start align-items-center ac-header-title">
                        <Image
                          src="/images/academics/ac.svg"
                          alt="book vector"
                          width={23}
                          height={27}
                        />
                        <span className="ms-2">Bangalore</span>
                      </div> */}
                    </li>
                  </ul>
                </div>
                <div className="d-none d-md-flex align-items-center me-5">
                  <div className="d-none d-md-flex align-items-center">
                    <Button
                      href="tel: 080 47092273"
                      className="d-md-flex align-items-center primary-btn"
                    >
                      <Image
                        className="me-2"
                        src="/images/icons/call.svg"
                        alt="call"
                        width={21}
                        height={21}
                      />{" "}
                      080 47092273
                    </Button>
                    {/* <EnquirePopupform formsource="Enquire Now" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Navbar>
        <div className="cust-container">
          <div className="page-nav header-length-bangalore">
          {!isThankYouPage && (
            <div className="d-flex justify-content-start justify-content-lg-center">
              {[
                { id: "overview", label: "Overview" },
                { id: "principals", label: "Principal’s message" },

                { id: "campus", label: "Explore Bangalore Campus" },
                { id: "academic", label: "Academic Offerings" },
                { id: "career", label: "Career Prep" },
                { id: "gallery", label: "Gallery" },
              ].map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  ref={(el) => (linkRefs.current[id] = el)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
          </div>
        </div>
        <CustOffcanvasHeader show={show} handleClose={handleClose} />
      </header>
    </>
  );
}
export default HeaderBestBoardingSchoolBangalore;
