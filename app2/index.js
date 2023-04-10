const express = require("express");
const request = require("request");
const config = require("config");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const app1Url = process.env.APP_URL || "http://localhost:3000";
const port = process.env.APP2_PORT || 3001;

app.get("/", (req, res) => {
  request(app1Url, (error, response, body) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    res.send(`Response from App 1: ${body}`);
  });
});

app.listen(port, () => {
  console.log(`App 2 listening on port ${port}!`);
});
