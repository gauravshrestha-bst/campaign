const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  emailId: String,
  password:String
});

mongoose.model('users', userSchema);
