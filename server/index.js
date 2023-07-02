const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jobListingsRouter = require("./routes/jobListings");
const authRouter = require("./routes/auth");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(express.json());

// Routes
app.use("/api/joblistings", jobListingsRouter);
app.use("/api/auth", authRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
