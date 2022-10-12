// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const path = require('path');

require("dotenv").config();


// CONFIGURATION
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());



//Middle
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ROUTES
app.get("/", (req, res) => {
  console.log(req.body)
  
});



// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


// LISTEN
app.listen(3001, () => {
  console.log("New Greetings! Server listening From port: ", 3001);
});
