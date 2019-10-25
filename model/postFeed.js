const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postFeedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    }],
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        text: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = postFeed = mongoose.model('postFeed', postFeedSchema)