import React, { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleJob } from "../actions/jobsAction";

const JobDetail = () => {
  const { jobId } = useParams();

  const dispatch = useDispatch();

  const { singleJob } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchSingleJob(jobId));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello there</h1>
      {singleJob ? <div>{singleJob.title}</div> : ""}
    </div>
  );
};

export default JobDetail;
