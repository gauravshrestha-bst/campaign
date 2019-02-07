const mongoose = require('mongoose');
const {Schema} = mongoose;

const rulesSchema = new Schema({
	name: String,
	campaings: [mongoose.Schema.Types.ObjectId],
	schedule: String, // Every 15 minute, Every Hour, 12:00 AM
	conditions: {
		eCPM: {
			type: Map,
			of: Number
		},
		eCPC: {
			type: Map,
			of: Number
		},
		eCPCI: {
			type: Map,
			of: Number
		},
		clicks: {
			type: Map,
			of: Number
		},
		installs: {
			type: Map,
			of: Number
		},
		impressions: {
			type: Map,
			of: Number
		},
		spend: {
			type: Map,
			of: Number
		}
	},
	action: {
		type: Number,
		default: 0 // 0 -> Notify, 1 -> Pause, 2 -> Start
	},
	status: Boolean // false -> Paused, true -> Running
});

module.exports = mongoose.model('Rules',rulesSchema);