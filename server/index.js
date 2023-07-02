const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define job listing schema
const jobListingSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  requirements: String,
});

// Define user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Define job listing model
const JobListing = mongoose.model("JobListing", jobListingSchema);

// Define user model
const User = mongoose.model("User", userSchema);

// API routes
app.get("/api/joblistings", async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.json(jobListings);
  } catch (error) {
    console.error("Error fetching job listings:", error);
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
});

app.get("/api/joblistings/:id", async (req, res) => {
  const jobId = req.params.id;

  try {
    const jobListing = await JobListing.findById(jobId);
    res.json(jobListing);
  } catch (error) {
    console.error("Error fetching job listing:", error);
    res.status(500).json({ error: "Failed to fetch job listing" });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Failed to login" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
