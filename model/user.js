const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar_url: String,
    status: String,
    company: String,
    website: String,
    location: String,
    skills: String,
    github: String,
    bio: String,
    facebook: String,
    twitter: String,
    youtube: String,
    instagram: String,
    linkedin: String
})

module.exports = User = mongoose.model('user', userSchema)