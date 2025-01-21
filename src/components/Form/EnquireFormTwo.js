import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

import "react-phone-number-input/style.css";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";

import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
const validationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter first name"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter last name"),
  mobile: Yup.string().required("Please enter mobile number"),
  email: Yup.string().email("Invalid email").required("Please enter email"),
  mobile: Yup.string().required("Please enter phone number"),
  selectclass: Yup.string().required("Please select"),
  campus: Yup.string().required("Please select"),
  state: Yup.string().required("Please enter state"),
  city: Yup.string().required("Please enter city"),
  agree: Yup.boolean()
    .oneOf([true], "You must agree to receive information")
    .required("Agreement is required"),
});

const classdata = [
  {
    classname: "Grade 4",
  },
  {
    classname: "Grade 5",
  },
  {
    classname: "Grade 6",
  },
  {
    classname: "Grade 7",
  },
  {
    classname: "Grade 8",
  },
  {
    classname: "Grade 9",
  },
  {
    classname: "Grade 10",
  },
  {
    classname: "Grade 11",
  },
  {
    classname: "Grade 12",
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
const EnquireFormTwo = (props) => {
  const router = useRouter();
  const { query } = router;
  const [source, setSource] = useState("");
  const handleClick = (sourceValue) => {
    setSource(sourceValue);
  };

  const [errorMessage, setErrorMessage] = useState("");

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
          selectclass: "",
          // campus: "",
          state: "",
          city: "",
          source: "",
          agree: false, // Add this for checkbox
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // console.log("values", values);
          let finalValues = {
            ...values,
            source: src ? src : "",
            utm_source: query.utm_source ? query.utm_source : "",
            utm_subsource: query.utm_subsource ? query.utm_subsource : "",
            utm_campaign: query.utm_campaign ? query.utm_campaign : "",
            utm_terms: query.utm_terms ? query.utm_terms : "",
            utm_placement: query.utm_placement ? query.utm_placement : "",
            utm_device: query.utm_device ? query.utm_device : "",
            utm_medium: query.utm_medium ? query.utm_medium : "",
          };

          console.log("finalValues", finalValues);

          try {
            const endpoint =
              "https://www.zohoapis.in/crm/v2/functions/landingpagecreatelead/actions/execute";
              const zapikey = process.env.ZOHO_API_KEY;
            const config = {
              method: "post",
              url: endpoint,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Zoho-oauthtoken ${zapikey}`, // Zoho's expected format for authorization
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
              {errorMessage && (
                <div className="col-12 mb-1">
                  <div className="alert alert-danger">{errorMessage}</div>
                </div>
              )}
              <div className="col-md-6 mb-3">
                <div className="form-group ">
                  <label>Name of the Student*</label>
                  <div className="input-group">
                    <input
                      id="form-fname"
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="Enter Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.fname}
                    />
                  </div>
                  {formik.touched.fname && formik.errors.fname && (
                    <span className="error text-danger">
                      {formik.errors.fname}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group ">
                  <label>Name of the Parent*</label>
                  <div className="input-group">
                    <input
                      id="form-lname"
                      type="text"
                      className="form-control"
                      name="lname"
                      placeholder="Enter Full Name"
                      onChange={formik.handleChange}
                      value={formik.values.lname}
                    />
                  </div>
                  {formik.touched.lname && formik.errors.lname && (
                    <span className="error text-danger">
                      {formik.errors.lname}
                    </span>
                  )}
                </div>
              </div>
              <div className=" col-md-6 mb-3">
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-group">
                    <input
                      id="form-email"
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email Address "
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="error text-danger">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
              </div>
              <div className=" col-md-6 mb-3">
                <div className="form-group">
                  <label>State</label>
                  <div className="input-group">
                    <input
                      id="form-state"
                      type="state"
                      className="form-control"
                      name="state"
                      placeholder="Enter the state name"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                    />
                  </div>
                  {formik.touched.state && formik.errors.state && (
                    <span className="error text-danger">
                      {formik.errors.state}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group ">
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
                      onBlur={formik.handleBlur}
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
              <div className=" col-md-6 mb-3">
                <div className="form-group">
                  <label>City</label>
                  <div className="input-group">
                    <input
                      id="form-city"
                      type="city"
                      className="form-control"
                      name="city"
                      placeholder="Enter the city name"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                    />
                  </div>
                  {formik.touched.city && formik.errors.city && (
                    <span className="error text-danger">
                      {formik.errors.city}
                    </span>
                  )}
                </div>
              </div>
              <div className=" col-md-6 mb-3">
                <div className="form-group">
                  <label>Grade Looking For?*</label>
                  <div className="">
                    <select
                      className="form-select"
                      name="selectclass"
                      onChange={formik.handleChange}
                      value={formik.values.selectclass}
                    >
                      <option value="">Grade Looking For?*</option>
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
              {/* <div className=" col-md-6 mb-3">
                <div className="form-group">
                  <label>Preffered Campus</label>
                  <select
                    className="form-select"
                    name="campus"
                    onChange={formik.handleChange}
                    value={formik.values.campus}
                  >
                    <option value="">Class Looking For</option>
                    {campusdata &&
                      campusdata.map((classitem, i) => {
                        return (
                          <option
                            key={"campus" + i}
                            value={classitem.campusname}
                          >
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
                </div>
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
              <div className="col-md-12 text-center">
                <div className="d-flex justify-content-center align-items-start">
                  <input
                    className="me-2 mt-1"
                    type="checkbox"
                    id="agree"
                    name="agree"
                    value="Agree"
                    checked={formik.values.agree}
                    onChange={formik.handleChange}
                  />
                  <label htmlFor="agree">
                    {" "}
                    I agree to receive information regarding my submitted
                    enquiry on The Academic City School
                  </label>
                </div>
                {formik.touched.agree && formik.errors.agree && (
                  <span className="error text-danger">
                    {formik.errors.agree}
                  </span>
                )}
                <div className="highlight">
                  Submit with confidence, No-Spam Promise & High Data safety in
                  the below link
                </div>
              </div>
              <div className=" col-md-12 text-center mb-0">
                <div className="form-groups">
                  <button
                    type="submit"
                    className="btn secondary-btn w-100 text-uppercase btn-purple min-w"
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

export default EnquireFormTwo;
