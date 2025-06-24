# 📅 Smart Reminder Bot

Smart Reminder Bot is a full-stack app that lets users create reminders that are automatically sent to their WhatsApp via Twilio. It's built using:

- ⚙️ **Node.js + Express** (Backend)
- 🌐 **React.js** (Frontend)
- 💬 **Twilio WhatsApp API**
- 🗃️ **MongoDB** for storing reminders

---

## 🚀 Features

- ✅ Schedule WhatsApp reminders (one-time or recurring)
- 📦 Store reminders in MongoDB
- 🖥️ Clean frontend interface to create and manage reminders
- 🔁 Backend logic to check reminders and send messages using Twilio

---

## 🧠 Prerequisites

Before running this project locally, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or newer)
- [npm](https://www.npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free cluster
- A [Twilio](https://www.twilio.com/) account (with WhatsApp sandbox enabled)

---

## 🔐 Environment Variables

Create a `.env` file inside the `/backend` folder with the following values:

``env
PORT=5000
MONGO_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
⚠️ Do not share your .env file or commit it to GitHub.

---

To use Twilio WhatsApp sandbox:

Go to your Twilio Console

Find the WhatsApp sandbox number and join message

Send the given code (e.g., join noise-garage) from your WhatsApp to +14155238886

Now your WhatsApp number is sandbox-verified

---

🛠️ How to Run This Project Locally

Step 1: Clone the Repository:


git clone https://github.com/your-username/smart-reminder-bot.git

cd smart-reminder-bot

Step 2: Install Backend Dependencies"


cd backend

npm install

Step 3: Setup .env File:


Inside the /backend folder, create a .env file and paste your Mongo URI and Twilio credentials (see above).

Step 4: Start the Backend:


npm start

Backend will run on http://localhost:5000

Step 5: Install Frontend Dependencies:

Open a new terminal window/tab:


cd frontend

npm install

Step 6: Start the Frontend:


npm start

Frontend will run on http://localhost:3000

✅ You’re Ready!
Visit http://localhost:3000

Enter your phone number and reminder message

The backend will schedule and send your reminder to WhatsApp

---

Enjoy the Reminder Experience, Built by Asif Hussain A
