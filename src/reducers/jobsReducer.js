import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAIL,
} from "../actionTypes";

const initialState = {
  jobs: null,
  loading: false,
  error: null,
  singleJob: null,
};

export default (state = initialState, action) => {
  console.log("mine:", action);
  switch (action.type) {
    case "FETCH_ALL_JOBS_START":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_ALL_JOBS_SUCCESS":
      return {
        ...state,
        jobs: action.jobs,
        loading: false,
      };

    case "FETCH_SINGLE_JOB_SUCCESS":
      return {
        ...state,
        singleJob: action.jobDetail,
        loading: false,
      };

    case "FETCH_ALL_JOBS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
