import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobDetails = ({ match }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/jobs/${match.params.id}`)
      .then((response) => {
        setJob(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Job Details</h2>
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
