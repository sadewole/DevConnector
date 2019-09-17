const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postFeedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    liked: {
        type: Number,
        default: 0
    },
    disliked: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user: {

    }
})

module.exports = postFeed = mongoose.model('postFeed', postFeedSchema)