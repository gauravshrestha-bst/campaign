const interval = 15*60*1000;

const RuleExecutor = () => {
	setInterval(()=> {
		console.log('Oh yeah');
	},interval)
}

module.exports = RuleExecutor;