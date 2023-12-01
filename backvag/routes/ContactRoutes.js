const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactModel");

// List all contacts
router.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search for contacts
router.get("/contacts/search", async (req, res) => {
  // Implement search logic based on query parameters
  const { fName } = req.query;
  try {
    // Sample search by name
    const contacts = await Contact.find({
      fName: { $regex: fName, $options: "i" },
    });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Modify a contact
router.patch("/contacts/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new contact
router.post("/contacts", async (req, res) => {
  const { lName, fName, phone, email } = req.body;
  const contact = new Contact({ lName, fName, phone, email });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { router };
