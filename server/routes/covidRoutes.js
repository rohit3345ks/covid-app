const express = require("express");
const router = express.Router();
const { addData, getAllData } = require('../services/covidService');

router.get("/all-cases", (req, res) => {
    const response = getAllData();
    response.catch(err => {
        console.log("Problem in fetching data from database");
        res.send(err.message);
    }).then(data => {
        res.send(data);
    })
});

router.post("/add-data", (req, res) => {
    let response = addData(req.body);
    response.catch(err => {
        console.log("Problem in adding data in database");
        console.log(err.message);
        res.send(err.message);
    }).then(data => {
        res.send(data);
    })
})

module.exports = router;