import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jobs")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <Link to={`/jobs/${job._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
