import React, { Component, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { fetchAllJobs, searchAllLocation } from "../actions/jobsAction";

import { useDispatch, useSelector } from "react-redux";

import JobDetail from "./JobDetail";

const Joblisting = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const { jobs } = useSelector((state) => state.jobs);
  //   const bloovingPlaces = useSelector((state) => state.allJobs.bloovingPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

  const inputChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "title") {
      setTitle(value);
    } else {
      setLocation(value);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    dispatch(searchAllLocation(location, title));
  };

  return (
    <div>
      <h1>hello</h1>
      <input
        name="title"
        type="text"
        onChange={inputChangeHandler}
        placeholder="Search by title.."
      ></input>{" "}
      <input
        name="location"
        type="text"
        onChange={inputChangeHandler}
        placeholder="Search by location.."
      ></input>
      <button onClick={handleSearch}>SEARCH</button>
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
