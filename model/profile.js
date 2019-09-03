const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  github: {
    type: String
  },
  bio: {
    type: String,
    required: true
  },
  facebook: {
    type: String
  },
  twitter: {
    type: String
  },
  youtube: {
    type: String
  },
  instagram: {
    type: String
  },
  linkedin: {
    type: String
  }
});

module.exports = Profile = mongoose.model('profile', profileSchema);
