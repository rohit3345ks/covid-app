const mongoose = require('mongoose');
const covidSchema = new mongoose.Schema({
        date: Date,
        state: String,
        cases: Number,
        death: Number
    },
    {
        collection: "covidData"
    });

module.exports = covidSchema;