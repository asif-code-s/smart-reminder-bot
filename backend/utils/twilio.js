
// Twilio Utility
const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendWhatsAppMessage = async (to, message) => {
    try {
      const formattedTo = `whatsapp:+${to.replace(/\D/g, "")}`;
      console.log(`📤 Sending message to ${formattedTo}: "${message}"`);
      const response = await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER, // Ensure this is set properly
        to: formattedTo,
      });
      console.log("✅ Message sent successfully:", response.sid);
    } catch (error) {
      console.error("❌ Failed to send WhatsApp message:", error);
    }
  };
  
module.exports = sendWhatsAppMessage;
