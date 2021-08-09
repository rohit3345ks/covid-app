const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./startUp/db");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const covidRoutes = require("./routes/covidRoutes");

db.then(data => {
    console.log("Database connected successfully");
}).catch(err => {
    console.log("Couldn't connect to the database due to following error: ",err.message);
});

// Routes
app.use(covidRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port", process.env.PORT);
});