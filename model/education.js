const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eduSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    study: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String
    },
    currentDate: {
        type: String
    },
    description: {
        type: String,
        required: true
    }

})

module.exports = Education = mongoose.model('education', eduSchema)