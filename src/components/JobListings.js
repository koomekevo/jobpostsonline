import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jobs')
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Job Listings</h2>
      {jobs.map((job) => (
        <div key={job._id} className="border border-gray-300 rounded p-4">
          <h3 className="text-lg font-bold">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          <Link to={`/jobs/${job._id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
