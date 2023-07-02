import React from "react";
import NavBar from "./NavBar"

const JobListings = ({ jobListings }) => {
  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold mb-4">Job Listings</h2>
      {jobListings.map((job) => (
        <div key={job._id} className="bg-white rounded shadow p-4 mb-4">
          <h3 className="text-lg font-bold">{job.title}</h3>
          <p className="text-gray-500">{job.company}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
