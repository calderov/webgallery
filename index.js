// index.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// const PUBLIC_DIR = path.join(__dirname, "../roop-floyd/output/public");
// const PUBLIC_DIR = path.join(__dirname, "public");
const PUBLIC_DIR = path.join(__dirname, "public");

app.use("/public", express.static(PUBLIC_DIR));

// Updated filter: png, jpg, jpeg
app.get("/images", (req, res) => {
  const files = fs.readdirSync(PUBLIC_DIR)
    .filter(f =>
      f.toLowerCase().endsWith(".png") ||
      f.toLowerCase().endsWith(".jpg") ||
      f.toLowerCase().endsWith(".jpeg")||
      f.toLowerCase().endsWith(".webp")
    );

  res.json(files);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Gallery running at http://localhost:${PORT}`);
});