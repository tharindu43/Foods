const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://thariduperera09:admin@coordinator.ljarc.mongodb.net/coordinator_db?retryWrites=true&w=majority&appName=coordinator";

mongoose.connect(MONGODB_URL, {
 
}).then(() => {
  console.log("MongoDB connectin successful");
}).catch(err => {
  console.error("MongoDB connection error", err);
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const PatientRouter = require("./routes/Patient.js");

app.use("/Patient",PatientRouter);
app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
