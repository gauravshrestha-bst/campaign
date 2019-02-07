const interval = 15*60*1000;
const Rules = require('../models/Rule');
const Campaing = require('../models/Campaign');
const _ = require('lodash');

const RuleExecutor = () => {
	setInterval(()=> {
		Rules.where({schedule:'15 minute'})
		.then((data) => {
			
			// for each rule get the Campaings that use the rule
			// for each campaign decide if it should be paused by calling decideStatus
			// if paused execute the Notify Action
		})
		.catch((err) => {
			throw err;
		})
	},interval)
}

const decideStatus = (condition) => {

}

module.exports = RuleExecutor;