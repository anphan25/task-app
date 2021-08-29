const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thobaymaumeomeo1@gmail.com",
    pass: "0962095268",
  },
});

var mailOptions = {
  from: "Thien An",
  to: "sajno076@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<b> Hello World </b>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
