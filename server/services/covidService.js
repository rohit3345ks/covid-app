const covidModel = require("../models/covidModel");

const covidService = {};

covidService.addData = (payload) => {
    let response = covidModel(payload).save();
    return response;
}

covidService.getAllData = () => {
    let response = covidModel.find({}).limit(50);
    console.log(response, "response");
    return response;
}

module.exports = covidService;