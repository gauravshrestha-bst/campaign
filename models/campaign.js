const mongoose = require('mongoose');
const {Schema} = mongoose;

const campaignSchema = new Schema({
	name: String,
	metrics:{
		type: Map,
		of: Number
	},
	status: Boolean, // false -> Paused, True, running,
	owner: String
},{
	timestamps: true
})

mongoose.model('Campaign',campaignSchema);