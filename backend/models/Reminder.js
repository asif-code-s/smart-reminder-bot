const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  message: { type: String, required: true },
  time: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  sent: { type: Boolean, default: false },
});

module.exports = mongoose.model("Reminder", reminderSchema);
