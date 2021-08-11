const express = require("express");
const router = express.Router();
const { addData, getAllData, updateData, getDataByState,  } = require('../services/covidService');

// Route to get all the cases
router.get("/all-cases", (req, res) => {
    const response = getAllData(Number(req.query?.limit ?? 100));
    response.catch(err => {
        console.log("Problem in fetching data from database");
        res.send(err.message);
    }).then(data => {
        res.send(data);
    })
});

//Route to get case by state
router.get("/case", (req, res) => {
    const response = getDataByState(req.query?.state ?? "Washington");
    response.catch(err => {
        console.log("Couldn't fetch the data");
        res.send(err.message);
    }).then(data => {
        if (!data) {
            res.send("Oops! Something went wrong");
        }
        else res.send(data);
    })
});

//Route to post / add data to collection
router.post("/add-data", (req, res) => {
    let response = addData(req.body);
    response.catch(err => {
        console.log("Problem in adding data in database");
        console.log(err.message);
        res.send(err.message);
    }).then(data => {
        res.send(data);
    })
});

// Route to update data
router.post("/update", (req, res) => {
    let response = updateData(req.body);
    response.catch(err => {
        console.log("Couldn't udpate the record");
        console.log("Reason: ", err.message);
    }).then(data => {
        console.log("record updated successfully");
        console.log(data, "updated data");
        res.send(data);
    })
})

module.exports = router;