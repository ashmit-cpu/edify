import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input";
// import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";

import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";


const validationSchema = Yup.object().shape({
  fname: Yup.string()
    // .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Please enter first name"),
  // .test(
  //   "spam-check", // Custom test name
  //   "Spam words/Abusive words are not allowed", // Error message
  //   (value) => !filter.isProfane(value) // Validation logic
  // ),
  lname: Yup.string()
    // .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    // .test(
    //   "spam-check", // Custom test name
    //   "Spam words/Abusive words are not allowed", // Error message
    //   (value) => !filter.isProfane(value) // Validation logic
    // )
    .required("Please enter last name"),
  // pname: Yup.string()
  //   .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
  //   .min(2, "Too Short!")
  //   .max(50, "Too Long!")
  //   .test(
  //     "spam-check", // Custom test name
  //     "Spam words/Abusive words are not allowed", // Error message
  //     (value) => !filter.isProfane(value) // Validation logic
  //   )
  //   .required("Please enter parent name"),
  mobile: Yup.string()
    // .matches(/^\+[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Please enter mobile number"),
  // email: Yup.string().email("Invalid email").required("Please enter email"),
  // selectclass: Yup.string().required("Please select a class"),
  // campus: Yup.string().required("Please select a campus"),
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
const ContactForm = (props) => {
  const router = useRouter();
  const { query } = router;
  const [source, setSource] = useState("");
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

  // const mobileInput = document.querySelector("#mobile"); // Replace with your actual selector
  // const emailInput = document.querySelector("#form-email"); // Replace with your actual selector

  // function isContactInfoFilled() {
  //   return mobileInput.value.trim() !== "" || emailInput.value.trim() !== "";
  // }

  // // Trigger 1: On closing the window
  // window.addEventListener("beforeunload", (event) => {
  //   if (isContactInfoFilled()) {
  //     sendFormAbandonmentData();
  //   }
  // });

  // // Trigger 2: 5 minutes after form entry
  // let formTimer;
  // document.querySelector("form").addEventListener("input", () => {
  //   clearTimeout(formTimer);
  //   if (isContactInfoFilled()) {
  //     formTimer = setTimeout(() => {
  //       sendFormAbandonmentData();
  //     }, 1 * 60 * 1000);
  //   }
  // });

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

  // const sendFormAbandonmentData = async (values) => {
  //   if (!values?.mobile) return; // Ensure mobile is available before sending data

  //   let finalValues = {
  //     ...values,
  //     source: src ? src : "",
  //     utm_source: urlParams.utm_source,
  //     utm_medium: urlParams.utm_medium,
  //     utm_campaign: urlParams.utm_campaign,
  //     utm_term: urlParams.utm_term,
  //     utm_placement: urlParams.utm_placement || "", 
  //     utm_content: urlParams.utm_content,
  //     utm_device: urlParams.utm_device,
  //     Lead_Source_Category: urlParams.Lead_Source_Category || "", // Dynamically added
  //     Lead_Source: urlParams.Lead_Source || "", // Dynamically added
  //     Lead_Super_Sub_Source: urlParams.Lead_Super_Sub_Source || "", // Dynamically added
  //     Lead_Sub_Source: urlParams.Lead_Sub_Source || "",
  //     ageGroup: urlParams.A,
  //     genderGroup: urlParams.G,
  //     houseHoldIncomeGroup: urlParams.HI,
  //     current_url: currentUrl, // Add the current URL here
  //   };

  //   console.log("Final Values to Send:", finalValues);
  //   const config = {
  //     method: "post",
  //     url: "/api/googlesheetapi",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: JSON.stringify(finalValues),
  //   };

  //   try {
  //     const response = await axios(config);
  //     console.log("Google Sheet response:", response.data);
  //   } catch (error) {
  //     console.error("Error submitting to Google Sheet:", error);
  //   }
  // };

  const handleClick = (sourceValue) => {
    setSource(sourceValue);
  };
  const src = props.formsource;
  // console.log("sorce", src);
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          pname: "",
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
            // const endpoint =
            //   "https://www.zohoapis.in/crm/v2/functions/landingpagecreatelead/actions/execute";
            // const zapikey = process.env.ZOHO_API_KEY;
            // const config = {
            //   method: "post",
            //   url: endpoint,
            //   headers: {
            //     "Content-Type": "application/json",
            //     Authorization: `Zoho-oauthtoken ${zapikey}`, // Zoho's expected format for authorization
            //   },
            //   data: JSON.stringify(finalValues),
            // };
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
            // if (response?.data?.leadAddMessage?.data[0]?.status == "success") {
            //   window.location.href = "/thank-you";
            // }
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
              { headers: { "Content-Type": "application/json" } }
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
          <Form className="contactform primary-form">
            <div className="row">
              {errorMessage && (
                <div className="col-12 mb-1">
                  <div className="alert alert-danger">{errorMessage}</div>
                </div>
              )}
              <div className="form-group col-xl-6 mb-3">
                <label>Child First Name</label>
                <div className="input-group">
                  <input
                    id="form-fname"
                    type="text"
                    className="form-control"
                    name="fname"
                    placeholder="Enter Your Child First Name"
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
              <div className="form-group col-xl-6">
                <label>Child Last Name</label>
                <div className="input-group">
                  <input
                    id="form-lname"
                    type="text"
                    className="form-control"
                    name="lname"
                    placeholder="Enter Your Child Last  Name"
                    onChange={formik.handleChange}
                    value={formik.values.lname}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.lname && formik.errors.lname && (
                  <span className="error text-danger">
                    {formik.errors.lname}
                  </span>
                )}
              </div>
              <div className="form-group col-xl-6">
                <label>Parent Name</label>
                <div className="input-group">
                  <input
                    id="form-pname"
                    type="text"
                    className="form-control"
                    name="pname"
                    placeholder="Enter Parent Name"
                    onChange={formik.handleChange}
                    value={formik.values.pname}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.pname && formik.errors.pname && (
                  <span className="error text-danger">
                    {formik.errors.pname}
                  </span>
                )}
              </div>
              <div className="form-group col-xl-6">
                <label>Email</label>
                <div className="input-group">
                  <input
                    id="form-email"
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Your Email"
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
              <div className="form-group col-xl-6">
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
                    // onBlur={formik.handleBlur}
                    onBlur={(e) => {
                      formik.handleBlur(e); // Correctly trigger Formik's handleBlur
                      
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
              <div className="form-group col-xl-6">
                <label>Class Looking For</label>
                <select
                  name="selectclass"
                  onChange={formik.handleChange}
                  value={formik.values.selectclass}
                >
                  <option value="" disabled>
                    {formik.values.selectclass ? "" : "Class Looking For"}
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
                {formik.touched.selectclass && formik.errors.selectclass && (
                  <span className="error text-danger">
                    {formik.errors.selectclass}
                  </span>
                )}
              </div>
              {/* <div className="form-group col-md-12">
                <label>Preffered Campus</label>
                <select
                  name="campus"
                  onChange={formik.handleChange}
                  value={formik.values.campus}
                >
                  <option value="" disabled>
                    {formik.values.selectclass ? "" : "Preffered Campus"}
                  </option>
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
                  <span className="error text-danger">
                    {formik.errors.campus}
                  </span>
                )}
              </div> */}
              {/* <div className="form-group col-md-12">
                <div className="input-group">
                  <textarea
                    id="footer-form-msg"
                    type="number"
                    className="form-control msg"
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
              <div className="form-group col-md-12 text-center mb-0">
                <button
                  type="submit"
                  className="btn primary-btn w-100 text-uppercase"
                  onClick={() => handleClick(props.formsource)}
                >
                  {props?.ctatitle ? props?.ctatitle : "SUBMIT"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
