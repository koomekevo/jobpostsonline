const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/vacanciestoday", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
