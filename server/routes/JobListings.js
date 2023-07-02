const express = require('express');
const router = express.Router();
const JobListing = require('../models/JobListing');

// Get all job listings
router.get('/', async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single job listing
router.get('/:id', getJobListing, (req, res) => {
  res.json(res.jobListing);
});

// Middleware to get a job listing by ID
async function getJobListing(req, res, next) {
  let jobListing;
  try {
    jobListing = await JobListing.findById(req.params.id);
    if (jobListing == null) {
      return res.status(404).json({ message: 'Job listing not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.jobListing = jobListing;
  next();
}

module.exports = router;