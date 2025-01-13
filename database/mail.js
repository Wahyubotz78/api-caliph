const nodemailer = require("nodemailer");
require("dotenv").config();
let transporter = nodemailer.createTransport({
  host: process.env.AUTH_HOST,
  port: 587,
  auth: { user: process.env.AUTH_EMAIL, pass: process.env.AUTH_PASS },
});
module.exports = { transporter: transporter };
