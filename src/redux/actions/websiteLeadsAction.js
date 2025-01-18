import axios from "axios";
import {
  LEADS_SUBMIT_REQUEST,
  LEADS_SUBMIT_SUCCESS,
  LEADS_SUBMIT_FAIL,
  CLEAR_ERRORS,
} from "../constants/websiteLeadsConstants";

export const getwebsiteLeads = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: LEADS_SUBMIT_REQUEST,
    });
    // console.log("response1", response1);
    // ============== Strapi backend=====================
    const data = {
      data: {
        Name: formData.fname,
        Email: formData.email,
        Mobile: `${formData.mobile}`,
        formSource: formData.source,
        EnquireProject: formData.enqproject,
        Message: formData.msg,
        utm_medium: formData.utm_medium ? formData.utm_medium : "",
        utm_source: formData.utm_source ? formData.utm_source : "",
        utm_campaign: formData.utm_campaign ? formData.utm_campaign : "",
        utm_subsource: formData.utm_subsource ? formData.utm_subsource : "",
        utm_terms: formData.utm_terms ? formData.utm_terms : "",
        utm_placement: formData.utm_placement ? formData.utm_placement : "",
        utm_device: formData.utm_device ? formData.utm_device : "",
      },
    };
    const config2 = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/website-leads`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config2)
      .then(function (response2) {
        console.log(response2.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    dispatch({
      type: LEADS_SUBMIT_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    // console.log("Error while submitting details: ");
    console.log(error);

    dispatch({
      type: LEADS_SUBMIT_FAIL,
      // payload: error.response.data,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
