const mongoose = require("mongoose");
const covidSchema = require("../schemas/covidSchema");

module.exports = mongoose.model("covid",covidSchema);