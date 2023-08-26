const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3040;

mongoose
  .connect("mongodb://127.0.0.1:27017/Portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Connected To MongoDB"))

  .catch((err) => {
    console.error(err);
  });

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  reason: String,
});

const ContactModel = mongoose.model("ContactForms", ContactSchema);

const server = express();

server.use(cors);
server.use(bodyParser.json());

//Contact post
server.post("/contact", async (req, res) => {
  const { name, email, subject, reason } = req.body;
  const ContactProfile = new ContactModel();
  ContactProfile.name = name;
  ContactProfile.email = email;
  ContactProfile.subject = subject;
  ContactProfile.reason = reason;
  const ContactDoc = await ContactProfile.save();
  console.log(ContactDoc);
  res.json(ContactDoc);
});

server.listen(PORT, () => {
  console.log("server is started");
});
