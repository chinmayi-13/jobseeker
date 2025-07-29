const express = require("express");
const router = express.Router();

let users = []; // temporary in-memory storage

// Register
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: "Email already registered" });

  users.push({ name, email, password });
  res.json({ message: "User registered successfully" });
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ error: "Invalid email or password" });

  res.json({ token: "dummy-token", user });
});

module.exports = router;
