const mongoose = require('mongoose');
const {Schema} = mongoose;

const rulesSchema = new Schema({
	name: String,
	campaings: [mongoose.Schema.Types.ObjectId],
	schedule: Date,
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
	action: Number, // 0 -> Notify, 1 -> Pause, 2 -> Start
	status: Boolean // true -> Paused, False -> Running
});

mongoose.model('Rules',rulesSchema);