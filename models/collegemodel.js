const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({  //creating a schema
    Id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Fees: {
        type: String,
        required: true
    },
    Placement: {
        type: String,
        required: true
    },
    Review: {
        type: String,
        required: true
    },
    Rank: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("colleges", CollegeSchema); //exporting the schema