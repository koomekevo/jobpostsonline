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
    <div>
      <h2>Job Details</h2>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetails;
