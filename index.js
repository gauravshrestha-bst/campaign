const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy=require('passport-local');
const bodyParser = require('body-parser');
const methodOverride=require('method-override');
const flash=require('connect-flash');
const scheduler = require('node-cron');
const User=require('./models/User');
const RuleExecutor = require('./Services/RuleExecutor');
// var cors=require('cors');

// app.use(cors({origin:true,credentials: true}));

mongoose.connect(
 'mongodb://gaurav:Gaurav-1995@ds123465.mlab.com:23465/tyroo-task'
  );

const app = express();

app.use(bodyParser.json());
app.use(flash());


// //passport config
// app.use(require('express-session')({
// 	secret:'no one can do it better',
// 	resave:false,
// 	saveUninitialised:false
// }));

// app.use(methodOverride('_method'));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.use({
    usernameField: 'email',
    passwordField: 'password'
  },
  new LocalStrategy(
	function(email, password, done) {
		console.log("inside local strategy");
		console.log(email);
	  User.findOne({ email: email }, function(err, user) {
		if (err) { return done(err); }
		if (!user) {
		  return done(null, false, { message: 'Incorrect username.' });
		}
		if (!user.validPassword(password)) {
		  return done(null, false, { message: 'Incorrect password.' });
		}
		return done(null, user);
	  });
	}
  ));

app.post('/login',passport.authenticate("local",
{
	successRedirect:'/',
	failureRedirect:'/login'
}));

app.get('/logout',function(req,res){
	req.logout();
	req.flash('success','you are logged out');
	res.redirect('/confessions');
});

function isLoggedIn(req,res,next)
{
	if(req.isAuthenticated()){
		return next();
	}
	else{
		req.flash('error','please login First!!');
		res.redirect('/login')
	}
}

app.post('Rule',(req,res)=>{
  res.send("campaign added");
})

app.get('Rules',(req,res)=>{
  res.send("campaigns");
});

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
