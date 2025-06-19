const express = require("express");
const router = express.Router();
const Reminder = require("../models/Reminder");
const schedule = require("node-schedule");
const sendWhatsAppMessage = require("../utils/twilio");

// Create reminder
router.post("/", async (req, res) => {
  try {
    const { message, time, phoneNumber } = req.body;
    const reminder = new Reminder({ message, time, phoneNumber });
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reminder" });
  }
});


// Get all reminders
router.get("/", async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reminders" });
  }
});
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReminder = await Reminder.findByIdAndDelete(id);

        if (!deletedReminder) {
            return res.status(404).json({ error: "Reminder not found" });
        }

        res.json({ success: true, message: "Reminder deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete reminder" });
    }
});



// Scheduler to send reminders
schedule.scheduleJob("* * * * *", async () => {
  const now = new Date();
  const reminders = await Reminder.find({ time: { $lte: now }, sent: false });
  
  reminders.forEach(async (reminder) => {
    await sendWhatsAppMessage(reminder.phoneNumber, reminder.message);
    reminder.sent = true;
    await reminder.save();
    console.log(reminder)
  });
});

module.exports = router;
