import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get("/api/joblistings");
        setJobListings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobListings();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
      {jobListings.length === 0 ? (
        <p>No job listings available.</p>
      ) : (
        <ul>
          {jobListings.map((job) => (
            <li key={job._id} className="mb-4">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                View Details
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobListings;
