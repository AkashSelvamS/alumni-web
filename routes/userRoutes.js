const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all users (optional for connections feature)
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}, "name department batch avatar");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET profile by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE profile
router.put("/:id", async (req, res) => {
  try {
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    }).select("-password");
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
