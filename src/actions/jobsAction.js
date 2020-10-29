import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAIL,
} from "../actionTypes";
import axios from "../apis/axios";

export const fetchAllJobsStart = () => {
  return {
    type: FETCH_ALL_JOBS_START,
  };
};

export const fetchAllJobsSuccess = (jobs) => {
  return {
    type: FETCH_ALL_JOBS_SUCCESS,
    jobs,
  };
};

export const fetchAllJobsFailed = (error) => {
  return {
    type: FETCH_ALL_JOBS_FAIL,
    error,
  };
};

export const fetchAllJobs = () => {
  return (dispatch) => {
    dispatch(fetchAllJobsStart());
    return axios
      .get("https://jobs.github.com/positions.json")
      .then((response) => {
        console.log("res:", response.data);
        const jobs = response.data.data;

        dispatch(fetchAllJobsSuccess(jobs));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(fetchAllJobsFailed("error"));
      });
  };
};
