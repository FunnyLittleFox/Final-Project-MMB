// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const path = require('path');
const pool = require("./db");

require("dotenv").config();


// CONFIGURATION
//const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());



//Middle
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ROUTES
app.get("/", (req, res) => {
  console.log(req.body)
  
});

// get all suppliers

app.get("/suppliers", async(req,res) => {
  try {
    const allSuppliers = await pool.query("SELECT * FROM public.supplier")
    res.json(allSuppliers.rows);
  } catch (err) {
    console.error(err.message);
  }
});


// get a specific supplier

app.get("/suppliers/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const supplier = await pool.query("SELECT * FROM public.supplier WHERE supplier_id = $1", [id])

    res.json(supplier.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})




// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


// LISTEN
//app.listen(3001, () => {
//  console.log("New Greetings! Server listening From port: ", 3001);
//});

//Heroku port listen
server.listen(process.env.PORT || port)