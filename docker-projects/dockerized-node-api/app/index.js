const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.json({ message: "Dockerized Node API running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
