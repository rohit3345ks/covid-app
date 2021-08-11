const mongoose = require('mongoose');
const covidSchema = new mongoose.Schema({
        date: Date,
        state: String,
        cases: Number,
        deaths: Number
    },
    {
        collection: "covidData"
    });

module.exports = covidSchema;