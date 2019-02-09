const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  email: String,
  password: String,
  rules: [mongoose.Schema.Types.ObjectId]
});

userSchema.plugin(passportLocalMongoose,{
	usernameField: 'email'
});

module.exports = mongoose.model('users', userSchema);
