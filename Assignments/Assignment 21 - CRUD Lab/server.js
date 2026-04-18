const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/crudlab")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});