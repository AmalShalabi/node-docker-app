const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from App 1!");
});

app.listen(3000, () => {
  console.log("App 1 listening on port 3000!");
});
