const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    },
    currentDate: {
        type: String
    },
    description: {
        type: String
    }

})

module.exports = Experience = mongoose.model('experience', expSchema)