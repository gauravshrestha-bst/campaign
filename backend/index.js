const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy=require('passport-local');
const bodyParser = require('body-parser');
const methodOverride=require('method-override');
const flash=require('connect-flash');
const scheduler = require('node-cron');
const User=require('./models/User');
const Rule=require('./models/Rule');
const Canpaign=require('./models/Campaign');
const RuleExecutor = require('./Services/RuleExecutor');
const cors = require('cors');


mongoose.connect(
 'mongodb://gaurav:Gaurav-1995@ds127995.mlab.com:27995/campaign-task'
  );
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
	secret:'no one can do it better',
	resave:false,
	saveUninitialised:false
}));

app.use(require('morgan')('dev'));

app.use(passport.initialize());
app.use(passport.session());



app.use(methodOverride('_method'));
//passport config
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// connect mongoose
mongoose.connect('mongodb://gaurav:Gaurav-1995@ds123465.mlab.com:23465/tyroo-task');

app.get('/',function(req,res){
	if(req.isAuthenticated()){
		res.send('Authenticated');
	}
	else{
		res.send('UnAuthenticated')
	}
});
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.send('OK');
  });

app.get('/login',(req,res) => {
	res.send('route on front end');
})

//used to register user
app.post('/ping',(req,res) => {
	console.log(req.body);
	User.register(new User({ email : req.body.email }), req.body.password, function(err, account) {
        if (err) {
        	console.log(err);
            return res.send('Not ok');
        }

        passport.authenticate('local')(req, res, function () {
        	res.send('pong');
		});
	});
});

app.get('/logout',function(req,res){
	req.logout();
	res.send('logout');
});


app.post('/Rule',function(req,res){
		// create new rule here;
	console.log('server rule');

	let rule = {
		...req.body,
		conditions: {
			eCPM: {
				max: req.body.conditions.eCPM,
				min: 0
			},
			eCPC: {
				max: req.body.conditions.eCPC,
				min: 0
			},
			eCPCI: {
				max: req.body.conditions.eCPCI,
				min: 0
			},
			clicks: {
				max: req.body.conditions.clicks,
				min: 0
			},
			installs: {
				max: req.body.conditions.installs,
				min: 0
			},
			impressions: {
				max: req.body.conditions.impressions,
				min: 0
			},
			spend: {
				max: req.body.conditions.spend,
				min: 0
			}
		},
		action: req.body.action === "Notify" ? 1 : 0
	}
	Rule.create(rule)
	.then((rule) => {
		console.log('Rule created: ',rule);
		res.send('Rule created')
	})
	.catch((err) => {
		
		console.log(err);
		res.send(err);
	
	});
});
	



app.get('/Rules',function(req,res){
	Rule.find({},function(err,allRule){
		if(err)console.log(err);
		else{
			res.send(allRule)
		}
	});
	
});

function isLoggedIn(req,res,next)
{
	console.log('inside is  logged in');
	console.log(req);
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect('/login')
	}
}

const PORT = process.env.PORT || 5000;
app.listen(PORT,(err) => {
		if(err)
			throw err;
		else {
			console.log('API running on :',PORT);
			
			// schedule execution of rules for every 15 minute
			scheduler.schedule('*/15 * * * *',()=>{
				RuleExecutor('15 Minute');
			});

			// schedule execution of rules for every hour

			scheduler.schedule('0 * * * *',() => {
				RuleExecutor('Every hour');
			});

			// scheule execution of rules at 12 amm
			scheduler.schedule('0 0 * * *',() => {
				RuleExecutor('Every day');
			})
			
		}	
	});
