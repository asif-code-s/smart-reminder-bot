// server.js - Main backend server
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const reminderRoutes = require("./routes/reminders");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use("/api/reminders", reminderRoutes);

app.get("/", (req, res) => {
  res.send("\ud83d\udccc Smart Reminder Bot API is running!");
});

app.listen(PORT, () => {
  console.log(`\ud83d\ude80 Server running on port ${PORT}`);
});