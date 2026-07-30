import nodemailer from "nodemailer";
import User from "../models/User.js";

const createTransporter = () => {
  if (!process.env.SMTP_HOST) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const username = req.params.username.toLowerCase();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    const user = await User.findOne({ username }).select("email name username");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    const transporter = createTransporter();

    if (!transporter) {
      console.log("[Contact Form]", {
        to: user.email,
        from: email,
        name,
        message,
      });

      return res.status(200).json({
        success: true,
        message: "Message received (SMTP not configured — logged to server console)",
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: user.email,
      replyTo: email,
      subject: `CodeFolio contact from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
