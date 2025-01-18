import {
  LEADS_SUBMIT_REQUEST,
  LEADS_SUBMIT_SUCCESS,
  LEADS_SUBMIT_FAIL,
} from "../constants/websiteLeadsConstants";

export const websiteLeadsReducers = (state = { leadSubmit: null }, action) => {
  switch (action.type) {
    case LEADS_SUBMIT_REQUEST:
      return {
        loading: true,
        success: false,
      };
    case LEADS_SUBMIT_SUCCESS:
      return {
        loading: false,
        success: true,
        leadSubmit: action.payload,
      };
    case LEADS_SUBMIT_FAIL:
      return {
        loading: false,
        success: false,
        // error: action.payload.error.message
      };

    default:
      return state;
  }
};
