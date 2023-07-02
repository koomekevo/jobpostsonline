import React, { useState, useEffect } from "react";
import axios from "axios";

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/joblistings/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Job Details</h2>
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <p>{job.requirements}</p>
    </div>
  );
};

export default JobDetails;
