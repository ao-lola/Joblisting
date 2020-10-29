import React, { Component, useEffect } from "react";

import { fetchAllJobs } from "../actions/jobsAction";

import { useDispatch, useSelector } from "react-redux";

const Joblisting = () => {
  const { jobs } = useSelector((state) => state);
  //   const bloovingPlaces = useSelector((state) => state.allJobs.bloovingPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);
  console.log("hello:", jobs);
  return (
    <div>
      <h1>hello</h1>
      <input type="text" placeholder="Search.."></input>
      <div className="list-wrap">
        <div>
          <ul className="job-list">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Joblisting;
