const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/userandpostapp");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  // posts: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Post'
  // }],
  dp: String, // Assuming dp is a URL or file path for the display picture
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);

