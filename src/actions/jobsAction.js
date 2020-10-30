import {
  FETCH_ALL_JOBS_START,
  FETCH_ALL_JOBS_SUCCESS,
  FETCH_ALL_JOBS_FAIL,
  FETCH_SINGLE_JOB_SUCCESS,
} from "../actionTypes";
import axios from "../apis/axios";
import JobDetail from "../view/JobDetail";

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

export const fetchSingleJobSuccess = (jobDetail) => {
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
        const jobs = response.data;

        dispatch(fetchAllJobsSuccess(jobs));
      })
      .catch((error) => {
        dispatch(fetchAllJobsFailed("error"));
      });
  };
};

export const searchAllLocation = (location, title) => {
  console.log("location:", location);
  console.log("title:", title);

  const searchTitle = title ? `description=${title}` : "description=";
  const searchLocation = location ? `&location=${location}` : "";

  return (dispatch) => {
    dispatch(fetchAllJobsStart());
    return axios
      .get(
        `https://jobs.github.com/positions.json?${searchTitle}${searchLocation}`
      )
      .then((response) => {
        console.log("res:", response.data);
        const jobs = response.data;

        dispatch(fetchAllJobsSuccess(jobs));
      })
      .catch((error) => {
        dispatch(fetchAllJobsFailed("error"));
      });
  };
};

export const fetchSingleJob = (jobId) => {
  return (dispatch) => {
    dispatch(fetchAllJobsStart());
    return axios
      .get(`https://jobs.github.com/positions/${jobId}.json`)
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

// https://jobs.github.com/positions.json?location=sf&description=title
