import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAIL,
  FETCH_SINGLE_JOB_SUCCESS,
} from "../actionTypes";
import axios from "../apis/axios";

export const fetchAllJobsStart = () => {
  return {
    type: FETCH_ALL_JOBS_START,
  };
};

export const fetchAllJobsSuccess = (jobs) => {
  console.log("myjob:", jobs);
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

export const fetchSingleJobSuccess = (jobDetail) => {
  console.log("myjob:", jobDetail);
  return {
    type: FETCH_SINGLE_JOB_SUCCESS,
    jobDetail,
  };
};

export const fetchAllJobs = () => {
  return (dispatch) => {
    dispatch(fetchAllJobsStart());
    return axios
      .get("https://jobs.github.com/positions.json")
      .then((response) => {
        console.log("res:", response.data);
        const jobs = response.data;
        console.log("myjobs:", jobs);
        dispatch(fetchAllJobsSuccess(jobs));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(fetchAllJobsFailed("error"));
      });
  };
};

export const fetchSingleJob = (jobId) => {
  return (dispatch) => {
    dispatch(fetchAllJobsStart());
    return axios
      .get(`https://jobs.github.com/positions.json/${jobId}`)
      .then((response) => {
        console.log("res:", response.data);
        const jobs = response.data;
        console.log("myjobs:", jobs);
        dispatch(fetchSingleJobSuccess(jobs));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(fetchAllJobsFailed("error"));
      });
  };
};
