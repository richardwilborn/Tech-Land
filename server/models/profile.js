const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  github: {
    type: String,
    required: true,
    unique: true,
  },
  linkedIn: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
});
  
  const Profile: model('Profile', profileSchema);

  module.exports = Profile;