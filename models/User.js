const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  emailId: String,
  password:String,
  rules: [mongoose.Schema.Types.ObjectId]
});

mongoose.modal('users', userSchema);
