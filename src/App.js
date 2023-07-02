import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import JobListings from "./components/JobListings";
import JobDetails from "./components/JobDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
