const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  emailId: String,
  // password:String,
  rules: [mongoose.Schema.Types.ObjectId]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);
