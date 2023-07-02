import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/joblistings/${id}`);
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <br />
      <h2 className="text-2xl font-bold mb-4">{jobDetails.title}</h2>
      <p className="text-gray-500">{jobDetails.company}</p>
      <p>{jobDetails.description}</p>
    </div>
  );
};

export default JobDetails;
