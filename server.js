const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "static")));

// routes...
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/projects/ratbot", (req, res) => {
  res.sendFile(path.join(__dirname, "public/projects/ratbot.html"));
});

app.get("/projects/distortion-pedal", (req, res) => {
  res.sendFile(path.join(__dirname, "public/projects/distortion_pedal.html"));
});

app.get("/projects/self-hosted-website", (req, res) => {
  res.sendFile(path.join(__dirname, "public/projects/website.html"));
});

app.listen(5000, () => console.log("http://localhost:5000"));
