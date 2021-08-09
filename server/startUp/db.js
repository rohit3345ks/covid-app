const mongoose = require("mongoose");

const url = process.env.DATABASEURL;

module.exports = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});