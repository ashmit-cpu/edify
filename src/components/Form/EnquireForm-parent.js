import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

import { Filter } from "bad-words";
const filter = new Filter();
import SpamWords from "../Data/SpamWordsArray";

// Add custom spam words
filter.addWords(...SpamWords);

const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .test(
      "spam-check", // Custom test name
      "Spam words/Abusive words are not allowed", // Error message
      (value) => !filter.isProfane(value) // Validation logic
    )
    .required("Please enter first name"),
  Pname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .test(
      "spam-check", // Custom test name
      "Spam words/Abusive words are not allowed", // Error message
      (value) => !filter.isProfane(value) // Validation logic
    )
    .required("Please enter Parent's Name"),
  mobile: Yup.string().required("Please enter mobile number"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  mobile: Yup.string().required("Please enter phone number"),
  selectclass: Yup.string().required("Please select"),
  // campus: Yup.string().required("Please select"),
});

const classdata = [
  {
    classname: "IK-1",
  },
  {
    classname: "IK-2",
  },
  {
    classname: "IK-3",
  },
  {
    classname: "Class 1",
  },
  {
    classname: "Class 2",
  },
  {
    classname: "Class 3",
  },
  {
    classname: "Class 4",
  },
  {
    classname: "Class 5",
  },
  {
    classname: "Class 6",
  },
  {
    classname: "Class 7",
  },
  {
    classname: "Class 8",
  },
  {
    classname: "Class 9",
  },
  {
    classname: "Class 10",
  },
  {
    classname: "Class 11",
  },
  {
    classname: "Class 12",
  },
];
const campusdata = [
  {
    campusname: "Bangalore",
  },
  {
    campusname: "Indore",
  },
  // {
  //   campusname: "Ahmedabad",
  // },
];
const EnquireForm = (props) => {
  const router = useRouter();
  const { query } = router;
  const [source, setSource] = useState("");
  const handleClick = (sourceValue) => {
    setSource(sourceValue);
  };
  const src = props.formsource;
  // console.log("sorce", src);
  const [phoneNumber, setPhoneNumber] = useState();
  const [currentUrl, setCurrentUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [urlParams, setUrlParams] = useState({
    utm_source: "Direct-GAds",
    utm_medium: "unknown",
    utm_campaign: "unknown",
    utm_term: "none",
    utm_content: "none",
    utm_device: "",
    A: "",
    G: "",
    HI: "",
  });

  const sendDataToZohoCRM = async (values) => {
    if (!values?.mobile) return; // Ensure mobile is available before sending data

    let finalValues = {
      ...values,
      source: src ? src : "",
      utm_source: urlParams.utm_source,
      utm_medium: urlParams.utm_medium,
      utm_campaign: urlParams.utm_campaign,
      utm_term: urlParams.utm_term,
      utm_content: urlParams.utm_content,
      utm_device: urlParams.utm_device,
      ageGroup: urlParams.A,
      genderGroup: urlParams.G,
      houseHoldIncomeGroup: urlParams.HI,
      current_url: currentUrl, // Add the current URL here
    };

    const config = {
      method: "post",
      url: "/api/zohocrm",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(finalValues),
    };

    try {
      const response = await axios(config);
      console.log("Zoho CRM response form abandonment:", response.data);
    } catch (error) {
      console.error("Error submitting to Zoho CRM:", error);
    }
  };

  useEffect(() => {
    // Fetch URL parameters on component mount
    const queryParams = new URLSearchParams(window.location.search);
    const currentURL = window.location.href; // Get the current URL

    setCurrentUrl(currentURL); // Set the current URL state

    // Update the state with URL params and apply defaults if not present
    setUrlParams({
      utm_source: queryParams.get("utm_source") || "Direct-GAds",
      utm_medium: queryParams.get("utm_campaign") || "unknown",
      utm_campaign: queryParams.get("adgroup") || "unknown",
      utm_term: queryParams.get("utm_term") || "none",
      utm_content: queryParams.get("utm_content") || "none",
      utm_device: queryParams.get("utm_device") || "",
      A: queryParams.get("A") || "",
      G: queryParams.get("G") || "",
      HI: queryParams.get("HI") || "",
    });
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          Pname: "",
          email: "",
          mobile: "",
          source: "",
          selectclass: "",
          // campus: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // console.log("values", values);
          let finalValues = {
            ...values,
            source: src ? src : "",
            utm_source: urlParams.utm_source,
            utm_medium: urlParams.utm_medium,
            utm_campaign: urlParams.utm_campaign,
            utm_term: urlParams.utm_term,
            utm_content: urlParams.utm_content,
            utm_device: urlParams.utm_device,
            ageGroup: urlParams.A,
            genderGroup: urlParams.G,
            houseHoldIncomeGroup: urlParams.HI,
            current_url: currentUrl, // Add the current URL here
          };

          console.log("finalValues", finalValues);
          console.log(
            "finalValues being sent to server:",
            JSON.stringify(finalValues, null, 2)
          );

          try {
            const config = {
              method: "post",
              url: "/api/zohocrm",
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify(finalValues),
            };
            const response = await axios(config);
            console.log("responseata", response.data);
            if (response?.data?.leadAddMessage?.data[0]?.status == "success") {
              if (typeof gtag === "function") {
                gtag("set", "user_data", {
                  email: values.email,
                  phone_number: values.mobile,
                });
              }
              window.location.href = "/thank-you";
            } else {
              setErrorMessage(
                "There was an issue with your submission. Please try again!"
              );
            }
          } catch (error) {
            console.log(error);
            window.location.href = "/thank-you";
          }

          // Google Sheet APi
          try {
            const response2 = await axios.post(
              "/api/googlesheetapi",
              finalValues,
              {
                headers: { "Content-Type": "application/json" },
              }
            );
            console.log("Google Sheet API response:", response2.data);
          } catch (error) {
            console.error(
              "Error submitting to Google Sheet API:",
              error.response ? error.response.data : error.message
            );
          }
        }}
      >
        {(formik) => (
          <Form className="enquire-form">
            <div className="row">
              <div className="col">
                <h3
                  className={`${outfit.className} ac-font-[500] ac-text-xl md:ac-text-2xl ac-text-center ac-mb-6`}
                >
                  Be a Part of Award Winning <br />
                  Boarding School
                </h3>
              </div>
            </div>
            <div className="row">
              {errorMessage && (
                <div className="col-12 mb-1">
                  <div className="alert alert-danger">{errorMessage}</div>
                </div>
              )}
              <div className="col-xl-12 mb-3">
                <div className="form-group ">
                  <label>Name of Student*</label>
                  <div className="input-group">
                    <input
                      id="form-fname"
                      type="text"
                      className="form-control  ac-text-sm ac-placeholder-gray-400"
                      name="fname"
                      placeholder="Enter Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.fname}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.fname && formik.errors.fname && (
                    <span className="error text-danger">
                      {formik.errors.fname}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-xl-12 mb-3">
                <div className="form-group ">
                  <label>Name of the Parent*</label>
                  <div className="input-group">
                    <input
                      id="form-Pname"
                      type="text"
                      className="form-control ac-text-sm ac-placeholder-gray-400"
                      name="Pname"
                      placeholder="Enter Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.Pname}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.Pname && formik.errors.Pname && (
                    <span className="error text-danger">
                      {formik.errors.Pname}
                    </span>
                  )}
                </div>
              </div>
              <div className=" col-xl-12 mb-3">
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <input
                      id="form-email"
                      type="email"
                      className="form-control ac-text-sm ac-placeholder-gray-400"
                      name="email"
                      placeholder="Your Email Address "
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="error text-danger">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-xl-12 mb-3">
                <div className="form-group ac-relative phone-input">
                  <label>Phone Number</label>
                  <div className="input-group">
                    <PhoneInput
                      id="mobile"
                      name="mobile"
                      inputClass="form-control"
                      className="form-control d-flex"
                      placeholder="Enter your Phone number"
                      enableSearch={true}
                      defaultCountry="IN"
                      international
                      countryCallingCodeEditable={false}
                      value={phoneNumber}
                      onChange={(phone, countryData) => {
                        // Parse the phone number only if it's a valid string
                        const parsedPhoneNumber = phone
                          ? parsePhoneNumber(phone)
                          : null;

                        if (parsedPhoneNumber) {
                          formik.setFieldValue("mobile", phone);

                          if (countryData) {
                            formik.setValues({
                              ...formik.values,
                              dialCode: countryData.dialCode || "",
                              countryName: countryData.name || "",
                            });
                          }

                          // Update the local state with the phone number
                          setPhoneNumber(phone);
                        }
                      }}
                      onBlur={(e) => {
                        formik.handleBlur(e); // Correctly trigger Formik's handleBlur
                        if (formik.values.mobile) {
                          sendDataToZohoCRM(formik.values); // Send data to Zoho if mobile is filled
                        }
                      }}
                      maxLength={
                        phoneNumber &&
                        parsePhoneNumber(phoneNumber)?.country === "IN"
                          ? 15
                          : 17
                      }
                    />
                  </div>
                  {formik.touched.mobile && formik.errors.mobile && (
                    <span className="error text-danger">
                      {formik.errors.mobile}
                    </span>
                  )}
                </div>
              </div>
              <div className=" col-md-12 mb-3">
                <div className="form-group">
                  <label>Class Looking For?*</label>
                  <div>
                    <select
                      className="form-select ac-text-sm ac-text-gray-400"
                      name="selectclass"
                      onChange={formik.handleChange}
                      value={formik.values.selectclass}
                    >
                      <option value="" className="ac-text-gray-400">
                        Select
                      </option>
                      {classdata &&
                        classdata.map((classitem, i) => {
                          return (
                            <option key={i} value={classitem.classname}>
                              {classitem.classname}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  {formik.touched.selectclass && formik.errors.selectclass && (
                    <span className="error text-danger">
                      {formik.errors.selectclass}
                    </span>
                  )}
                </div>
              </div>
              {/* <div className=" col-md-12">
                <div className="form-group">
                  <label>Preffered Campus</label>
                  <select
                    name="campus"
                    onChange={formik.handleChange}
                    value={formik.values.campus}>
                    <option value="">Class Looking For</option>
                    {campusdata &&
                      campusdata.map((classitem, i) => {
                        return (
                          <option key={"campus" + i} value={classitem.campusname}>
                            {classitem.campusname}
                          </option>
                        );
                      })}
                  </select>
                  {formik.touched.campus && formik.errors.campus && (
                    <span className="error text-danger">{formik.errors.campus}</span>
                  )}
                </div>
              </div> */}
              {/* <div className="form-group col-md-12">
                <div className="input-group">
                  <textarea
                    id="footer-form-msg"
                    type="number"
                    className="form-control ac-text-sm ac-placeholder-gray-400 msg"
                    name="msg"
                    placeholder="Write Message"
                    onChange={formik.handleChange}
                    value={formik.values.msg}
                  />
                </div>
                {formik.touched.msg && formik.errors.msg && (
                  <span className="error text-danger">{formik.errors.msg}</span>
                )}
              </div> */}
              <div className=" col-md-12 text-center mb-0">
                <div className="form-groups">
                  <button
                    type="submit"
                    className="btn secondary-btn w-100 btn-purple"
                    onClick={() => handleClick(props.formsource)}
                  >
                    {props?.ctatitle ? props?.ctatitle : "Enquire"}
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EnquireForm;
