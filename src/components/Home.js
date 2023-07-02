import React, { useEffect, useState } from "react";
import axios from "axios";
import JobListings from "./JobListings";
import NavBar from "./NavBar";

const Home = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchJobListings = async () => {
      try {
        const response = await axios.get("/api/joblistings");
        setJobListings(response.data);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobListings();
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <JobListings jobListings={jobListings} />
    </div>
  );
};

export default Home;
