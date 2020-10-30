import React, { Component, useEffect } from "react";

import { Link } from "react-router-dom";

import { fetchAllJobs } from "../actions/jobsAction";

import { useDispatch, useSelector } from "react-redux";

const Joblisting = () => {
  const { jobs } = useSelector((state) => state.jobs);
  //   const bloovingPlaces = useSelector((state) => state.allJobs.bloovingPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);
  console.log("hello:", jobs);
  return (
    <div>
      <h1>hello</h1>
      <input type="text" placeholder="Search by location.."></input>
      <div className="list-wrap">
        {jobs?.map((job) => (
          <div key={job.id}>
            <Link to={`/jobs/${job.id}`} className="event-more-details">
              <ul className="job-list">
                <li>{job.title}</li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblisting;
