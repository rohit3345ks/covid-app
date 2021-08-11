const covidModel = require("../models/covidModel");

const covidService = {};

covidService.addData = (payload) => {
    let response = covidModel(payload).save();
    return response;
}

covidService.getDataByState = (payload) => {
    let response = covidModel.findOne({ state: payload });
    return response;
}

covidService.getAllData = (limit) => {
    let response = covidModel.find({}).limit(limit);
    return response;
}

covidService.updateData = (payload) => {
    let response = covidModel.findOneAndUpdate({ state: payload.state }, {
        cases: payload.cases,
        deaths: payload.deaths,
        date: payload.date
    }, {
        new: true,
        lean: true
    });
    return response;
}

covidService.deleteData = () => {
    let response = "";
    return response;
}
module.exports = covidService;