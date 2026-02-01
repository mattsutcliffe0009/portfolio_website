const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "static")));

// routes...
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.get("/construction", (req, res) => {
  res.sendFile(path.join(__dirname, "public/construction.html"));
});

app.get("/projects/ratbot", (req, res) => res.redirect("/construction"));
app.get("/projects/distortion-pedal", (req, res) => res.redirect("/construction"));
app.get("/projects/self-hosted-website", (req, res) => res.redirect("/construction"));


app.listen(5000, () => console.log("http://localhost:5000"));
