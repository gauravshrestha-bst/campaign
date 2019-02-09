const Rules = require('../models/Rule');
const Campaign = require('../models/Campaign');
const _ = require('lodash');
const notify  = require('./Alert');

// notify({
// 	from: 'gaurav.shrestha04@gmail.com',
// 	to: 'gaurav.testblue@gmail.com',
// 	subject:'Its been a while',
// 	text: "Let's catch up tomorrow ?"
// })
// .then((data) => {
// 	console.log(data);
// })
// .catch((err) => {
// 	console.log(err);
// })

const RuleExecutor = (schedule) => {
	Rules.find({
		schedule
	})
	.then((rules) => {
		
		// update campaign status
		let updatedCampaigns = []
		_.forEach((rules), r => {
			updatedCampaings.push(updateCampaignStatus(r.campaings));
		})
		
		// might need to be in try/catch and async await
		let tempPromises = _.map(updatedCampaigns, uc => {
			Campaign.update({
				_id: uc._id
			}, {
				status: uc.status
			})
		})
		// filter for paused campaigns
		return {
			updatedCampaings: Promise.all(tempPromises),
			alertCampaings: _.filter(updatedCampaigns, c => !c.status)
		}
		
	})
	.then(({alertCampaings}) => {
		// send alerts to campaign maanger	
		let alertPromises = _.map(alertCampaings,ac => {
			return notify({
				from: 'gaurav.shrestha04@gmail.com',
				to: ac.owner,
				subject: 'Update on your campaign',
				text: `Your campaign ${ac.name} has been paused`
			})
		})

		return Promise.all(alertPromises);
	})
	.catch((err) => {
		throw err;
	})
}

const updateCampaignStatus = async (campaignIds) => {
	const campaigns = await Campaign.find({
		'_id':{
			'$in': campaignIds
		}
	});

	const updatedCampaigns = _.map(campaigns,(c) => {
		return {
			...c,
			status: shouldPause(c.metrics)
		}
	})

	return updatedCampaigns;

}

const shouldPause = (conditions) => {
	
	const {eCPM, impressions, spend, click, eCPC, installs, eCPI} = conditions;

	if(eCPM >= 5 && impressions >= 1000000){
		return false; // pause the campaign
	}
	else if(spend >= 1000 && eCPC <= 0.20){
		return false;
	}
	else if(clicks >= 50000 && installs <= 100){
		return false;
	}
	else if(eCPI >= 3 && installs >= 100){
		return false;
	}
	else {
		return true;
	}

}

module.exports = RuleExecutor;